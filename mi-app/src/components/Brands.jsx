import apple from '../assets/apple.svg'
import dell from '../assets/dell.svg'
import hp from '../assets/hp.svg'
import lenovo from '../assets/lenovo.svg'
import asus from '../assets/asus.svg'
import acer from '../assets/acer.svg'
import msi from '../assets/msi.svg'

const brands = [
  ['Apple', apple],
  ['Dell', dell],
  ['HP', hp],
  ['Lenovo', lenovo],
  ['ASUS', asus],
  ['Acer', acer],
  ['MSI', msi],
]

export default function Brands() {
  return (
    <section id="marcas" className="overflow-hidden bg-[#0B0B0F] py-16 text-center text-white">
      <p className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Trabajamos con las mejores marcas</p>
      <h2 className="mt-2 px-6 text-2xl font-extrabold">Somos especialistas en las principales marcas</h2>
      <div className="marquee mt-10">
        <div className="marquee-track flex w-max items-center gap-16">
          {[...brands, ...brands].map(([name, src], i) => (
            <img
              key={`${name}-${i}`}
              src={src}
              alt={i < brands.length ? name : ''}
              className="h-12 w-auto max-w-[9rem] object-contain opacity-70 brightness-0 invert transition-all duration-300 hover:scale-110 hover:opacity-100 hover:drop-shadow-[0_0_10px_#00F0FF] md:h-14"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
