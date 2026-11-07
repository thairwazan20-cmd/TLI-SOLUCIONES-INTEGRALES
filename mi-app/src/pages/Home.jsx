import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ServicesGrid from '../components/Services'
import Specialties from '../components/Specialties'
import Process from '../components/Process'
import CtaBanner from '../components/CtaBanner'
import Brands from '../components/Brands'
import Icon from '../components/Icon'
import { Reveal } from '../components/fx'
import { Ticker } from '../components/effects'

const tickerTop = ['Servicio técnico', 'Especialistas Apple', 'Consolas', 'Impresiones 3D', 'Venta de equipos']
const tickerBottom = ['Sistemas con SUNAT', 'Páginas web', 'Redes y CCTV', 'Cambio de piezas', 'Garantía']

export default function Home() {
  return (
    <>
      <Hero />
      <section aria-label="Servicios destacados" className="relative overflow-hidden bg-[#0B0B0F] py-6">
        <div className="ticker -mx-[5%] -rotate-2 bg-gradient-to-r from-brand via-[#00c2e0] to-brand py-3 text-2xl font-extrabold uppercase tracking-wide text-[#0B0B0F] shadow-[0_0_40px_rgba(0,240,255,0.35)] md:text-4xl">
          <Ticker items={tickerTop} starClass="text-white" />
        </div>
        <div className="ticker -mx-[5%] mt-4 rotate-1 py-1 text-2xl font-extrabold uppercase tracking-wide md:text-4xl">
          <Ticker items={tickerBottom} reverse outline />
        </div>
      </section>
      <Features />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">Nuestros servicios</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy">Soluciones completas en un solo lugar</h2>
            <div className="mt-2 h-1 w-10 rounded bg-brand" />
          </div>
          <Link to="/servicios" data-magnetic className="flex items-center gap-2 rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white">
            Ver todos los servicios <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
        <ServicesGrid limit={8} />
      </section>
      <Specialties />
      <Process />
      <Brands />
      <CtaBanner />
    </>
  )
}
