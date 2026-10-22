# Softcode portfolio

React frontend and Django API. Orders are sent to Telegram.

## Run with Docker

```bash
cp .env.example .env
# Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env
docker compose up --build -d
```

Open http://localhost:5173. Nginx serves the frontend and forwards `/api/` to Django. The backend stays on the private Compose network. Check it with `curl http://localhost:5173/api/health`. Stop both services with `docker compose down`.

If port 5173 is busy, set `FRONTEND_PORT` in `.env` to another port. Set a unique `DJANGO_SECRET_KEY` before deploying publicly.

Keep `.env` private. `.env.example` contains only variable names. Docker restarts both services after a host reboot. Nginx limits repeated order requests, and Django validates order size before sending to Telegram.

## Run locally

```bash
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
DJANGO_SECRET_KEY=local-development-only-key .venv/bin/python manage.py runserver 5000
```

In another terminal:

```bash
cd frontend
npm ci
npm run dev
```

Vite forwards `/api/` to `http://localhost:5000`. Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in the backend process environment to enable order delivery. The health endpoint works without them.
