import Icon from './Icon'

const items = [
  ['shield', 'Técnicos especializados', 'Experiencia y capacitación en todas las marcas.'],
  ['clock', 'Atención rápida', 'Diagnóstico y solución en el menor tiempo posible.'],
  ['shield', 'Garantía en todos los servicios', 'Tu tranquilidad es nuestra prioridad.'],
  ['users', 'Atención personalizada', 'Para personas y empresas.'],
]

export default function Features() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([icon, t, d]) => (
          <div key={t} className="rounded-lg border border-slate-200 bg-white px-4 py-6 text-center">
            <Icon name={icon} className="mx-auto h-8 w-8 text-navy" />
            <h3 className="mt-3 text-sm font-bold">{t}</h3>
            <p className="mx-auto mt-1 max-w-[14rem] text-xs text-slate-500">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
