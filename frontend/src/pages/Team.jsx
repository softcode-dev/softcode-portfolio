import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageIntro, Reveal } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'

const members = [
  {
    id: 'begzod',
    name: 'Begzod',
    role: 'Frontend Lead',
    initials: 'B',
    techs: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
  },
  {
    id: 'sardor',
    name: 'Sardor',
    role: 'Backend Developer',
    initials: 'S',
    techs: ['Python', 'Node.js', 'PostgreSQL', 'FastAPI'],
  },
  {
    id: 'amir',
    name: 'Amir',
    role: 'Frontend Developer',
    initials: 'A',
    techs: ['React', 'JavaScript', 'Tailwind', 'Figma'],
  },
]

function Team() {
  const { t } = useLanguage()

  return (
    <div className="page-shell team-page">
      <div className="site-container max-w-5xl">
        <PageIntro eyebrow={t('team.eyebrow')} title={t('team.title')}>
          {t('team.intro')}
        </PageIntro>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <Reveal key={member.id} className="card card-hover">
              <div className="card-body items-center text-center">
                {/* Avatar placeholder */}
                <div className="avatar-mark mb-4 flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold">
                  {member.initials}
                </div>
                <h2 className="card-title text-xl">{member.name}</h2>
                <p className="text-primary font-medium">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {member.techs.map((tech) => (
                    <span key={tech} className="badge badge-primary badge-outline badge-sm">{tech}</span>
                  ))}
                </div>
                <div className="card-actions mt-4">
                  <Link to={`/profil/${member.id}`} className="btn btn-primary btn-sm btn-outline">
                    {t('team.viewProfile')} <ArrowRight size={16} />
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

export default Team
