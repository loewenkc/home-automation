#!/bin/bash
cd "$(dirname "$0")"
source .env
export SLACK_BOT_TOKEN SLACK_APP_TOKEN
python3 bot.py
