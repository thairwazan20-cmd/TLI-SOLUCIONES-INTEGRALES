const items = [
  { stat: '99.9%', title: 'Reliability', text: 'Sistemas estables y soporte continuo.' },
  { stat: '500+', title: 'Innovation', text: 'Proyectos con ideas que van un paso adelante.' },
  { stat: '24/7', title: 'Next-Gen Tech', text: 'Tecnología de última generación, siempre al día.' },
]

export default function WhyUs() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl bg-gradient-to-b from-neon/60 to-transparent p-px">
            <div className="h-full rounded-2xl bg-ink p-8 text-center">
              <p className="text-4xl font-extrabold text-neon glow-text">{i.stat}</p>
              <h3 className="mt-3 font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-white/60">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
