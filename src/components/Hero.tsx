'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SpotlightText from './SpotlightText'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export default function Hero() {
  return (
    <div className="hero-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
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

      {/* ── Mobile portrait — ghosted behind content ── */}
      <motion.div
        {...fadeIn(0.3)}
        className="hero-portrait-mobile"
        style={{
          position: 'absolute', top: 0, right: 0,
          width: '65%', height: '100%',
          zIndex: 4, pointerEvents: 'none',
          display: 'none', // shown via CSS media query
        }}
      >
        <Image
          src="/portrait.jpg"
          alt="Khandakar Musanna"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'brightness(0.5) contrast(1.1) grayscale(0.15)',
          }}
          priority
        />
        {/* Heavy fades so text stays readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0c0c0b 30%, transparent 80%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0c0c0b22, transparent 20%, transparent 60%, #0c0c0b)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,12,11,0.35)', zIndex: 1 }} />
      </motion.div>

      {/* Hero content */}
      <section id="hero" style={{
        position: 'relative', zIndex: 10,
        minHeight: 'calc(100vh - 65px)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 48,
        alignItems: 'start',       // align to top so photo lines up with "Developer."
        padding: '0 48px 80px',
        paddingTop: 145,
      }}>

        {/* Left — text */}
        <div>
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
              animation: 'pulse 2s infinite', display: 'inline-block',
            }} />
            Open to internships · Copenhagen
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} style={{
            fontSize: 'clamp(44px, 6.5vw, 90px)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: -3, marginBottom: 20,
          }}>
            Developer.<br />
            Builder.<br />
            <span style={{ color: '#2a2826' }}>AI</span>
            {' '}
            <span style={{ color: '#d4943a' }}>Native.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} style={{
            fontSize: 16, color: '#524e48',
            lineHeight: 1.6, maxWidth: 440, marginBottom: 40,
          }}>
            I&#39;m <strong style={{ color: '#8a8580', fontWeight: 500 }}>Khandakar Musanna</strong>{' '}
            — a BSc CS student building real things with AI as a core tool, not an afterthought.
            PHP · JavaScript · Python · LLMs.
          </motion.p>

          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#work" data-cursor-type="primary" style={{
              background: '#d4943a', color: '#0c0c0b',
              padding: '13px 28px', borderRadius: 3,
              fontWeight: 700, fontSize: 13,
              letterSpacing: '1px', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'background 0.2s, transform 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e8a84a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#d4943a'; e.currentTarget.style.transform = 'none' }}
            >View My Work</a>
            <a href="#contact" style={{
              background: 'transparent', color: '#524e48',
              padding: '13px 28px', borderRadius: 3,
              fontSize: 13, border: '1px solid #2c2926',
              textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#524e48'; e.currentTarget.style.color = '#ede8e0' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2c2926'; e.currentTarget.style.color = '#524e48' }}
            >Get In Touch</a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} style={{
            display: 'flex', gap: 20, alignItems: 'center',
            marginTop: 60, paddingTop: 32, borderTop: '1px solid #1e1c18',
          }}>
            <span style={{ fontSize: 10, color: '#3a3730', letterSpacing: '2px', textTransform: 'uppercase' }}>Find me</span>
            {[
              { label: 'GitHub',   href: 'https://github.com/Khandakar-59038' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/khandakar-musanna' },
              { label: 'Email',    href: 'mailto:musannaofficial02@gmail.com' },
            ].map(({ label, href }, i) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span style={{ color: '#2c2926' }}>·</span>}
                <a href={href} style={{ fontSize: 12, color: '#524e48', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#d4943a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#524e48')}
                >{label}</a>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait (desktop) */}
        <motion.div
          {...fadeIn(0.4)}
          className="hero-portrait-desktop"
          style={{
            position: 'relative',
            width: 320,
            marginTop: 8,           // nudges image top to align near "Developer."
            flexShrink: 0,
          }}
        >
          {/* Amber underglow */}
          <div style={{
            position: 'absolute', bottom: -20, left: '50%',
            transform: 'translateX(-50%)',
            width: 240, height: 100,
            background: 'radial-gradient(ellipse, #d4943a1a, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
            filter: 'blur(16px)',
          }} />

          {/* Accent line left */}
          <div style={{
            position: 'absolute', top: '8%', left: -1,
            width: 2, height: '55%',
            background: 'linear-gradient(to bottom, transparent, #d4943a66, transparent)',
            zIndex: 2,
          }} />

          {/* Image */}
          <div style={{ position: 'relative', zIndex: 1, borderRadius: 4, overflow: 'hidden' }}>
            <Image
              src="/portrait.jpg"
              alt="Khandakar Musanna"
              width={320}
              height={430}
              style={{
                objectFit: 'cover',
                objectPosition: 'center 8%',   // shows face near top
                display: 'block',
                filter: 'brightness(0.85) contrast(1.08)',
              }}
              priority
            />
            {/* Bottom fade — strong, blends into page */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 220, background: 'linear-gradient(to bottom, transparent, #0c0c0b)', pointerEvents: 'none', zIndex: 2 }} />
            {/* Top fade */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, #0c0c0b66, transparent)', pointerEvents: 'none', zIndex: 2 }} />
            {/* Left fade */}
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #0c0c0b, transparent)', pointerEvents: 'none', zIndex: 2 }} />
            {/* Right fade */}
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 50, background: 'linear-gradient(to left, #0c0c0baa, transparent)', pointerEvents: 'none', zIndex: 2 }} />
            {/* Amber tint */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 40% 25%, #d4943a0c, transparent 60%)', pointerEvents: 'none', zIndex: 2 }} />
          </div>

          {/* Name tag */}
          <div style={{
            position: 'absolute', bottom: 28, left: '50%',
            transform: 'translateX(-50%)',
            background: '#0c0c0bee', backdropFilter: 'blur(8px)',
            padding: '5px 14px', borderRadius: 2,
            border: '1px solid #1e1c18',
            fontSize: 9, color: '#524e48',
            letterSpacing: '3px', textTransform: 'uppercase',
            whiteSpace: 'nowrap', zIndex: 4,
          }}>
            Khandakar Musanna
          </div>
        </motion.div>

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
        @media (max-width: 768px) {
          #hero {
            grid-template-columns: 1fr !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .hero-portrait-desktop { display: none !important; }
          .hero-portrait-mobile  { display: block !important; }
        }
      `}</style>
    </div>
  )
}
