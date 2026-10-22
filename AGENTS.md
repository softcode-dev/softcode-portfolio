# Softcode Dev — Loyiha Qoidalari

> Bu fayl global `/home/bekzod/AGENTS.md` qoidalarini kengaytiradi.

## Loyiha Haqida

**Softcode Dev** — IT kompaniya veb-sayti.
- Django backend API
- React frontend
- Docker + Nginx deployment

## Muhim Fayllar

- `backend/` — Django backend
- `frontend/` — React frontend
- `compose.yaml` — Docker Compose

## Stack

```
Django (backend)
React (frontend)
Docker + Nginx
```

## Telegram Integration

```
TELEGRAM_BOT_TOKEN — xabar yuborish uchun
TELEGRAM_CHAT_ID   — xabar qabul qiluvchi chat
```

## Docker

```bash
docker compose up -d
docker compose logs -f backend
docker compose exec backend python manage.py migrate
```
