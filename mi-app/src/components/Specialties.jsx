import { Link } from 'react-router-dom'
import Icon from './Icon'
import { Reveal, Spotlight } from './fx'
import { INFO } from '../data'
import apple from '../assets/apple.png'
import impresiones from '../assets/impresiones-3d.jpg'

const highlights = [
  {
    slug: 'apple',
    icon: 'apple',
    title: 'Especialistas Apple',
    lead: `Más de ${INFO.years} años trabajando con equipos Apple.`,
    points: ['MacBook, iMac, iPhone y iPad', 'Reparación de placas y cambio de piezas', 'Migración de datos e instalación de macOS'],
    img: apple,
  },
  {
    slug: 'sistemas-sunat',
    icon: 'receipt',
    title: 'Sistemas a Medida con SUNAT',
    lead: 'Software hecho para tu negocio, no al revés.',
    points: ['Facturas y boletas electrónicas enviadas a SUNAT', 'Punto de venta, inventario y reportes', 'Capacitación y soporte después de la entrega'],
  },
  {
    slug: 'impresiones-3d',
    icon: 'cube',
    title: 'Impresiones 3D',
    lead: 'Si lo puedes imaginar, lo podemos imprimir.',
    points: ['Repuestos y piezas a medida', 'Prototipos para emprendimientos', 'Figuras, maceteros y regalos personalizados'],
    img: impresiones,
  },
]

export default function Specialties() {
  return (
    <section id="especialidades" className="relative overflow-hidden bg-[#0B0B0F] py-20 text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="blob absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#00F0FF]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Lo que nos diferencia</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
            Más que un servicio técnico: <span className="text-gradient">tecnología a tu medida</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 120} className="h-full">
              <Spotlight tilt={5} className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#00F0FF]/20 bg-white/5 backdrop-blur-md hover:border-[#00F0FF]/60 hover:shadow-[0_0_40px_rgba(0,240,255,0.25)]">
                <div className="scanline relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-[#10335f]">
                  {h.img && <img src={h.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45" />}
                  {!h.img && <div className="bg-grid absolute inset-0" />}
                  <Icon name={h.icon} className="float relative h-16 w-16 text-[#00F0FF] drop-shadow-[0_0_14px_rgba(0,240,255,0.8)]" />
                </div>
                <div className="relative z-10 flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold">{h.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{h.lead}</p>
                  <ul className="mt-5 flex-1 space-y-3 text-sm text-white/80">
                    {h.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#00F0FF] text-[#00F0FF]">
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/servicios/${h.slug}`}
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-[#00F0FF]/60 px-5 py-2 text-sm font-semibold text-[#00F0FF] transition hover:bg-[#00F0FF] hover:text-[#0B0B0F]"
                  >
                    Conocer más <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
