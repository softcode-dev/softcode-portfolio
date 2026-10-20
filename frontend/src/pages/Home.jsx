import { Link } from 'react-router-dom'
import {
  ArrowRight, Globe, Bot, BrainCircuit, Users, Zap, ShieldCheck, HeadphonesIcon,
  MessageSquare, ClipboardList, Code2, Truck, Sparkles, Rocket
} from 'lucide-react'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-[85vh] relative overflow-hidden">
        {/* IT mavzusidagi fon rasmi + qorong'i overlay (matn o'qiladigan bo'lishi uchun) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base-100/85 via-base-100/80 to-base-100" />
        </div>
        <div className="grid-bg absolute inset-0 opacity-20" />
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight gradient-text mb-6">
              Sizning g'oyangiz — bizning kodimiz
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
              Veb-saytlar, Telegram botlar va AI yechimlar — zamonaviy texnologiyalar bilan
              g'oyangizni haqiqatga aylantiramiz
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/buyurtma" className="btn btn-primary btn-lg neon-border">
                <Rocket size={20} /> Buyurtma berish
              </Link>
              <Link to="/loyihalar" className="btn btn-outline btn-lg">
                Loyihalarimiz <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Jamoa */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Bizning jamoa</h2>
          <p className="text-center text-base-content/60 mb-12 max-w-2xl mx-auto">
            Professional va tajribali dasturchilar jamoasi bilan tanishing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'begzod', name: 'Begzod', role: 'Frontend Lead', initials: 'B', color: 'from-blue-500 to-cyan-400', techs: ['React', 'TypeScript', 'Tailwind'] },
              { id: 'sardor', name: 'Sardor', role: 'Backend Developer', initials: 'S', color: 'from-purple-500 to-pink-400', techs: ['Python', 'Node.js', 'PostgreSQL'] },
              { id: 'amir', name: 'Amir', role: 'Frontend Developer', initials: 'A', color: 'from-green-500 to-emerald-400', techs: ['React', 'JavaScript', 'Figma'] },
            ].map((member) => (
              <div key={member.id} className="card bg-base-200 card-hover neon-border">
                <div className="card-body items-center text-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl font-bold text-white mb-4`}>
                    {member.initials}
                  </div>
                  <h3 className="card-title text-xl">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {member.techs.map((tech) => (
                      <span key={tech} className="badge badge-primary badge-outline badge-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/jamoa" className="btn btn-outline btn-primary">
              Butun jamoa <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Preview Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Xizmatlarimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe size={40} className="text-primary" />,
                title: 'Veb-saytlar',
                desc: 'Zamonaviy, tezkor va responsive veb-saytlar yaratamiz. Landing page dan tortib murakkab platformalargacha.',
              },
              {
                icon: <Bot size={40} className="text-primary" />,
                title: 'Telegram botlar',
                desc: 'Biznesingizni avtomatlashtiruvchi, mijozlar bilan aloqani osonlashtiruvchi Telegram botlar.',
              },
              {
                icon: <BrainCircuit size={40} className="text-primary" />,
                title: 'AI integratsiya',
                desc: "Sun'iy intellekt yechimlarini loyihangizga integratsiya qilamiz. Chatbotlar, tahlil va avtomatlashtirish.",
              },
            ].map((service, i) => (
              <div key={i} className="card bg-base-200 card-hover neon-border">
                <div className="card-body items-center text-center">
                  <div className="mb-4 animate-float">{service.icon}</div>
                  <h3 className="card-title text-xl">{service.title}</h3>
                  <p className="text-base-content/70">{service.desc}</p>
                  <div className="card-actions mt-4">
                    <Link to="/xizmatlar" className="btn btn-primary btn-sm btn-outline">
                      Batafsil <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — Steps */}
      <section className="py-16 px-4 bg-base-200/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Qanday ishlaymiz?</h2>
          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            <li className="step step-primary" data-content="1">
              <div className="text-left lg:text-center mt-2 lg:mt-4">
                <div className="font-bold text-lg flex items-center gap-2">
                  <MessageSquare size={20} className="text-primary" /> Murojaat
                </div>
                <p className="text-sm text-base-content/60">Biz bilan bog'laning va g'oyangizni aytib bering</p>
              </div>
            </li>
            <li className="step step-primary" data-content="2">
              <div className="text-left lg:text-center mt-2 lg:mt-4">
                <div className="font-bold text-lg flex items-center gap-2">
                  <ClipboardList size={20} className="text-primary" /> Tahlil
                </div>
                <p className="text-sm text-base-content/60">Loyihani tahlil qilamiz va reja tuzamiz</p>
              </div>
            </li>
            <li className="step step-primary" data-content="3">
              <div className="text-left lg:text-center mt-2 lg:mt-4">
                <div className="font-bold text-lg flex items-center gap-2">
                  <Code2 size={20} className="text-primary" /> Ishlab chiqish
                </div>
                <p className="text-sm text-base-content/60">Professional jamoa loyihani ishlab chiqadi</p>
              </div>
            </li>
            <li className="step step-primary" data-content="4">
              <div className="text-left lg:text-center mt-2 lg:mt-4">
                <div className="font-bold text-lg flex items-center gap-2">
                  <Truck size={20} className="text-primary" /> Topshirish
                </div>
                <p className="text-sm text-base-content/60">Tayyor loyihani topshiramiz va qo'llab-quvvatlaymiz</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Tanlangan loyihalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'E-commerce platforma',
                desc: 'To\'liq funksional onlayn do\'kon, to\'lov tizimi bilan',
                tags: ['React', 'Node.js', 'PostgreSQL'],
                color: 'from-blue-600 to-cyan-500',
              },
              {
                title: 'Telegram CRM bot',
                desc: 'Mijozlar bazasi va buyurtmalarni boshqarish boti',
                tags: ['Python', 'Aiogram', 'Redis'],
                color: 'from-purple-600 to-pink-500',
              },
              {
                title: 'AI Chatbot',
                desc: "Sun'iy intellektga asoslangan mijozlarga xizmat ko'rsatish tizimi",
                tags: ['OpenAI', 'FastAPI', 'React'],
                color: 'from-green-500 to-emerald-400',
              },
            ].map((project, i) => (
              <div key={i} className="card bg-base-200 card-hover neon-border">
                <figure>
                  <div className={`w-full h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <Sparkles size={48} className="text-white/50" />
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="text-base-content/70">{project.desc}</p>
                  <div className="card-actions mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge badge-primary badge-outline badge-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/loyihalar" className="btn btn-outline btn-primary">
              Barcha loyihalar <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-base-200/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Nima uchun biz?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users size={36} className="text-primary" />, title: 'Bir jamoa', desc: 'Professional va hamjihat dasturchilar jamoasi' },
              { icon: <Zap size={36} className="text-primary" />, title: 'Tezkor', desc: 'Qisqa muddatlarda sifatli natija beramiz' },
              { icon: <ShieldCheck size={36} className="text-primary" />, title: 'Sifatli kod', desc: 'Zamonaviy standartlarga mos, toza kod' },
              { icon: <HeadphonesIcon size={36} className="text-primary" />, title: '24/7 yordam', desc: 'Loyiha topshirilgandan keyin ham qo\'llab-quvvatlash' },
            ].map((item, i) => (
              <div key={i} className="card bg-base-200 card-hover neon-border">
                <div className="card-body items-center text-center">
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="card-title text-lg">{item.title}</h3>
                  <p className="text-base-content/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Ko'p so'raladigan savollar</h2>
          <div className="space-y-3">
            {[
              {
                q: 'Loyiha qancha vaqt davom etadi?',
                a: 'Loyihaning murakkabligiga qarab, oddiy veb-sayt 1-2 haftada, murakkab loyihalar 1-2 oyda tayyor bo\'ladi.',
              },
              {
                q: 'To\'lov qanday amalga oshiriladi?',
                a: 'Oldindan 50% to\'lov, qolgan qismi loyiha topshirilgandan keyin. Bosqichma-bosqich to\'lov ham mumkin.',
              },
              {
                q: 'Loyiha topshirilgandan keyin qo\'llab-quvvatlash bormi?',
                a: 'Ha, har bir loyihaga 1 oy bepul texnik qo\'llab-quvvatlash beramiz. Keyin kelishilgan narxda davom ettiramiz.',
              },
              {
                q: 'Qaysi texnologiyalardan foydalanasizlar?',
                a: 'React, Next.js, Node.js, Python, PostgreSQL, MongoDB, Aiogram, OpenAI va boshqa zamonaviy texnologiyalar.',
              },
            ].map((faq, i) => (
              <div key={i} className="collapse collapse-arrow bg-base-200 neon-border">
                <input type="checkbox" aria-label={faq.q} />
                <div className="collapse-title text-lg font-medium flex items-center gap-2">
                  {faq.q}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Loyihangiz bormi?</h2>
          <p className="text-base-content/70 mb-8 text-lg">
            G'oyangizni biz bilan baham ko'ring — bepul konsultatsiya oling!
          </p>
          <Link to="/buyurtma" className="btn btn-primary btn-lg neon-border">
            <Rocket size={22} /> Hoziroq buyurtma bering
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
