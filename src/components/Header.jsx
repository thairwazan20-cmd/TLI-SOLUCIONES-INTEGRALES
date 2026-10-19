import { useState } from 'react'
import logo from '../assets/TLI.svg'
import whatsapp from '../assets/whatsapp.svg'
import Icon from './Icon'
import { INFO } from '../data'

const links = [
  ['Inicio', '#inicio'],
  ['Servicios', '#servicios'],
  ['Nosotros', '#nosotros'],
  ['Clientes', '#marcas'],
  ['Contacto', '#contacto'],
]

export default function Header() {
  const [active, setActive] = useState('#inicio')
  const [open, setOpen] = useState(false)

  const go = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#0B0B0F]/90 backdrop-blur-md">
      <div className="border-b border-white/5 text-xs text-gray-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-2">
          <span className="hidden items-center gap-2 sm:flex">
            <Icon name="pin" className="h-4 w-4 text-[#00F0FF]" />
            <span><b className="text-white">{INFO.address}</b> {INFO.address2}</span>
          </span>
          <span className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href={INFO.tel} className="flex items-center gap-2 py-1 transition-colors duration-200 hover:text-[#00F0FF]"><Icon name="phone" className="h-4 w-4 text-[#00F0FF]" />{INFO.phone}</a>
            <a href={`mailto:${INFO.email}`} className="hidden items-center gap-2 py-1 transition-colors duration-200 hover:text-[#00F0FF] sm:flex"><Icon name="mail" className="h-4 w-4 text-[#00F0FF]" />{INFO.email}</a>
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#inicio" onClick={() => go('#inicio')} className="shrink-0">
          <img src={logo} alt="Tu Lugar Inteligente" className="h-12 w-auto md:h-14" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => go(href)}
              className={`border-b-2 py-1 transition-colors duration-200 hover:text-[#00F0FF] ${
                active === href
                  ? 'border-[#00F0FF] text-[#00F0FF] shadow-[0_6px_10px_-6px_#00F0FF]'
                  : 'border-transparent text-gray-200'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={INFO.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-2 text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-emerald-400/50 active:scale-95 sm:px-5 md:ml-0"
        >
          <img src={whatsapp} alt="" className="h-6 w-6 brightness-0 invert" />
          <span className="text-left text-xs leading-tight">
            <b className="block text-sm">WhatsApp</b>
            <span className="hidden sm:inline">Solicita tu servicio</span>
          </span>
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-500/30 text-[#00F0FF] md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-cyan-500/20 bg-[#0B0B0F] px-4 pb-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => go(href)}
              className={`block border-b border-white/5 py-3.5 text-base ${active === href ? 'text-[#00F0FF]' : 'text-gray-200'}`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
