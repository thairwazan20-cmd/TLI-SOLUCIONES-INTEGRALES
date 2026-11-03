import PageHero from '../components/PageHero'
import About from '../components/About'
import Process from '../components/Process'
import Brands from '../components/Brands'
import CtaBanner from '../components/CtaBanner'
import { Reveal, Spotlight } from '../components/fx'
import { INFO } from '../data'
import hero from '../assets/hero.png'
import tecnico from '../assets/tecnico.jpg'
import impresiones from '../assets/impresiones-3d.jpg'
import consolas from '../assets/consolas.jpg'
import equipos from '../assets/venta-equipos.jpg'

const gallery = [
  [tecnico, 'Servicio técnico especializado'],
  [equipos, 'Venta de equipos'],
  [impresiones, 'Impresiones 3D'],
  [consolas, 'Mantenimiento de consolas'],
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Más de dos décadas cuidando"
        highlight="tu tecnología"
        text={`Somos Tu Lugar Inteligente, un equipo con más de ${INFO.years} años de experiencia y conocimiento en el rubro tecnológico, en el Mercado Qatuna de Carabayllo.`}
        img={hero}
        crumbs={[['Nosotros']]}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Nuestra historia</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy">Del servicio técnico a soluciones tecnológicas completas</h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Empezamos reparando computadoras y con los años nos convertimos en especialistas en equipos Apple. Hoy, además del
            servicio técnico, vendemos equipos, hacemos mantenimiento de consolas, imprimimos en 3D y desarrollamos páginas web y
            sistemas a medida integrados con SUNAT para negocios.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Lo que no ha cambiado es la forma de trabajar: diagnóstico honesto, precio claro antes de empezar y garantía en
            cada trabajo.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {gallery.map(([src, label], i) => (
            <Reveal key={label} delay={i * 100} className={i % 2 ? 'mt-8' : ''}>
              <Spotlight className="group overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <img src={src} alt={label} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110" />
                <p className="relative z-10 bg-[#0B0B0F] px-4 py-2 text-xs font-semibold text-[#00F0FF]">{label}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      <About />
      <Process />
      <Brands />
      <CtaBanner />
    </>
  )
}
