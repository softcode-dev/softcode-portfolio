import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/UI'
import {
  ArrowRight, Globe, Bot, BrainCircuit, Users, Zap, ShieldCheck, HeadphonesIcon,
  MessageSquare, ClipboardList, Code2, Truck, Rocket, LayoutDashboard, Layers3
} from 'lucide-react'

function Home() {
  const heroRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 1024) return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!heroRef.current || !imageRef.current) return
        const distance = Math.max(0, Math.min(window.scrollY, heroRef.current.offsetHeight))
        imageRef.current.style.transform = `translate3d(0, ${distance * 0.08}px, 0) scale(1.04)`
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update) }
  }, [])

  return (
    <div>
      {/* Main visual */}
      <section ref={heroRef} className="home-hero relative isolate overflow-hidden text-white">
        <div ref={imageRef} className="home-hero-image absolute inset-0" aria-hidden="true" />
        <div className="home-hero-shade absolute inset-0" aria-hidden="true" />

        <div className="home-hero-inner relative z-10 mx-auto flex w-full max-w-[1680px] flex-col px-6 pb-8 pt-36 sm:px-10 lg:px-[7.3%] lg:pb-12 lg:pt-[clamp(180px,21vh,240px)]">
          <div className="max-w-[740px]">
            <p className="home-eyebrow mb-7 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-950/20 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-sky-100/75 sm:text-xs">
              Develop <span className="px-3 text-sky-400">•</span> Automate <span className="px-3 text-sky-400">•</span> Grow
            </p>
            <h1 className="home-title mb-6 max-w-[760px] text-[clamp(3.1rem,5.4vw,5.7rem)] font-extrabold leading-[0.99] tracking-[-0.045em]">
              Ideas into Real<br />
              <span className="text-sky-400">Digital</span> Solutions
            </h1>
            <p className="hero-copy mb-8 max-w-[590px] text-base leading-relaxed text-slate-200/85 sm:text-lg lg:text-[21px]">
              We build modern websites, Telegram bots, AI solutions and admin panels that help businesses grow faster and work smarter.
            </p>
            <div className="hero-actions flex flex-wrap gap-4">
              <Link to="/buyurtma" className="home-cta-primary inline-flex min-h-14 items-center gap-4 rounded-full bg-white px-8 font-semibold text-slate-950 transition-transform hover:-translate-y-1">
                Start a Project <ArrowRight size={19} aria-hidden="true" />
              </Link>
              <Link to="/xizmatlar" className="home-cta-secondary inline-flex min-h-14 items-center gap-3 rounded-full border border-white/45 bg-slate-950/25 px-8 font-medium text-white backdrop-blur-sm transition-colors hover:border-sky-400 hover:bg-sky-500/10">
                <Layers3 size={19} aria-hidden="true" /> Our Services
              </Link>
            </div>
          </div>

          <div className="home-services mt-11 grid max-w-[760px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-0 lg:mt-10">
            {[
              { icon: Globe, label: <>Web<br />Development</> },
              { icon: BrainCircuit, label: <>AI<br />Solutions</> },
              { icon: Bot, label: <>Telegram<br />Bots</> },
              { icon: LayoutDashboard, label: <>Admin<br />Panels</> },
            ].map(({ icon: Icon, label }) => (
              <div key={Icon.displayName || Icon.name} className="flex items-center gap-3 sm:border-r sm:border-sky-200/15 sm:pl-5 first:pl-0 last:border-r-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 shadow-[inset_0_0_16px_rgba(14,165,233,0.1)]">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug text-slate-200">{label}</span>
              </div>
            ))}
          </div>

          <div className="home-facts mt-12 grid w-full grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-[#101925]/70 p-4 backdrop-blur-md sm:p-6 lg:mt-auto lg:grid-cols-4 lg:p-7">
            {[
              { icon: MessageSquare, value: '01', label: 'Murojaat', detail: 'G‘oyangizni ayting' },
              { icon: ClipboardList, value: '02', label: 'Tahlil', detail: 'Reja tuzamiz' },
              { icon: Code2, value: '03', label: 'Ishlab chiqish', detail: 'Loyihani yaratamiz' },
              { icon: Truck, value: '04', label: 'Topshirish', detail: 'Natijani taqdim etamiz' },
            ].map(({ icon: Icon, value, label, detail }) => (
              <div key={label} className="flex items-center gap-4 border-sky-200/10 px-2 py-4 first:pl-2 odd:border-r lg:border-r lg:px-5 lg:py-1 last:border-r-0">
                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300 sm:flex">
                  <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl font-semibold leading-none text-white sm:text-3xl">{value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-100">{label}</p>
                  <p className="mt-1 hidden text-xs text-slate-400 sm:block">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <Reveal key={member.id} className="card card-hover">
                <div className="card-body items-center text-center">
                  <div className="avatar-mark mb-4 flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold">
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
              </Reveal>
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
            ].map((service) => (
              <Reveal key={service.title} className="card card-hover">
                <div className="card-body items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2299e8]/10 [&_svg]:h-7 [&_svg]:w-7">{service.icon}</div>
                  <h3 className="card-title text-xl">{service.title}</h3>
                  <p className="text-base-content/70">{service.desc}</p>
                  <div className="card-actions mt-4">
                    <Link to="/xizmatlar" className="btn btn-primary btn-sm btn-outline">
                      Batafsil <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
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
            ].map((project) => (
              <Reveal key={project.title} className="card card-hover overflow-hidden">
                <figure>
                  <div className="project-cover flex h-48 w-full items-center justify-center">
                    <Code2 size={44} strokeWidth={1.5} className="text-[#2299e8]" />
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
              </Reveal>
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
            ].map((item) => (
              <Reveal key={item.title} className="card card-hover">
                <div className="card-body items-center text-center">
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="card-title text-lg">{item.title}</h3>
                  <p className="text-base-content/70 text-sm">{item.desc}</p>
                </div>
              </Reveal>
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
