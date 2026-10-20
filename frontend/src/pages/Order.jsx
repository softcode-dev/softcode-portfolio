import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

function Order() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    contact: '',
    service: '',
    description: '',
    budget: '',
    deadline: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch(`${API_URL}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Yuborishda xatolik')
      }
      setSubmitted(true)
      setForm({ name: '', contact: '', service: '', description: '', budget: '', deadline: '' })
    } catch (err) {
      setError("Buyurtmani yuborib bo'lmadi. Iltimos, keyinroq qayta urinib ko'ring.")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Buyurtma berish</h1>
        <p className="text-center text-base-content/60 mb-10">
          Loyihangiz haqida ma'lumot bering — biz tez orada aloqaga chiqamiz
        </p>

        {submitted && (
          <div role="alert" className="alert alert-success mb-8">
            <CheckCircle2 size={20} />
            <span>Buyurtmangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.</span>
            <button className="btn btn-ghost btn-sm" onClick={() => setSubmitted(false)}>×</button>
          </div>
        )}

        {error && (
          <div role="alert" className="alert alert-error mb-8">
            <span>{error}</span>
            <button className="btn btn-ghost btn-sm" onClick={() => setError('')}>×</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card bg-base-200 neon-border">
          <div className="card-body space-y-4">
            {/* Ism */}
            <div className="form-control">
              <label className="label" htmlFor="order-name">
                <span className="label-text">Ismingiz *</span>
              </label>
              <input
                id="order-name"
                type="text"
                name="name"
                placeholder="To'liq ismingiz"
                className="input input-bordered input-primary w-full"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Telefon/Telegram */}
            <div className="form-control">
              <label className="label" htmlFor="order-contact">
                <span className="label-text">Telefon yoki Telegram *</span>
              </label>
              <input
                id="order-contact"
                type="text"
                name="contact"
                placeholder="+998 90 123 45 67 yoki @username"
                className="input input-bordered input-primary w-full"
                value={form.contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Xizmat turi */}
            <div className="form-control">
              <label className="label" htmlFor="order-service">
                <span className="label-text">Xizmat turi *</span>
              </label>
              <select
                id="order-service"
                name="service"
                className="select select-bordered select-primary w-full"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Xizmat turini tanlang</option>
                <option value="website">Veb-sayt</option>
                <option value="bot">Telegram bot</option>
                <option value="admin">Admin panel / CRM</option>
                <option value="ai">AI integratsiya</option>
                <option value="other">Boshqa</option>
              </select>
            </div>

            {/* Loyiha tavsifi */}
            <div className="form-control">
              <label className="label" htmlFor="order-description">
                <span className="label-text">Loyiha tavsifi *</span>
              </label>
              <textarea
                id="order-description"
                name="description"
                placeholder="Loyihangiz haqida batafsil yozing..."
                className="textarea textarea-bordered textarea-primary w-full h-32"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Byudjet */}
            <div className="form-control">
              <label className="label" htmlFor="order-budget">
                <span className="label-text">Byudjet oralig'i (ixtiyoriy)</span>
              </label>
              <select
                id="order-budget"
                name="budget"
                className="select select-bordered w-full"
                value={form.budget}
                onChange={handleChange}
              >
                <option value="">Tanlang (ixtiyoriy)</option>
                <option value="1-3m">1 — 3 mln so'm</option>
                <option value="3-5m">3 — 5 mln so'm</option>
                <option value="5-10m">5 — 10 mln so'm</option>
                <option value="10m+">10 mln so'm dan yuqori</option>
                <option value="unknown">Aniq emas</option>
              </select>
            </div>

            {/* Muddat */}
            <div className="form-control">
              <label className="label" htmlFor="order-deadline">
                <span className="label-text">Muddat (ixtiyoriy)</span>
              </label>
              <select
                id="order-deadline"
                name="deadline"
                className="select select-bordered w-full"
                value={form.deadline}
                onChange={handleChange}
              >
                <option value="">Tanlang (ixtiyoriy)</option>
                <option value="1week">1 hafta ichida</option>
                <option value="2weeks">2 hafta ichida</option>
                <option value="1month">1 oy ichida</option>
                <option value="2months">2 oy ichida</option>
                <option value="flexible">Moslashuvchan</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-full neon-border mt-2"
              disabled={sending}
            >
              {sending ? (
                <><span className="loading loading-spinner loading-sm" /> Yuborilmoqda...</>
              ) : (
                <><Send size={20} /> Yuborish</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Order
