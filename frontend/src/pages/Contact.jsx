import { useState } from 'react'
import { Send, Phone, Mail, Camera, Clock, DollarSign, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { PageIntro, Reveal } from '../components/UI'

const API_URL = import.meta.env.VITE_API_URL || ''

function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const response = await fetch(`${API_URL}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, contact: form.contact, service: 'other', description: form.message }),
      })
      const result = await response.json()
      if (!response.ok || !result.ok) throw new Error(result.error || 'Xabar yuborilmadi')
      setSubmitted(true)
      setForm({ name: '', contact: '', message: '' })
    } catch {
      setError("Xabarni yuborib bo‘lmadi. Iltimos, keyinroq qayta urinib ko‘ring.")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="page-shell">
      <div className="site-container">
        <PageIntro eyebrow="Aloqa" title="Biz bilan bog‘laning">
          Savollaringiz bormi? Biz bilan qulay usulda bog'laning yoki xabar yuboring
        </PageIntro>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Cards */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Aloqa ma'lumotlari</h2>
            {[
              {
                icon: <Send size={24} className="text-primary" />,
                title: 'Telegram',
                value: '@softcode_dev',
                href: 'https://t.me/softcode_dev',
                external: true,
              },
              {
                icon: <Phone size={24} className="text-primary" />,
                title: 'Telefon',
                value: '+998 90 123 45 67',
                href: 'tel:+998901234567',
                external: false,
              },
              {
                icon: <Mail size={24} className="text-primary" />,
                title: 'Email',
                value: 'info@softcode.uz',
                href: 'mailto:info@softcode.uz',
                external: false,
              },
              {
                icon: <Camera size={24} className="text-primary" />,
                title: 'Instagram',
                value: '@softcode_dev',
                href: 'https://instagram.com/softcode_dev',
                external: true,
              },
            ].map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                {...(contact.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="card card-hover contact-link"
              >
                <div className="card-body flex-row items-center gap-4 py-4">
                  <div className="p-3 rounded-lg bg-primary/10">{contact.icon}</div>
                  <div>
                    <p className="text-sm text-base-content/60">{contact.title}</p>
                    <p className="font-semibold">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Xabar yuborish</h2>

            {submitted && (
              <div role="alert" className="alert alert-success mb-4">
                <CheckCircle2 size={20} />
                <span>Xabaringiz yuborildi! Tez orada javob beramiz.</span>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  aria-label="Xabarni yopish"
                  onClick={() => setSubmitted(false)}
                >
                  ×
                </button>
              </div>
            )}

            {error && <div role="alert" className="alert alert-error mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="card">
              <div className="card-body space-y-4">
                <div className="form-control">
                  <label className="label" htmlFor="contact-name">
                    <span className="label-text">Ismingiz *</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    maxLength={120}
                    placeholder="Ismingizni kiriting"
                    className="input input-bordered input-primary w-full"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="contact-reply"><span className="label-text">Telefon yoki Telegram *</span></label>
                  <input id="contact-reply" type="text" maxLength={120} placeholder="+998 90 123 45 67 yoki @username" className="input input-bordered input-primary w-full" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} required />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="contact-message">
                    <span className="label-text">Xabar *</span>
                  </label>
                  <textarea
                    id="contact-message"
                    maxLength={3000}
                    placeholder="Xabaringizni yozing..."
                    className="textarea textarea-bordered textarea-primary w-full h-32"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" disabled={sending} className="btn btn-primary w-full">
                  <Send size={18} /> {sending ? 'Yuborilmoqda...' : 'Yuborish'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Hamkorlik shartlari */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Hamkorlik shartlari</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <DollarSign size={36} className="text-primary" />,
                title: "Oldindan to'lov 50%",
                desc: "Loyiha boshlanishidan oldin 50% to'lov, qolgan qismi topshirilgandan keyin.",
              },
              {
                icon: <Clock size={36} className="text-primary" />,
                title: 'Muddat kelishiladi',
                desc: "Loyiha muddati boshida kelishiladi va har bir bosqich alohida nazorat qilinadi.",
              },
              {
                icon: <ShieldCheck size={36} className="text-primary" />,
                title: "1 oy bepul qo'llab-quvvatlash",
                desc: "Loyiha topshirilgandan so'ng 1 oy davomida bepul texnik yordam beramiz.",
              },
            ].map((item) => (
              <Reveal key={item.title} className="card card-hover">
                <div className="card-body items-center text-center">
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="text-base-content/70 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
