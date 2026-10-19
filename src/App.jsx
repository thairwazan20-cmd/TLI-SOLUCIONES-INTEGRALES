import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
    </div>
  )
}
