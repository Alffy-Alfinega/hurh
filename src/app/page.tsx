'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';

const STATS = [
  { number: '180+', label: 'Countries Reached' },
  { number: '50M+', label: 'Lives Impacted' },
  { number: '40+', label: 'Years of Ministry' },
  { number: 'FREE', label: 'All Teachings' },
];

const TRUST_BADGES = [
  { icon: '📡', label: 'Daystar TV' },
  { icon: '✝️', label: 'TBN Network' },
  { icon: '🌍', label: 'Triumphant Gospel Daily' },
];

export default function Home() {
  const { playTrack } = useAudio();

  const handlePlayDailyBroadcast = () => {
    playTrack({
      id: 'daily-broadcast-today',
      title: "God's Will is Healing (Part 1)",
      speaker: 'The Triumphant Ministry',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      coverUrl: '/images/1000045321.webp',
    });
  };

  return (
    <div>
      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section style={{
        position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden',
        backgroundImage: 'linear-gradient(160deg, rgba(7,22,50,0.92) 0%, rgba(15,83,138,0.55) 55%, rgba(6,11,19,0.93) 100%), url("/images/1000045321.webp")',
        backgroundSize: 'cover', backgroundPosition: 'center 30%', color: 'white',
        padding: '6rem 0 4rem',
      }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', maxWidth: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(34,122,173,0.18) 0%, transparent 70%)', pointerEvents: 'none', overflow: 'hidden' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Live badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 0 3px rgba(239,68,68,0.25)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Broadcasting Now</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 900, lineHeight: 1.08, maxWidth: '700px', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Grace &amp; Truth<br />
            <span style={{ background: 'linear-gradient(135deg, hsl(var(--brand-amber)), hsl(var(--brand-amber-light)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              for a Changing World
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: 'rgba(255,255,255,0.72)', maxWidth: '560px', lineHeight: 1.65, marginBottom: '2.25rem' }}>
            Discover God's unconditional love. Walk in health, victory, and the power of His promises through the Word-based teachings of The Triumphant Ministry.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <Link href="/watch" className="btn btn-amber btn-lg">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              Watch Broadcast
            </Link>
            <button onClick={handlePlayDailyBroadcast} className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
              Listen Free
            </button>
          </div>

          {/* Trust strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>As seen on</span>
            {TRUST_BADGES.map(b => (
              <span key={b.label} className="badge badge-white">{b.icon} {b.label}</span>
            ))}
          </div>
        </div>

        {/* Stats band at bottom of hero */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="container">
            <div className="stats-grid" style={{ padding: '1.1rem 0' }}>
              {STATS.map(s => (
                <div key={s.label} className="stat-block">
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURED BROADCAST ────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Featured Broadcast</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                Triumphant Gospel Daily Broadcast
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.7, fontSize: '0.97rem' }}>
                Join Andrew today as he explores how God has already provided everything you need for healing, prosperity, and peace. Learn to receive by faith what grace has already provided — no striving required.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link href="/watch" className="btn btn-primary">Watch Now</Link>
                <button onClick={handlePlayDailyBroadcast} className="btn btn-ghost" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Listen Instead
                </button>
              </div>
            </div>

            {/* Video thumbnail */}
            <div
              className="card card-clickable"
              onClick={handlePlayDailyBroadcast}
              style={{
                height: '300px', padding: 0,
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.6)), url("/images/1000045321.webp")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{ width: '68px', height: '68px', borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-xl)', transition: 'transform 0.2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="hsl(var(--brand-blue-dark))"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', color: 'white' }}>
                <span className="badge badge-white" style={{ marginBottom: '0.4rem' }}>● LIVE TODAY</span>
                <h4 style={{ color: 'white', fontSize: '1rem', margin: 0 }}>God's Will is Healing</h4>
                <p style={{ fontSize: '0.82rem', opacity: 0.72, margin: '0.2rem 0 0' }}>The Triumphant Ministry · 28 min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HEALING TESTIMONY ─────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-glass)' }}>
        <div className="container">
          <div className="glass-panel" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem', padding: '3rem', alignItems: 'center',
          }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', maxHeight: '340px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="/images/1000045322.webp" alt="Lance — Healing Testimony" fill sizes="(max-width: 768px) 100vw, 440px" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,11,19,0.5), transparent)' }} />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                <span className="badge badge-white">Verified Testimony</span>
              </div>
            </div>
            <div>
              <span className="eyebrow-amber">Healing Journey</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                Lance's Story: Restored from the Edge
              </h2>
              <blockquote style={{
                fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-secondary)',
                borderLeft: '3px solid hsl(var(--brand-amber))', paddingLeft: '1.1rem',
                marginBottom: '1.75rem', lineHeight: 1.65,
              }}>
                "The doctors told me my liver was failing and I had weeks to live. But when I understood Our teaching on authority and stood on 1 Peter 2:24, the report changed completely. I am 100% whole today."
              </blockquote>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link href="/healing" className="btn btn-amber">Read More Journeys</Link>
                <Link href="/healing" className="btn btn-outline">Prayer Center</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MINISTRIES GRID ───────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}>Our Footprint</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.01em' }}>Explore Associated Ministries</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.75rem auto 0', fontSize: '0.97rem' }}>
              We extend our reach through specialised training, advocacy, and direct physical and spiritual healing centres.
            </p>
          </div>

          <div className="grid-cols-3">
            {/* Triumphant College */}
            <div className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ position: 'relative', width: '100%', height: '190px' }}>
                <Image src="/images/1000045325.webp" alt="Triumphant Bible Institute" fill sizes="400px" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,11,19,0.3), transparent)' }} />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="eyebrow" style={{ fontSize: '0.7rem' }}>Bible College</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>Triumphant Bible Institute</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', flex: 1, marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Nestled in the Rocky Mountains of Woodland Park, Colorado. Discover your destiny with strong biblical foundations.
                </p>
                <a href="https://www.triumphantministry.com/bible-institute" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem' }}>Learn More ↗</a>
              </div>
            </div>

            {/* Truth & Liberty */}
            <div className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ position: 'relative', width: '100%', height: '190px' }}>
                <Image src="/images/1000045326.webp" alt="Truth and Liberty Coalition" fill sizes="400px" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,11,19,0.3), transparent)' }} />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="eyebrow" style={{ fontSize: '0.7rem' }}>Coalition</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>Triumphant Truth Coalition</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', flex: 1, marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Educating, unifying, and activating believers to impact culture and reform government with godly values.
                </p>
                <a href="https://triumphantministry.com/truth" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem' }}>Explore ↗</a>
              </div>
            </div>

            {/* Healing Center */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem', background: 'linear-gradient(145deg, rgba(34,122,173,0.06) 0%, rgba(214,123,18,0.06) 100%)', borderColor: 'hsla(var(--brand-amber), 0.2)', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '58px', height: '58px', borderRadius: '50%', background: 'hsla(var(--brand-amber), 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'hsl(var(--brand-amber))' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
              </div>
              <span className="eyebrow-amber" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Prayer & Healing</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Triumphant Healing Center</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                Receive prayer, review healing scriptures, and request direct prayer support. We stand with you for complete recovery.
              </p>
              <Link href="/healing" className="btn btn-amber" style={{ width: '100%', fontSize: '0.88rem' }}>Enter Healing Center</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. QUICK EXPLORE ─────────────────────────────────── */}
      <section className="section-sm" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-glass)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { href: '/watch', icon: '▶', label: 'Watch', sub: 'Daily TV broadcasts', color: 'var(--brand-blue)' },
              { href: '/listen', icon: '🎧', label: 'Listen', sub: 'Free audio teachings', color: 'var(--brand-amber)' },
              { href: '/read', icon: '📖', label: 'Read', sub: 'Daily devotional', color: 'var(--brand-blue)' },
              { href: '/healing', icon: '✝️', label: 'Healing', sub: 'Scriptures & prayer', color: 'var(--brand-amber)' },
              { href: '/give', icon: '🤝', label: 'Partner', sub: 'Support the mission', color: 'var(--brand-blue)' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="card card-clickable" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem' }}>
                <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{item.sub}</div>
                </div>
                <svg style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PARTNER CTA ───────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)) 0%, #020617 100%)', color: 'white', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
          <span className="badge badge-white" style={{ marginBottom: '0.25rem' }}>180+ Countries</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', letterSpacing: '-0.01em', maxWidth: '600px' }}>Become a Partner in Grace</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', fontSize: '0.97rem', lineHeight: 1.7 }}>
            When you partner with The Triumphant Ministry, you help bring the message of God's unconditional love and grace to millions — at no cost to them.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
            <Link href="/give" className="btn btn-amber btn-lg">Start Partnering</Link>
            <Link href="/give" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.05)' }}>See Benefits</Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(239,68,68,0.25); }
          50%       { box-shadow: 0 0 0 6px rgba(239,68,68,0.08); }
        }
      `}</style>
    </div>
  );
}
