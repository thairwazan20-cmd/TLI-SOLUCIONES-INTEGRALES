const specialties = [
  'Reparación de placas de laptops y PC de alta gama',
  'Especialistas en hardware Apple (MacBook, iMac, iPhone)',
  'Desarrollo web e ingeniería de software a medida',
  'Impresión y modelado 3D',
  'Despliegue de CCTV inteligente y redes',
]

const values = ['Diagnóstico rápido', 'Componentes originales', 'Calidad garantizada', 'Atención personalizada para personas y empresas']

const stats = [
  ['+20', 'Años de Experiencia'],
  ['+10,000', 'Equipos Reparados'],
  ['100%', 'Garantía y Soporte'],
]

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-[#0B0B0F] py-20 text-white">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#00F0FF]/15 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#00E5FF]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Sobre nosotros · Nuestra experiencia</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          Más de 20 Años Liderando{' '}
          <span className="text-[#00F0FF] [text-shadow:0_0_18px_rgba(0,240,255,0.6)]">Soluciones Tecnológicas</span>
        </h2>
        <p className="mt-5 max-w-2xl text-white/70">
          En TU LUGAR INTELIGENTE somos un equipo multidisciplinario con más de dos décadas de trayectoria transformando y reparando tecnología.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[['Especialidades', specialties], ['Nuestra propuesta de valor', values]].map(([title, list]) => (
            <div key={title} className="rounded-2xl border border-[#00F0FF]/20 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]">
              <h3 className="mb-4 text-lg font-bold text-[#00F0FF]">{title}</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {list.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-[#00F0FF]/20 bg-white/5 p-6 text-center backdrop-blur-md transition duration-300 hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]">
              <p className="text-4xl font-extrabold text-[#00F0FF] [text-shadow:0_0_14px_rgba(0,240,255,0.7)]">{n}</p>
              <p className="mt-1 text-sm text-white/70">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
