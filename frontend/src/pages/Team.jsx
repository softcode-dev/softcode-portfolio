import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const members = [
  {
    id: 'begzod',
    name: 'Begzod',
    role: 'Frontend Lead',
    initials: 'B',
    color: 'from-blue-500 to-cyan-400',
    techs: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
  },
  {
    id: 'sardor',
    name: 'Sardor',
    role: 'Backend Developer',
    initials: 'S',
    color: 'from-purple-500 to-pink-400',
    techs: ['Python', 'Node.js', 'PostgreSQL', 'FastAPI'],
  },
  {
    id: 'amir',
    name: 'Amir',
    role: 'Frontend Developer',
    initials: 'A',
    color: 'from-green-500 to-emerald-400',
    techs: ['React', 'JavaScript', 'Tailwind', 'Figma'],
  },
]

function Team() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Bizning jamoa</h1>
        <p className="text-center text-base-content/60 mb-12 max-w-2xl mx-auto">
          Professional va tajribali dasturchilar jamoasi bilan tanishing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="card bg-base-200 card-hover neon-border">
              <div className="card-body items-center text-center">
                {/* Avatar placeholder */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl font-bold text-white mb-4`}>
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
                    Profilni ko'rish <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
