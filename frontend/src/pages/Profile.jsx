import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Send, Globe, Code2 } from 'lucide-react'

const membersData = {
  begzod: {
    name: 'Begzod',
    role: 'Frontend Lead',
    initials: 'B',
    color: 'from-blue-500 to-cyan-400',
    bio: "3 yillik tajribaga ega frontend dasturchi. Zamonaviy veb-texnologiyalar bo'yicha mutaxassis. Jamoa rahbari sifatida loyihalarni boshqaradi va kod sifatini nazorat qiladi.",
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'UI/UX dizayn', level: 80 },
      { name: 'Git / DevOps', level: 75 },
    ],
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Redux', 'Zustand', 'Figma'],
    role_desc: "Jamoa rahbari — frontend arxitektura, kod review, loyihalarni rejalashtirish va mijozlar bilan muloqot.",
    projects: ['TechMart — Onlayn do\'kon', 'MedClinic — Klinika sayti', 'TaskFlow — Mini App'],
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
    color: 'from-purple-500 to-pink-400',
    bio: "Backend dasturchi va DevOps mutaxassisi. Server arxitekturasi, ma'lumotlar bazasi va API ishlab chiqishda kuchli tajribaga ega.",
    skills: [
      { name: 'Python / FastAPI', level: 93 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 90 },
      { name: 'Docker / DevOps', level: 82 },
      { name: 'Telegram Bot API', level: 88 },
    ],
    techs: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'Aiogram'],
    role_desc: "Backend arxitektura, API ishlab chiqish, ma'lumotlar bazasi loyihalash va server infratuzilmasini boshqarish.",
    projects: ['EduBot — Ta\'lim boti', 'ShopAdmin — CRM bot', 'TechMart — Backend API'],
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
    color: 'from-green-500 to-emerald-400',
    bio: "Kreativ frontend dasturchi. Foydalanuvchi interfeyslarini chiroyli va qulay qilish bo'yicha ixtisoslashgan. Dizayn va kod o'rtasida ko'prik.",
    skills: [
      { name: 'React', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Figma / Dizayn', level: 87 },
      { name: 'Telegram Mini Apps', level: 78 },
    ],
    techs: ['React', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'Figma', 'GSAP', 'Framer Motion'],
    role_desc: "UI komponentlar ishlab chiqish, animatsiyalar, responsive dizayn va Telegram Mini App frontend qismi.",
    projects: ['FoodExpress — Mini App', 'MedClinic — Frontend', 'TaskFlow — UI dizayn'],
    contacts: {
      telegram: 'https://t.me/amir_dev',
      github: 'https://github.com/amir',
      website: null,
    },
  },
}

function Profile() {
  const { id } = useParams()
  const member = membersData[id]

  if (!member) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Profil topilmadi</h1>
        <Link to="/jamoa" className="btn btn-primary">
          <ArrowLeft size={18} /> Jamoaga qaytish
        </Link>
      </div>
    )
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link to="/jamoa" className="btn btn-ghost btn-sm mb-8">
          <ArrowLeft size={18} /> Jamoaga qaytish
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-5xl font-bold text-white shrink-0`}>
            {member.initials}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">{member.name}</h1>
            <p className="text-primary text-xl font-medium mt-1">{member.role}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="card bg-base-200 neon-border mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary">Bio</h2>
            <p className="text-base-content/80">{member.bio}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="card bg-base-200 neon-border mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">Ko'nikmalar</h2>
            <div className="space-y-4">
              {member.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value={skill.level} max="100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="card bg-base-200 neon-border mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">Texnologiyalar</h2>
            <div className="flex flex-wrap gap-2">
              {member.techs.map((tech) => (
                <span key={tech} className="badge badge-primary badge-lg">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="card bg-base-200 neon-border mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary">Jamoadagi vazifasi</h2>
            <p className="text-base-content/80">{member.role_desc}</p>
          </div>
        </div>

        {/* Projects */}
        <div className="card bg-base-200 neon-border mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">Loyihalari</h2>
            <ul className="space-y-2">
              {member.projects.map((project, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Links */}
        <div className="card bg-base-200 neon-border">
          <div className="card-body">
            <h2 className="card-title text-primary mb-4">Aloqa</h2>
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
                <a href={member.contacts.website} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                  <Globe size={16} /> Veb-sayt
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
