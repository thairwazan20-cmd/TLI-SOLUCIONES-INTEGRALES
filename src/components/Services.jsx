const services = [
  { icon: '🧊', title: 'Impresiones 3D', text: 'Modelado 3D personalizado, prototipado e impresión 3D de alta precisión.' },
  { icon: '🖥', title: 'Venta de Equipos', text: 'PCs gamer, computadoras de escritorio, monitores de alta frecuencia y periféricos tecnológicos.' },
  { icon: '🔧', title: 'Servicio Técnico Especializado', text: 'Diagnóstico de hardware a nivel de placa, soldadura de componentes, upgrades y mantenimiento de PC.' },
  { icon: '🎮', title: 'Mantenimiento de Consolas', text: 'Mantenimiento, limpieza, cambio de pasta térmica y reparación de todas las consolas de videojuegos.' },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <h2 id="solutions" className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Nuestros <span className="text-neon glow-text">Servicios</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-neon/70 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)]"
          >
            <div className="mb-4 text-3xl drop-shadow-[0_0_8px_#00F0FF]">{s.icon}</div>
            <h3 className="mb-2 font-semibold transition group-hover:text-neon">{s.title}</h3>
            <p className="text-sm text-white/60">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
