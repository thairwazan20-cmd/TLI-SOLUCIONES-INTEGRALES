import Icon from './Icon'
import heroImg from '../assets/hero.png'
import { INFO } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-r from-[#030b1d] via-navy to-[#10335f] text-white">
      <img src={heroImg} alt="Técnico reparando una computadora" className="absolute inset-0 h-full w-full object-cover object-right opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030b1d] via-navy/80 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider">Soporte técnico y reparación de computadoras</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Tu equipo en buenas
            <br />
            <span className="text-cyan-400">manos, siempre.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/90">
            Reparamos, mantenemos y optimizamos tus equipos de cómputo con un servicio rápido, confiable y profesional.
            Atendemos a personas y empresas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={INFO.wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold hover:brightness-110">
              <Icon name="wrench" className="h-4 w-4" /> Solicitar servicio por WhatsApp
            </a>
            <a href="#servicios" className="flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold hover:bg-white/10">
              Conoce nuestros servicios <Icon name="chevron" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-center gap-2 md:flex">
          <Icon name="monitor" className="h-24 w-24 text-cyan-400" />
          <p className="text-center text-xl font-extrabold leading-tight">
            TU LUGAR
            <br />
            <span className="text-cyan-400">INTELIGENTE</span>
          </p>
        </div>
      </div>
    </section>
  )
}
