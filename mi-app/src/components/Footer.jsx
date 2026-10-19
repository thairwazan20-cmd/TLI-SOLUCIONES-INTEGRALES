import logo from '../assets/TLI.svg'
import whatsapp from '../assets/whatsapp.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import tiktok from '../assets/tiktok.svg'
import Icon from './Icon'

const socials = [
  { name: 'WhatsApp', handle: '929 733 839', href: 'https://wa.me/51929733839', src: whatsapp },
  { name: 'Instagram', handle: '@tulugar_inteligente', href: 'https://www.instagram.com/tulugar_inteligente', src: instagram },
  { name: 'Facebook', handle: 'Tu Lugar Inteligente', href: 'https://www.facebook.com/search/top?q=Tu%20Lugar%20Inteligente', src: facebook },
  { name: 'TikTok', handle: '@tu.lugar.inteligente', href: 'https://www.tiktok.com/@tu.lugar.inteligente', src: tiktok },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-sm text-white/75">
      <div className="h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src={logo} alt="Tu Lugar Inteligente" className="h-14 w-auto" />
          <p className="mt-4 max-w-xs">Brindamos Soluciones Informáticas</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-white">Contacto</h4>
          <p className="flex gap-2"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-[#00F0FF]" />Mercado Qatuna Local N° 234, Av. Isabel Chimpu Ocllo Cdra. 10 S/N - Carabayllo</p>
          <a href="https://wa.me/51929733839" className="flex gap-2 transition hover:text-[#00F0FF]"><Icon name="phone" className="h-4 w-4 text-[#00F0FF]" />Informes: 929 733 839</a>
          <a href="https://wa.me/51929733839" className="flex gap-2 transition hover:text-[#00F0FF]"><Icon name="phone" className="h-4 w-4 text-[#00F0FF]" />Cotizaciones: 929 733 839</a>
          <a href="mailto:ventas.tulugarinteligente@gmail.com" className="flex gap-2 break-all transition hover:text-[#00F0FF]"><Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-[#00F0FF]" />ventas.tulugarinteligente@gmail.com</a>
        </div>

        <div>
          <h4 className="mb-4 font-bold text-white">Síguenos</h4>
          <ul className="grid gap-3 sm:grid-cols-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#00F0FF]/40 bg-white/5 shadow-[0_0_10px_rgba(0,240,255,0.2)] transition duration-300 group-hover:scale-110 group-hover:bg-[#00F0FF] group-hover:shadow-[0_0_25px_#00F0FF]">
                    <img src={s.src} alt={s.name} className="h-5 w-5 brightness-0 invert transition group-hover:invert-0" />
                  </span>
                  <span className="text-xs transition group-hover:text-[#00F0FF]">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © 2026 Tu Lugar Inteligente. Todos los derechos reservados.
      </div>
    </footer>
  )
}
