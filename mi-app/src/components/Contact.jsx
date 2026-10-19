const field =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/40 focus:border-neon focus:shadow-[0_0_15px_rgba(0,240,255,0.4)]'

const icons = {
  instagram: <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.2-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />,
  facebook: <path d="M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.4-1.7 1.8-1.7h1.5V4.2S15.5 4 14.3 4C11.8 4 10.3 5.5 10.3 8.3v2.5H7.5V14h2.8v8h3.2Z" />,
  tiktok: <path d="M16.6 2h-3.2v13.2a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.3a6 6 0 1 0 5.1 5.9V8.5a7.3 7.3 0 0 0 4.1 1.3V6.6a4.2 4.2 0 0 1-4.1-4.6Z" />,
}

const socials = [
  { name: 'Instagram', handle: '@tulugar_inteligente', href: 'https://www.instagram.com/tulugar_inteligente', icon: icons.instagram },
  { name: 'Facebook', handle: 'Tu Lugar Inteligente', href: 'https://www.facebook.com/search/top?q=Tu%20Lugar%20Inteligente', icon: icons.facebook },
  { name: 'TikTok', handle: '@tu.lugar.inteligente', href: 'https://www.tiktok.com/@tu.lugar.inteligente', icon: icons.tiktok },
]

const phones = [
  { label: 'Informes (WhatsApp)', number: '+51 925 397 890', href: 'https://wa.me/51925397890' },
  { label: 'Cotizaciones / Teléfono Directo', number: '+51 929 733 839', href: 'https://wa.me/51929733839' },
]

const address = 'Mercado Qatuna Local N° 234, Av. Santa Isabel Chimpu Ocllo Cdra. 10 SN, Carabayllo'

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const msg = `Hola, soy ${d.get('name')} (${d.get('email')}). ${d.get('message')}`
    window.open(`https://wa.me/51929733839?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  return (
    <section id="contact" className="px-6 pt-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="glass rounded-2xl border-neon/40 p-8 glow-box">
          <h2 className="mb-6 text-3xl font-bold">
            Solicitar <span className="text-neon glow-text">Cotización</span>
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <input name="name" required className={field} placeholder="Nombre" />
            <input name="email" required type="email" className={field} placeholder="Correo electrónico" />
            <textarea name="message" required rows="4" className={field} placeholder="Cuéntanos qué necesitas" />
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-neon to-neon2 px-6 py-3 text-sm font-bold text-ink transition hover:scale-[1.02] glow-box"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>

        <div className="glass space-y-6 rounded-2xl p-8">
          {phones.map((p) => (
            <a key={p.number} href={p.href} target="_blank" rel="noopener noreferrer" className="block transition hover:text-neon">
              <p className="text-xs uppercase tracking-widest text-white/50">{p.label}</p>
              <p className="text-xl font-semibold text-neon glow-text">{p.number}</p>
            </a>
          ))}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Ubicación</p>
            <p className="text-white/80">{address}</p>
          </div>
          <ul className="space-y-3 border-t border-neon/20 pt-6">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 transition hover:text-neon hover:glow-text"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-label={s.name}>{s.icon}</svg>
                  {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="mx-auto mt-24 max-w-7xl border-t border-neon/20 py-8 text-center text-sm text-white/50">
        © 2026 TU LUGAR INTELIGENTE - Soluciones Tecnológicas
      </footer>
    </section>
  )
}
