import { INFO } from '../data'

const list = ['Reparaciones', 'Mantenimientos', 'Cotizaciones', 'Soporte empresarial']

export default function CtaBanner() {
  return (
    <section id="contacto" className="bg-gradient-to-r from-[#030b1d] via-navy to-[#26456f] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm text-brand">¿Necesitas ayuda ahora?</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Solicita tu diagnóstico
            <br />
            <span className="text-brand">por WhatsApp</span>
          </h2>
          <p className="mt-3 max-w-sm text-sm text-white/80">Cuéntanos qué necesitas y te responderemos lo antes posible.</p>
          <a href={INFO.wa2} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-wa px-7 py-3 text-sm font-semibold hover:brightness-110">
            Escríbenos ahora
          </a>
        </div>
        <ul className="space-y-3 border-white/20 text-sm md:border-l md:pl-10">
          {list.map((l) => (
            <li key={l}>✔ {l}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
