import { useEffect, useRef, useState } from 'react'

const prefersMotion = () =>
  typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const finePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

// Hace aparecer el contenido cuando entra en pantalla
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...props}>
      {children}
    </Tag>
  )
}

// Tarjeta que se inclina en 3D y se ilumina donde está el cursor
export function Spotlight({ as: Tag = 'div', tilt = 8, className = '', children, ...props }) {
  const ref = useRef(null)
  const move = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (tilt && finePointer() && prefersMotion()) {
      const rx = ((y / r.height) - 0.5) * -tilt
      const ry = ((x / r.width) - 0.5) * tilt
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
  }
  const leave = () => {
    ref.current.style.transform = ''
  }
  return (
    <Tag ref={ref} onMouseMove={move} onMouseLeave={leave} className={`spotlight ${className}`} {...props}>
      {children}
    </Tag>
  )
}

// Número que cuenta hacia arriba al aparecer
export function Counter({ to, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(prefersMotion() ? 0 : to)
  useEffect(() => {
    if (!prefersMotion()) return
    const el = ref.current
    let raf
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])
  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString('es-PE')}
      {suffix}
    </span>
  )
}

// Texto que se escribe y borra solo
export function Typewriter({ words, className = '' }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState(words[0])
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    if (!prefersMotion()) return
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), 1800)
    else if (deleting && text === '') {
      t = setTimeout(() => {
        setDeleting(false)
        setI((n) => n + 1)
      }, 200)
    } else {
      t = setTimeout(() => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)), deleting ? 40 : 80)
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words])
  return (
    <span className={className}>
      {text}
      <span className="caret ml-0.5 inline-block w-[3px] translate-y-1 bg-current" style={{ height: '0.9em' }} />
    </span>
  )
}

// Red de partículas animada que reacciona al cursor
export function Particles({ className = '', density = 0.00009 }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const mouse = { x: -9999, y: -9999 }
    let pts = []
    let raf
    let w = 0
    let h = 0
    const dpr = Math.min(devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.max(30, Math.min(120, Math.round(w * h * density)))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }))
    }
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => {
      mouse.x = mouse.y = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 120 && d > 0) {
          p.x += (dx / d) * 1.5
          p.y += (dy / d) * 1.5
        }
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(0,240,255,${(1 - d / 130) * 0.35})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (dm < 200) {
          ctx.strokeStyle = `rgba(0,240,255,${(1 - dm / 200) * 0.6})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
        ctx.fillStyle = 'rgba(0,240,255,0.9)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }
      if (animate) raf = requestAnimationFrame(draw)
    }

    const animate = prefersMotion()
    resize()
    const parent = canvas.parentElement
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    addEventListener('resize', resize)
    draw() // sin animación queda un solo cuadro estático
    return () => {
      cancelAnimationFrame(raf)
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
      removeEventListener('resize', resize)
    }
  }, [density])
  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />
}
