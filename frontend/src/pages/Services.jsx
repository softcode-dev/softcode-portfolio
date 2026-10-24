import { Link } from 'react-router-dom'
import { PageIntro, Reveal } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'
import {
  Globe, Bot, Layout, BrainCircuit, HeadphonesIcon, CheckCircle2, Clock, DollarSign
} from 'lucide-react'

function Services() {
  const { t } = useLanguage()

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

  return (
    <div className="page-shell">
      <div className="site-container">
        <PageIntro eyebrow={t('services.eyebrow')} title={t('services.title')}>
          {t('services.intro')}
        </PageIntro>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Reveal key={service.title} className="card card-hover">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 [&_svg]:h-7 [&_svg]:w-7">{service.icon}</div>
                  <h2 className="card-title text-2xl">{service.title}</h2>
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

                <div className="card-actions justify-end">
                  <Link to="/buyurtma" className="btn btn-primary">
                    {t('services.orderButton')}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
