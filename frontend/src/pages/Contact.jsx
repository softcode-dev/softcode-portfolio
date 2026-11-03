import { useState } from 'react'
import {
  Send,
  Phone,
  PhoneCall,
  Mail,
  Camera,
  Clock,
  DollarSign,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  MapPin,
  FileText,
  MessageSquare,
  Layers,
  Rocket,
} from 'lucide-react'
import { PageIntro, Reveal } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'

function Contact() {
  const { t } = useLanguage()
  const [copiedKey, setCopiedKey] = useState('')

  const handleCopy = (key, text) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => {
        setCopiedKey('')
      }, 2000)
    }
  }

  const contactList = [
    {
      key: 'telegram',
      icon: <Send size={22} />,
      title: t('contact.telegram'),
      desc: t('contact.telegramDesc'),
      value: '@softcode_dev',
      rawCopy: '@softcode_dev',
      href: 'https://t.me/softcode_dev',
      external: true,
      featured: true,
    },
    {
      key: 'phone',
      icon: <Phone size={22} />,
      title: t('contact.phone'),
      desc: t('contact.phoneDesc'),
      value: '+998 93 384 93 50',
      rawCopy: '+998933849350',
      href: 'tel:+998933849350',
      external: false,
    },
    {
      key: 'email',
      icon: <Mail size={22} />,
      title: t('contact.email'),
      desc: t('contact.emailDesc'),
      value: 'info@softcode.uz',
      rawCopy: 'info@softcode.uz',
      href: 'mailto:info@softcode.uz',
      external: false,
    },
    {
      key: 'instagram',
      icon: <Camera size={22} />,
      title: t('contact.instagram'),
      desc: t('contact.instagramDesc'),
      value: '@softcode_dev',
      rawCopy: 'https://instagram.com/softcode_dev',
      href: 'https://instagram.com/softcode_dev',
      external: true,
    },
  ]

  const processSteps = [
    {
      num: '01',
      icon: <MessageSquare size={22} className="text-primary" />,
      title: t('contact.step1Title'),
      desc: t('contact.step1Desc'),
    },
    {
      num: '02',
      icon: <Layers size={22} className="text-secondary" />,
      title: t('contact.step2Title'),
      desc: t('contact.step2Desc'),
    },
    {
      num: '03',
      icon: <Rocket size={22} className="text-accent" />,
      title: t('contact.step3Title'),
      desc: t('contact.step3Desc'),
    },
  ]

  return (
    <div className="page-shell contact-page">
      <div className="contact-orbits" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="site-container">
        <PageIntro eyebrow={t('contact.eyebrow')} title={t('contact.title')}>
          {t('contact.intro')}
        </PageIntro>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          {/* Chap ustun: Aloqa kanallari va ish tartibi */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-2xl font-bold tracking-tight">{t('contact.contactInfo')}</h2>
              {/* Online indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{t('contact.onlineStatus')}</span>
              </div>
            </div>

            <p className="text-xs text-base-content/60 -mt-2">
              {t('contact.responseTime')}
            </p>

            {/* Aloqa kartalari ro'yxati */}
            <div className="space-y-3.5">
              {contactList.map((c) => {
                const isCopied = copiedKey === c.key
                return (
                  <div
                    key={c.key}
                    className={`contact-card group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                      c.featured
                        ? 'contact-card-featured border-primary/40 bg-gradient-to-br from-primary/15 via-base-200 to-base-100 shadow-lg shadow-primary/5'
                        : 'border-base-300/80 bg-base-200/50 hover:bg-base-200 hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <a
                        href={c.href}
                        {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className="flex items-start gap-3.5 min-w-0 flex-1 focus:outline-none"
                      >
                        <div
                          className={`p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                            c.featured
                              ? 'bg-primary text-primary-content shadow-md shadow-primary/20'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {c.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
                              {c.title}
                            </span>
                            <ArrowUpRight
                              size={15}
                              className="text-base-content/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                            />
                          </div>
                          <p className="font-bold text-base sm:text-lg truncate mt-0.5 group-hover:text-primary transition-colors">
                            {c.value}
                          </p>
                          <p className="text-xs text-base-content/65 line-clamp-1 mt-0.5">
                            {c.desc}
                          </p>
                        </div>
                      </a>

                      {/* Nusxa olish tugmasi */}
                      <button
                        type="button"
                        onClick={() => handleCopy(c.key, c.rawCopy)}
                        className={`btn btn-ghost btn-xs btn-square shrink-0 rounded-lg transition-colors ${
                          isCopied ? 'text-success bg-success/10' : 'text-base-content/40 hover:text-primary hover:bg-primary/10'
                        }`}
                        title={isCopied ? t('contact.copiedBadge') : t('contact.copyBadge')}
                        aria-label={t('contact.copyBadge')}
                      >
                        {isCopied ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Ish tartibi va lokatsiya */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl border border-base-300/80 bg-base-200/40">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  <Clock size={16} />
                  <span>{t('contact.workingHoursTitle')}</span>
                </div>
                <p className="font-semibold text-sm">{t('contact.workingHoursDays')}</p>
                <p className="text-base font-bold text-primary">{t('contact.workingHoursTime')}</p>
                <p className="text-xs text-base-content/60 mt-1">{t('contact.workingHoursNote')}</p>
              </div>

              <div className="p-4 rounded-2xl border border-base-300/80 bg-base-200/40">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin size={16} />
                  <span>{t('contact.locationTitle')}</span>
                </div>
                <p className="font-semibold text-sm">{t('contact.locationValue')}</p>
                <p className="text-xs text-base-content/60 mt-1">{t('contact.locationNote')}</p>
              </div>
            </div>
          </div>

          {/* O'ng ustun: Xabar formasi o'rnidagi zamonaviy shablon va dizayn showcase */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Asosiy Hero Action Card (Direct Connect Showcase) */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-base-200/90 to-base-100 p-6 sm:p-8 shadow-xl shadow-primary/5">
              {/* Orqa fon bezak doiralari */}
              <div className="absolute -right-16 -top-16 w-52 h-52 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-52 h-52 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20 mb-4">
                  <Sparkles size={14} />
                  <span>Softcode Fast Connect</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                  {t('contact.directConnectTitle')}
                </h3>

                <p className="text-base-content/75 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  {t('contact.directConnectSubtitle')}
                </p>

                {/* To'g'ridan-to'g'ri aloqa tugmalari */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://t.me/softcode_dev"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary shadow-lg shadow-primary/25 hover:shadow-primary/40 gap-2 font-bold px-6 text-white"
                  >
                    <Send size={18} />
                    <span>{t('contact.openTelegram')}</span>
                  </a>

                  <a
                    href="tel:+998933849350"
                    className="btn btn-outline border-base-content/20 hover:border-primary hover:bg-primary/10 gap-2 font-semibold px-6"
                  >
                    <PhoneCall size={18} className="text-primary" />
                    <span>{t('contact.callNow')}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Jarayon shabloni: Bog'langandan so'ng nimalar bo'ladi? */}
            <div className="rounded-3xl border border-base-300/80 bg-base-200/40 p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  {t('contact.processTitle')}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {processSteps.map((step) => (
                  <div
                    key={step.num}
                    className="relative p-4 rounded-2xl border border-base-300/60 bg-base-100/70 hover:bg-base-100 transition-all duration-300 group hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-base-200 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      <span className="text-2xl font-black text-base-content/15 group-hover:text-primary/30 transition-colors">
                        {step.num}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-base-content/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Loyiha topshirig'i / Buyurtma berishga yo'naltiruvchi shablon kartasi */}
            <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-primary/15 text-primary shrink-0 mt-0.5">
                  <FileText size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">
                    {t('contact.orderCardTitle')}
                  </h4>
                  <p className="text-xs sm:text-sm text-base-content/70 mt-0.5 max-w-md">
                    {t('contact.orderCardDesc')}
                  </p>
                </div>
              </div>

              <a
                href="https://t.me/softcode_dev"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm sm:btn-md shrink-0 gap-1.5 self-stretch sm:self-auto shadow-md shadow-primary/20 text-white"
              >
                <span>{t('contact.openTelegram')}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Hamkorlik shartlari */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 gradient-text">
            {t('contact.partnershipTitle')}
          </h2>
          <div className="contact-partnership grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <DollarSign size={32} className="text-primary" />,
                title: t('contact.partner1Title'),
                desc: t('contact.partner1Desc'),
              },
              {
                icon: <Clock size={32} className="text-primary" />,
                title: t('contact.partner2Title'),
                desc: t('contact.partner2Desc'),
              },
              {
                icon: <ShieldCheck size={32} className="text-primary" />,
                title: t('contact.partner3Title'),
                desc: t('contact.partner3Desc'),
              },
            ].map((item) => (
              <Reveal key={item.title} className="card card-hover">
                <div className="card-body flex-row items-start gap-4">
                  <div className="contact-partner-icon shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="card-title text-base mb-1.5">{item.title}</h3>
                    <p className="text-base-content/70 text-sm leading-6">{item.desc}</p>
                  </div>
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
