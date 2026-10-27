import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageIntro, Reveal } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'
import {
  Globe, Bot, Layout, BrainCircuit, HeadphonesIcon, CheckCircle2, Clock, DollarSign, Expand, X
} from 'lucide-react'

function Services() {
  const { t, lang } = useLanguage()
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)
  const sourceRef = useRef(null)
  const triggerRef = useRef(null)
  const closingRef = useRef(false)
  const entranceRef = useRef(null)
  const closeLabel = { uz: 'Yopish', ru: 'Закрыть', en: 'Close' }[lang] || 'Yopish'

  useLayoutEffect(() => {
    if (!selected) return
    const dialog = dialogRef.current
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const target = dialog.getBoundingClientRect()
    const source = sourceRef.current
    if (source && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      entranceRef.current = dialog.animate([
        { transform: `translate(${source.left - target.left}px, ${source.top - target.top}px) scale(${source.width / target.width}, ${source.height / target.height})`, opacity: 0.25, borderRadius: '16px', offset: 0 },
        { transform: 'translate(-5px, -8px) scale(1.015)', opacity: 1, borderRadius: '30px', offset: 0.72 },
        { transform: 'translate(0, 0) scale(1)', opacity: 1, borderRadius: '24px', offset: 1 },
      ], { duration: 850, easing: 'cubic-bezier(.22,.75,.18,1)' })
      dialog.querySelectorAll('.card-body > div, .card-body > p, .card-body li').forEach((element, index) => {
        element.animate([
          { opacity: 0, transform: 'translateY(24px)', filter: 'blur(5px)' },
          { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
        ], { duration: 600, delay: 250 + index * 65, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' })
      })
    }
    return () => {
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus({ preventScroll: true })
    }
  }, [selected])

  function openService(service, event) {
    triggerRef.current = event.currentTarget
    sourceRef.current = event.currentTarget.closest('.service-card').getBoundingClientRect()
    setSelected(service)
  }

  async function closeService() {
    if (closingRef.current) return
    closingRef.current = true
    const dialog = dialogRef.current
    const source = triggerRef.current?.closest('.service-card')?.getBoundingClientRect()
    if (source && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const currentTransform = getComputedStyle(dialog).transform
      const currentOpacity = getComputedStyle(dialog).opacity
      entranceRef.current?.cancel()
      const target = dialog.getBoundingClientRect()
      dialog.classList.add('is-closing')
      await dialog.animate([
        { transform: currentTransform, opacity: currentOpacity, offset: 0 },
        { transform: 'translate(0, -12px) scale(1.015)', opacity: 0.9, offset: 0.22 },
        { transform: `translate(${source.left - target.left}px, ${source.top - target.top}px) scale(${source.width / target.width}, ${source.height / target.height})`, opacity: 0 },
      ], { duration: 550, easing: 'cubic-bezier(.65,0,.3,1)', fill: 'forwards' }).finished.catch(() => {})
    }
    dialog.close()
    setSelected(null)
    closingRef.current = false
  }

  const services = [
    {
      icon: <Globe size={40} className="text-primary" />,
      title: t('services.s1Title'),
      desc: t('services.s1Desc'),
      features: [
        t('services.s1f1'),
        t('services.s1f2'),
        t('services.s1f3'),
        t('services.s1f4'),
        t('services.s1f5'),
      ],
      duration: t('services.s1Duration'),
      price: t('services.s1Price'),
    },
    {
      icon: <Bot size={40} className="text-primary" />,
      title: t('services.s2Title'),
      desc: t('services.s2Desc'),
      features: [
        t('services.s2f1'),
        t('services.s2f2'),
        t('services.s2f3'),
        t('services.s2f4'),
        t('services.s2f5'),
      ],
      duration: t('services.s2Duration'),
      price: t('services.s2Price'),
    },
    {
      icon: <Layout size={40} className="text-primary" />,
      title: t('services.s3Title'),
      desc: t('services.s3Desc'),
      features: [
        t('services.s3f1'),
        t('services.s3f2'),
        t('services.s3f3'),
        t('services.s3f4'),
        t('services.s3f5'),
      ],
      duration: t('services.s3Duration'),
      price: t('services.s3Price'),
    },
    {
      icon: <BrainCircuit size={40} className="text-primary" />,
      title: t('services.s4Title'),
      desc: t('services.s4Desc'),
      features: [
        t('services.s4f1'),
        t('services.s4f2'),
        t('services.s4f3'),
        t('services.s4f4'),
        t('services.s4f5'),
      ],
      duration: t('services.s4Duration'),
      price: t('services.s4Price'),
    },
    {
      icon: <HeadphonesIcon size={40} className="text-primary" />,
      title: t('services.s5Title'),
      desc: t('services.s5Desc'),
      features: [
        t('services.s5f1'),
        t('services.s5f2'),
        t('services.s5f3'),
        t('services.s5f4'),
        t('services.s5f5'),
      ],
      duration: t('services.s5Duration'),
      price: t('services.s5Price'),
    },
  ]

  function serviceContent(service, expanded = false) {
    return (
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 [&_svg]:h-7 [&_svg]:w-7">{service.icon}</div>
                  <h2 id={expanded ? "service-dialog-title" : undefined} className="card-title text-2xl">{service.title}</h2>
                </div>
                <p className="text-base-content/70 mb-4">{service.desc}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-success shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-base-content/60">
                    <Clock size={16} className="text-primary" />
                    <span>{t('services.durationLabel')} <strong className="text-base-content">{service.duration} {t('services.durationSuffix')}</strong></span>
                  </div>
                  <div className="flex items-center gap-1 text-base-content/60">
                    <DollarSign size={16} className="text-primary" />
                    <span>{t('services.priceLabel')} <strong className="text-base-content">{service.price} {t('services.priceSuffix')}</strong></span>
                  </div>
                </div>

                <div className="card-actions justify-end relative z-10">
                  <Link to="/buyurtma" className="btn btn-primary">
                    {t('services.orderButton')}
                  </Link>
                </div>
              </div>
    )
  }

  return (
    <div className="page-shell services-page">
      <div className="services-orbs" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <div className="site-container">
        <PageIntro eyebrow={t('services.eyebrow')} title={t('services.title')}>
          {t('services.intro')}
        </PageIntro>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Reveal key={service.title} className="card service-card lg:col-span-2 lg:last:odd:col-start-2">
              <div className="card-body gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 [&_svg]:h-6 [&_svg]:w-6">{service.icon}</div>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                </div>
                <p className="line-clamp-2 text-sm leading-6 text-base-content/70">{service.desc}</p>
                <div className="mt-auto border-t border-base-content/10 pt-4 text-sm font-semibold text-primary">
                  {service.price} {t('services.priceSuffix')}
                </div>
              </div>
              <button type="button" className="service-preview" onClick={(event) => openService(service, event)} aria-label={`${service.title} — ${t('home.moreDetails')}`} aria-haspopup="dialog">
                <span className="service-preview-label"><Expand size={22} aria-hidden="true" /> {t('home.moreDetails')}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {selected && (
        <dialog ref={dialogRef} className="service-dialog" aria-labelledby="service-dialog-title" onCancel={(event) => { event.preventDefault(); closeService() }} onClick={(event) => { if (event.target === event.currentTarget) closeService() }}>
          <div className="service-dialog-content">
            <button type="button" autoFocus className="service-dialog-close" onClick={closeService} aria-label={closeLabel}><X size={22} /></button>
            <div className="service-dialog-art" aria-hidden="true"><span /><span /><span />{selected.icon}</div>
            {serviceContent(selected, true)}
          </div>
        </dialog>
      )}
    </div>
  )
}

export default Services
