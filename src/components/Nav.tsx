'use client'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '22px 48px',
      borderBottom: '1px solid #1e1c18',
      background: '#0c0c0bcc',
      backdropFilter: 'blur(16px)',
    }}>
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 1 }}>
        <span style={{
          fontSize: 22, fontWeight: 900, letterSpacing: -2, color: '#ede8e0',
          lineHeight: 1,
        }}>
          K
        </span>
        <span style={{
          fontSize: 22, fontWeight: 900, letterSpacing: -2, color: '#d4943a',
          lineHeight: 1,
        }}>
          M
        </span>
        <span style={{
          fontSize: 10, fontWeight: 500, color: '#3a3730',
          letterSpacing: '3px', textTransform: 'uppercase',
          marginLeft: 6, alignSelf: 'center',
          paddingLeft: 7, borderLeft: '1px solid #2c2926',
        }}>
          dev
        </span>
      </a>

      {/* Desktop links */}
      <div className="nav-desktop-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {(['Work', 'Approach', 'Contact'] as const).map(label => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            style={{
              color: '#524e48', fontSize: 13,
              textDecoration: 'none', letterSpacing: '0.5px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ede8e0')}
            onMouseLeave={e => (e.currentTarget.style.color = '#524e48')}
          >
            {label}
          </a>
        ))}

        <a
          href="mailto:musannaofficial02@gmail.com"
          data-cursor-type="primary"
          style={{
            background: '#d4943a', color: '#0c0c0b',
            padding: '8px 20px', borderRadius: 3,
            fontWeight: 700, fontSize: 12,
            letterSpacing: '1px', textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#e8a84a')}
          onMouseLeave={e => (e.currentTarget.style.background = '#d4943a')}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile menu */}
      <div className="nav-mobile-menu" style={{ display: 'none', alignItems: 'center', gap: 12 }}>
        <a
          href="mailto:musannaofficial02@gmail.com"
          style={{
            background: '#d4943a', color: '#0c0c0b',
            padding: '6px 14px', borderRadius: 3,
            fontWeight: 700, fontSize: 11,
            letterSpacing: '1px', textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
