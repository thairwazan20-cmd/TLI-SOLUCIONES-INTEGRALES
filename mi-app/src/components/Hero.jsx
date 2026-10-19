import Button from './Button'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-center">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/20 blur-[120px]" />
      <div className="relative max-w-4xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-neon">// Smart Spaces · Next-Gen Tech</p>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
          Transformamos tus espacios en{' '}
          <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent glow-text">
            Soluciones Inteligentes
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-white/60">
          Automatización, infraestructura y seguridad a la medida de tu hogar o negocio.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button>Solicitar Cotización</Button>
          <a href="#services" className="glass rounded-lg px-6 py-3 text-sm transition hover:border-neon hover:text-neon">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  )
}
