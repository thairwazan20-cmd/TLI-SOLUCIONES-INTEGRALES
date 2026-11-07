import { useEffect, useRef, useState } from 'react'

const prefersMotion = () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = () => window.matchMedia('(pointer: fine)').matches

// Cursor personalizado: punto, anillo con retardo, estela de luz, chispas al hacer clic y botones magnéticos
export function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)
  const glow = useRef(null)
  const canvas = useRef(null)
  const [enabled] = useState(() => finePointer() && prefersMotion())

  useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    root.classList.add('custom-cursor')
    const ctx = canvas.current.getContext('2d')
    const dpr = Math.min(devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.current.width = innerWidth * dpr
      canvas.current.height = innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    let mx = innerWidth / 2
    let my = innerHeight / 2
    let rx = mx
    let ry = my
    let gx = mx
    let gy = my
    let visible = false
    let state = ''
    let text = ''
    let pressed = false
    let magnet = null
    const trail = []
    const sparks = []
    let raf

    const setState = (s, t = '') => {
      if (s === state && t === text) return
      state = s
      text = t
      ring.current.dataset.state = s
      dot.current.dataset.state = s
      label.current.textContent = t
    }

    const releaseMagnet = () => {
      if (!magnet) return
      magnet.style.translate = ''
      magnet = null
    }

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) {
        visible = true
        root.classList.add('cursor-visible')
      }
      const t = e.target
      const custom = t.closest?.('[data-cursor]')
      if (t.closest?.('input, textarea, select, [contenteditable="true"]')) setState('text')
      else if (custom) setState('view', custom.dataset.cursor)
      else if (t.closest?.('a, button, label, [role="button"]')) setState('hover')
      else setState('')

      // Efecto magnético: el elemento se desplaza un poco hacia el cursor
      const m = t.closest?.('[data-magnetic]')
      if (m !== magnet) releaseMagnet()
      if (m) {
        magnet = m
        const r = m.getBoundingClientRect()
        const dx = mx - (r.left + r.width / 2)
        const dy = my - (r.top + r.height / 2)
        m.style.translate = `${dx * 0.25}px ${dy * 0.35}px`
      }
    }
    const onLeave = () => {
      visible = false
      root.classList.remove('cursor-visible')
      releaseMagnet()
    }
    const onDown = () => {
      pressed = true
      ring.current.dataset.pressed = '1'
      const n = 14
      for (let i = 0; i < n; i++) {
        const a = (Math.PI * 2 * i) / n + Math.random() * 0.4
        const v = 2 + Math.random() * 3
        sparks.push({ x: mx, y: my, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1 })
      }
      sparks.push({ x: mx, y: my, ring: true, life: 1 })
    }
    const onUp = () => {
      pressed = false
      ring.current.dataset.pressed = ''
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      gx += (mx - gx) * 0.07
      gy += (my - gy) * 0.07
      dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`
      ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      glow.current.style.transform = `translate3d(${gx - 300}px, ${gy - 300}px, 0)`

      ctx.clearRect(0, 0, innerWidth, innerHeight)
      if (visible) trail.push({ x: mx, y: my })
      if (trail.length > 22 || (!visible && trail.length)) trail.shift()
      if (trail.length > 2 && state !== 'text') {
        ctx.lineCap = 'round'
        for (let i = 1; i < trail.length; i++) {
          const p = i / trail.length
          ctx.strokeStyle = `rgba(0,240,255,${p * 0.55})`
          ctx.lineWidth = p * (pressed ? 6 : 4)
          ctx.beginPath()
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y)
          ctx.lineTo(trail[i].x, trail[i].y)
          ctx.stroke()
        }
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.life -= s.ring ? 0.04 : 0.03
        if (s.life <= 0) {
          sparks.splice(i, 1)
          continue
        }
        if (s.ring) {
          ctx.strokeStyle = `rgba(0,240,255,${s.life * 0.8})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(s.x, s.y, (1 - s.life) * 60, 0, Math.PI * 2)
          ctx.stroke()
        } else {
          s.x += s.vx
          s.y += s.vy
          s.vx *= 0.92
          s.vy *= 0.92
          ctx.fillStyle = s.life > 0.6 ? `rgba(255,255,255,${s.life})` : `rgba(0,240,255,${s.life})`
          ctx.beginPath()
          ctx.arc(s.x, s.y, 2.2 * s.life + 0.4, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(loop)
    }

    addEventListener('mousemove', onMove, { passive: true })
    addEventListener('mousedown', onDown)
    addEventListener('mouseup', onUp)
    addEventListener('resize', resize)
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      root.classList.remove('custom-cursor', 'cursor-visible')
      releaseMagnet()
      removeEventListener('mousemove', onMove)
      removeEventListener('mousedown', onDown)
      removeEventListener('mouseup', onUp)
      removeEventListener('resize', resize)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div aria-hidden="true" className="cursor-layer">
      <div ref={glow} className="cursor-glow" />
      <canvas ref={canvas} className="cursor-canvas" />
      <div ref={ring} className="cursor-ring">
        <span ref={label} className="cursor-label" />
      </div>
      <div ref={dot} className="cursor-dot" />
    </div>
  )
}

// Barra de progreso de lectura en la parte superior
export function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - innerHeight
      ref.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
    }
  }, [])
  return <div ref={ref} aria-hidden="true" className="scroll-progress" />
}

// Botón para volver arriba con un anillo que muestra cuánto se ha recorrido
export function BackToTop() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setShow(scrollY > 600)
      ref.current?.style.setProperty('--p', (max > 0 ? scrollY / max : 0).toFixed(3))
    }
    const first = requestAnimationFrame(onScroll)
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(first)
      removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Volver arriba"
      tabIndex={show ? 0 : -1}
      data-magnetic
      onClick={() => window.scrollTo({ top: 0, behavior: prefersMotion() ? 'smooth' : 'auto' })}
      className={`back-to-top ${show ? 'is-shown' : ''}`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="21" fill="none" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" pathLength="1" strokeDasharray="1" style={{ strokeDashoffset: 'calc(1 - var(--p, 0))' }} />
      </svg>
      <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

// Cinta de texto gigante que se desplaza sin fin
export function Ticker({ items, reverse = false, outline = false, starClass = 'text-[#00F0FF]', className = '' }) {
  const row = items.flatMap((t) => [t, '✦'])
  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden="true">
      <div className={`marquee-track flex w-max items-center gap-8 whitespace-nowrap pr-8 ${reverse ? 'marquee-reverse' : ''}`}>
        {[...row, ...row].map((t, i) => (
          <span key={i} className={t === '✦' ? `text-[0.6em] ${starClass}` : outline ? 'text-outline' : ''}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
