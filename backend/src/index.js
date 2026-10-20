import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Telegram sozlamalari — .env faylidan o'qiladi
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.warn(
    "⚠️  TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID topilmadi. " +
      "backend/.env faylini to'ldiring (.env.example dan nusxa oling)."
  );
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Softcode portfolio API is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Inson o'qiy oladigan yorliqlar
const SERVICE_LABELS = {
  website: "Veb-sayt",
  bot: "Telegram bot",
  admin: "Admin panel / CRM",
  ai: "AI integratsiya",
  other: "Boshqa",
};
const BUDGET_LABELS = {
  "1-3m": "1 — 3 mln so'm",
  "3-5m": "3 — 5 mln so'm",
  "5-10m": "5 — 10 mln so'm",
  "10m+": "10 mln so'm dan yuqori",
  unknown: "Aniq emas",
};
const DEADLINE_LABELS = {
  "1week": "1 hafta ichida",
  "2weeks": "2 hafta ichida",
  "1month": "1 oy ichida",
  "2months": "2 oy ichida",
  flexible: "Moslashuvchan",
};

// HTML parse_mode uchun maxsus belgilarni ekranlash
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.post("/api/order", async (req, res) => {
  const { name, contact, service, description, budget, deadline } = req.body || {};

  // Majburiy maydonlarni tekshirish
  if (!name || !contact || !service || !description) {
    return res
      .status(400)
      .json({ ok: false, error: "Majburiy maydonlar to'ldirilmagan" });
  }

  const lines = [
    "🆕 <b>Yangi buyurtma!</b>",
    "",
    `👤 <b>Ism:</b> ${escapeHtml(name)}`,
    `📞 <b>Aloqa:</b> ${escapeHtml(contact)}`,
    `🛠 <b>Xizmat:</b> ${escapeHtml(SERVICE_LABELS[service] || service)}`,
    `📝 <b>Tavsif:</b> ${escapeHtml(description)}`,
  ];

  if (budget) {
    lines.push(`💰 <b>Byudjet:</b> ${escapeHtml(BUDGET_LABELS[budget] || budget)}`);
  }
  if (deadline) {
    lines.push(`⏱ <b>Muddat:</b> ${escapeHtml(DEADLINE_LABELS[deadline] || deadline)}`);
  }

  lines.push("", `🕒 ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`);

  const message = lines.join("\n");

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      console.error("Telegram xatosi:", tgData);
      return res
        .status(502)
        .json({ ok: false, error: "Telegramga yuborib bo'lmadi" });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Buyurtma yuborishda xato:", err);
    res.status(500).json({ ok: false, error: "Server xatosi" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
