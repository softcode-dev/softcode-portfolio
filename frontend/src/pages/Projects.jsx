import { useState } from 'react'
import { Sparkles } from 'lucide-react'

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
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Loyihalarimiz</h1>
        <p className="text-center text-base-content/60 mb-10 max-w-2xl mx-auto">
          Turli sohalarda amalga oshirilgan loyihalar bilan tanishing
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div role="tablist" className="tabs tabs-boxed bg-base-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                className={`tab ${activeTab === tab ? 'tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={i} className="card bg-base-200 card-hover neon-border">
              <figure>
                <div className={`w-full h-44 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <Sparkles size={48} className="text-white/40" />
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
            </div>
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
