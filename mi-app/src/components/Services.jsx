const services = [
  { icon: '⚡', title: 'Smart Automation', text: 'Control inteligente de iluminación, clima y accesos desde cualquier lugar.' },
  { icon: '🖧', title: 'Custom Tech Infrastructure', text: 'Redes, cableado y servidores diseñados para tu operación.' },
  { icon: '🛡', title: 'IoT & Security', text: 'Sensores, cámaras y monitoreo conectado 24/7.' },
  { icon: '🚀', title: 'Digital Transformation', text: 'Modernizamos procesos con software y tecnología escalable.' },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <h2 id="solutions" className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Nuestras <span className="text-neon glow-text">Soluciones</span>
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
