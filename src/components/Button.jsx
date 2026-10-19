export default function Button({ href = '#contact', children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-block rounded-lg bg-gradient-to-r from-neon to-neon2 px-6 py-3 text-sm font-bold text-ink transition hover:scale-105 glow-box ${className}`}
    >
      {children}
    </a>
  )
}
