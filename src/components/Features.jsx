const items = [
  ['🛡', 'Técnicos especializados', 'Experiencia y capacitación en todas las marcas.'],
  ['⏱', 'Atención rápida', 'Diagnóstico y solución en el menor tiempo posible.'],
  ['✅', 'Garantía en todos los servicios', 'Tu tranquilidad es nuestra prioridad.'],
  ['👥', 'Atención personalizada', 'Para personas y empresas.'],
]

export default function Features() {
  return (
    <section id="nosotros" className="bg-slate-50 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
        {items.map(([i, t, d]) => (
          <div key={t} className="px-4 text-center">
            <div className="text-3xl">{i}</div>
            <h3 className="mt-3 text-sm font-bold">{t}</h3>
            <p className="mt-1 text-xs text-slate-500">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
