import logo from '../assets/TLI.svg'
import { INFO, SOCIALS } from '../data'

export default function Footer() {
  return (
    <footer className="bg-navy text-sm text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
        <img src={logo} alt="Tu Lugar Inteligente" className="h-20 w-auto self-start" />
        <div>
          <h4 className="mb-3 font-bold text-white">Información de contacto</h4>
          <p>📍 {INFO.address}</p>
          <p className="pl-6 text-xs">{INFO.address2}</p>
          <a href={INFO.wa} className="mt-2 block">📞 {INFO.phone}</a>
          <a href={INFO.wa2} className="block">📞 {INFO.phone2}</a>
          <a href={`mailto:${INFO.email}`} className="block break-all">✉ {INFO.email}</a>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">Horario de atención</h4>
          <p>Lunes a Sábado</p>
          <p>9:00 a.m. – 8:00 p.m.</p>
          <p className="mt-2">Domingos y feriados (previa consulta)</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">Síguenos</h4>
          <ul className="space-y-1">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © 2026 Tu Lugar Inteligente. Todos los derechos reservados.
      </div>
    </footer>
  )
}
