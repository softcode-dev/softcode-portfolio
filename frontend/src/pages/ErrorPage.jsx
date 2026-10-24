import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="page-shell site-container flex min-h-[65vh] flex-col items-center justify-center text-center">
      <span className="eyebrow">{t('error.notFoundEyebrow')}</span>
      <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl text-base-content">{t('error.notFoundTitle')}</h1>
      <p className="section-copy mt-5 max-w-md">{t('error.notFoundDesc')}</p>
      <Link to="/" className="btn btn-primary mt-8"><Home size={18} /> {t('error.goHome')}</Link>
    </div>
  )
}

export function ServerError() {
  const { t } = useLanguage()

  return (
    <div className="page-shell site-container flex min-h-[65vh] flex-col items-center justify-center text-center" role="alert">
      <span className="eyebrow">{t('error.serverEyebrow')}</span>
      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl text-base-content">{t('error.serverTitle')}</h1>
      <p className="section-copy mt-5 max-w-md">{t('error.serverDesc')}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>{t('error.retry')}</button>
        <Link to="/" className="btn btn-outline"><ArrowLeft size={18} /> {t('error.backHome')}</Link>
      </div>
    </div>
  )
}

export class PageErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() { return { failed: true } }

  render() {
    if (!this.state.failed) return this.props.children
    return <ServerError />
  }
}
