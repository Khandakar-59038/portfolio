'use client'
import { useEffect, useRef } from 'react'
import { SPOTLIGHT_KEYWORDS } from '@/lib/constants'

export default function SpotlightText() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function onMouseMove(e: MouseEvent) {
      const wrapper = container!.closest('.hero-wrapper')
      const rect = wrapper?.getBoundingClientRect()
      if (!rect) return
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top + window.scrollY
      container!.style.setProperty('--cx', cx + 'px')
      container!.style.setProperty('--cy', cy + 'px')
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const pool: string[] = []
  while (pool.length < 320) pool.push(...SPOTLIGHT_KEYWORDS)

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start',
        padding: '24px 16px',
        color: '#d4943a',
        fontSize: 12, fontWeight: 700,
        letterSpacing: '2px', textTransform: 'uppercase',
        lineHeight: 3,
        userSelect: 'none', pointerEvents: 'none',
        zIndex: 4,
        opacity: 0.28,
        WebkitMaskImage:
          'radial-gradient(circle 240px at var(--cx, -999px) var(--cy, -999px), black 0%, transparent 100%)',
        maskImage:
          'radial-gradient(circle 240px at var(--cx, -999px) var(--cy, -999px), black 0%, transparent 100%)',
      }}
    >
      {pool.map((word, i) => (
        <span key={i} style={{ padding: '0 16px', whiteSpace: 'nowrap' }}>
          {word}
        </span>
      ))}
    </div>
  )
}
