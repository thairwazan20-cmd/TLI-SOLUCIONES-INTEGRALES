import Icon from './Icon'
import { INFO } from '../data'
import repair from '../assets/mantenimiento-laptops.png'
import apple from '../assets/apple.png'
import optimizacion from '../assets/optimizacion.png'
import redes from '../assets/redes.png'
import camara from '../assets/camara.png'

const services = [
  { icon: 'laptop', title: 'Reparación de PC y Laptops', text: 'Solucionamos problemas de hardware y software. Cambio de piezas, actualización y más.', img: repair },
  { icon: 'apple', title: 'Servicio Técnico Apple', text: 'Especialistas en Mac, iMac, iPhone y iPad. Migración de datos, instalación y mantenimiento.', img: apple },
  { icon: 'gear', title: 'Mantenimiento y Optimización', text: 'Mejora el rendimiento de tus equipos con limpieza, actualización y configuración.', img: optimizacion },
  { icon: 'network', title: 'Redes y Cableado', text: 'Instalación y configuración de redes, cableado estructurado, WIFI y soluciones empresariales.', img: redes },
  { icon: 'camera', title: 'Cámaras de Seguridad', text: 'Instalación y configuración de sistemas de videovigilancia (DVR/NVR). Monitoreo desde tu celular.', img: camara },
]

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-widest text-brand">Nuestros servicios</p>
      <h2 className="mt-2 text-3xl font-extrabold text-navy">Soluciones completas en un solo lugar</h2>
      <div className="mt-2 h-1 w-10 rounded bg-brand" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s) => (
          <article key={s.title} className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
            <img src={s.img} alt={s.title} className="h-32 w-full object-cover" />
            <div className="flex flex-1 flex-col p-5 text-center">
              <Icon name={s.icon} className="mx-auto h-7 w-7 text-navy" />
              <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-xs text-slate-500">{s.text}</p>
              <a href={INFO.wa} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-1 text-xs font-semibold text-brand">
                Más información <Icon name="arrow" className="h-3 w-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
