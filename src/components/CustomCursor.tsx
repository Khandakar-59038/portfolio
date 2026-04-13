'use client'
import { useEffect, useRef } from 'react'
import { colors } from '@/lib/constants'

const BASE_RING = 18
const BASE_ARM  = 22

export default function CustomCursor() {
  const hRef    = useRef<HTMLDivElement>(null)
  const vRef    = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    const h    = hRef.current!
    const v    = vRef.current!
    const dot  = dotRef.current!
    const ring = ringRef.current!

    let mx = -999, my = -999
    let rx = -999, ry = -999
    let isOnButton = false
    let activeEl: Element | null = null
    let rafId: number

    function moveCursor(x: number, y: number) {
      h.style.left   = x + 'px'
      h.style.top    = y + 'px'
      v.style.left   = x + 'px'
      v.style.top    = y + 'px'
      dot.style.left = x + 'px'
      dot.style.top  = y + 'px'
    }

    function animateRing() {
      if (isOnButton && activeEl) {
        const r = activeEl.getBoundingClientRect()
        rx += (r.left + r.width  / 2 - rx) * 0.14
        ry += (r.top  + r.height / 2 - ry) * 0.14
      } else {
        rx += (mx - rx) * 0.1
        ry += (my - ry) * 0.1
      }
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(animateRing)
    }

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX; my = e.clientY
      moveCursor(mx, my)
    }

    function onMouseEnter(e: MouseEvent) {
      const el = e.currentTarget as HTMLElement
      isOnButton = true
      activeEl   = el
      const r      = el.getBoundingClientRect()
      const styles = window.getComputedStyle(el)
      const isPrimary = el.dataset.cursorType === 'primary'

      ring.style.width        = (r.width  + 12) + 'px'
      ring.style.height       = (r.height + 12) + 'px'
      ring.style.borderRadius = styles.borderRadius
      ring.style.transform    = 'translate(-50%, -50%) rotate(0deg)'

      if (isPrimary) {
        ring.style.borderColor = colors.accent
        ring.style.background  = colors.accent + '18'
        ring.style.boxShadow   = `0 0 18px ${colors.accent}44`
      } else {
        ring.style.borderColor = colors.textPrimary + '99'
        ring.style.background  = colors.textPrimary + '0d'
        ring.style.boxShadow   = `0 0 14px ${colors.textPrimary}22`
      }

      h.style.opacity   = '0'
      v.style.opacity   = '0'
      dot.style.opacity = '0'
    }

    function onMouseLeave() {
      isOnButton = false
      activeEl   = null
      ring.style.width        = BASE_RING + 'px'
      ring.style.height       = BASE_RING + 'px'
      ring.style.borderRadius = '0'
      ring.style.transform    = 'translate(-50%, -50%) rotate(45deg)'
      ring.style.borderColor  = colors.accent + '88'
      ring.style.background   = 'transparent'
      ring.style.boxShadow    = 'none'
      h.style.opacity   = '1'
      v.style.opacity   = '1'
      dot.style.opacity = '1'
    }

    const targets = document.querySelectorAll('button, a, [data-cursor]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter as EventListener)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    document.addEventListener('mousemove', onMouseMove)
    animateRing()

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouseMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter as EventListener)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  const sharedStyle: React.CSSProperties = {
    position: 'fixed', pointerEvents: 'none', zIndex: 9999,
    background: colors.accent,
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.2s',
  }

  return (
    <>
      <div ref={hRef} data-testid="cursor-h" style={{
        ...sharedStyle, width: BASE_ARM, height: 1,
      }} />
      <div ref={vRef} data-testid="cursor-v" style={{
        ...sharedStyle, width: 1, height: BASE_ARM,
      }} />
      <div ref={dotRef} data-testid="cursor-dot" style={{
        ...sharedStyle, width: 4, height: 4,
        transform: 'translate(-50%, -50%) rotate(45deg)',
      }} />
      <div ref={ringRef} data-testid="cursor-ring" style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9998,
        width: BASE_RING, height: BASE_RING,
        border: `1.5px solid ${colors.accent}88`,
        background: 'transparent',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        transition: [
          'width 0.28s cubic-bezier(.4,0,.2,1)',
          'height 0.28s cubic-bezier(.4,0,.2,1)',
          'border-radius 0.28s cubic-bezier(.4,0,.2,1)',
          'transform 0.32s cubic-bezier(.4,0,.2,1)',
          'border-color 0.2s',
          'background 0.2s',
          'box-shadow 0.2s',
        ].join(', '),
      }} />
    </>
  )
}
