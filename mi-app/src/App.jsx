import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import About from './components/About'
import CtaBanner from './components/CtaBanner'
import Brands from './components/Brands'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <CtaBanner />
        <Brands />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
