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

const pageTitles = {
  '/': 'SoftCode_dev — Veb, Bot va AI yechimlar',
  '/xizmatlar': 'Xizmatlar — SoftCode_dev',
  '/loyihalar': 'Loyihalar — SoftCode_dev',
  '/jamoa': 'Jamoa — SoftCode_dev',
  '/aloqa': 'Aloqa — SoftCode_dev',
  '/buyurtma': 'Buyurtma berish — SoftCode_dev',
  '/500': 'Xatolik — SoftCode_dev',
}

const pageDescriptions = {
  '/': 'SoftCode_dev — veb-saytlar, Telegram botlar va AI yechimlar ishlab chiqadigan dasturchilar jamoasi.',
  '/xizmatlar': 'SoftCode_dev xizmatlari: veb-saytlar, Telegram botlar, admin panellar, AI integratsiya va texnik yordam.',
  '/loyihalar': 'SoftCode_dev loyihalari va portfolio.',
  '/jamoa': 'SoftCode_dev jamoasi va mutaxassislari.',
  '/aloqa': 'SoftCode_dev bilan bog‘laning yoki xabar yuboring.',
  '/buyurtma': 'SoftCode_dev bilan yangi loyiha boshlash uchun buyurtma yuboring.',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    document.title =
      pageTitles[path] ??
      (path.startsWith('/profil/') ? 'Profil — SoftCode_dev' : 'Sahifa topilmadi — SoftCode_dev')
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescriptions[path] ?? 'SoftCode_dev — IT yechimlar va dasturchilar jamoasi.')
    document.querySelector('meta[name="robots"]')?.setAttribute('content', path === '/500' || (!pageTitles[path] && !path.startsWith('/profil/')) ? 'noindex,follow' : 'index,follow')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <a href="#main-content" className="skip-link">Asosiy kontentga o‘tish</a>
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
