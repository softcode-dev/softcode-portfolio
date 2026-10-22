import json
import os
from unittest.mock import patch

from django.test import SimpleTestCase


class OrderApiTests(SimpleTestCase):
    def test_health(self):
        self.assertEqual(self.client.get("/api/health").json(), {"status": "ok"})

    def test_required_fields(self):
        response = self.client.post("/api/order", data=json.dumps({"name": "Ali"}), content_type="application/json")
        self.assertEqual(response.status_code, 400)
        self.assertFalse(response.json()["ok"])

    def test_oversized_description(self):
        response = self.client.post(
            "/api/order",
            data=json.dumps({"name": "Ali", "contact": "@ali", "service": "website", "description": "x" * 3001}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 400)

    @patch.dict(os.environ, {"TELEGRAM_BOT_TOKEN": "", "TELEGRAM_CHAT_ID": ""})
    def test_missing_telegram_configuration(self):
        response = self.client.post(
            "/api/order",
            data=json.dumps({"name": "Ali", "contact": "@ali", "service": "website", "description": "Test"}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 500)
        self.assertFalse(response.json()["ok"])

    @patch.dict(os.environ, {"TELEGRAM_BOT_TOKEN": "test-token", "TELEGRAM_CHAT_ID": "123"})
    @patch("orders.views.urlopen")
    def test_order_escapes_html_and_delivers(self, mock_urlopen):
        mock_urlopen.return_value.__enter__.return_value.read.return_value = b'{"ok": true}'
        response = self.client.post(
            "/api/order",
            data=json.dumps({"name": "<Ali>", "contact": "@ali", "service": "website", "description": "A&B"}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"ok": True})
        sent = json.loads(mock_urlopen.call_args.args[0].data)
        self.assertIn("&lt;Ali&gt;", sent["text"])
        self.assertIn("A&amp;B", sent["text"])
        self.assertIn("Veb-sayt", sent["text"])
