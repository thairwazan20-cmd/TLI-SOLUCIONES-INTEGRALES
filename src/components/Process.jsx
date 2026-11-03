import Icon from './Icon'
import { Reveal, Spotlight } from './fx'

const steps = [
  ['whatsapp', 'Escríbenos', 'Cuéntanos por WhatsApp qué le pasa a tu equipo o qué necesita tu negocio.'],
  ['wrench', 'Diagnóstico', 'Revisamos tu equipo y te explicamos el problema con palabras claras.'],
  ['receipt', 'Cotización', 'Te damos el precio antes de empezar. Sin sorpresas.'],
  ['check', 'Entrega con garantía', 'Recoges tu equipo funcionando y con garantía del servicio.'],
]

export default function Process() {
  return (
    <section className="bg-dots relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Cómo trabajamos</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy">Simple, rápido y transparente</h2>
        </Reveal>
        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-gradient-to-r from-brand/0 via-brand/50 to-brand/0 lg:block" />
          {steps.map(([icon, t, d], i) => (
            <Reveal key={t} delay={i * 120}>
              <Spotlight className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center hover:border-brand/50 hover:shadow-xl">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0B0B0F] text-[#00F0FF] shadow-[0_0_0_6px_#f8fafc,0_0_20px_rgba(0,240,255,0.5)]">
                  <Icon name={icon} className="h-6 w-6" />
                </span>
                <p className="relative z-10 mt-4 text-xs font-bold text-brand">PASO {i + 1}</p>
                <h3 className="relative z-10 mt-1 font-bold">{t}</h3>
                <p className="relative z-10 mt-2 text-sm text-slate-500">{d}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
