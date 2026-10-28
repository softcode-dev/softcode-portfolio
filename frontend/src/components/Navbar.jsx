import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../i18n/ThemeContext'

const languages = [
  { code: 'uz', name: "O'zbekcha", flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const { t, lang, setLang } = useLanguage()
  const { isDark, toggleTheme } = useTheme()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/jamoa', label: t('nav.about') },
    { to: '/xizmatlar', label: t('nav.services') },
    { to: '/loyihalar', label: t('nav.projects') },
    { to: '/aloqa', label: t('nav.contact') },
  ]

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

  // Close dropdown on click outside
  useEffect(() => {
    if (!langDropdownOpen) return
    const handleClickOutside = (e) => {
      if (!e.target.closest('.lang-dropdown-container')) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [langDropdownOpen])

  const headerBgClass = isHome
    ? isDark
      ? '-mb-20 border-white/10 bg-[#080d15]/65 text-white backdrop-blur-md'
      : '-mb-20 border-slate-200/80 bg-white/75 text-slate-900 backdrop-blur-md shadow-xs'
    : 'border-base-300/80 bg-base-100/95 text-base-content backdrop-blur-md shadow-sm'

  return (
    <header className={`site-nav sticky top-0 z-50 h-20 border-b transition-colors duration-200 ${headerBgClass} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-container relative flex h-full items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label={t('nav.homeAriaLabel')}>
          <picture>
            <source srcSet="/header-logo-2.webp" type="image/webp" />
            <img src="/header-logo-2.png" alt="" width="46" height="46" className="h-11 w-11 object-contain" />
          </picture>
          <span className={`whitespace-nowrap text-lg font-bold tracking-tight sm:text-xl ${isHome && !scrolled ? (isDark ? 'text-white' : 'text-slate-900') : 'text-base-content'}`}>
            Soft<span className="text-[#2299e8]">Code</span>_dev
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label={t('nav.homeAriaLabel')} className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                  isActive
                    ? 'is-active text-primary font-semibold'
                    : isHome && !scrolled
                    ? isDark
                      ? 'text-slate-200 hover:text-white'
                      : 'text-slate-700 hover:text-slate-950 font-medium'
                    : 'text-base-content/80 hover:text-base-content'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Controls (Lang, Theme, CTA) */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* Language Switcher Dropdown */}
          <div className="relative lang-dropdown-container">
            <button
              type="button"
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold uppercase transition-colors ${
                isHome && !scrolled
                  ? isDark
                    ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                    : 'border-slate-300/80 bg-white/80 text-slate-800 hover:bg-white shadow-xs'
                  : 'border-base-300 bg-base-200/80 text-base-content hover:bg-base-300'
              }`}
              aria-label="Tilni tanlash / Выбор языка / Select language"
              aria-expanded={langDropdownOpen}
            >
              <Globe size={15} className="text-primary" />
              <span>{lang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 rounded-xl border border-base-300 bg-base-100 p-1.5 shadow-xl">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLang(item.code)
                      setLangDropdownOpen(false)
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${
                      lang === item.code
                        ? 'bg-primary/15 font-semibold text-primary'
                        : 'text-base-content hover:bg-base-200'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-transform hover:scale-105 active:scale-95 ${
              isHome && !scrolled
                ? isDark
                  ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                  : 'border-slate-300/80 bg-white/80 text-slate-800 hover:bg-white shadow-xs'
                : 'border-base-300 bg-base-200/80 text-base-content hover:bg-base-300'
            }`}
            aria-label={isDark ? t('theme.light') : t('theme.dark')}
            title={isDark ? t('theme.light') : t('theme.dark')}
          >
            {isDark ? (
              <Sun size={17} className="text-warning transition-transform hover:rotate-45" />
            ) : (
              <Moon size={17} className="text-primary transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            to="/buyurtma"
            className="inline-flex min-h-10 items-center gap-2.5 rounded-full border border-primary/50 bg-primary/10 px-4 text-xs font-semibold text-base-content transition-all hover:scale-105 hover:bg-primary hover:text-white"
          >
            {t('nav.startProject')} <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile controls & hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme toggle on mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
              isHome && !scrolled
                ? isDark
                  ? 'border-white/20 bg-white/5 text-white'
                  : 'border-slate-300/80 bg-white/80 text-slate-800'
                : 'border-base-300 bg-base-200 text-base-content'
            }`}
            aria-label={isDark ? t('theme.light') : t('theme.dark')}
          >
            {isDark ? <Sun size={17} className="text-warning" /> : <Moon size={17} className="text-primary" />}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${
              isHome && !scrolled
                ? isDark
                  ? 'border-white/20 text-white'
                  : 'border-slate-300 text-slate-800 bg-white/80'
                : 'border-base-300 text-base-content'
            }`}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobil menyu"
          className="mobile-panel absolute inset-x-0 top-20 border-b border-base-300 bg-base-100 p-4 shadow-2xl lg:hidden"
        >
          <div className="site-container flex flex-col gap-1.5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/15 font-semibold text-primary'
                      : 'text-base-content/80 hover:bg-base-200'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Language Switcher */}
            <div className="mt-3 flex items-center justify-between rounded-xl border border-base-300 bg-base-200/50 p-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-base-content/70">
                <Globe size={15} className="text-primary" /> Til / Язык:
              </span>
              <div className="flex gap-1">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                      lang === item.code
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-base-100 text-base-content/80 hover:bg-base-300'
                    }`}
                  >
                    {item.flag} {item.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/buyurtma"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary mt-3 w-full"
            >
              {t('nav.startProject')} <ArrowRight size={17} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
