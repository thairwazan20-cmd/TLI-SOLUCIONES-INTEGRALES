import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { Reveal, Spotlight } from './fx'
import { CATEGORIES, SERVICES } from '../data'

export function ServiceCard({ s }) {
  return (
    <Spotlight as={Link} to={`/servicios/${s.slug}`} data-cursor="Ver" className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-[#00F0FF]/60 hover:shadow-[0_20px_40px_-15px_rgba(11,140,255,0.35)]">
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#0B0B0F] via-navy to-[#10335f]">
        {s.img ? (
          <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        ) : (
          <>
            <div className="bg-grid absolute inset-0" />
            <Icon name={s.icon} className="absolute inset-0 m-auto h-16 w-16 text-[#00F0FF] drop-shadow-[0_0_14px_rgba(0,240,255,0.7)] transition duration-500 group-hover:scale-110 group-hover:rotate-6" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-[#0B0B0F]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#00F0FF]">{s.tag}</span>
      </div>
      <div className="relative z-10 flex flex-1 flex-col p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <Icon name={s.icon} className="h-5 w-5 shrink-0 text-navy" />
          {s.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{s.text}</p>
        <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand">
          Ver detalles <Icon name="arrow" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Spotlight>
  )
}

export default function ServicesGrid({ limit, filter = false }) {
  const [cat, setCat] = useState('Todos')
  const list = SERVICES.filter((s) => cat === 'Todos' || s.tag === cat).slice(0, limit)

  return (
    <>
      {filter && (
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                cat === c ? 'border-brand bg-brand text-white shadow-[0_0_20px_rgba(11,140,255,0.4)]' : 'border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 80} className="h-full">
            <ServiceCard s={s} />
          </Reveal>
        ))}
      </div>
    </>
  )
}
