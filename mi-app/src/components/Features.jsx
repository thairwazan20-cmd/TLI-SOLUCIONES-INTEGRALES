import Icon from './Icon'
import { Reveal, Spotlight } from './fx'
import { INFO } from '../data'

const items = [
  ['shield', `+${INFO.years} años de experiencia`, 'Técnicos especializados en todas las marcas, incluida Apple.'],
  ['clock', 'Atención rápida', 'Diagnóstico y solución en el menor tiempo posible.'],
  ['check', 'Garantía en todos los servicios', 'Tu tranquilidad es nuestra prioridad.'],
  ['users', 'Atención personalizada', 'Para personas y empresas.'],
]

export default function Features() {
  return (
    <section className="bg-dots relative bg-slate-50 py-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([icon, t, d], i) => (
          <Reveal key={t} delay={i * 90}>
            <Spotlight className="h-full rounded-xl border border-slate-200 bg-white px-4 py-7 text-center hover:border-brand/50 hover:shadow-xl">
              <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-brand text-[#00F0FF] shadow-[0_8px_20px_-6px_rgba(11,140,255,0.6)]">
                <Icon name={icon} className="h-7 w-7" />
              </span>
              <h3 className="relative z-10 mt-4 text-sm font-bold">{t}</h3>
              <p className="relative z-10 mx-auto mt-1 max-w-[14rem] text-xs text-slate-500">{d}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
