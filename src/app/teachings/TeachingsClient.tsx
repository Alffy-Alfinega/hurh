'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const TOPICS = ['All', 'Grace', 'Healing', 'Faith', 'Prayer', 'Holy Spirit', 'Identity', 'Authority', 'Finances', 'Relationships', 'Salvation'];

const SERIES = [
  { id: 1, title: 'Spirit, Soul & Body', parts: 4, topic: 'Identity', type: 'audio', cover: '/images/hero_background.png', description: 'Understand how your born-again spirit is the real you and how to align your soul with the life of God already in you.', popular: true },
  { id: 2, title: "The Believer's Authority", parts: 4, topic: 'Authority', type: 'audio', cover: '/images/truth_liberty.png', description: 'Stop begging God to do what He has already commanded you to do. Learn to command your healing and victory.', popular: true },
  { id: 3, title: "You've Already Got It!", parts: 4, topic: 'Faith', type: 'audio', cover: '/images/charis_college.png', description: 'God has already provided everything you need. Discover how to receive by faith what grace has already provided.', popular: false },
  { id: 4, title: "God's Will is Healing", parts: 6, topic: 'Healing', type: 'video', cover: '/images/hero_background.png', description: 'A comprehensive study proving from scripture that healing is always the will of God for every believer.', popular: true },
  { id: 5, title: 'A Better Way to Pray', parts: 4, topic: 'Prayer', type: 'audio', cover: '/images/lance_testimony.png', description: "Discover that prayer is not about twisting God's arm — it's about communion and releasing His already-given grace.", popular: false },
  { id: 6, title: 'Grace — The Power of the Gospel', parts: 8, topic: 'Grace', type: 'video', cover: '/images/truth_liberty.png', description: 'The most thorough teaching on grace available. Understand what grace really is and how it changes everything.', popular: true },
  { id: 7, title: 'The New You & the Holy Spirit', parts: 6, topic: 'Holy Spirit', type: 'video', cover: '/images/charis_college.png', description: 'A deep dive into who the Holy Spirit is and how to partner with Him in your daily life and ministry.', popular: false },
  { id: 8, title: 'Financial Stewardship', parts: 3, topic: 'Finances', type: 'audio', cover: '/images/hero_background.png', description: 'Biblical principles for financial prosperity. God wants you to prosper — learn how to walk in it.', popular: false },
  { id: 9, title: 'Effortless Change', parts: 5, topic: 'Grace', type: 'audio', cover: '/images/lance_testimony.png', description: "Sanctification is not about trying harder. It's about renewing your mind to who God already made you to be.", popular: false },
  { id: 10, title: 'Harnessing Your Emotions', parts: 4, topic: 'Identity', type: 'audio', cover: '/images/truth_liberty.png', description: 'Your emotions are real but not truth. Learn to align them with what God says about you.', popular: false },
  { id: 11, title: 'Relationship Principles', parts: 6, topic: 'Relationships', type: 'video', cover: '/images/charis_college.png', description: "God's design for relationships — marriage, family, and friendship rooted in unconditional love.", popular: false },
  { id: 12, title: 'Salvation — What Does It Include?', parts: 3, topic: 'Salvation', type: 'audio', cover: '/images/hero_background.png', description: 'Salvation is more than going to heaven. Discover the full scope of what Jesus purchased for you at the cross.', popular: false },
];

export default function TeachingsClient() {
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeType, setActiveType] = useState('all');
  const [showPopular, setShowPopular] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = SERIES.filter(s => {
    if (activeTopic !== 'All' && s.topic !== activeTopic) return false;
    if (activeType !== 'all' && s.type !== activeType) return false;
    if (showPopular && !s.popular) return false;
    return true;
  });

  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)), #020617)', padding: '4rem 0 5rem', color: 'white' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'hsl(var(--brand-amber))' }}>Free Resources</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Browse All Teachings</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '560px', lineHeight: 1.65, fontSize: '0.97rem' }}>
            Hundreds of teaching series across every area of life — all completely free. Audio, video, and written resources to build your faith.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[['12+','Teaching Series'],['500+','Hours of Content'],['40+','Years of Ministry'],['Free','Always']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: 'hsl(var(--brand-amber))' }}>{n}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {TOPICS.map(t => (
              <button key={t} onClick={() => setActiveTopic(t)} style={{ padding: '0.3rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1.5px solid', borderColor: activeTopic === t ? 'hsl(var(--brand-blue))' : 'var(--border-glass)', background: activeTopic === t ? 'hsl(var(--brand-blue))' : 'transparent', color: activeTopic === t ? 'white' : 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s ease' }}>{t}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', padding: '3px', gap: '3px' }}>
              {['all','audio','video'].map(t => (
                <button key={t} onClick={() => setActiveType(t)} style={{ padding: '0.35rem 0.75rem', borderRadius: '5px', border: 'none', background: activeType === t ? 'var(--bg-secondary)' : 'transparent', color: activeType === t ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize', fontFamily: 'var(--font-display)', transition: 'all 0.15s ease' }}>{t === 'all' ? 'All Types' : t}</button>
              ))}
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <input type="checkbox" checked={showPopular} onChange={e => setShowPopular(e.target.checked)} style={{ accentColor: 'hsl(var(--brand-amber))' }} />
              Popular Only
            </label>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.25rem' }}>
              {(['grid','list'] as const).map(v => (
                <button key={v} onClick={() => setView(v)} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)', background: view === v ? 'var(--bg-tertiary)' : 'transparent', cursor: 'pointer', color: view === v ? 'var(--text-primary)' : 'var(--text-muted)', transition: 'all 0.15s ease' }}>
                  {v === 'grid'
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/></svg>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{filtered.length} series{activeTopic !== 'All' ? ` in ${activeTopic}` : ''}</p>

        {filtered.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>No series match your filters.</div>
        ) : view === 'grid' ? (
          <div className="grid-cols-3">
            {filtered.map(s => (
              <Link key={s.id} href={`/listen?series=${s.id}`} className="card card-clickable" style={{ padding: 0, display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                <div style={{ height: '175px', background: `linear-gradient(rgba(0,0,0,0.12),rgba(0,0,0,0.55)), url(${s.cover}) center/cover`, borderRadius: 'var(--radius-md) var(--radius-md) 0 0', display: 'flex', alignItems: 'flex-end', padding: '1rem', gap: '0.4rem' }}>
                  <span className="badge badge-white" style={{ fontSize: '0.65rem' }}>{s.type}</span>
                  {s.popular && <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>Popular</span>}
                </div>
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--brand-blue))', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem', display: 'block' }}>{s.topic}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, flex: 1 }} className="truncate-3">{s.description}</p>
                  <div style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{s.parts} parts</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filtered.map(s => (
              <Link key={s.id} href={`/listen?series=${s.id}`} className="card card-clickable" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1rem 1.25rem', textDecoration: 'none' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-sm)', background: `url(${s.cover}) center/cover`, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'hsl(var(--brand-blue))', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.topic}</span>
                  {s.popular && <span className="badge badge-amber" style={{ fontSize: '0.6rem', marginLeft: '0.4rem' }}>Popular</span>}
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0.2rem 0' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }} className="truncate-2">{s.description}</p>
                </div>
                <div style={{ flexShrink: 0, fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{s.parts} parts · {s.type}</div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M9 18l6-6-6-6"/></svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
