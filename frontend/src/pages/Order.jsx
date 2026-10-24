import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { PageIntro } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'

const API_URL = import.meta.env.VITE_API_URL || ''

function Order() {
  const { t } = useLanguage()
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
        throw new Error(data.error || t('order.errorMessage'))
      }
      setSubmitted(true)
      setForm({ name: '', contact: '', service: '', description: '', budget: '', deadline: '' })
    } catch {
      setError(t('order.errorMessage'))
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="page-shell">
      <div className="site-container max-w-2xl">
        <PageIntro eyebrow={t('order.eyebrow')} title={t('order.title')}>
          {t('order.intro')}
        </PageIntro>

        {submitted && (
          <div role="alert" className="alert alert-success mb-8">
            <CheckCircle2 size={20} />
            <span>{t('order.successMessage')}</span>
            <button type="button" aria-label={t('order.closeAlert')} className="btn btn-ghost btn-sm" onClick={() => setSubmitted(false)}>×</button>
          </div>
        )}

        {error && (
          <div role="alert" className="alert alert-error mb-8">
            <span>{error}</span>
            <button type="button" aria-label={t('order.closeError')} className="btn btn-ghost btn-sm" onClick={() => setError('')}>×</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card">
          <div className="card-body space-y-4">
            {/* Ism */}
            <div className="form-control">
              <label className="label" htmlFor="order-name">
                <span className="label-text">{t('order.nameLabel')}</span>
              </label>
              <input
                id="order-name"
                type="text"
                name="name"
                maxLength={120}
                placeholder={t('order.namePlaceholder')}
                className="input input-bordered input-primary w-full"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Telefon/Telegram */}
            <div className="form-control">
              <label className="label" htmlFor="order-contact">
                <span className="label-text">{t('order.contactLabel')}</span>
              </label>
              <input
                id="order-contact"
                type="text"
                name="contact"
                maxLength={120}
                placeholder={t('order.contactPlaceholder')}
                className="input input-bordered input-primary w-full"
                value={form.contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Xizmat turi */}
            <div className="form-control">
              <label className="label" htmlFor="order-service">
                <span className="label-text">{t('order.serviceLabel')}</span>
              </label>
              <select
                id="order-service"
                name="service"
                className="select select-bordered select-primary w-full"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>{t('order.servicePlaceholder')}</option>
                <option value="website">{t('order.serviceWebsite')}</option>
                <option value="bot">{t('order.serviceBot')}</option>
                <option value="admin">{t('order.serviceAdmin')}</option>
                <option value="ai">{t('order.serviceAI')}</option>
                <option value="other">{t('order.serviceOther')}</option>
              </select>
            </div>

            {/* Loyiha tavsifi */}
            <div className="form-control">
              <label className="label" htmlFor="order-description">
                <span className="label-text">{t('order.descLabel')}</span>
              </label>
              <textarea
                id="order-description"
                name="description"
                maxLength={3000}
                placeholder={t('order.descPlaceholder')}
                className="textarea textarea-bordered textarea-primary w-full h-32"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Byudjet */}
            <div className="form-control">
              <label className="label" htmlFor="order-budget">
                <span className="label-text">{t('order.budgetLabel')}</span>
              </label>
              <select
                id="order-budget"
                name="budget"
                className="select select-bordered w-full"
                value={form.budget}
                onChange={handleChange}
              >
                <option value="">{t('order.budgetPlaceholder')}</option>
                <option value="1-3m">{t('order.budget1')}</option>
                <option value="3-5m">{t('order.budget2')}</option>
                <option value="5-10m">{t('order.budget3')}</option>
                <option value="10m+">{t('order.budget4')}</option>
                <option value="unknown">{t('order.budgetUnknown')}</option>
              </select>
            </div>

            {/* Muddat */}
            <div className="form-control">
              <label className="label" htmlFor="order-deadline">
                <span className="label-text">{t('order.deadlineLabel')}</span>
              </label>
              <select
                id="order-deadline"
                name="deadline"
                className="select select-bordered w-full"
                value={form.deadline}
                onChange={handleChange}
              >
                <option value="">{t('order.deadlinePlaceholder')}</option>
                <option value="1week">{t('order.deadline1w')}</option>
                <option value="2weeks">{t('order.deadline2w')}</option>
                <option value="1month">{t('order.deadline1m')}</option>
                <option value="2months">{t('order.deadline2m')}</option>
                <option value="flexible">{t('order.deadlineFlexible')}</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-full mt-2"
              disabled={sending}
            >
              {sending ? (
                <><span className="loading loading-spinner loading-sm" /> {t('order.submitting')}</>
              ) : (
                <><Send size={20} /> {t('order.submitButton')}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Order
