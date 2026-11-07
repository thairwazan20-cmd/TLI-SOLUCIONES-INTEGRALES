import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Preloader from './components/Preloader'
import { BackToTop, CustomCursor, ScrollProgress } from './components/effects'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      {/* La clave hace que cada cambio de página vuelva a reproducir la animación de entrada */}
      <main key={location.pathname} className="page-enter">
        <span aria-hidden="true" className="page-sweep" />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </>
  )
}
