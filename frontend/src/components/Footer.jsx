import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-base-300 bg-base-200/70 text-base-content transition-colors duration-200">
      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5" aria-label={t('nav.homeAriaLabel')}>
            <picture>
              <source srcSet="/header-logo-2.webp" type="image/webp" />
              <img src="/header-logo-2.png" alt="" width="44" height="44" loading="lazy" className="h-11 w-11 object-contain" />
            </picture>
            <span className="text-xl font-bold">Soft<span className="text-[#2299e8]">Code</span>_dev</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-base-content/70">
            {t('footer.description')}
          </p>
        </div>

        <nav aria-label="Footer sahifalari" className="flex flex-col items-start gap-3 text-sm">
          <h2 className="mb-2 font-semibold text-base-content">{t('footer.pages')}</h2>
          <Link to="/" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.home')}</Link>
          <Link to="/jamoa" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.about')}</Link>
          <Link to="/loyihalar" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.projects')}</Link>
          <Link to="/aloqa" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.contactLink')}</Link>
        </nav>

        <nav aria-label="Footer xizmatlari" className="flex flex-col items-start gap-3 text-sm">
          <h2 className="mb-2 font-semibold text-base-content">{t('footer.services')}</h2>
          <Link to="/xizmatlar" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.websites')}</Link>
          <Link to="/xizmatlar" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.bots')}</Link>
          <Link to="/xizmatlar" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.adminCrm')}</Link>
          <Link to="/xizmatlar" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.aiIntegration')}</Link>
          <Link to="/xizmatlar" className="text-base-content/70 hover:text-primary transition-colors">{t('footer.support')}</Link>
        </nav>

        <div className="flex flex-col items-start gap-3 text-sm">
          <h2 className="mb-2 font-semibold text-base-content">{t('footer.contact')}</h2>
          <a href="https://t.me/softcode_dev" target="_blank" rel="noreferrer" className="contact-link flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors">
            <Send size={16} /> Telegram <ArrowUpRight size={13} />
          </a>
          <a href="tel:+998901234567" className="contact-link flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors">
            <Phone size={16} /> +998 90 123 45 67
          </a>
          <a href="mailto:info@softcode.uz" className="contact-link flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors">
            <Mail size={16} /> info@softcode.uz
          </a>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="site-container flex flex-col gap-3 py-5 text-xs text-base-content/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright')}</p>
          <Link to="/buyurtma" className="hover:text-primary transition-colors flex items-center gap-1">
            {t('footer.discussProject')} <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
