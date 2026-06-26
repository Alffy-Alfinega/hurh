'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

const ALL_CONTENT = [
  { id: 1, title: 'Spirit, Soul & Body: Part 1', type: 'audio', topic: 'Identity', href: '/listen', excerpt: 'Understand the relational structure of your spirit, soul, and body.' },
  { id: 2, title: "God's Will is Healing", type: 'video', topic: 'Healing', href: '/watch', excerpt: 'A comprehensive study proving healing is always the will of God.' },
  { id: 3, title: "The Believer's Authority: Part 1", type: 'audio', topic: 'Authority', href: '/listen', excerpt: 'Explore the authority God has delegated to you as a believer.' },
  { id: 4, title: 'Grace — The Power of the Gospel', type: 'series', topic: 'Grace', href: '/teachings', excerpt: 'The most thorough teaching on grace available anywhere.' },
  { id: 5, title: 'Daily Devotional — Romans 5:8', type: 'devotional', topic: 'Grace', href: '/read', excerpt: 'God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.' },
  { id: 6, title: "Lance's Healing Story", type: 'testimony', topic: 'Healing', href: '/healing', excerpt: 'Doctors gave Lance weeks to live. By standing on 1 Peter 2:24 his body was completely restored.' },
  { id: 7, title: 'Healing Is Here 2026 Conference', type: 'event', topic: 'Events', href: '/events', excerpt: 'Three days of healing, teaching, and testimonies at Colorado Springs.' },
  { id: 8, title: 'A Better Way to Pray: Part 1', type: 'audio', topic: 'Prayer', href: '/listen', excerpt: "Prayer is not about twisting God's arm — it's about communion." },
  { id: 9, title: 'Righteousness as a Gift — Commentary', type: 'commentary', topic: 'Grace', href: '/commentary', excerpt: '2 Corinthians 5:21 — For he hath made him to be sin for us who knew no sin.' },
  { id: 10, title: 'Effortless Change Series', type: 'series', topic: 'Grace', href: '/teachings', excerpt: 'Sanctification is about renewing your mind, not trying harder.' },
];

const TYPE_COLORS: Record<string, string> = {
  audio: 'hsl(var(--brand-blue))', video: 'hsl(var(--brand-amber))', series: '#7c3aed',
  devotional: '#16a34a', testimony: '#0891b2', event: '#dc2626', commentary: 'hsl(var(--brand-blue-dark))', resource: '#9a3412',
};

export default function SearchClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQ = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQ);
  const [activeType, setActiveType] = useState('All');

  useEffect(() => { setQuery(searchParams.get('q') || ''); }, [searchParams]);

  const results = ALL_CONTENT.filter(item => {
    const q = query.toLowerCase();
    const matchQ = !q || item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q) || item.topic.toLowerCase().includes(q);
    const matchT = activeType === 'All' || item.type === activeType.toLowerCase();
    return matchQ && matchT;
  });

  const types = ['All', ...Array.from(new Set(ALL_CONTENT.map(c => c.type.charAt(0).toUpperCase() + c.type.slice(1))))];

  return (
    <div>
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-glass)', padding: '3rem 0 2rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '1.8rem', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>Search Teachings &amp; Resources</h1>
          <form onSubmit={e => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(query)}`); }} style={{ display: 'flex', gap: '0.75rem', maxWidth: '600px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input className="input" type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search teachings, topics, scriptures…" style={{ paddingLeft: '2.5rem' }} />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            {types.map(t => (
              <button key={t} onClick={() => setActiveType(t)} style={{ padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid', borderColor: activeType === t ? 'hsl(var(--brand-blue))' : 'var(--border-glass)', background: activeType === t ? 'hsla(var(--brand-blue),0.1)' : 'transparent', color: activeType === t ? 'hsl(var(--brand-blue))' : 'var(--text-secondary)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s ease' }}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {query && <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{results.length} result{results.length !== 1 ? 's' : ''} for <strong style={{ color: 'var(--text-primary)' }}>"{query}"</strong></p>}

        {results.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No results found</h3>
            <p>Try a different term or browse by topic.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {results.map(item => {
              const color = TYPE_COLORS[item.type] || 'var(--text-muted)';
              return (
                <Link key={item.id} href={item.href} className="card card-clickable" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.1rem 1.4rem', textDecoration: 'none' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ fontSize: '0.58rem', fontWeight: 800, color, textTransform: 'uppercase' }}>{item.type.substring(0,3)}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.type}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>· {item.topic}</span>
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }} className="truncate-2">{item.excerpt}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '4px' }}><path d="M9 18l6-6-6-6"/></svg>
                </Link>
              );
            })}
          </div>
        )}

        {!query && (
          <div style={{ marginTop: '2.5rem' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>Popular Topics</p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['Grace', 'Healing', 'Faith', 'Holy Spirit', 'Prayer', 'Authority', 'Identity', 'Salvation', 'Finances', 'Relationships'].map(q => (
                <button key={q} onClick={() => { setQuery(q); router.push(`/search?q=${q}`); }} style={{ padding: '0.5rem 1.1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.15s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'hsl(var(--brand-amber))'; e.currentTarget.style.color = 'hsl(var(--brand-amber))'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >{q}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
