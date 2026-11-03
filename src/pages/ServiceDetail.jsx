import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { ServiceCard } from '../components/Services'
import CtaBanner from '../components/CtaBanner'
import { Reveal, Spotlight } from '../components/fx'
import { INFO, SERVICES, waLink } from '../data'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return <NotFound />

  const related = SERVICES.filter((x) => x.tag === s.tag && x.slug !== s.slug)
  const more = related.length >= 3 ? related : [...related, ...SERVICES.filter((x) => x.tag !== s.tag)]

  return (
    <>
      <PageHero eyebrow={s.tag} title={s.title} text={s.text} img={s.img} crumbs={[['Servicios', '/servicios'], [s.title]]} />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-navy">¿En qué te ayudamos?</h2>
          <p className="mt-4 leading-relaxed text-slate-600">{s.long}</p>

          <h3 className="mt-10 font-bold text-navy">Este servicio incluye</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {s.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:border-brand/50 hover:bg-white hover:shadow-md">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink(`Hola, quiero cotizar: ${s.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-wa px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Cotizar por WhatsApp
            </a>
            <a href={INFO.tel} className="flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
              <Icon name="phone" className="h-4 w-4" /> Llamar al {INFO.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Spotlight tilt={6} className="overflow-hidden rounded-3xl border border-[#00F0FF]/30 bg-[#0B0B0F] shadow-[0_30px_60px_-20px_rgba(11,140,255,0.5)]">
            <div className="scanline relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-navy to-[#10335f]">
              {s.img ? (
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              ) : (
                <>
                  <div className="bg-grid absolute inset-0" />
                  <Icon name={s.icon} className="float relative h-28 w-28 text-[#00F0FF] drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]" />
                </>
              )}
            </div>
            <div className="relative z-10 p-6 text-white">
              <p className="text-sm text-white/60">Experiencia que respalda tu equipo</p>
              <p className="mt-1 text-2xl font-extrabold">
                <span className="text-[#00F0FF]">+{INFO.years} años</span> en el rubro
              </p>
            </div>
          </Spotlight>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-navy">Otros servicios que te pueden interesar</h2>
            <Link to="/servicios" className="text-sm font-semibold text-brand hover:underline">Ver todos</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.slice(0, 3).map((r, i) => (
              <Reveal key={r.slug} delay={i * 100} className="h-full">
                <ServiceCard s={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner message={`Hola, quiero información sobre: ${s.title}`} />
    </>
  )
}
