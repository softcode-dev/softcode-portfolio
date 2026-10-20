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

const pageTitles = {
  '/': 'SoftCode_dev — Veb, Bot va AI yechimlar',
  '/xizmatlar': 'Xizmatlar — SoftCode_dev',
  '/loyihalar': 'Loyihalar — SoftCode_dev',
  '/jamoa': 'Jamoa — SoftCode_dev',
  '/aloqa': 'Aloqa — SoftCode_dev',
  '/buyurtma': 'Buyurtma berish — SoftCode_dev',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    document.title =
      pageTitles[path] ??
      (path.startsWith('/profil/') ? 'Profil — SoftCode_dev' : 'SoftCode_dev')
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xizmatlar" element={<Services />} />
          <Route path="/loyihalar" element={<Projects />} />
          <Route path="/jamoa" element={<Team />} />
          <Route path="/profil/:id" element={<Profile />} />
          <Route path="/aloqa" element={<Contact />} />
          <Route path="/buyurtma" element={<Order />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
