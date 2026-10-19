import Icon from './Icon'
import bannerImg from '../assets/banner.png'
import { INFO } from '../data'

const list = ['Reparaciones', 'Mantenimientos', 'Cotizaciones', 'Soporte empresarial']

export default function CtaBanner() {
  return (
    <section id="contacto" className="px-4 py-10 sm:px-6">
      <div className="relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-[#0B0B0F] text-white md:flex-row">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#00F0FF]/15 blur-[100px]" />
        <div className="relative z-10 flex flex-1 flex-col gap-8 p-8 md:flex-row md:items-center md:p-12">
          <div className="flex-1">
            <p className="text-sm font-semibold text-sky-300">¿Necesitas ayuda ahora?</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">
              Solicita tu diagnóstico
              <br />
              <span className="text-[#00F0FF] [text-shadow:0_0_18px_rgba(0,240,255,0.6)]">por WhatsApp</span>
            </h2>
            <p className="mt-3 max-w-sm text-sm text-white/80">Cuéntanos qué necesitas y te responderemos lo antes posible.</p>
            <a
              href={INFO.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-wa px-7 py-3 text-sm font-semibold transition hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Escríbenos ahora
            </a>
          </div>
          <ul className="space-y-3 text-sm md:border-l md:border-white/20 md:pl-8">
            {list.map((l) => (
              <li key={l} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#00F0FF] text-[#00F0FF]">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-56 md:h-auto md:w-[42%]">
          <img src={bannerImg} alt="Laptop vista superior" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-transparent to-[#0B0B0F]/40 md:bg-gradient-to-r md:from-[#0B0B0F] md:via-[#0B0B0F]/20 md:to-transparent" />
        </div>
      </div>
    </section>
  )
}
