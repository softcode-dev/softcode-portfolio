import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/jamoa', label: 'Biz haqimizda' },
  { to: '/xizmatlar', label: 'Xizmatlar' },
  { to: '/loyihalar', label: 'Loyihalar' },
  { to: '/aloqa', label: 'Aloqa' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (event) => event.key === 'Escape' && setMobileOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header className={`site-nav sticky top-0 z-50 h-20 border-b ${isHome ? '-mb-20 border-white/10 bg-[#080d15]/65' : 'border-white/10 bg-[#080d15]/90'} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-container flex h-full items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="SoftCode_dev — bosh sahifa">
          <picture><source srcSet="/header-logo-2.webp" type="image/webp" /><img src="/header-logo-2.png" alt="" width="46" height="46" className="h-11 w-11 object-contain" /></picture>
          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-white sm:text-xl">Soft<span className="text-[#2299e8]">Code</span>_dev</span>
        </Link>
        <nav aria-label="Asosiy menyu" className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link rounded-lg px-3 py-2 text-sm font-medium xl:px-4 ${isActive ? 'is-active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Link to="/buyurtma" className="inline-flex min-h-11 items-center gap-3 rounded-full border border-[#2299e8]/55 px-5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-[#2299e8]/10">
            Loyihani boshlash <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden" aria-label={mobileOpen ? 'Menyuni yopish' : 'Menyuni ochish'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobil menyu" className="mobile-panel absolute inset-x-0 top-20 border-b border-white/10 bg-[#101925] p-4 shadow-xl lg:hidden">
          <div className="site-container flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-medium ${isActive ? 'bg-[#2299e8]/12 text-[#8dd0fa]' : 'text-[#d7e1eb] hover:bg-white/5'}`}>
                {label}
              </NavLink>
            ))}
            <Link to="/buyurtma" className="btn btn-primary mt-3">Loyihani boshlash <ArrowRight size={17} /></Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
