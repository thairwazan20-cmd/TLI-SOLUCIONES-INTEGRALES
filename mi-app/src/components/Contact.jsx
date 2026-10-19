import { useState } from 'react'
import Button from './Button'

const field =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/40 focus:border-neon focus:shadow-[0_0_15px_rgba(0,240,255,0.4)]'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="px-6 pt-24">
      <div className="glass mx-auto max-w-2xl rounded-2xl border-neon/40 p-8 glow-box">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Solicitar <span className="text-neon glow-text">Cotización</span>
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input required className={field} placeholder="Nombre" />
          <input required type="email" className={field} placeholder="Correo electrónico" />
          <textarea required rows="4" className={field} placeholder="Cuéntanos tu proyecto" />
          <Button href="#" className="w-full cursor-pointer text-center" >
            {sent ? 'Enviado ✓' : 'Enviar'}
          </Button>
        </form>
      </div>
      <footer className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-neon/20 py-8 text-sm text-white/50 sm:flex-row">
        <span>© 2026 TU LUGAR INTELIGENTE</span>
        <div className="flex gap-6">
          {['Instagram', 'LinkedIn', 'Facebook', 'WhatsApp'].map((n) => (
            <a key={n} href="#" className="transition hover:text-neon hover:glow-text">{n}</a>
          ))}
        </div>
      </footer>
    </section>
  )
}
