import { Link } from 'react-router-dom'
import Icon from './Icon'
import { Particles } from './fx'

// Encabezado de las páginas internas
export default function PageHero({ eyebrow, title, highlight, text, img, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] text-white">
      {img && <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/85 to-[#0B0B0F]/40" />
      <div className="bg-grid absolute inset-0" />
      <div className="blob absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#00F0FF]/15 blur-[100px]" />
      <div className="blob blob-delay absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand/20 blur-[100px]" />
      <Particles density={0.00005} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-white/50">
          <Link to="/" className="hover:text-[#00F0FF]">Inicio</Link>
          {crumbs.map(([label, to]) => (
            <span key={label} className="flex items-center gap-1">
              <Icon name="chevron" className="h-3 w-3" />
              {to ? <Link to={to} className="hover:text-[#00F0FF]">{label}</Link> : <span className="text-white/80">{label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        {text && <p className="mt-5 max-w-2xl text-white/70 md:text-lg">{text}</p>}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
    </section>
  )
}
