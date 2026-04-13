'use client'
import { motion } from 'framer-motion'

const PRINCIPLES = [
  {
    num: '01', icon: '⚡',
    title: 'AI-augmented,\nnot AI-dependent',
    desc: 'I use LLMs as a thinking partner — for architecture decisions, debugging, and accelerating output. But I understand what I ship. The code is mine; the leverage is AI.',
  },
  {
    num: '02', icon: '🚢',
    title: 'Ship early,\niterate honestly',
    desc: "I'd rather put something real in front of people and improve it than wait for perfection. Every project I've built started messy and got better by being used.",
  },
  {
    num: '03', icon: '⬛',
    title: 'Full-stack\nownership',
    desc: "I don't hand off problems at the boundary of a layer. From database schema to UI interaction — I own the whole problem and think across the entire stack.",
  },
  {
    num: '04', icon: '🌱',
    title: 'Build things\nthat last',
    desc: "As a Sustainability Ambassador, I think about longevity — in code and in impact. Clean structure, readable logic, and systems that don't need to be thrown away in six months.",
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export default function MyApproach() {
  return (
    <section id="approach" style={{ padding: '80px 48px', position: 'relative', zIndex: 5 }}>

      <div style={{ fontSize: 10, color: '#d4943a', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 12 }}>
        03 — My Approach
      </div>

      <motion.div {...fadeUp(0)} className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 72 }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: -2, lineHeight: 1.05 }}>
          How I<br />think &<br /><span style={{ color: '#2e2c28' }}>build.</span>
        </h2>
        <p style={{ fontSize: 15, color: '#524e48', lineHeight: 1.8, borderLeft: '1px solid #2c2926', paddingLeft: 28 }}>
          I&#39;m not a traditional developer. I use{' '}
          <strong style={{ color: '#8a8580', fontWeight: 500 }}>AI as a core part of my workflow</strong>{' '}
          — not to skip the hard parts, but to move faster, think clearer, and ship things that actually work.
          Here&#39;s what drives how I build.
        </p>
      </motion.div>

      <div className="principles-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 72 }}>
        {PRINCIPLES.map((p, i) => (
          <motion.div key={p.num} {...fadeUp(0.1 + i * 0.05)}
            style={{
              background: '#0f0d0c', border: '1px solid #1e1c18',
              padding: '40px 36px', position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s, background 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#d4943a33'
              e.currentTarget.style.background = '#131210'
              const glow = e.currentTarget.querySelector('.card-glow') as HTMLElement
              if (glow) glow.style.opacity = '1'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1e1c18'
              e.currentTarget.style.background = '#0f0d0c'
              const glow = e.currentTarget.querySelector('.card-glow') as HTMLElement
              if (glow) glow.style.opacity = '0'
            }}
          >
            <div className="card-glow" style={{
              position: 'absolute', top: -60, right: -60,
              width: 180, height: 180,
              background: 'radial-gradient(circle, #d4943a0d, transparent 70%)',
              borderRadius: '50%', opacity: 0, transition: 'opacity 0.4s',
              pointerEvents: 'none',
            }} />
            <div style={{ fontSize: 11, color: '#2e2c28', letterSpacing: '3px', marginBottom: 24, fontWeight: 700 }}>
              {p.num}
            </div>
            <div style={{
              width: 36, height: 36, border: '1px solid #2c2926', borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, marginBottom: 20, color: '#d4943a',
            }}>
              {p.icon}
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12, lineHeight: 1.2, whiteSpace: 'pre-line' }}>
              {p.title}
            </div>
            <p style={{ fontSize: 13, color: '#524e48', lineHeight: 1.75 }}>
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.3)} style={{
        border: '1px solid #1e1c18', borderRadius: 2, padding: '36px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 40, background: '#0f0d0c',
      }}>
        <p style={{ fontSize: 'clamp(14px, 2vw, 20px)', fontWeight: 700, letterSpacing: -0.5, color: '#3a3730', lineHeight: 1.4, maxWidth: 600 }}>
          &#34;I&#39;m a 2nd-year CS student with{' '}
          <span style={{ color: '#d4943a' }}>no fancy title</span>{' '}
          — just a builder who ships real things and isn&#39;t afraid to show the work.&#34;
        </p>
        <a
          href="#work"
          style={{
            flexShrink: 0, background: 'transparent',
            border: '1px solid #2c2926', color: '#524e48',
            fontSize: 11, fontWeight: 600, padding: '12px 24px', borderRadius: 2,
            letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4943a55'; e.currentTarget.style.color = '#d4943a' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#2c2926'; e.currentTarget.style.color = '#524e48' }}
        >
          See the work ↓
        </a>
      </motion.div>
    </section>
  )
}
