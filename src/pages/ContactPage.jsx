import { useState } from 'react'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { Reveal, Spotlight } from '../components/fx'
import { INFO, SERVICES, waLink } from '../data'

const field = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', service: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      `Hola, soy ${form.name}.`,
      form.service && `Me interesa: ${form.service}.`,
      form.message,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  const cards = [
    ['whatsapp', 'WhatsApp', INFO.phone, waLink()],
    ['phone', 'Llámanos', INFO.phone, INFO.tel],
    ['mail', 'Correo', INFO.email, `mailto:${INFO.email}`],
    ['pin', 'Visítanos', `Mercado Qatuna Local N° 234, ${INFO.address2}`],
  ]

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de lo que"
        highlight="necesitas"
        text="Escríbenos y te respondemos lo antes posible, o visítanos en nuestro local de Carabayllo."
        crumbs={[['Contacto']]}
      />

      <section className="bg-dots bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid content-start gap-4">
            {cards.map(([icon, title, text, href], i) => {
              const inner = (
                <>
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B0B0F] text-[#00F0FF] shadow-[0_0_16px_rgba(0,240,255,0.35)]">
                    <Icon name={icon} className="h-6 w-6" />
                  </span>
                  <span className="relative z-10 min-w-0">
                    <b className="block text-sm text-navy">{title}</b>
                    <span className="block break-words text-sm text-slate-500">{text}</span>
                  </span>
                </>
              )
              const cls = 'flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-brand/50 hover:shadow-xl'
              return (
                <Reveal key={title} delay={i * 80}>
                  {href ? (
                    <Spotlight as="a" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={cls}>{inner}</Spotlight>
                  ) : (
                    <Spotlight className={cls}>{inner}</Spotlight>
                  )}
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={150}>
            <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
              <h2 className="text-2xl font-extrabold text-navy">Envíanos tu consulta</h2>
              <p className="mt-1 text-sm text-slate-500">Al enviar se abrirá WhatsApp con tu mensaje listo.</p>
              <div className="mt-6 grid gap-4">
                <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                  Nombre
                  <input required value={form.name} onChange={set('name')} className={field} placeholder="Tu nombre" />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                  Servicio
                  <select value={form.service} onChange={set('service')} className={field}>
                    <option value="">Selecciona un servicio</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                    <option>Otro</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                  Mensaje
                  <textarea required rows={5} value={form.message} onChange={set('message')} className={field} placeholder="Cuéntanos qué necesitas: equipo, marca, falla..." />
                </label>
              </div>
              <button
                type="submit"
                className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-wa px-6 py-3.5 text-sm font-semibold text-white transition hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                <Icon name="whatsapp" className="h-5 w-5" /> Enviar por WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[420px] bg-[#0B0B0F]">
        <iframe
          title="Ubicación de Tu Lugar Inteligente"
          src={INFO.map}
          className="h-full w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
