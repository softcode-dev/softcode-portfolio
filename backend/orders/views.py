import json
import logging
import os
from datetime import datetime
from html import escape
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST


logger = logging.getLogger(__name__)

SERVICE_LABELS = {
    "website": "Veb-sayt",
    "bot": "Telegram bot",
    "admin": "Admin panel / CRM",
    "ai": "AI integratsiya",
    "other": "Boshqa",
}
BUDGET_LABELS = {
    "1-3m": "1 — 3 mln so'm",
    "3-5m": "3 — 5 mln so'm",
    "5-10m": "5 — 10 mln so'm",
    "10m+": "10 mln so'm dan yuqori",
    "unknown": "Aniq emas",
}
DEADLINE_LABELS = {
    "1week": "1 hafta ichida",
    "2weeks": "2 hafta ichida",
    "1month": "1 oy ichida",
    "2months": "2 oy ichida",
    "flexible": "Moslashuvchan",
}


def home(request):
    return JsonResponse({"message": "Softcode portfolio API is running"})


def health(request):
    return JsonResponse({"status": "ok"})


@csrf_exempt
@require_POST
def order(request):
    if len(request.body) > 8192:
        return JsonResponse({"ok": False, "error": "So'rov juda katta"}, status=413)

    try:
        data = json.loads(request.body)
    except (ValueError, UnicodeDecodeError):
        return JsonResponse({"ok": False, "error": "JSON noto'g'ri"}, status=400)

    if not isinstance(data, dict):
        return JsonResponse({"ok": False, "error": "JSON noto'g'ri"}, status=400)

    required = ("name", "contact", "service", "description")
    if any(not isinstance(data.get(key), str) or not data[key].strip() for key in required):
        return JsonResponse({"ok": False, "error": "Majburiy maydonlar to'ldirilmagan"}, status=400)

    limits = {"name": 120, "contact": 120, "service": 50, "description": 3000, "budget": 50, "deadline": 50}
    if any(isinstance(data.get(key), str) and len(data[key]) > limit for key, limit in limits.items()):
        return JsonResponse({"ok": False, "error": "Maydon juda uzun"}, status=400)

    for key in ("budget", "deadline"):
        if data.get(key) is not None and not isinstance(data[key], str):
            return JsonResponse({"ok": False, "error": "JSON noto'g'ri"}, status=400)

    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        logger.error("Telegram credentials are missing")
        return JsonResponse({"ok": False, "error": "Server xatosi"}, status=500)

    lines = [
        "🆕 <b>Yangi buyurtma!</b>",
        "",
        f"👤 <b>Ism:</b> {escape(data['name'])}",
        f"📞 <b>Aloqa:</b> {escape(data['contact'])}",
        f"🛠 <b>Xizmat:</b> {escape(SERVICE_LABELS.get(data['service'], data['service']))}",
        f"📝 <b>Tavsif:</b> {escape(data['description'])}",
    ]
    if data.get("budget"):
        lines.append(f"💰 <b>Byudjet:</b> {escape(BUDGET_LABELS.get(data['budget'], data['budget']))}")
    if data.get("deadline"):
        lines.append(f"⏱ <b>Muddat:</b> {escape(DEADLINE_LABELS.get(data['deadline'], data['deadline']))}")
    lines.extend(("", f"🕒 {datetime.now(ZoneInfo('Asia/Tashkent')).strftime('%d.%m.%Y, %H:%M:%S')}"))

    payload = json.dumps({"chat_id": chat_id, "text": "\n".join(lines), "parse_mode": "HTML"}).encode()
    telegram_request = Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urlopen(telegram_request, timeout=10) as response:
            result = json.load(response)
    except (HTTPError, URLError, TimeoutError, ValueError):
        logger.exception("Telegram request failed")
        return JsonResponse({"ok": False, "error": "Telegramga yuborib bo'lmadi"}, status=502)

    if not result.get("ok"):
        logger.error("Telegram rejected order: %s", result)
        return JsonResponse({"ok": False, "error": "Telegramga yuborib bo'lmadi"}, status=502)
    return JsonResponse({"ok": True})
