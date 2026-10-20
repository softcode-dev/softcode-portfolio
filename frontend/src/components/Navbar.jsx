import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/xizmatlar', label: 'Xizmatlar' },
  { to: '/loyihalar', label: 'Loyihalar' },
  { to: '/jamoa', label: 'Jamoa' },
  { to: '/aloqa', label: 'Aloqa' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Esc bosilganda mobil menyuni yopish
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <div className="navbar bg-base-200/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-300 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-ghost lg:hidden"
            aria-label={mobileOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {mobileOpen && (
            <ul
              id="mobile-menu"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-52 border border-base-300"
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      isActive ? 'text-primary font-semibold' : ''
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/buyurtma"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-primary btn-sm mt-2 neon-border"
                >
                  Buyurtma berish
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="SoftCode_dev logotipi" className="h-10 rounded" />
          <span className="text-xl font-bold hidden sm:inline neon-text">
            SoftCode<span className="text-primary">_dev</span>
          </span>
        </Link>
      </div>

      {/* Navbar Center — desktop links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-semibold bg-base-300'
                    : 'hover:text-primary transition-colors'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex">
        <Link to="/buyurtma" className="btn btn-primary neon-border">
          Buyurtma berish
        </Link>
      </div>
    </div>
  )
}

export default Navbar
