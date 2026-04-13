'use client'
import { motion } from 'framer-motion'
import SpotlightText from './SpotlightText'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export default function Hero() {
  return (
    <div className="hero-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Spotlight text layer */}
      <SpotlightText />

      {/* Warm cursor glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        mixBlendMode: 'screen',
        background: 'radial-gradient(circle 180px at var(--cx,-999px) var(--cy,-999px), #d4943a18 0%, transparent 100%)',
      }} />

      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none', zIndex: 2,
        background: 'radial-gradient(circle, #b5722218, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: '10%',
        width: 350, height: 350, borderRadius: '50%', pointerEvents: 'none', zIndex: 2,
        background: 'radial-gradient(circle, #d4943a0d, transparent 65%)',
      }} />

      {/* Hero content */}
      <section id="hero" style={{
        position: 'relative', zIndex: 10,
        minHeight: 'calc(100vh - 65px)',
        display: 'flex', alignItems: 'center',
        padding: '80px 48px',
        paddingTop: 145,
      }}>
        <div style={{ maxWidth: 860 }}>

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#d4943a18', border: '1px solid #d4943a44',
            color: '#d4943a', fontSize: 11, fontWeight: 500,
            padding: '5px 14px', borderRadius: 20,
            letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            <span style={{
              width: 6, height: 6, background: '#d4943a', borderRadius: '50%',
              animation: 'pulse 2s infinite',
              display: 'inline-block',
            }} />
            Open to internships · Copenhagen
          </motion.div>

          {/* Title */}
          <motion.h1 {...fadeUp(0.2)} style={{
            fontSize: 'clamp(52px, 8vw, 90px)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: -3, marginBottom: 20,
          }}>
            Developer.<br />
            Builder.<br />
            <span style={{ color: '#2a2826' }}>AI</span>
            {' '}
            <span style={{ color: '#d4943a' }}>Native.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p {...fadeUp(0.3)} style={{
            fontSize: 16, color: '#524e48',
            lineHeight: 1.6, maxWidth: 480, marginBottom: 40,
          }}>
            I&#39;m <strong style={{ color: '#8a8580', fontWeight: 500 }}>Khandakar Musanna</strong>{' '}
            — a BSc CS student building real things with AI as a core tool, not an afterthought.
            PHP · JavaScript · Python · LLMs.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#work"
              data-cursor-type="primary"
              style={{
                background: '#d4943a', color: '#0c0c0b',
                padding: '13px 28px', borderRadius: 3,
                fontWeight: 700, fontSize: 13,
                letterSpacing: '1px', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#e8a84a'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#d4943a'
                e.currentTarget.style.transform = 'none'
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                background: 'transparent', color: '#524e48',
                padding: '13px 28px', borderRadius: 3,
                fontSize: 13, border: '1px solid #2c2926',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#524e48'
                e.currentTarget.style.color = '#ede8e0'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#2c2926'
                e.currentTarget.style.color = '#524e48'
              }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.5)} style={{
            display: 'flex', gap: 20, alignItems: 'center',
            marginTop: 60, paddingTop: 32,
            borderTop: '1px solid #1e1c18',
          }}>
            <span style={{ fontSize: 10, color: '#3a3730', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Find me
            </span>
            {[
              { label: 'GitHub',   href: 'https://github.com/Khandakar-59038' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/khandakar-musanna' },
              { label: 'Email',    href: 'mailto:musannaofficial02@gmail.com' },
            ].map(({ label, href }, i) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span style={{ color: '#2c2926' }}>·</span>}
                <a
                  href={href}
                  style={{ fontSize: 12, color: '#524e48', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#d4943a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#524e48')}
                >
                  {label}
                </a>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: 32, right: 48,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: '#3a3730', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #d4943a, transparent)' }} />
          Scroll
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>
  )
}
