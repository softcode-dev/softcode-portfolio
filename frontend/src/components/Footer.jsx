import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101925] text-[#f5f7fa]">
      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5" aria-label="SoftCode_dev — bosh sahifa">
            <picture><source srcSet="/header-logo-2.webp" type="image/webp" /><img src="/header-logo-2.png" alt="" width="44" height="44" loading="lazy" className="h-11 w-11 object-contain" /></picture>
            <span className="text-xl font-bold">Soft<span className="text-[#2299e8]">Code</span>_dev</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#9baabd]">Veb-saytlar, Telegram botlar va AI yechimlar — g‘oyangizni zamonaviy texnologiyalar bilan amalga oshiramiz.</p>
        </div>
        <nav aria-label="Footer sahifalari" className="flex flex-col items-start gap-3 text-sm">
          <h2 className="mb-2 font-semibold text-white">Sahifalar</h2>
          <Link to="/" className="text-[#9baabd] hover:text-white">Bosh sahifa</Link>
          <Link to="/jamoa" className="text-[#9baabd] hover:text-white">Biz haqimizda</Link>
          <Link to="/loyihalar" className="text-[#9baabd] hover:text-white">Loyihalar</Link>
          <Link to="/aloqa" className="text-[#9baabd] hover:text-white">Aloqa</Link>
        </nav>
        <nav aria-label="Footer xizmatlari" className="flex flex-col items-start gap-3 text-sm">
          <h2 className="mb-2 font-semibold text-white">Xizmatlar</h2>
          <Link to="/xizmatlar" className="text-[#9baabd] hover:text-white">Veb-saytlar</Link>
          <Link to="/xizmatlar" className="text-[#9baabd] hover:text-white">Telegram botlar</Link>
          <Link to="/xizmatlar" className="text-[#9baabd] hover:text-white">Admin panel / CRM</Link>
          <Link to="/xizmatlar" className="text-[#9baabd] hover:text-white">AI integratsiya</Link>
          <Link to="/xizmatlar" className="text-[#9baabd] hover:text-white">Qo‘llab-quvvatlash</Link>
        </nav>
        <div className="flex flex-col items-start gap-3 text-sm">
          <h2 className="mb-2 font-semibold text-white">Bog‘lanish</h2>
          <a href="https://t.me/softcode_dev" target="_blank" rel="noreferrer" className="contact-link flex items-center gap-2 text-[#9baabd] hover:text-white"><Send size={16} /> Telegram <ArrowUpRight size={13} /></a>
          <a href="tel:+998901234567" className="contact-link flex items-center gap-2 text-[#9baabd] hover:text-white"><Phone size={16} /> +998 90 123 45 67</a>
          <a href="mailto:info@softcode.uz" className="contact-link flex items-center gap-2 text-[#9baabd] hover:text-white"><Mail size={16} /> info@softcode.uz</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-3 py-5 text-xs text-[#9baabd] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SoftCode_dev — Barcha huquqlar himoyalangan</p>
          <Link to="/buyurtma" className="hover:text-white">Loyihangizni muhokama qilamiz <ArrowUpRight size={13} className="inline" /></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
