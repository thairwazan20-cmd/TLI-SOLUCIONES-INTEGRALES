import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import logo from '../assets/TLI.svg'
import { INFO, SERVICES, waLink } from '../data'

// Palabras clave que llevan a cada servicio
const KEYWORDS = {
  'servicio-tecnico': ['laptop', 'pc', 'computadora', 'compu', 'no prende', 'no enciende', 'lenta', 'virus', 'placa', 'reparar', 'reparacion', 'malogr', 'formatear', 'windows'],
  apple: ['apple', 'mac', 'macbook', 'imac', 'iphone', 'ipad', 'macos'],
  'cambio-de-piezas': ['pieza', 'pantalla', 'teclado', 'bateria', 'ssd', 'disco', 'ram', 'memoria', 'cargador', 'bisagra', 'repuesto'],
  mantenimiento: ['mantenimiento', 'limpieza', 'pasta termica', 'calienta', 'optimiz', 'ventilador'],
  consolas: ['consola', 'play', 'ps2', 'ps3', 'ps4', 'ps5', 'playstation', 'xbox', 'nintendo', 'switch', 'mando', 'joystick'],
  'sistemas-sunat': ['sunat', 'factura', 'boleta', 'sistema', 'software', 'punto de venta', 'pos', 'inventario', 'facturacion'],
  'paginas-web': ['pagina', 'web', 'tienda online', 'sitio', 'catalogo'],
  'impresiones-3d': ['3d', 'imprimir', 'impresion', 'figura', 'prototipo', 'macetero'],
  'venta-de-equipos': ['comprar', 'venta', 'vende', 'gamer', 'armar', 'monitor', 'mouse', 'periferico'],
  redes: ['red', 'wifi', 'internet', 'cableado', 'router', 'señal'],
  camaras: ['camara', 'seguridad', 'cctv', 'dvr', 'nvr', 'vigilancia'],
}

const MAIN_CHIPS = [
  ['services', 'Ver servicios'],
  ['quote', 'Cotizar un servicio'],
  ['location', 'Ubicación'],
  ['human', 'Hablar con un asesor'],
]

const normalize = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
// Las palabras cortas ("pc", "ram", "red") solo cuentan como palabra completa
const has = (text, words) =>
  words.some((w) => {
    const k = normalize(w)
    return k.length <= 4 ? new RegExp(`(^|[^a-z0-9])${k}([^a-z0-9]|$)`).test(text) : text.includes(k)
  })

function reply(raw) {
  const t = normalize(raw)
  const service = SERVICES.find((s) => has(t, KEYWORDS[s.slug]))

  if (has(t, ['precio', 'costo', 'cuanto', 'cotiz', 'presupuesto', 'tarifa'])) {
    return {
      text: service
        ? `El precio de ${service.title.toLowerCase()} depende del equipo y del diagnóstico. Escríbenos por WhatsApp y te damos una cotización sin compromiso.`
        : 'El precio depende del equipo y del trabajo que necesites. Te damos una cotización sin compromiso por WhatsApp. ¿Qué servicio te interesa?',
      wa: `Hola, vengo de la página web. Quisiera una cotización${service ? ` para: ${service.title}` : ''}. ${raw}`,
      chips: service ? [] : MAIN_CHIPS.slice(0, 1),
    }
  }
  if (service) return serviceAnswer(service)
  if (has(t, ['donde', 'ubicacion', 'direccion', 'local', 'llegar', 'mercado', 'qatuna', 'mapa'])) return locationAnswer()
  if (has(t, ['telefono', 'numero', 'celular', 'llamar', 'contacto', 'whatsapp', 'correo', 'email'])) {
    return {
      text: `Puedes escribirnos o llamarnos al ${INFO.phone}, o enviarnos un correo a ${INFO.email}.`,
      wa: 'Hola, vengo de la página web y quisiera más información.',
    }
  }
  if (has(t, ['garantia'])) {
    return { text: 'Todos nuestros servicios tienen garantía. Para conocer las condiciones de tu caso, consúltalo con un asesor.', wa: `Hola, vengo de la página web. Tengo una consulta sobre la garantía: ${raw}` }
  }
  if (has(t, ['experiencia', 'años', 'quienes', 'nosotros', 'empresa'])) {
    return { text: `Somos Tu Lugar Inteligente, con más de ${INFO.years} años de experiencia en el rubro tecnológico y especialistas en Apple.`, link: ['/nosotros', 'Conócenos'] }
  }
  if (has(t, ['gracias', 'chau', 'adios', 'listo', 'ok'])) {
    return { text: '¡Gracias a ti! Si necesitas algo más, aquí estaré. 😊', chips: MAIN_CHIPS }
  }
  if (has(t, ['hola', 'buenas', 'buenos', 'hey', 'saludos'])) {
    return { text: '¡Hola! ¿En qué te puedo ayudar hoy?', chips: MAIN_CHIPS }
  }
  return {
    text: 'No estoy seguro de haberte entendido. Puedo enviarle tu consulta a un asesor por WhatsApp, o puedes elegir una opción:',
    wa: `Hola, vengo de la página web. ${raw}`,
    chips: MAIN_CHIPS,
  }
}

function serviceAnswer(s) {
  return {
    text: `${s.title}: ${s.long}`,
    list: s.includes,
    wa: `Hola, vengo de la página web. Necesito el servicio de: ${s.title}.`,
    link: [`/servicios/${s.slug}`, 'Ver detalles'],
  }
}

function locationAnswer() {
  return {
    text: `Estamos en el Mercado Qatuna, Local N° 234, ${INFO.address2}.`,
    href: ['https://www.google.com/maps/search/?api=1&query=Mercado+Qatuna+Carabayllo', 'Abrir en Google Maps'],
    link: ['/contacto', 'Ver mapa'],
  }
}

const GREETING = {
  from: 'bot',
  text: `¡Hola! 👋 Soy Fernando, el asistente de Tu Lugar Inteligente. Tenemos más de ${INFO.years} años de experiencia. ¿En qué te puedo ayudar?`,
  chips: MAIN_CHIPS,
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([GREETING])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [seen, setSeen] = useState(false)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [msgs, typing, open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [open])

  const botSay = (answer) => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs((m) => [...m, { from: 'bot', ...answer }])
    }, 650)
  }

  const userSay = (text, answer) => {
    setMsgs((m) => [...m, { from: 'user', text }])
    botSay(answer)
  }

  const onChip = (id, label) => {
    if (id === 'services') {
      userSay(label, { text: 'Estos son nuestros servicios. Elige uno para ver más:', chips: SERVICES.map((s) => [`svc:${s.slug}`, s.title]) })
    } else if (id === 'quote') {
      userSay(label, { text: '¡Claro! ¿Qué servicio quieres cotizar?', chips: SERVICES.map((s) => [`quote:${s.slug}`, s.title]) })
    } else if (id === 'location') {
      userSay(label, locationAnswer())
    } else if (id === 'human') {
      userSay(label, { text: 'Te conecto con un asesor por WhatsApp. Toca el botón y envía el mensaje:', wa: 'Hola, vengo de la página web y quisiera hablar con un asesor.' })
    } else if (id.startsWith('svc:')) {
      userSay(label, serviceAnswer(SERVICES.find((s) => s.slug === id.slice(4))))
    } else if (id.startsWith('quote:')) {
      const s = SERVICES.find((x) => x.slug === id.slice(6))
      userSay(label, {
        text: `Perfecto. Envíanos un mensaje por WhatsApp para cotizar ${s.title.toLowerCase()}. Si puedes, cuéntanos la marca y el modelo de tu equipo o qué necesitas.`,
        wa: `Hola, vengo de la página web. Quisiera cotizar: ${s.title}.`,
      })
    }
  }

  const send = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setInput('')
    userSay(text, reply(text))
  }

  const toggle = () => {
    setOpen((o) => !o)
    setSeen(true)
    setTimeout(() => inputRef.current?.focus(), 250)
  }

  const last = msgs.length - 1

  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+4.5rem)] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-wa text-white shadow-lg transition hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>

      <button
        type="button"
        onClick={toggle}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat de ayuda'}
        aria-expanded={open}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-[#00c2e0] text-white shadow-[0_0_25px_rgba(0,240,255,0.5)] transition hover:scale-110"
      >
        {!open && !seen && <span className="absolute inset-0 animate-ping rounded-full bg-[#00F0FF]/40" />}
        <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" /></>}
        </svg>
        {!open && !seen && <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-white bg-red-500" />}
      </button>

      <div
        role="dialog"
        aria-label="Chat de ayuda"
        className={`fixed bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+4.5rem)] right-[max(1rem,env(safe-area-inset-right))] z-[55] flex h-[min(600px,calc(100dvh-7rem))] w-[min(380px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-[#00F0FF]/30 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_0_30px_rgba(0,240,255,0.2)] transition duration-300 ${
          open ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
        }`}
      >
        <div className="relative flex items-center gap-3 overflow-hidden bg-[#0B0B0F] px-4 py-3 text-white">
          <div className="bg-grid absolute inset-0" />
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#00F0FF]/50 bg-white/5 p-1">
            <img src={logo} alt="" className="w-full" />
          </span>
          <div className="relative min-w-0 flex-1">
            <b className="block text-sm">Fernando</b>
            <span className="flex items-center gap-1.5 text-xs text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> En línea
            </span>
          </div>
          <button type="button" onClick={() => setMsgs([GREETING])} className="relative rounded-lg px-2 py-1 text-xs text-white/60 hover:bg-white/10 hover:text-white">
            Reiniciar
          </button>
        </div>

        <div className="bg-dots flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4" aria-live="polite">
          {msgs.map((m, i) =>
            m.from === 'user' ? (
              <div key={i} className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-brand px-4 py-2 text-sm text-white">{m.text}</div>
            ) : (
              <div key={i} className="max-w-[90%] space-y-2">
                <div className="rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm">
                  {m.text}
                  {m.list && (
                    <ul className="mt-2 space-y-1">
                      {m.list.map((l) => (
                        <li key={l} className="flex gap-2 text-xs text-slate-500">
                          <Icon name="check" className="mt-0.5 h-3 w-3 shrink-0 text-brand" /> {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {(m.wa || m.link || m.href) && (
                  <div className="flex flex-wrap gap-2">
                    {m.wa && (
                      <a href={waLink(m.wa)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full bg-wa px-3.5 py-1.5 text-xs font-semibold text-white transition hover:brightness-110">
                        <Icon name="whatsapp" className="h-4 w-4" /> Escribir por WhatsApp
                      </a>
                    )}
                    {m.href && (
                      <a href={m.href[0]} target="_blank" rel="noopener noreferrer" className="rounded-full border border-brand px-3.5 py-1.5 text-xs font-semibold text-brand transition hover:bg-brand hover:text-white">
                        {m.href[1]}
                      </a>
                    )}
                    {m.link && (
                      <Link to={m.link[0]} className="rounded-full border border-brand px-3.5 py-1.5 text-xs font-semibold text-brand transition hover:bg-brand hover:text-white">
                        {m.link[1]}
                      </Link>
                    )}
                  </div>
                )}
                {m.chips && i === last && (
                  <div className="flex flex-wrap gap-2">
                    {m.chips.map(([id, label]) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => onChip(id, label)}
                        className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-navy transition hover:border-brand hover:bg-brand hover:text-white"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ),
          )}
          {typing && (
            <div className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-4 py-3">
              {[0, 150, 300].map((d) => (
                <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${d}ms` }} />
              ))}
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form onSubmit={send} className="flex items-center gap-2 border-t border-slate-200 bg-white p-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu consulta..."
            aria-label="Escribe tu consulta"
            className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/15"
          />
          <button type="submit" aria-label="Enviar" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition hover:scale-105 disabled:opacity-40" disabled={!input.trim()}>
            <Icon name="arrow" className="h-5 w-5" />
          </button>
        </form>
      </div>
    </>
  )
}
