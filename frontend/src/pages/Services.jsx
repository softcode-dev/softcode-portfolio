import { Link } from 'react-router-dom'
import { PageIntro, Reveal } from '../components/UI'
import {
  Globe, Bot, Layout, BrainCircuit, HeadphonesIcon, CheckCircle2, Clock, DollarSign
} from 'lucide-react'

const services = [
  {
    icon: <Globe size={40} className="text-primary" />,
    title: 'Veb-saytlar',
    desc: 'Zamonaviy, responsive va tezkor veb-saytlar. Landing page, korporativ sayt, onlayn do\'kon va boshqalar.',
    features: [
      'Responsive dizayn (mobil, planshet, kompyuter)',
      'SEO optimizatsiya',
      'Admin panel integratsiyasi',
      'Tezkor yuklash (performance)',
      'SSL sertifikat va hosting',
    ],
    duration: '1-3 hafta',
    price: "2 000 000 so'm",
  },
  {
    icon: <Bot size={40} className="text-primary" />,
    title: 'Telegram botlar',
    desc: 'Biznesingiz uchun avtomatlashtirilgan Telegram botlar. Buyurtma qabul qilish, CRM, to\'lov tizimi.',
    features: [
      'Inline va reply rejimlar',
      'Admin panel',
      'To\'lov tizimlari integratsiyasi (Click, Payme)',
      'Foydalanuvchi bazasi va statistika',
      'Webhook va polling rejimlar',
    ],
    duration: '1-2 hafta',
    price: "1 500 000 so'm",
  },
  {
    icon: <Layout size={40} className="text-primary" />,
    title: 'Admin panel / CRM',
    desc: 'Biznesingizni boshqarish uchun qulay admin panel va CRM tizimlar. Real-time statistika va hisobotlar.',
    features: [
      'Dashboard va statistika',
      'Foydalanuvchilar boshqaruvi',
      'Buyurtmalar va moliya hisoboti',
      'Rollar va ruxsatlar tizimi',
      'API integratsiya',
    ],
    duration: '2-4 hafta',
    price: "3 000 000 so'm",
  },
  {
    icon: <BrainCircuit size={40} className="text-primary" />,
    title: 'AI integratsiya',
    desc: "Sun'iy intellekt yechimlarini loyihangizga qo'shish. Chatbotlar, matn tahlili, tavsiya tizimlari.",
    features: [
      'OpenAI / GPT integratsiya',
      'Natural Language Processing',
      'Chatbot va virtual assistent',
      'Ma\'lumotlar tahlili va bashorat',
      'Ovozli buyruqlar',
    ],
    duration: '2-6 hafta',
    price: "5 000 000 so'm",
  },
  {
    icon: <HeadphonesIcon size={40} className="text-primary" />,
    title: "Qo'llab-quvvatlash",
    desc: "Loyiha topshirilgandan keyin texnik qo'llab-quvvatlash, yangilanishlar va xatoliklarni tuzatish.",
    features: [
      'Bug fix va xatoliklarni tuzatish',
      'Yangi funksiyalar qo\'shish',
      'Server monitoring',
      'Zaxira nusxa (backup)',
      '24/7 aloqa',
    ],
    duration: 'Kelishiladi',
    price: "500 000 so'm / oy",
  },
]

function Services() {
  return (
    <div className="page-shell">
      <div className="site-container">
        <PageIntro eyebrow="Xizmatlar" title="Xizmatlarimiz">
          Zamonaviy texnologiyalar yordamida biznesingizni raqamlashtiring.
          Har bir loyiha individual yondashuv bilan ishlab chiqiladi.
        </PageIntro>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Reveal key={service.title} className="card card-hover">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2299e8]/10 [&_svg]:h-7 [&_svg]:w-7">{service.icon}</div>
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
                    <span>Muddat: <strong className="text-base-content">{service.duration} dan</strong></span>
                  </div>
                  <div className="flex items-center gap-1 text-base-content/60">
                    <DollarSign size={16} className="text-primary" />
                    <span>Narx: <strong className="text-base-content">{service.price} dan</strong></span>
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <Link to="/buyurtma" className="btn btn-primary">
                    Buyurtma berish
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
