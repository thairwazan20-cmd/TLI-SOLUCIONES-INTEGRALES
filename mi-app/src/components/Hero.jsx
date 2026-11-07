import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { Particles, Typewriter } from './fx'
import { INFO, waLink } from '../data'
import tecnico from '../assets/tecnico.jpg'
import impresiones from '../assets/impresiones-3d.jpg'
import consolas from '../assets/consolas.jpg'
import equipos from '../assets/venta-equipos.jpg'

const words = ['laptops y PCs', 'equipos Apple', 'consolas', 'sistemas con SUNAT', 'impresiones 3D', 'páginas web']

// [imagen, posición, profundidad del efecto parallax]
const collage = [
  [tecnico, 'left-0 top-6 w-[62%] -rotate-3', 18],
  [equipos, 'right-0 top-0 w-[48%] rotate-3', 32],
  [impresiones, 'bottom-4 left-[8%] w-[46%] rotate-2', 26],
  [consolas, 'bottom-0 right-[2%] w-[50%] -rotate-2', 40],
]

export default function Hero() {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    ref.current.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  return (
    <section ref={ref} onMouseMove={onMove} className="relative overflow-hidden bg-[#0B0B0F] text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="blob absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-[#00F0FF]/15 blur-[120px]" />
      <div className="blob blob-delay absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand/25 blur-[120px]" />
      <Particles />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p style={{ '--d': '0.15s' }} className="intro mb-5 inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/40 bg-[#00F0FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00F0FF]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00F0FF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F0FF]" />
            </span>
            Soluciones tecnológicas · +{INFO.years} años
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="line-mask"><span style={{ '--d': '0.25s' }}>Tu equipo en buenas</span></span>
            <span className="line-mask"><span style={{ '--d': '0.4s' }}><span className="text-gradient">manos, siempre.</span></span></span>
          </h1>
          <p style={{ '--d': '0.6s' }} className="intro mt-5 text-xl font-semibold text-white/90 sm:text-2xl">
            Especialistas en <Typewriter words={words} className="text-[#00F0FF]" />
          </p>
          <p style={{ '--d': '0.72s' }} className="intro mt-5 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
            Servicio técnico, cambio de piezas, venta de equipos, impresiones 3D, páginas web y sistemas a medida
            integrados con SUNAT. Atendemos a personas y empresas en Carabayllo.
          </p>
          <div style={{ '--d': '0.85s' }} className="intro mt-8 flex flex-wrap gap-4">
            <a
              href={waLink('Hola, quisiera solicitar un servicio')}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-brand px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(11,140,255,0.5)] transition hover:scale-105"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
              <Icon name="wrench" className="h-4 w-4" /> Solicitar servicio
            </a>
            <Link to="/servicios" data-magnetic className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 hover:text-[#00F0FF]">
              Ver servicios <Icon name="chevron" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
          {collage.map(([src, pos, depth], i) => (
            <div
              key={src}
              className={`absolute ${pos} transition-transform duration-300 ease-out`}
              style={{ translate: `calc(var(--px, 0) * ${depth}px) calc(var(--py, 0) * ${depth}px)` }}
            >
              <img src={src} alt="" style={{ '--d': `${0.3 + i * 0.15}s` }} className="intro-pop w-full rounded-2xl border border-[#00F0FF]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_25px_rgba(0,240,255,0.15)] transition duration-300 hover:scale-105 hover:border-[#00F0FF]" />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div style={{ '--d': '1s' }} className="intro-pop">
              <div className="float rounded-2xl border border-[#00F0FF]/40 bg-[#0B0B0F]/85 px-6 py-4 text-center shadow-[0_0_40px_rgba(0,240,255,0.35)] backdrop-blur-md">
                <p className="text-4xl font-extrabold text-[#00F0FF] [text-shadow:0_0_20px_rgba(0,240,255,0.7)]">
                  +{INFO.years}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
    </section>
  )
}
