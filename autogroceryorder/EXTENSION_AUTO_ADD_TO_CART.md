# Extension: Auto Add to Cart via Browser Automation

Automatically add all grocery items to your Amazon Whole Foods cart using Playwright.

## How It Works

1. Bot receives `/order` command
2. Playwright opens a browser using your existing Amazon login session
3. For each saved item, it navigates to the product URL and clicks "Add to Cart"
4. You just review your Amazon cart and checkout

## Setup

### 1. Install dependencies

```bash
pip3 install playwright
playwright install chromium
```

### 2. Save your Amazon session

Run this once to log into Amazon and save your session cookies:

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch_persistent_context(
        user_data_dir="./amazon_session",
        headless=False
    )
    page = browser.new_page()
    page.goto("https://www.amazon.com")
    input("Log into Amazon, then press Enter here...")
    browser.close()
```

This saves your login session to `./amazon_session/`. You only need to do this once (or when your session expires).

### 3. Add the auto-cart script

```python
import time
from playwright.sync_api import sync_playwright

def add_items_to_cart(product_urls):
    """Open each product URL and click Add to Cart."""
    with sync_playwright() as p:
        browser = p.chromium.launch_persistent_context(
            user_data_dir="./amazon_session",
            headless=False  # set True to run without visible browser
        )
        page = browser.new_page()

        for url in product_urls:
            try:
                page.goto(url, timeout=15000)
                time.sleep(2)

                # Look for the Add to Cart / Add to Fresh Cart button
                add_btn = page.locator(
                    'input#add-to-cart-button, '
                    'input[name="submit.addToCart"], '
                    'span.a-button-text:has-text("Add to Cart"), '
                    'input[value="Add to Cart"]'
                ).first

                if add_btn.is_visible():
                    add_btn.click()
                    print(f"Added: {url}")
                    time.sleep(2)
                else:
                    print(f"No Add to Cart button found: {url}")

            except Exception as e:
                print(f"Failed: {url} — {e}")

        print("\nDone! Review your cart at https://www.amazon.com/cart/localmarket")
        time.sleep(5)
        browser.close()
```

### 4. Integrate with the Slack bot

Add a new command handler in `bot.py`:

```python
import subprocess

@app.command("/autocart")
def handle_autocart(ack, command, respond):
    ack()
    items = get_all_items()
    default_items = get_default_cart()
    skipped = get_skipped()

    default_items = [(n, q, a) for n, q, a in default_items if n.lower() not in skipped]
    all_items = list(default_items) + list(items)

    if not all_items:
        respond("Nothing to order.")
        return

    # Collect saved product URLs
    urls = []
    unsaved = []
    for name, qty, _ in all_items:
        fav = get_favorite(name)
        if fav:
            urls.append(fav["url"])
        else:
            unsaved.append(name)

    if not urls:
        respond("No saved product URLs. Use `/save [item] [url]` first.")
        return

    respond(f"Adding {len(urls)} items to your Amazon cart... this may take a minute.")

    # Run the Playwright script as a subprocess
    subprocess.Popen(["python3", "auto_cart.py"] + urls)

    if unsaved:
        respond(f"These items need manual search: {', '.join(unsaved)}")
```

### 5. Create `auto_cart.py`

A standalone script that takes product URLs as arguments:

```python
import sys
import time
from playwright.sync_api import sync_playwright

urls = sys.argv[1:]

with sync_playwright() as p:
    browser = p.chromium.launch_persistent_context(
        user_data_dir="./amazon_session",
        headless=False
    )
    page = browser.new_page()

    for url in urls:
        try:
            page.goto(url, timeout=15000)
            time.sleep(2)
            add_btn = page.locator(
                'input#add-to-cart-button, '
                'input[name="submit.addToCart"], '
                'span.a-button-text:has-text("Add to Cart"), '
                'input[value="Add to Cart"]'
            ).first
            if add_btn.is_visible():
                add_btn.click()
                print(f"Added: {url}")
                time.sleep(2)
            else:
                print(f"No button found: {url}")
        except Exception as e:
            print(f"Failed: {url} — {e}")

    print("\nDone! Review cart at https://www.amazon.com/cart/localmarket")
    time.sleep(5)
    browser.close()
```

## Caveats

- **Amazon may change their page layout** — button selectors may need updating
- **Session expires** — you'll need to re-login periodically
- **CAPTCHA / bot detection** — Amazon may flag automated clicks; running with `headless=False` (visible browser) reduces this
- **Whole Foods items are location-dependent** — make sure your Amazon address is set correctly before running
- Add `amazon_session/` to your `.gitignore` to avoid pushing session cookies

## Slash Command to Add

Add `/autocart` in your Slack app settings (api.slack.com/apps) with description "Auto add items to Amazon cart".
