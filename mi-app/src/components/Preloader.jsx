import { useEffect, useState } from 'react'
import logo from '../assets/TLI.svg'
import { INFO } from '../data'

const lines = [
  'Iniciando sistema',
  'Diagnosticando hardware',
  'Cargando servicios',
  'Conectando con SUNAT',
  'Todo listo',
]

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// En visitas repetidas dentro de la misma sesión, la carga es más corta.
// Se lee una sola vez al cargar el módulo para que el modo estricto de React no lo altere.
const seen = (() => {
  try {
    const value = sessionStorage.getItem('tli-intro') === '1'
    sessionStorage.setItem('tli-intro', '1')
    return value
  } catch {
    return false // almacenamiento bloqueado: se muestra la intro completa
  }
})()

// Pantalla de carga: avanza hasta que la página termina de cargar y luego se abre como un telón
export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') // loading -> leaving -> done

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('is-loading')
    const minTime = reduced() ? 0 : seen ? 700 : 2200
    const start = performance.now()
    let loaded = document.readyState === 'complete'
    const onLoad = () => (loaded = true)
    addEventListener('load', onLoad)

    let value = 0
    let raf
    let timer
    const tick = (now) => {
      const elapsed = now - start
      // Sin carga completa nunca pasa de 90 %; al terminar, sube hasta 100 respetando el tiempo mínimo
      const target = loaded ? Math.min(100, (elapsed / Math.max(minTime, 1)) * 100) : Math.min(90, (elapsed / Math.max(minTime, 1)) * 90)
      value += (target - value) * 0.12
      if (target === 100 && value > 99.5) value = 100
      setProgress(value)
      if (value < 100) raf = requestAnimationFrame(tick)
      else {
        setPhase('leaving')
        root.classList.remove('is-loading')
        root.classList.add('is-ready')
        timer = setTimeout(() => setPhase('done'), reduced() ? 0 : 1300)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      removeEventListener('load', onLoad)
    }
  }, [])

  if (phase === 'done') return null
  const pct = Math.floor(progress)
  const lineIndex = Math.min(lines.length - 1, Math.floor((progress / 100) * lines.length))

  return (
    <div className={`preloader ${phase === 'leaving' ? 'is-leaving' : ''}`} role="status" aria-live="polite" aria-label={`Cargando ${pct}%`}>
      <div className="preloader-panel preloader-top" />
      <div className="preloader-panel preloader-bottom" />

      <div className="preloader-content">
        <div className="bg-grid absolute inset-0" />
        <div className="preloader-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="relative flex flex-col items-center px-6">
          <div className="preloader-logo relative w-[min(78vw,420px)]">
            <img src={logo} alt="" className="w-full opacity-15" />
            <img src={logo} alt="Tu Lugar Inteligente" className="absolute inset-0 w-full drop-shadow-[0_0_18px_rgba(0,240,255,0.55)]" style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }} />
            <span className="preloader-scan" style={{ left: `${progress}%` }} />
          </div>

          <div className="mt-10 w-[min(78vw,420px)]">
            <div className="flex items-end justify-between font-mono text-xs uppercase tracking-[0.2em] text-[#00F0FF]/80">
              <span className="flex items-center gap-2">
                <span className="caret inline-block h-3 w-1.5 bg-[#00F0FF]" />
                {lines[lineIndex]}
              </span>
              <span className="text-3xl font-bold tabular-nums tracking-normal text-white">{String(pct).padStart(3, '0')}<span className="text-[#00F0FF]">%</span></span>
            </div>
            <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-brand via-[#00F0FF] to-white shadow-[0_0_12px_#00F0FF]" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.35em] text-white/40">+{INFO.years} años de soluciones tecnológicas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
