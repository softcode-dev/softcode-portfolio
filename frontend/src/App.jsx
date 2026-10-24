import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Order from './pages/Order'
import { NotFound, PageErrorBoundary, ServerError } from './pages/ErrorPage'
import { useLanguage } from './i18n/LanguageContext'

function App() {
  const location = useLocation()
  const { t, lang } = useLanguage()

  useEffect(() => {
    const path = location.pathname
    const titleKey = `pageTitles.${path}`
    const descKey = `pageDescriptions.${path}`

    let title = t(titleKey)
    if (title === titleKey) {
      title = path.startsWith('/profil/')
        ? t('pageTitles.profile')
        : t('pageTitles.notFound')
    }

    let desc = t(descKey)
    if (desc === descKey) {
      desc = t('defaultDesc')
    }

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', desc)
    document.querySelector('meta[name="robots"]')?.setAttribute(
      'content',
      path === '/500' || (title === t('pageTitles.notFound') && !path.startsWith('/profil/'))
        ? 'noindex,follow'
        : 'index,follow'
    )
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, lang, t])

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-200">
      <a href="#main-content" className="skip-link">{t('skipLink')}</a>
      <Navbar key={location.pathname} />
      <main className="min-w-0 flex-1" id="main-content">
        <PageErrorBoundary key={location.pathname}>
          <div key={location.pathname} className="page-transition">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/xizmatlar" element={<Services />} />
              <Route path="/loyihalar" element={<Projects />} />
              <Route path="/jamoa" element={<Team />} />
              <Route path="/profil/:id" element={<Profile />} />
              <Route path="/aloqa" element={<Contact />} />
              <Route path="/buyurtma" element={<Order />} />
              <Route path="/500" element={<ServerError />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </PageErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default App
