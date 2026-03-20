import os
import ssl
import threading
import time

import certifi
import schedule
from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler
from slack_sdk.web import WebClient

ssl_context = ssl.create_default_context(cafile=certifi.where())
client = WebClient(token=os.environ["SLACK_BOT_TOKEN"], ssl=ssl_context)
app = App(client=client)

HOUSEADMIN_CHANNEL = "C0AM53D3K8W"

# --- Scheduled Payments ---

SCHEDULED_PAYMENTS = [
    {
        "day": "thursday",
        "time": "21:00",
        "name": "Sherry",
        "amount": "$140",
        "service": "PayPal",
        "link": "https://paypal.me/sherry629/140",
    },
    {
        "day": "monday",
        "time": "12:00",
        "name": "Leo",
        "amount": "$170",
        "service": "Venmo",
        "link": "https://venmo.com/Leonardo_Souza?txn=pay&amount=170",
    },
]


def send_payment_reminder(payment):
    """Send a payment reminder to the houseadmin channel."""
    client.chat_postMessage(
        channel=HOUSEADMIN_CHANNEL,
        text=(
            f":moneybag: *Payment Reminder: {payment['name']}*\n\n"
            f"Amount: *{payment['amount']}*\n"
            f"Via: {payment['service']}\n\n"
            f"<{payment['link']}|Click here to pay {payment['name']} {payment['amount']} on {payment['service']}>"
        ),
    )


def setup_schedules():
    """Set up weekly payment reminders."""
    for payment in SCHEDULED_PAYMENTS:
        day_func = getattr(schedule.every(), payment["day"])
        day_func.at(payment["time"]).do(send_payment_reminder, payment)
    print(f"Scheduled {len(SCHEDULED_PAYMENTS)} payment reminders")


def run_scheduler():
    """Run the scheduler in a background thread."""
    while True:
        schedule.run_pending()
        time.sleep(30)


# --- Start ---

if __name__ == "__main__":
    setup_schedules()
    scheduler_thread = threading.Thread(target=run_scheduler, daemon=True)
    scheduler_thread.start()

    handler = SocketModeHandler(app, os.environ["SLACK_APP_TOKEN"])
    print("House admin bot is running!")
    handler.start()
