import { Link } from 'react-router-dom'
import { Particles } from '../components/fx'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#0B0B0F] px-6 text-center text-white">
      <div className="bg-grid absolute inset-0" />
      <Particles />
      <div className="relative">
        <p className="text-gradient text-8xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold">Esta página no existe</h1>
        <p className="mt-2 text-white/60">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold transition hover:scale-105">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
