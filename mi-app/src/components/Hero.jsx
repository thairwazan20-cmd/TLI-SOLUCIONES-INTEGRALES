import { INFO } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-[#030b1d] via-navy to-[#0a2d63] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/80">Soporte técnico y reparación de computadoras</p>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Tu equipo en buenas
          <br />
          <span className="text-brand">manos, siempre.</span>
        </h1>
        <p className="mt-6 max-w-lg text-white/80">
          Reparamos, mantenemos y optimizamos tus equipos de cómputo con un servicio rápido, confiable y profesional.
          Atendemos a personas y empresas.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={INFO.wa} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand px-7 py-3 text-sm font-semibold hover:brightness-110">
            🔧 Solicitar servicio por WhatsApp
          </a>
          <a href="#servicios" className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold hover:bg-white/10">
            Conoce nuestros servicios ›
          </a>
        </div>
      </div>
    </section>
  )
}
