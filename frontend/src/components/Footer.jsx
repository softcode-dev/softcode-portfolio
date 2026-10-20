import { Link } from 'react-router-dom'
import { Send, Phone, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto text-base-content">
        {/* Sahifalar */}
        <nav>
          <h6 className="footer-title text-primary">Sahifalar</h6>
          <Link to="/" className="link link-hover">Bosh sahifa</Link>
          <Link to="/xizmatlar" className="link link-hover">Xizmatlar</Link>
          <Link to="/loyihalar" className="link link-hover">Loyihalar</Link>
          <Link to="/jamoa" className="link link-hover">Jamoa</Link>
          <Link to="/aloqa" className="link link-hover">Aloqa</Link>
        </nav>

        {/* Xizmatlar */}
        <nav>
          <h6 className="footer-title text-primary">Xizmatlar</h6>
          <Link to="/xizmatlar" className="link link-hover">Veb-saytlar</Link>
          <Link to="/xizmatlar" className="link link-hover">Telegram botlar</Link>
          <Link to="/xizmatlar" className="link link-hover">Admin panel / CRM</Link>
          <Link to="/xizmatlar" className="link link-hover">AI integratsiya</Link>
          <Link to="/xizmatlar" className="link link-hover">Qo'llab-quvvatlash</Link>
        </nav>

        {/* Aloqa */}
        <nav>
          <h6 className="footer-title text-primary">Aloqa</h6>
          <a href="https://t.me/softcode_dev" className="link link-hover flex items-center gap-2">
            <Send size={16} /> Telegram
          </a>
          <a href="tel:+998901234567" className="link link-hover flex items-center gap-2">
            <Phone size={16} /> +998 90 123 45 67
          </a>
          <a href="mailto:info@softcode.uz" className="link link-hover flex items-center gap-2">
            <Mail size={16} /> info@softcode.uz
          </a>
        </nav>
      </div>

      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>© 2026 <span className="text-primary font-semibold">SoftCode_dev</span> — Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  )
}

export default Footer
