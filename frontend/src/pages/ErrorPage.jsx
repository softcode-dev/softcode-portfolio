import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export function NotFound() {
  return (
    <div className="page-shell site-container flex min-h-[65vh] flex-col items-center justify-center text-center">
      <span className="eyebrow">404 / Sahifa topilmadi</span>
      <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">Bu sahifa mavjud emas</h1>
      <p className="section-copy mt-5 max-w-md">Manzilni tekshiring yoki bosh sahifaga qayting.</p>
      <Link to="/" className="btn btn-primary mt-8"><Home size={18} /> Bosh sahifaga qaytish</Link>
    </div>
  )
}

export function ServerError() {
  return (
    <div className="page-shell site-container flex min-h-[65vh] flex-col items-center justify-center text-center" role="alert">
      <span className="eyebrow">500 / Xatolik</span>
      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Sahifani ochib bo‘lmadi</h1>
      <p className="section-copy mt-5 max-w-md">Vaqtinchalik xatolik yuz berdi. Sahifani yangilab ko‘ring yoki bosh sahifaga qayting.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>Qayta urinish</button>
        <Link to="/" className="btn btn-outline"><ArrowLeft size={18} /> Bosh sahifa</Link>
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
