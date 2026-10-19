import Button from './Button'

const links = [
  ['Services', '#services'],
  ['Solutions', '#solutions'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass border-x-0 border-t-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-extrabold tracking-widest text-neon glow-text md:text-base">
          TU LUGAR INTELIGENTE
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-white/70 transition hover:text-neon hover:glow-text">
              {label}
            </a>
          ))}
        </nav>
        <Button className="hidden !py-2 sm:inline-block">Solicitar Cotización</Button>
      </div>
    </header>
  )
}
