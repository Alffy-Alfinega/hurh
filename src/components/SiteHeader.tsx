'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  {
    href: '/watch', label: 'Watch',
    sub: [
      { href: '/watch', label: 'Gospel Truth TV' },
      { href: '/watch?tab=series', label: 'Video Series' },
      { href: '/schedule', label: 'Broadcast Schedule' },
    ],
  },
  {
    href: '/listen', label: 'Listen',
    sub: [
      { href: '/listen', label: 'Audio Teachings' },
      { href: '/listen?tab=radio', label: 'Radio & Podcast' },
    ],
  },
  {
    href: '/read', label: 'Read',
    sub: [
      { href: '/read', label: 'Daily Devotional' },
      { href: '/blog', label: 'Blog & Articles' },
      { href: '/commentary', label: 'Living Commentary' },
    ],
  },
  { href: '/teachings', label: 'Teachings', sub: [] },
  { href: '/events', label: 'Events', sub: [] },
  { href: '/healing', label: 'Healing', sub: [] },
  {
    href: '/about', label: 'About',
    sub: [
      { href: '/about', label: 'Our Ministry' },
      { href: '/about#beliefs', label: 'Our Beliefs' },
      { href: '/about#team', label: 'Leadership' },
      { href: '/espanol', label: 'En Español' },
    ],
  },
];

export const SiteHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (menuOpen || searchOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); }
      if (e.key === 'Escape') { setSearchOpen(false); setActiveDropdown(null); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

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
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--nav-height)', gap: '1rem' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-display)', flexShrink: 0 }}>
            <span style={{
              background: 'linear-gradient(135deg, hsl(var(--brand-amber)), hsl(var(--brand-amber-light)))',
              color: 'white', width: '38px', height: '38px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontWeight: 900,
              boxShadow: 'var(--shadow-amber)', flexShrink: 0,
            }}>AW</span>
            <span className="text-gradient-blue hide-mobile" style={{ letterSpacing: '-0.01em' }}>AWM Ministries</span>
          </Link>

          {/* Desktop nav with dropdowns */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            {NAV.map(n => (
              <div key={n.href}
                style={{ position: 'relative' }}
                onMouseEnter={() => n.sub.length > 0 && setActiveDropdown(n.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={n.href} className="nav-link" style={{ padding: '0.4rem 0.65rem', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.88rem' }}>
                  {n.label}
                  {n.sub.length > 0 && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginTop: '1px', opacity: 0.5 }}><path d="M6 9l6 6 6-6"/></svg>
                  )}
                </Link>
                {n.sub.length > 0 && activeDropdown === n.href && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0,
                    background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)',
                    padding: '0.5rem', minWidth: '200px', zIndex: 200,
                    animation: 'fadeIn 0.15s ease',
                  }}>
                    {n.sub.map(s => (
                      <Link key={s.href} href={s.href}
                        onClick={() => setActiveDropdown(null)}
                        style={{
                          display: 'block', padding: '0.5rem 0.75rem',
                          fontSize: '0.85rem', color: 'var(--text-secondary)',
                          borderRadius: 'var(--radius-sm)', transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-tertiary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)', transition: 'all 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>

            {/* Language toggle */}
            <Link href="/espanol" className="hide-mobile" aria-label="Español"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)', padding: '0 0.6rem', height: '36px', display: 'flex', alignItems: 'center', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.04em', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >ES</Link>

            <ThemeToggle />
            <Link href="/store" className="btn btn-outline btn-sm hide-mobile" style={{ fontSize: '0.8rem' }}>Store</Link>
            <Link href="/give" className="btn btn-amber btn-sm hide-mobile" style={{ fontSize: '0.8rem' }}>Partner</Link>

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

      {/* Search Modal */}
      {searchOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(6,11,19,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '8vh 1.5rem 0' }}
          onClick={e => e.target === e.currentTarget && setSearchOpen(false)}
        >
          <div style={{ width: '100%', maxWidth: '640px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-glass)', overflow: 'hidden' }}>
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-glass)', gap: '0.75rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search teachings, sermons, topics…"
                style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: '1.05rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
              />
              <kbd style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'var(--bg-tertiary)', padding: '0.2rem 0.4rem', borderRadius: '4px', border: '1px solid var(--border-glass)' }}>ESC</kbd>
            </form>
            <div style={{ padding: '1rem 1.25rem' }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quick Links</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Healing', 'Grace', 'Faith', 'Authority', 'Prayer', 'Spirit Soul Body', 'Salvation', 'Holy Spirit'].map(q => (
                  <button key={q}
                    onClick={() => { router.push(`/search?q=${encodeURIComponent(q)}`); setSearchOpen(false); }}
                    style={{ padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-glass)', background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.15s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'hsl(var(--brand-amber))'; e.currentTarget.style.color = 'hsl(var(--brand-amber))'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >{q}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay${menuOpen ? ' open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: 'hsl(var(--brand-amber))' }}>AWM Ministries</span>
          <button onClick={() => setMenuOpen(false)} style={{ background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        {/* Mobile search */}
        <button onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%', padding: '0.85rem 1rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', cursor: 'pointer', marginBottom: '1.5rem' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Search teachings, topics…
        </button>
        <nav style={{ flex: 1 }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/store" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Store</Link>
        </nav>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
          <Link href="/espanol" className="btn btn-outline" style={{ flex: 1, color: 'white', borderColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', fontSize: '0.9rem' }} onClick={() => setMenuOpen(false)}>En Español</Link>
          <Link href="/give" className="btn btn-amber" style={{ flex: 2, justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>Become a Partner</Link>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </>
  );
};
