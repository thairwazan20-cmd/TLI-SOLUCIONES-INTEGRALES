import logo from '../assets/TLI.svg'
import { INFO } from '../data'

const links = [
  ['Inicio', '#inicio'],
  ['Servicios', '#servicios'],
  ['Nosotros', '#nosotros'],
  ['Clientes', '#marcas'],
  ['Contacto', '#contacto'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy text-xs text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2">
          <span>📍 {INFO.address} · {INFO.address2}</span>
          <span className="flex gap-6">
            <a href={INFO.wa}>📞 {INFO.phone}</a>
            <a href={`mailto:${INFO.email}`} className="hidden sm:inline">✉ {INFO.email}</a>
          </span>
        </div>
      </div>
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Tu Lugar Inteligente" className="h-12 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {links.map(([l, h], i) => (
              <a key={l} href={h} className={`pb-1 hover:text-brand ${i === 0 ? 'border-b-2 border-brand text-brand' : ''}`}>
                {l}
              </a>
            ))}
          </nav>
          <a href={INFO.wa} target="_blank" rel="noopener noreferrer" className="rounded-full bg-wa px-5 py-2 text-sm font-semibold text-white hover:brightness-110">
            WhatsApp <span className="hidden text-xs font-normal sm:inline">· Solicita tu servicio</span>
          </a>
        </div>
      </div>
    </header>
  )
}
