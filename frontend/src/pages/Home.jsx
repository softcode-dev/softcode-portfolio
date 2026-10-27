import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/UI'
import { useLanguage } from '../i18n/LanguageContext'
import {
  ArrowRight, Globe, Bot, BrainCircuit, Users, Zap, ShieldCheck, HeadphonesIcon,
  MessageSquare, ClipboardList, Code2, Truck, Rocket, LayoutDashboard, Layers3
} from 'lucide-react'

function Home() {
  const { t } = useLanguage()
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
    <div className="home-page">
      {/* Main visual */}
      <section ref={heroRef} className="home-hero relative isolate overflow-hidden">
        <div ref={imageRef} className="home-hero-image absolute inset-0" aria-hidden="true" />
        <div className="home-hero-shade absolute inset-0" aria-hidden="true" />

        <div className="home-hero-inner relative z-10 mx-auto flex w-full max-w-[1680px] flex-col px-6 pb-8 pt-36 sm:px-10 lg:px-[7.3%] lg:pb-12 lg:pt-[clamp(180px,21vh,240px)]">
          <div className="max-w-[740px]">
            <p className="home-eyebrow mb-7 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-950/20 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-sky-100/75 sm:text-xs">
              {t('home.heroTagline')}
            </p>
            <h1 className="home-title mb-6 max-w-[760px] text-[clamp(3.1rem,5.4vw,5.7rem)] font-extrabold leading-[0.99] tracking-[-0.045em]">
              {t('home.heroTitle1')}<br />
              <span className="text-sky-400">{t('home.heroTitle2')}</span> {t('home.heroTitle3')}
            </h1>
            <p className="hero-copy mb-8 max-w-[590px] text-base leading-relaxed text-slate-200/85 sm:text-lg lg:text-[21px]">
              {t('home.heroCopy')}
            </p>
            <div className="hero-actions flex flex-wrap gap-4">
              <Link to="/buyurtma" className="home-cta-primary inline-flex min-h-14 items-center gap-4 rounded-full bg-white px-8 font-semibold text-slate-950">
                {t('home.ctaStart')} <ArrowRight size={19} aria-hidden="true" />
              </Link>
              <Link to="/xizmatlar" className="home-cta-secondary inline-flex min-h-14 items-center gap-3 rounded-full border border-white/45 bg-slate-950/25 px-8 font-medium text-white backdrop-blur-sm">
                <Layers3 size={19} aria-hidden="true" /> {t('home.ctaServices')}
              </Link>
            </div>
          </div>

          <div className="home-services mt-11 grid max-w-[760px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-0 lg:mt-10">
            {[
              { icon: Globe, label: <>{t('home.serviceWeb')}<br />{t('home.serviceWebLine2')}</> },
              { icon: BrainCircuit, label: <>{t('home.serviceAI')}<br />{t('home.serviceAILine2')}</> },
              { icon: Bot, label: <>{t('home.serviceBot')}<br />{t('home.serviceBotLine2')}</> },
              { icon: LayoutDashboard, label: <>{t('home.serviceAdmin')}<br />{t('home.serviceAdminLine2')}</> },
            ].map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:border-r sm:border-sky-200/15 sm:pl-5 first:pl-0 last:border-r-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 shadow-[inset_0_0_16px_rgba(14,165,233,0.1)]">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug text-slate-200">{label}</span>
              </div>
            ))}
          </div>

          <div className="home-facts mt-16 sm:mt-20 lg:mt-24 grid w-full grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-[#101925]/70 p-4 backdrop-blur-md sm:p-6 lg:grid-cols-4 lg:p-7">
            {[
              { icon: MessageSquare, value: t('home.step1Value'), label: t('home.step1Label'), detail: t('home.step1Detail') },
              { icon: ClipboardList, value: t('home.step2Value'), label: t('home.step2Label'), detail: t('home.step2Detail') },
              { icon: Code2, value: t('home.step3Value'), label: t('home.step3Label'), detail: t('home.step3Detail') },
              { icon: Truck, value: t('home.step4Value'), label: t('home.step4Label'), detail: t('home.step4Detail') },
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
      <section className="home-team py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">{t('home.teamTitle')}</h2>
          <p className="text-center text-base-content/60 mb-12 max-w-2xl mx-auto">
            {t('home.teamSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'begzod', name: 'Begzod', role: t('home.roleLead'), initials: 'B', techs: ['React', 'TypeScript', 'Tailwind'] },
              { id: 'sardor', name: 'Sardor', role: t('home.roleBackend'), initials: 'S', techs: ['Python', 'Node.js', 'PostgreSQL'] },
              { id: 'amir', name: 'Amir', role: t('home.roleFrontend'), initials: 'A', techs: ['React', 'JavaScript', 'Figma'] },
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
              {t('home.fullTeam')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Preview Cards */}
      <section className="home-service-preview py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">{t('home.servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe size={40} className="text-primary" />,
                title: t('home.serviceWebTitle'),
                desc: t('home.serviceWebDesc'),
              },
              {
                icon: <Bot size={40} className="text-primary" />,
                title: t('home.serviceBotTitle'),
                desc: t('home.serviceBotDesc'),
              },
              {
                icon: <BrainCircuit size={40} className="text-primary" />,
                title: t('home.serviceAITitle'),
                desc: t('home.serviceAIDesc'),
              },
            ].map((service) => (
              <Reveal key={service.title} className="card card-hover">
                <div className="card-body items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 [&_svg]:h-7 [&_svg]:w-7">{service.icon}</div>
                  <h3 className="card-title text-xl">{service.title}</h3>
                  <p className="text-base-content/70">{service.desc}</p>
                  <div className="card-actions mt-4">
                    <Link to="/xizmatlar" className="btn btn-primary btn-sm btn-outline">
                      {t('home.moreDetails')} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="home-projects py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">{t('home.featuredProjects')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: t('home.project1Title'),
                desc: t('home.project1Desc'),
                tags: ['React', 'Node.js', 'PostgreSQL'],
              },
              {
                title: t('home.project2Title'),
                desc: t('home.project2Desc'),
                tags: ['Python', 'Aiogram', 'Redis'],
              },
              {
                title: t('home.project3Title'),
                desc: t('home.project3Desc'),
                tags: ['OpenAI', 'FastAPI', 'React'],
              },
            ].map((project) => (
              <Reveal key={project.title} className="card card-hover overflow-hidden">
                <figure>
                  <div className="project-cover flex h-48 w-full items-center justify-center">
                    <Code2 size={44} strokeWidth={1.5} className="text-primary" />
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
              {t('home.allProjects')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="home-benefits py-16 px-4 bg-base-200/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">{t('home.whyUs')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users size={36} className="text-primary" />, title: t('home.why1Title'), desc: t('home.why1Desc') },
              { icon: <Zap size={36} className="text-primary" />, title: t('home.why2Title'), desc: t('home.why2Desc') },
              { icon: <ShieldCheck size={36} className="text-primary" />, title: t('home.why3Title'), desc: t('home.why3Desc') },
              { icon: <HeadphonesIcon size={36} className="text-primary" />, title: t('home.why4Title'), desc: t('home.why4Desc') },
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
      <section className="home-faq py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">{t('home.faqTitle')}</h2>
          <div className="space-y-3">
            {[
              { q: t('home.faq1Q'), a: t('home.faq1A') },
              { q: t('home.faq2Q'), a: t('home.faq2A') },
              { q: t('home.faq3Q'), a: t('home.faq3A') },
              { q: t('home.faq4Q'), a: t('home.faq4A') },
            ].map((faq, i) => (
              <div key={i} className="collapse collapse-arrow bg-base-200 border border-base-300">
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
      <section className="home-final-cta py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t('home.ctaTitle')}</h2>
          <p className="text-base-content/70 mb-8 text-lg">
            {t('home.ctaSubtitle')}
          </p>
          <Link to="/buyurtma" className="btn btn-primary btn-lg shadow-md">
            <Rocket size={22} /> {t('home.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
