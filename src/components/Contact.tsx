'use client'
import { motion } from 'framer-motion'

const SOCIALS = [
  {
    icon: 'in',
    name: 'LinkedIn',
    handle: 'linkedin.com/in/khandakar-musanna',
    href: 'https://linkedin.com/in/khandakar-musanna',
    arrow: '↗',
  },
  {
    icon: 'gh',
    name: 'GitHub',
    handle: 'github.com/Khandakar-59038',
    href: 'https://github.com/Khandakar-59038',
    arrow: '↗',
  },
  {
    icon: 'CV',
    name: 'Download CV',
    handle: 'PDF · Updated 2026',
    href: '/cv.pdf',
    arrow: '↓',
  },
]

const AVAIL_TAGS = ['Full-Stack Dev','PHP / JS','AI / LLMs','Web Dev','Part or Full Time']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export default function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '100px 48px',
      position: 'relative', overflow: 'hidden', borderTop: '1px solid #1e1c18',
      zIndex: 5,
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: -100, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, #b5722214, transparent 70%)',
      }} />

      {/* Background watermark */}
      <div style={{
        position: 'absolute', fontSize: 'clamp(120px, 18vw, 220px)', fontWeight: 900,
        letterSpacing: -8, color: '#d4943a', opacity: 0.025,
        bottom: 60, left: 48, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>
        Let&#39;s talk.
      </div>

      <div style={{ fontSize: 10, color: '#d4943a', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 16, position: 'relative', zIndex: 1 }}>
        04 — Contact
      </div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', position: 'relative', zIndex: 1 }}>

        {/* Left */}
        <div>
          <motion.h2 {...fadeUp(0)} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, letterSpacing: -3, lineHeight: 1.0, marginBottom: 20 }}>
            Let&#39;s<br />
            <span style={{ color: '#d4943a' }}>build</span><br />
            <span style={{ color: '#2e2c28' }}>something.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.1)} style={{ fontSize: 14, color: '#524e48', lineHeight: 1.8, maxWidth: 380, marginBottom: 40 }}>
            I&#39;m actively looking for{' '}
            <strong style={{ color: '#7a7570', fontWeight: 500 }}>internships in Copenhagen</strong>{' '}
            — full-stack, AI, or web dev roles where I can contribute from day one and keep learning.
          </motion.p>

          <motion.a {...fadeUp(0.15)}
            href="mailto:musannaofficial02@gmail.com"
            data-cursor-type="primary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: '#d4943a', color: '#0c0c0b',
              fontSize: 13, fontWeight: 700, padding: '16px 28px', borderRadius: 3,
              letterSpacing: '1px', textTransform: 'uppercase',
              textDecoration: 'none', marginBottom: 40,
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e8a84a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#d4943a'; e.currentTarget.style.transform = 'none' }}
          >
            Say hello →
          </motion.a>

          <motion.div {...fadeUp(0.2)} style={{ border: '1px solid #1e1c18', borderRadius: 3, overflow: 'hidden' }}>
            {SOCIALS.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 22px',
                  borderBottom: i < SOCIALS.length - 1 ? '1px solid #1e1c18' : 'none',
                  textDecoration: 'none', transition: 'background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#131210'
                  const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement
                  const icon  = e.currentTarget.querySelector('.icon')  as HTMLElement
                  if (arrow) { arrow.style.color = '#d4943a'; arrow.style.transform = 'translate(3px,-3px)' }
                  if (icon)  { icon.style.borderColor = '#d4943a33'; icon.style.color = '#d4943a' }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement
                  const icon  = e.currentTarget.querySelector('.icon')  as HTMLElement
                  if (arrow) { arrow.style.color = '#2e2c28'; arrow.style.transform = 'none' }
                  if (icon)  { icon.style.borderColor = '#2c2926'; icon.style.color = '#524e48' }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="icon" style={{
                    width: 32, height: 32, border: '1px solid #2c2926', borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, color: '#524e48', flexShrink: 0,
                    transition: 'border-color 0.2s, color 0.2s',
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: '#ede8e0' }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: '#3a3730', marginTop: 1 }}>{s.handle}</div>
                  </div>
                </div>
                <span className="arrow" style={{ fontSize: 14, color: '#2e2c28', transition: 'color 0.2s, transform 0.2s' }}>
                  {s.arrow}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 8 }}>

          <motion.div {...fadeUp(0.1)} style={{
            background: '#131210', border: '1px solid #2c2926', borderRadius: 3,
            padding: 32, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #d4943a, transparent)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 8, height: 8, background: '#4a9e5c', borderRadius: '50%',
                boxShadow: '0 0 8px #4a9e5c88', animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontSize: 11, color: '#4a9e5c', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Available now
              </span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 8 }}>
              Open to internships
            </div>
            <p style={{ fontSize: 12, color: '#524e48', lineHeight: 1.7, marginBottom: 20 }}>
              Looking for a role starting Summer or Autumn 2026 — ideally in Copenhagen or remote.
              Full-stack, AI, or web dev. I can contribute from day one.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {AVAIL_TAGS.map(tag => (
                <span key={tag} style={{
                  background: '#1e1c18', border: '1px solid #2c2926',
                  color: '#7a7570', fontSize: 10, padding: '5px 12px', borderRadius: 2, letterSpacing: '0.5px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} style={{
            background: '#0f0d0c', border: '1px solid #1e1c18', borderRadius: 3,
            padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 40, height: 40, flexShrink: 0, border: '1px solid #2c2926', borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
            }}>📍</div>
            <div>
              <div style={{ fontSize: 10, color: '#3a3730', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 4 }}>
                Based in
              </div>
              <div style={{ fontSize: 14, color: '#8a8580', fontWeight: 600 }}>Copenhagen, Denmark</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'relative', zIndex: 1, marginTop: 80, paddingTop: 28,
        borderTop: '1px solid #1e1c18', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <p style={{ fontSize: 11, color: '#2e2c28' }}>
          © 2026 <span style={{ color: '#3a3730' }}>Khandakar Musanna</span> · Built with Next.js
        </p>
        <a href="#" style={{ fontSize: 11, color: '#2e2c28', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#d4943a')}
          onMouseLeave={e => (e.currentTarget.style.color = '#2e2c28')}
        >
          Back to top ↑
        </a>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}
