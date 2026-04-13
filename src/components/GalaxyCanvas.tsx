'use client'
import { useEffect, useRef } from 'react'
import { colors } from '@/lib/constants'

interface Star {
  x: number; y: number; r: number; alpha: number
  speed: number; twinkleSpeed: number; twinklePhase: number
  color: string
}
interface Nebula {
  x: number; y: number; r: number; alpha: number
  speed: number; color: string
}

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let W = 0, H = 0
    let stars: Star[] = [], nebulae: Nebula[] = []
    let targetOffX = 0, targetOffY = 0
    let offX = 0, offY = 0
    let t = 0
    let rafId: number
    const isMobile = window.matchMedia('(hover: none)').matches

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    function init() {
      W = canvas!.width  = window.innerWidth
      H = canvas!.height = window.innerHeight
      stars = []
      nebulae = []

      const starCount  = isMobile ? 140 : 280
      const clusterCount = isMobile ? 20 : 40
      const nebulaCount  = isMobile ? 2  : 5

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: rand(0, W), y: rand(0, H),
          r: rand(0.3, 1.2), alpha: rand(0.08, 0.35),
          speed: rand(0.2, 0.8),
          twinkleSpeed: rand(0.004, 0.015),
          twinklePhase: rand(0, Math.PI * 2),
          color: Math.random() > 0.85 ? colors.accent : colors.textPrimary,
        })
      }
      for (let i = 0; i < clusterCount; i++) {
        stars.push({
          x: rand(0, W), y: rand(0, H),
          r: rand(1.2, 2.5), alpha: rand(0.3, 0.7),
          speed: rand(0.1, 0.4),
          twinkleSpeed: rand(0.006, 0.02),
          twinklePhase: rand(0, Math.PI * 2),
          color: Math.random() > 0.6 ? colors.accent : Math.random() > 0.5 ? '#e8c88a' : colors.textPrimary,
        })
      }
      for (let i = 0; i < nebulaCount; i++) {
        nebulae.push({
          x: rand(0, W), y: rand(0, H),
          r: rand(120, 300), alpha: rand(0.018, 0.055),
          speed: rand(0.05, 0.2),
          color: Math.random() > 0.5 ? colors.accentDark : '#5a3a10',
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      offX += (targetOffX - offX) * 0.06
      offY += (targetOffY - offY) * 0.06

      nebulae.forEach(n => {
        const px = n.x + offX * n.speed * 0.5
        const py = n.y + offY * n.speed * 0.5
        const g = ctx.createRadialGradient(px, py, 0, px, py, n.r)
        const hex = Math.round(n.alpha * 255).toString(16).padStart(2, '0')
        g.addColorStop(0, n.color + hex)
        g.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(px, py, n.r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })

      stars.forEach(s => {
        const twinkle = Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.15
        const a = Math.max(0.02, Math.min(1, s.alpha + twinkle))
        const px = ((s.x + offX * s.speed) % W + W) % W
        const py = ((s.y + offY * s.speed) % H + H) % H

        if (s.r > 1.4) {
          const glow = ctx.createRadialGradient(px, py, 0, px, py, s.r * 4)
          glow.addColorStop(0, s.color + '44')
          glow.addColorStop(1, 'transparent')
          ctx.beginPath()
          ctx.arc(px, py, s.r * 4, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.globalAlpha = a
        ctx.fillStyle = s.color
        ctx.fill()
        ctx.globalAlpha = 1
      })

      t++
      rafId = requestAnimationFrame(draw)
    }

    function handleMouseMove(e: MouseEvent) {
      const normX = (e.clientX / W - 0.5) * 2
      const normY = (e.clientY / H - 0.5) * 2
      targetOffX = -normX * 35
      targetOffY = -normY * 25
    }

    function handleScroll() {
      targetOffY = -window.scrollY * 0.15
    }

    init()
    draw()
    window.addEventListener('resize', init)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  )
}
