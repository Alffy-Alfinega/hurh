'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/watch', label: 'Watch' },
  { href: '/listen', label: 'Listen' },
  { href: '/read', label: 'Read' },
  { href: '/healing', label: 'Healing' },
  { href: '/give', label: 'Give' },
];

export const SiteHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="glass-header"
        style={{
          position: 'sticky', top: 0, zIndex: 1000,
          viewTransitionName: 'site-header',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--nav-height)' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>
            <span style={{
              background: 'linear-gradient(135deg, hsl(var(--brand-amber)), hsl(var(--brand-amber-light)))',
              color: 'white', width: '38px', height: '38px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontWeight: 900,
              boxShadow: 'var(--shadow-amber)', flexShrink: 0,
            }}>AW</span>
            <span className="text-gradient-blue hide-mobile" style={{ letterSpacing: '-0.01em' }}>AWM Ministries</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className="nav-link" style={{ padding: '0.4rem 0.75rem' }}>{n.label}</Link>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggle />
            <Link href="/give" className="btn btn-amber btn-sm hide-mobile">Partner</Link>
            {/* Hamburger */}
            <button
              className="hide-desktop"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)', width: '40px', height: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', cursor: 'pointer', padding: 0 }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{ display: 'block', width: '18px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.22s ease',
                  transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)') : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay${menuOpen ? ' open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: 'hsl(var(--brand-amber))' }}>AWM Ministries</span>
          <button onClick={() => setMenuOpen(false)} style={{ background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <nav style={{ flex: 1 }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/give" className="btn btn-amber" style={{ width: '100%', marginTop: '2rem', padding: '1rem', fontSize: '1.05rem', justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
          Become a Partner
        </Link>
      </div>
    </>
  );
};
