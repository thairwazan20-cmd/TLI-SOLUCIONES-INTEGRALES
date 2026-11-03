import PageHero from '../components/PageHero'
import ServicesGrid from '../components/Services'
import Process from '../components/Process'
import CtaBanner from '../components/CtaBanner'
import tecnico from '../assets/tecnico.jpg'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Todo lo que tu equipo y tu negocio"
        highlight="necesitan"
        text="Servicio técnico, Apple, consolas, impresiones 3D, venta de equipos, páginas web y sistemas con SUNAT. Elige un servicio para ver los detalles."
        img={tecnico}
        crumbs={[['Servicios']]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <ServicesGrid filter />
      </section>
      <Process />
      <CtaBanner message="Hola, quisiera cotizar un servicio" />
    </>
  )
}
