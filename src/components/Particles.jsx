import React, { useRef, useEffect } from 'react'

// Simple GPU-friendly particles (stars/sparkles)
export default function Particles({ density = 120, color = 'rgba(255,255,255,0.6)', className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      init()
    }

    const createParticle = () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.3,
      a: Math.random() * Math.PI * 2,
      s: Math.random() * 0.4 + 0.1,
      o: Math.random() * 0.6 + 0.2,
      twinkle: Math.random() * 0.02 + 0.01,
    })

    const init = () => {
      const count = Math.min(density, Math.floor((w * h) / 12000))
      particlesRef.current = new Array(count).fill(0).map(createParticle)
    }

    init()

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particlesRef.current) {
        p.y -= p.s
        p.x += Math.sin(p.a) * 0.1
        p.a += 0.002
        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        p.o += (Math.random() - 0.5) * p.twinkle
        p.o = Math.max(0.1, Math.min(0.9, p.o))
        ctx.globalAlpha = p.o
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [density, color])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}
