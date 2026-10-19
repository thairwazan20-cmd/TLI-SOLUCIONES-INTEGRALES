const brands = ['Apple', 'DELL', 'HP', 'Lenovo', 'ASUS', 'acer', 'MSI', 'SAMSUNG']

export default function Brands() {
  return (
    <section id="marcas" className="bg-slate-50 py-12 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-brand">Trabajamos con las mejores marcas</p>
      <h2 className="mt-2 text-2xl font-extrabold text-navy">Somos especialistas en las principales marcas</h2>
      <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {brands.map((b) => (
          <span key={b} className="text-xl font-bold tracking-wide text-slate-500">{b}</span>
        ))}
      </div>
    </section>
  )
}
