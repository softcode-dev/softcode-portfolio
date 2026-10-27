import { useState } from 'react'
import { Bot, Globe, Smartphone } from 'lucide-react'
import { PageIntro, Reveal } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'

function Projects() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      id: 1,
      title: t('projects.p1Title'),
      desc: t('projects.p1Desc'),
      tags: ['React', 'Node.js', 'PostgreSQL', 'Payme'],
      category: 'site',
      status: 'real',
    },
    {
      id: 2,
      title: t('projects.p2Title'),
      desc: t('projects.p2Desc'),
      tags: ['Python', 'Aiogram', 'PostgreSQL'],
      category: 'bot',
      status: 'real',
    },
    {
      id: 3,
      title: t('projects.p3Title'),
      desc: t('projects.p3Desc'),
      tags: ['React', 'Telegram API', 'Node.js'],
      category: 'mini_app',
      status: 'real',
    },
    {
      id: 4,
      title: t('projects.p4Title'),
      desc: t('projects.p4Desc'),
      tags: ['Next.js', 'Tailwind', 'Supabase'],
      category: 'site',
      status: 'demo',
    },
    {
      id: 5,
      title: t('projects.p5Title'),
      desc: t('projects.p5Desc'),
      tags: ['Python', 'Aiogram', 'Redis', 'SQLite'],
      category: 'bot',
      status: 'real',
    },
    {
      id: 6,
      title: t('projects.p6Title'),
      desc: t('projects.p6Desc'),
      tags: ['React', 'Telegram API', 'Firebase'],
      category: 'mini_app',
      status: 'demo',
    },
  ]

  const tabs = [
    { id: 'all', label: t('projects.tabAll') },
    { id: 'site', label: t('projects.tabSite') },
    { id: 'bot', label: t('projects.tabBot') },
    { id: 'mini_app', label: t('projects.tabMiniApp') },
  ]

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab)

  return (
    <div className="page-shell projects-page">
      <div className="site-container">
        <PageIntro eyebrow={t('projects.eyebrow')} title={t('projects.title')}>
          {t('projects.intro')}
        </PageIntro>

        {/* Filter Tabs */}
        <div className="mb-10 flex justify-center">
          <div role="group" aria-label={t('projects.filterAriaLabel')} className="flex max-w-full gap-1 overflow-x-auto rounded-xl border border-base-300 bg-base-200/60 p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeTab === tab.id}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-5 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-base-content/70 hover:text-base-content'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Reveal key={project.id} className="card card-hover overflow-hidden">
              <figure>
                <div className="project-cover flex h-44 w-full items-center justify-center text-primary">
                  {project.category === 'bot' ? (
                    <Bot size={44} strokeWidth={1.5} />
                  ) : project.category === 'mini_app' ? (
                    <Smartphone size={44} strokeWidth={1.5} />
                  ) : (
                    <Globe size={44} strokeWidth={1.5} />
                  )}
                </div>
              </figure>
              <div className="card-body">
                <div className="flex items-start justify-between">
                  <h3 className="card-title text-lg">{project.title}</h3>
                  <span className={`badge badge-sm ${project.status === 'real' ? 'badge-success' : 'badge-warning'}`}>
                    {project.status === 'real' ? t('projects.statusReal') : t('projects.statusDemo')}
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
          <p className="text-center text-base-content/50 py-12">{t('projects.noProjects')}</p>
        )}
      </div>
    </div>
  )
}

export default Projects
