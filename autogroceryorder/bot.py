import os
import re
import ssl
import sqlite3
import urllib.parse

import certifi
from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler

ssl_context = ssl.create_default_context(cafile=certifi.where())

from slack_sdk.web import WebClient

client = WebClient(token=os.environ["SLACK_BOT_TOKEN"], ssl=ssl_context)
app = App(client=client)

STORE_NAME = "Whole Foods"
WF_BRAND_ID = "VUZHIFdob2xlIEZvb2Rz"

# --- Database ---

def get_db():
    db = sqlite3.connect("grocery.db")
    db.execute(
        """CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity TEXT NOT NULL DEFAULT '1',
            added_by TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )"""
    )
    db.execute(
        """CREATE TABLE IF NOT EXISTS favorites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item_name TEXT NOT NULL UNIQUE,
            product_url TEXT NOT NULL,
            asin TEXT DEFAULT '',
            saved_by TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )"""
    )
    db.execute(
        """CREATE TABLE IF NOT EXISTS default_cart (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity TEXT NOT NULL DEFAULT '1',
            added_by TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )"""
    )
    db.execute(
        """CREATE TABLE IF NOT EXISTS skipped (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )"""
    )
    db.commit()
    return db


# --- Items ---

def add_item(name: str, quantity: str, user_id: str):
    db = get_db()
    db.execute(
        "INSERT INTO items (name, quantity, added_by) VALUES (?, ?, ?)",
        (name.strip(), quantity.strip(), user_id),
    )
    db.commit()


def get_all_items():
    db = get_db()
    return db.execute("SELECT name, quantity, added_by FROM items ORDER BY created_at").fetchall()


def clear_items():
    db = get_db()
    db.execute("DELETE FROM items")
    db.commit()


def remove_item(name: str):
    db = get_db()
    cursor = db.execute("DELETE FROM items WHERE LOWER(name) = LOWER(?)", (name.strip(),))
    db.commit()
    return cursor.rowcount > 0


# --- Favorites ---

def extract_asin(url: str):
    """Extract ASIN from an Amazon product URL."""
    m = re.search(r"/(?:dp|product|gp/product)/([A-Z0-9]{10})", url)
    return m.group(1) if m else None


def save_favorite(item_name: str, url: str, user_id: str):
    db = get_db()
    asin = extract_asin(url) or ""
    db.execute(
        "INSERT OR REPLACE INTO favorites (item_name, product_url, asin, saved_by) VALUES (LOWER(?), ?, ?, ?)",
        (item_name.strip(), url.strip(), asin, user_id),
    )
    db.commit()


def get_favorite(item_name: str):
    db = get_db()
    row = db.execute(
        "SELECT product_url, asin FROM favorites WHERE LOWER(item_name) = LOWER(?)",
        (item_name.strip(),),
    ).fetchone()
    if row:
        return {"url": row[0], "asin": row[1] or None}
    return None


def get_all_favorites():
    db = get_db()
    return db.execute("SELECT item_name, product_url FROM favorites ORDER BY item_name").fetchall()


def delete_favorite(item_name: str):
    db = get_db()
    cursor = db.execute("DELETE FROM favorites WHERE LOWER(item_name) = LOWER(?)", (item_name.strip(),))
    db.commit()
    return cursor.rowcount > 0


# --- Default Cart ---

def add_default_item(name: str, quantity: str, user_id: str):
    db = get_db()
    db.execute(
        "INSERT INTO default_cart (name, quantity, added_by) VALUES (?, ?, ?)",
        (name.strip(), quantity.strip(), user_id),
    )
    db.commit()


def get_default_cart():
    db = get_db()
    return db.execute("SELECT name, quantity, added_by FROM default_cart ORDER BY created_at").fetchall()


def remove_default_item(name: str):
    db = get_db()
    cursor = db.execute("DELETE FROM default_cart WHERE LOWER(name) = LOWER(?)", (name.strip(),))
    db.commit()
    return cursor.rowcount > 0


def clear_default_cart():
    db = get_db()
    db.execute("DELETE FROM default_cart")
    db.commit()


def skip_item(name: str):
    db = get_db()
    db.execute("INSERT INTO skipped (name) VALUES (LOWER(?))", (name.strip(),))
    db.commit()


def get_skipped():
    db = get_db()
    return {row[0] for row in db.execute("SELECT name FROM skipped").fetchall()}


def clear_skipped():
    db = get_db()
    db.execute("DELETE FROM skipped")
    db.commit()


# --- Helpers ---

def parse_items_text(text: str):
    """Split text into individual items by commas, newlines, bullets, 'and', '&'."""
    raw_items = re.split(r",|\n| -|•|\*|\band\b|&", text)
    cleaned = []
    for item in raw_items:
        item = item.strip().lstrip("-•* ")
        if item:
            cleaned.append(item)
    return cleaned


def parse_quantity(text: str):
    """Parse '2x milk' or 'milk 2x' or 'milk' into (name, quantity)."""
    text = text.strip()
    m = re.match(r"^(\d+)\s*x?\s+(.+)$", text, re.IGNORECASE)
    if m:
        return m.group(2).strip(), m.group(1)
    m = re.match(r"^(.+?)\s+(\d+)\s*x?$", text, re.IGNORECASE)
    if m:
        return m.group(1).strip(), m.group(2)
    m = re.match(r"^(.+?)\s+(\d+)$", text)
    if m:
        return m.group(1).strip(), m.group(2)
    return text, "1"


def build_item_url(name):
    """Return saved favorite URL + ASIN or fall back to Amazon search."""
    saved = get_favorite(name)
    if saved:
        return saved["url"], True, saved["asin"]
    term = urllib.parse.quote_plus("organic " + name)
    return f"https://www.amazon.com/s?k={term}&almBrandId={WF_BRAND_ID}", False, None


def format_order_lines(items):
    """Build order lines with URLs for a list of (name, qty, added_by) items."""
    lines = []
    saved_count = 0
    asins = []
    for name, qty, _ in items:
        url, is_saved, asin = build_item_url(name)
        qty_display = f" ({qty}x)" if qty != "1" else ""
        marker = " :star:" if is_saved else " _(search)_"
        lines.append(f"• <{url}|{name}>{qty_display}{marker}")
        if is_saved:
            saved_count += 1
        if asin:
            asins.append((asin, qty))
    return lines, saved_count, asins


def build_add_to_cart_url(asins):
    """Build Amazon add-to-cart URL for all items with ASINs."""
    params = []
    for i, (asin, qty) in enumerate(asins, 1):
        params.append(f"ASIN.{i}={asin}")
        params.append(f"Quantity.{i}={qty}")
    return f"https://www.amazon.com/gp/aws/cart/add.html?{'&'.join(params)}"


# --- Slash Commands ---

@app.command("/add")
def handle_add(ack, command, respond):
    ack()
    text = command.get("text", "").strip()
    if not text:
        respond("Usage: `/add milk 2x` or `/add 3x eggs`\nMultiple items: `/add milk, eggs, bread`")
        return

    cleaned = parse_items_text(text)
    if not cleaned:
        respond("Couldn't parse any items. Try `/add milk, eggs, bread`")
        return

    added = []
    for item_text in cleaned:
        name, quantity = parse_quantity(item_text)
        add_item(name, quantity, command["user_id"])
        qty_display = f" ({quantity}x)" if quantity != "1" else ""
        added.append(f"*{name}*{qty_display}")

    respond(f"Added: {', '.join(added)}")


@app.command("/list")
def handle_list(ack, command, respond):
    ack()
    default_items = get_default_cart()
    added_items = get_all_items()
    skipped = get_skipped()

    if not default_items and not added_items:
        respond("Nothing on the list. Use `/add` to add items or `/defaultcart` to set up weekly staples.")
        return

    sections = []

    if default_items:
        lines = []
        for name, qty, _ in default_items:
            qty_display = f" ({qty}x)" if qty != "1" else ""
            skip_marker = " ~skipped~" if name.lower() in skipped else ""
            lines.append(f"• {name}{qty_display}{skip_marker}")
        sections.append(f"*Default Cart ({len(default_items)} items):*\n" + "\n".join(lines))

    if added_items:
        lines = []
        for name, qty, user_id in added_items:
            qty_display = f" ({qty}x)" if qty != "1" else ""
            lines.append(f"• {name}{qty_display}  — <@{user_id}>")
        sections.append(f"*Added This Week ({len(added_items)} items):*\n" + "\n".join(lines))

    footer = "\n\nUse `/skip item` to skip a default item this week. Use `/add item` to add extras."
    respond("\n\n".join(sections) + footer)


@app.command("/order")
def handle_order(ack, command, respond):
    ack()
    added_items = get_all_items()
    default_items = get_default_cart()
    skipped = get_skipped()

    # Filter out skipped items from default cart
    default_items = [(n, q, a) for n, q, a in default_items if n.lower() not in skipped]

    # Merge default cart + added items (default first)
    all_items = list(default_items) + list(added_items)

    if not all_items:
        respond("Nothing to order. Your default cart is empty and no items were added.")
        return

    lines, saved_count, _ = format_order_lines(all_items)

    sections = []
    if default_items:
        default_lines, _, _ = format_order_lines(default_items)
        sections.append(f"*Default Cart ({len(default_items)} items):*\n" + "\n".join(default_lines))
    if added_items:
        added_lines, _, _ = format_order_lines(added_items)
        sections.append(f"*Added Items ({len(added_items)} items):*\n" + "\n".join(added_lines))

    header = f"*Your Whole Foods Order ({len(all_items)} total items):*\n\n"
    body = "\n\n".join(sections)
    footer = f"\n\n:star: = saved favorite | _(search)_ = new search"
    if saved_count < len(all_items):
        footer += "\nUse `/save [item] [url]` to save products you like."

    respond(header + body + footer)
    clear_items()
    clear_skipped()


@app.command("/save")
def handle_save(ack, command, respond):
    ack()
    text = command.get("text", "").strip()

    # Try splitting by | first: /save organic popcorn | https://...
    if "|" in text:
        item_name, url = text.split("|", 1)
    # Otherwise find the URL and everything before it is the name
    elif "http" in text:
        idx = text.index("http")
        item_name = text[:idx]
        url = text[idx:]
    else:
        respond("Usage: `/save organic popcorn https://www.amazon.com/...`\nPut the item name first, then the URL.")
        return

    item_name = item_name.strip()
    url = url.strip().strip("<>")

    if not item_name or not url.startswith("http"):
        respond("Usage: `/save organic popcorn https://www.amazon.com/...`\nPut the item name first, then the URL.")
        return

    asin = extract_asin(url)
    save_favorite(item_name, url, command["user_id"])
    asin_msg = f" (ASIN: `{asin}` — will auto-add to cart)" if asin else " (no ASIN found — will link to product page)"
    respond(f"Saved *{item_name}* → <{url}|link>{asin_msg}")



# --- Default Cart Commands ---

@app.command("/defaultcart")
def handle_default_cart(ack, command, respond):
    ack()
    text = command.get("text", "").strip()

    # If no args, show the default cart
    if not text:
        items = get_default_cart()
        if not items:
            respond("Default cart is empty.\nUse `/defaultcart milk, eggs, bread` to add items.")
            return

        lines = []
        for name, qty, user_id in items:
            qty_display = f" ({qty}x)" if qty != "1" else ""
            lines.append(f"• {name}{qty_display}")

        respond(f"*Default Cart ({len(items)} items):*\n" + "\n".join(lines)
                + "\n\nThese items are included every time you `/order`."
                + "\nUse `/removedefault [item]` to remove items."
                + "\nUse `/cleardefault` to clear the whole default cart.")
        return

    # Otherwise, add items to default cart
    cleaned = parse_items_text(text)
    if not cleaned:
        respond("Couldn't parse any items. Try `/defaultcart milk, eggs, bread`")
        return

    added = []
    for item_text in cleaned:
        name, quantity = parse_quantity(item_text)
        add_default_item(name, quantity, command["user_id"])
        qty_display = f" ({quantity}x)" if quantity != "1" else ""
        added.append(f"*{name}*{qty_display}")

    respond(f"Added to default cart: {', '.join(added)}\nThese will be included every time you `/order`.")


@app.command("/removedefault")
def handle_remove_default(ack, command, respond):
    ack()
    text = command.get("text", "").strip()
    if not text:
        respond("Usage: `/removedefault milk`")
        return

    if remove_default_item(text):
        respond(f"Removed *{text}* from default cart.")
    else:
        respond(f"Couldn't find *{text}* in the default cart.")



@app.command("/skip")
def handle_skip(ack, command, respond):
    ack()
    text = command.get("text", "").strip()
    if not text:
        respond("Usage: `/skip milk` — skips milk from default cart for this order only")
        return

    cleaned = parse_items_text(text)
    if not cleaned:
        respond("Couldn't parse any items. Try `/skip milk, eggs`")
        return

    skipped = []
    for item_text in cleaned:
        name = item_text.strip()
        skip_item(name)
        skipped.append(f"*{name}*")

    respond(f"Skipping this week: {', '.join(skipped)}\nThey'll be back in your default cart next order.")


@app.command("/guide")
def handle_guide(ack, command, respond):
    ack()
    text = command.get("text", "").strip().lower()

    guides = {
        "grocery": (
            "*Grocery Bot Commands:*\n\n"
            "*Weekly Ordering:*\n"
            "• `/add milk, eggs, bread` — Add items for this week (commas, &, 'and', or - to separate)\n"
            "• `/list` — View added items\n"
            "• `/skip milk` — Skip a default cart item this week only\n"
            "• `/order` — Generate Whole Foods links for default cart + added items\n"
            "• `/removefromlist milk` — Remove an added item\n"
            "• `/clear` — Clear all added items\n\n"
            "*Default Cart (weekly staples):*\n"
            "• `/defaultcart` — View your default cart\n"
            "• `/defaultcart milk, eggs` — Add items to default cart\n"
            "• `/removedefault milk` — Permanently remove from default cart\n\n"
            "*Favorites (saved product links):*\n"
            "• `/save almonds https://...` — Save a product URL so it links directly next time\n"
        ),
    }

    if not text:
        app_list = "\n".join(f"• `/guide {name}`" for name in sorted(guides))
        respond(f"*Available guides:*\n{app_list}")
        return

    if text in guides:
        respond(guides[text])
    else:
        app_list = "\n".join(f"• `/guide {name}`" for name in sorted(guides))
        respond(f"No guide found for *{text}*.\n\n*Available guides:*\n{app_list}")


@app.command("/removefromlist")
def handle_remove(ack, command, respond):
    ack()
    text = command.get("text", "").strip()
    if not text:
        respond("Usage: `/removefromlist milk`")
        return

    if remove_item(text):
        respond(f"Removed: *{text}*")
    else:
        respond(f"Couldn't find *{text}* on the list.")


@app.command("/clear")
def handle_clear(ack, command, respond):
    ack()
    clear_items()
    respond("Grocery list cleared.")


# --- Start ---

if __name__ == "__main__":
    handler = SocketModeHandler(app, os.environ["SLACK_APP_TOKEN"])
    print("Grocery bot is running!")
    handler.start()
