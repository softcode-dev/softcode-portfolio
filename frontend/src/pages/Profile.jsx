import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Send, Globe, Code2 } from 'lucide-react'
import { Reveal } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'

const membersData = {
  begzod: {
    name: 'Begzod',
    role: 'Frontend Lead',
    initials: 'B',
    bio: {
      uz: "3 yillik tajribaga ega frontend dasturchi. Zamonaviy veb-texnologiyalar bo'yicha mutaxassis. Jamoa rahbari sifatida loyihalarni boshqaradi va kod sifatini nazorat qiladi.",
      ru: "Frontend-разработчик с 3-летним опытом. Специалист по современным веб-технологиям. Как тимлид руководит проектами и контролирует качество кода.",
      en: "Frontend developer with 3 years of experience. Specialist in modern web technologies. As team lead, oversees projects and code quality.",
    },
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'UI/UX dizayn', level: 80 },
      { name: 'Git / DevOps', level: 75 },
    ],
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Redux', 'Zustand', 'Figma'],
    role_desc: {
      uz: "Jamoa rahbari — frontend arxitektura, kod review, loyihalarni rejalashtirish va mijozlar bilan muloqot.",
      ru: "Тимлид — архитектура frontend, код-ревью, планирование проектов и коммуникация с клиентами.",
      en: "Team Lead — frontend architecture, code review, project planning, and client communication.",
    },
    projects: ['TechMart', 'MedClinic', 'TaskFlow'],
    contacts: {
      telegram: 'https://t.me/begzod_dev',
      github: 'https://github.com/begzod',
      website: 'https://begzod.dev',
    },
  },
  sardor: {
    name: 'Sardor',
    role: 'Backend Developer',
    initials: 'S',
    bio: {
      uz: "Backend dasturchi va DevOps mutaxassisi. Server arxitekturasi, ma'lumotlar bazasi va API ishlab chiqishda kuchli tajribaga ega.",
      ru: "Backend-разработчик и DevOps-специалист. Большой опыт в серверной архитектуре, базах данных и разработке API.",
      en: "Backend developer and DevOps specialist. Strong expertise in server architecture, databases, and API development.",
    },
    skills: [
      { name: 'Python / FastAPI', level: 93 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 90 },
      { name: 'Docker / DevOps', level: 82 },
      { name: 'Telegram Bot API', level: 88 },
    ],
    techs: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'Aiogram'],
    role_desc: {
      uz: "Backend arxitektura, API ishlab chiqish, ma'lumotlar bazasi loyihalash va server infratuzilmasini boshqarish.",
      ru: "Backend-архитектура, разработка API, проектирование баз данных и управление серверной инфраструктурой.",
      en: "Backend architecture, API development, database design, and server infrastructure management.",
    },
    projects: ['EduBot', 'ShopAdmin', 'TechMart'],
    contacts: {
      telegram: 'https://t.me/sardor_dev',
      github: 'https://github.com/sardor',
      website: null,
    },
  },
  amir: {
    name: 'Amir',
    role: 'Frontend Developer',
    initials: 'A',
    bio: {
      uz: "Kreativ frontend dasturchi. Foydalanuvchi interfeyslarini chiroyli va qulay qilish bo'yicha ixtisoslashgan. Dizayn va kod o'rtasida ko'prik.",
      ru: "Креативный frontend-разработчик. Специализируется на создании красивых и удобных пользовательских интерфейсов. Мост между дизайном и кодом.",
      en: "Creative frontend developer. Specializes in building beautiful and intuitive user interfaces. Bridge between design and code.",
    },
    skills: [
      { name: 'React', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Figma / Dizayn', level: 87 },
      { name: 'Telegram Mini Apps', level: 78 },
    ],
    techs: ['React', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'Figma', 'GSAP', 'Framer Motion'],
    role_desc: {
      uz: "UI komponentlar ishlab chiqish, animatsiyalar, responsive dizayn va Telegram Mini App frontend qismi.",
      ru: "Разработка UI-компонентов, анимаций, адаптивного дизайна и frontend для Telegram Mini Apps.",
      en: "UI component development, animations, responsive design, and Telegram Mini App frontend.",
    },
    projects: ['FoodExpress', 'MedClinic', 'TaskFlow'],
    contacts: {
      telegram: 'https://t.me/amir_dev',
      github: 'https://github.com/amir',
      website: null,
    },
  },
}

function Profile() {
  const { id } = useParams()
  const { t, lang } = useLanguage()
  const member = membersData[id]

  if (!member) {
    return (
      <div className="page-shell site-container text-center">
        <h1 className="text-3xl font-bold mb-4">{t('profile.notFound')}</h1>
        <Link to="/jamoa" className="btn btn-primary">
          <ArrowLeft size={18} /> {t('profile.backToTeam')}
        </Link>
      </div>
    )
  }

  const bio = member.bio[lang] || member.bio.uz
  const roleDesc = member.role_desc[lang] || member.role_desc.uz

  return (
    <div className="page-shell">
      <div className="site-container max-w-4xl">
        {/* Back button */}
        <Link to="/jamoa" className="btn btn-ghost btn-sm mb-8 gap-2">
          <ArrowLeft size={18} /> {t('profile.backToTeam')}
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="avatar-mark flex h-32 w-32 shrink-0 items-center justify-center rounded-full text-5xl font-bold">
            {member.initials}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">{member.name}</h1>
            <p className="text-primary text-xl font-medium mt-1">{member.role}</p>
          </div>
        </div>

        {/* Bio */}
        <Reveal className="card mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary">{t('profile.bio')}</h2>
            <p className="text-base-content/80 leading-relaxed">{bio}</p>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal className="card mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">{t('profile.skills')}</h2>
            <div className="space-y-4">
              {member.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value={skill.level} max="100" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Technologies */}
        <Reveal className="card mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">{t('profile.technologies')}</h2>
            <div className="flex flex-wrap gap-2">
              {member.techs.map((tech) => (
                <span key={tech} className="badge badge-primary badge-lg">{tech}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Role */}
        <Reveal className="card mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary">{t('profile.teamRole')}</h2>
            <p className="text-base-content/80 leading-relaxed">{roleDesc}</p>
          </div>
        </Reveal>

        {/* Projects */}
        <Reveal className="card mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">{t('profile.projects')}</h2>
            <ul className="space-y-2">
              {member.projects.map((project, i) => (
                <li key={i} className="flex items-center gap-2 text-base-content/80">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Contact Links */}
        <Reveal className="card">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">{t('profile.contact')}</h2>
            <div className="flex flex-wrap gap-3">
              {member.contacts.telegram && (
                <a href={member.contacts.telegram} target="_blank" rel="noreferrer" className="btn btn-outline btn-primary btn-sm">
                  <Send size={16} /> Telegram
                </a>
              )}
              {member.contacts.github && (
                <a href={member.contacts.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                  <Code2 size={16} /> GitHub
                </a>
              )}
              {member.contacts.website && (
                <a href={member.contacts.website} target="_blank" rel="noreferrer" className="btn btn-outline btn-primary btn-sm">
                  <Globe size={16} /> {t('profile.website')}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Profile
