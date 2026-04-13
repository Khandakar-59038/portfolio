'use client'
import { motion } from 'framer-motion'
import projects from '@/data/projects.json'

const SKILLS = {
  highlighted: ['PHP','JavaScript','MySQL','HTML5 / CSS3','Python','MVC / OOP','Git / GitHub','REST APIs','Claude Pro','GitHub Copilot'],
  regular:     ['WCAG2','Flexbox','bcrypt / Security','Cursor AI','VS Code','SQL Injection Prev.'],
}

const PLACEHOLDER_COUNT = 2

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export default function WhatIBuild() {
  const featured = projects.find(p => p.featured)
  const rest     = projects.filter(p => !p.featured)

  return (
    <section id="work" style={{ padding: '80px 48px', position: 'relative', zIndex: 5 }}>

      {/* Header */}
      <motion.div {...fadeUp(0)}>
        <div style={{ fontSize: 10, color: '#d4943a', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 12 }}>
          02 — What I Build
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: -2, marginBottom: 8 }}>
          Real things.<br />Shipped.
        </h2>
        <p style={{ fontSize: 14, color: '#524e48', maxWidth: 420, lineHeight: 1.6, marginBottom: 56 }}>
          Projects driven by curiosity and AI as a core tool — not an afterthought. Each one solves a real problem.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 64 }}>

        {/* Featured card */}
        {featured && (
          <motion.div {...fadeUp(0.1)} className="card-featured" style={{
            gridColumn: '1 / -1',
            background: '#131210', border: '1px solid #2c2926', borderRadius: 4,
            overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr',
            transition: 'border-color 0.25s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#d4943a55')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#2c2926')}
          >
            {/* Video preview */}
            <div style={{
              background: '#0a0908', minHeight: 260,
              position: 'relative', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <video
                src={featured.video}
                autoPlay muted loop playsInline
                style={{ width: '90%', borderRadius: 3, border: '1px solid #2c2926', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(circle at 30% 50%, #d4943a0a, transparent 60%)',
              }} />
            </div>

            {/* Card body */}
            <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#d4943a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 16 }}>
                <div style={{ width: 4, height: 4, background: '#d4943a', borderRadius: '50%' }} />
                {featured.tag}
              </div>
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>
                {featured.title}
              </div>
              <p style={{ fontSize: 13, color: '#524e48', lineHeight: 1.7, marginBottom: 24 }}>
                {featured.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
                {featured.tech.map(t => (
                  <span key={t} style={{
                    background: '#1e1c18', border: '1px solid #2c2926',
                    color: '#7a7570', fontSize: 10, padding: '4px 10px', borderRadius: 2,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href={featured.links.live} data-cursor-type="primary" style={{
                  background: '#d4943a', color: '#0c0c0b',
                  fontSize: 11, fontWeight: 700, padding: '8px 18px', borderRadius: 2,
                  letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none',
                }}>
                  View Project
                </a>
                <a href={featured.links.github} target="_blank" rel="noopener noreferrer" style={{
                  border: '1px solid #2c2926', color: '#524e48',
                  fontSize: 11, padding: '8px 18px', borderRadius: 2,
                  letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none',
                }}>
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Non-featured projects */}
        {rest.map((p, i) => (
          <motion.div key={p.id} {...fadeUp(0.15 + i * 0.05)} style={{
            background: '#131210', border: '1px solid #2c2926', borderRadius: 4, padding: '32px 36px',
          }}>
            <div style={{ fontSize: 10, color: '#d4943a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>
              {p.tag}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>{p.title}</div>
            <p style={{ fontSize: 13, color: '#524e48', lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tech.map(t => (
                <span key={t} style={{ background: '#1e1c18', border: '1px solid #2c2926', color: '#7a7570', fontSize: 10, padding: '4px 10px', borderRadius: 2 }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Placeholder cards */}
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <motion.div key={`placeholder-${i}`} {...fadeUp(0.2 + i * 0.05)} style={{
            background: '#0f0d0c', border: '1px dashed #2c2926', borderRadius: 4,
            minHeight: 200, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 10, padding: 40,
            transition: 'border-color 0.25s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#d4943a44')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#2c2926')}
          >
            <div style={{
              width: 36, height: 36, border: '1px solid #2c2926', borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, color: '#3a3730', transform: 'rotate(45deg)',
            }}>+</div>
            <div style={{ fontSize: 11, color: '#3a3730', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Next project
            </div>
            <div style={{ fontSize: 11, color: '#2a2826' }}>Something is brewing...</div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid #1e1c18', marginBottom: 40 }} />

      {/* Skills strip */}
      <div style={{ fontSize: 10, color: '#3a3730', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 20 }}>
        Tech I work with
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 8 }}>
        {[...SKILLS.highlighted.map(s => ({ s, hi: true })), ...SKILLS.regular.map(s => ({ s, hi: false }))].map(({ s, hi }) => (
          <div
            key={s}
            style={{
              background: '#131210',
              border: `1px solid ${hi ? '#d4943a33' : '#1e1c18'}`,
              color: hi ? '#8a7060' : '#524e48',
              fontSize: 11, padding: '10px 14px', borderRadius: 2,
              textAlign: 'center', letterSpacing: '0.5px',
              transition: 'border-color 0.2s, color 0.2s', cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#d4943a44'
              e.currentTarget.style.color = '#d4943a'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = hi ? '#d4943a33' : '#1e1c18'
              e.currentTarget.style.color = hi ? '#8a7060' : '#524e48'
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
