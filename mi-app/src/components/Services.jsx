import { INFO } from '../data'

const services = [
  { icon: '💻', title: 'Reparación de PC y Laptops', text: 'Solucionamos problemas de hardware y software. Cambio de piezas, soldadura de componentes y diagnóstico a nivel de placa.', grad: 'from-slate-700 to-slate-900' },
  { icon: '🖥', title: 'Venta de Equipos', text: 'PCs gamer, computadoras de escritorio, monitores de alta frecuencia y periféricos tecnológicos.', grad: 'from-sky-500 to-blue-800' },
  { icon: '🧊', title: 'Impresiones 3D', text: 'Modelado 3D personalizado, prototipado e impresión 3D de alta precisión.', grad: 'from-indigo-500 to-indigo-900' },
  { icon: '🎮', title: 'Mantenimiento de Consolas', text: 'Limpieza, cambio de pasta térmica y reparación de todas las consolas de videojuegos.', grad: 'from-cyan-500 to-blue-900' },
  { icon: '⚙', title: 'Mantenimiento y Optimización', text: 'Mejora el rendimiento de tus equipos con limpieza, actualización y configuración.', grad: 'from-blue-600 to-navy' },
]

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-widest text-brand">Nuestros servicios</p>
      <h2 className="mt-2 border-b-0 text-3xl font-extrabold">Soluciones completas en un solo lugar</h2>
      <div className="mt-2 h-1 w-10 rounded bg-brand" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s) => (
          <article key={s.title} className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
            <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${s.grad} text-5xl`}>{s.icon}</div>
            <div className="flex flex-1 flex-col p-5 text-center">
              <h3 className="text-sm font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-xs text-slate-500">{s.text}</p>
              <a href={INFO.wa} target="_blank" rel="noopener noreferrer" className="mt-4 text-xs font-semibold text-brand">
                Más información →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
