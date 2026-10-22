import { useState } from 'react'
import { Bot, Globe, Smartphone } from 'lucide-react'
import { PageIntro, Reveal } from '../components/UI'

const projects = [
  {
    title: 'TechMart — Onlayn do\'kon',
    desc: 'To\'liq funksional e-commerce platforma, to\'lov va yetkazib berish integratsiyasi bilan.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Payme'],
    category: 'Sayt',
    status: 'Haqiqiy',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'EduBot — Ta\'lim boti',
    desc: 'Onlayn kurslar va testlar uchun Telegram bot. Avtomatik tekshirish va sertifikat.',
    tags: ['Python', 'Aiogram', 'PostgreSQL'],
    category: 'Bot',
    status: 'Haqiqiy',
    color: 'from-purple-600 to-pink-500',
  },
  {
    title: 'FoodExpress — Yetkazib berish',
    desc: 'Telegram mini app orqali ovqat buyurtma qilish va real-time kuzatish.',
    tags: ['React', 'Telegram API', 'Node.js'],
    category: 'Mini App',
    status: 'Haqiqiy',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    title: 'MedClinic — Klinika sayti',
    desc: 'Shifokorlarga onlayn yozilish, tibbiy karta va konsultatsiya tizimi.',
    tags: ['Next.js', 'Tailwind', 'Supabase'],
    category: 'Sayt',
    status: 'Demo',
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'ShopAdmin — CRM bot',
    desc: 'Do\'kon egasi uchun buyurtmalar, mijozlar va moliya boshqaruv boti.',
    tags: ['Python', 'Aiogram', 'Redis', 'SQLite'],
    category: 'Bot',
    status: 'Haqiqiy',
    color: 'from-rose-500 to-pink-400',
  },
  {
    title: 'TaskFlow — Mini App',
    desc: 'Jamoa uchun vazifalar boshqaruvi Telegram mini app. Kanban board va deadline.',
    tags: ['React', 'Telegram API', 'Firebase'],
    category: 'Mini App',
    status: 'Demo',
    color: 'from-violet-500 to-indigo-400',
  },
]

const tabs = ['Hammasi', 'Sayt', 'Bot', 'Mini App']

function Projects() {
  const [activeTab, setActiveTab] = useState('Hammasi')

  const filtered = activeTab === 'Hammasi'
    ? projects
    : projects.filter((p) => p.category === activeTab)

  return (
    <div className="page-shell">
      <div className="site-container">
        <PageIntro eyebrow="Portfolio" title="Loyihalarimiz">
          Turli sohalarda amalga oshirilgan loyihalar bilan tanishing
        </PageIntro>

        {/* Filter Tabs */}
        <div className="mb-10 flex justify-center">
          <div role="group" aria-label="Loyihalarni turiga ko‘ra saralash" className="flex max-w-full gap-1 overflow-x-auto rounded-xl border border-white/10 bg-[#101925] p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                aria-pressed={activeTab === tab}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-5 ${activeTab === tab ? 'bg-[#2299e8] text-[#06111c]' : 'text-[#9baabd] hover:text-white'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Reveal key={project.title} className="card card-hover overflow-hidden">
              <figure>
                <div className="project-cover flex h-44 w-full items-center justify-center text-[#2299e8]">
                  {project.category === 'Bot' ? <Bot size={44} strokeWidth={1.5} /> : project.category === 'Mini App' ? <Smartphone size={44} strokeWidth={1.5} /> : <Globe size={44} strokeWidth={1.5} />}
                </div>
              </figure>
              <div className="card-body">
                <div className="flex items-start justify-between">
                  <h3 className="card-title text-lg">{project.title}</h3>
                  <span className={`badge badge-sm ${project.status === 'Haqiqiy' ? 'badge-success' : 'badge-warning'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-base-content/70 text-sm">{project.desc}</p>
                <div className="card-actions mt-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge badge-primary badge-outline badge-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-base-content/50 py-12">Bu kategoriyada loyihalar topilmadi</p>
        )}
      </div>
    </div>
  )
}

export default Projects
