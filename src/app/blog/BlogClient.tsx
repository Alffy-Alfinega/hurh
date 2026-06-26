'use client';
import React, { useState } from 'react';

const POSTS = [
  { id: 1, title: "Why God's Love Is Unconditional", category: 'Grace', date: 'June 20, 2026', excerpt: "Many believers struggle to accept that God loves them regardless of their performance. Here's why that matters.", readTime: '5 min', cover: '/images/hero_background.png' },
  { id: 2, title: '5 Healing Scriptures to Declare Daily', category: 'Healing', date: 'June 14, 2026', excerpt: 'Scripture is medicine to all your flesh (Proverbs 4:22). These five declarations will transform how you receive healing.', readTime: '4 min', cover: '/images/lance_testimony.png' },
  { id: 3, title: 'What the New Birth Really Means', category: 'Identity', date: 'June 8, 2026', excerpt: "When you were born again, your spirit became identical to Jesus. Most Christians have never understood this.", readTime: '6 min', cover: '/images/truth_liberty.png' },
  { id: 4, title: 'How to Study the Bible Effectively', category: 'Study', date: 'May 30, 2026', excerpt: "The Bible is not a rule book. It's a love letter. Here are Andrew's personal guidelines for daily reading.", readTime: '7 min', cover: '/images/charis_college.png' },
  { id: 5, title: 'The Difference Between Soul and Spirit', category: 'Identity', date: 'May 22, 2026', excerpt: 'Confusing your soul and spirit leads to confusion in your walk with God. This distinction unlocks everything.', readTime: '5 min', cover: '/images/hero_background.png' },
  { id: 6, title: 'Ministry Update: Healing Is Here 2026', category: 'Ministry', date: 'May 15, 2026', excerpt: 'Over 4,000 people attended this year\'s conference. Here are testimonies from the three days of ministry.', readTime: '8 min', cover: '/images/lance_testimony.png' },
];
const CATEGORIES = ['All', 'Grace', 'Healing', 'Identity', 'Study', 'Ministry'];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = POSTS.filter(p => activeCategory === 'All' || p.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <div>
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-glass)', padding: '3.5rem 0' }}>
        <div className="container">
          <span className="eyebrow">Articles &amp; Updates</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Blog &amp; Articles</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.65, fontSize: '0.97rem' }}>Insights, teaching breakdowns, testimonies, and ministry news.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {CATEGORIES.map(c => <button key={c} onClick={() => setActiveCategory(c)} style={{ padding: '0.3rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1.5px solid', borderColor: activeCategory === c ? 'hsl(var(--brand-blue))' : 'var(--border-glass)', background: activeCategory === c ? 'hsl(var(--brand-blue))' : 'transparent', color: activeCategory === c ? 'white' : 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s ease' }}>{c}</button>)}
        </div>
        {featured && (
          <div className="card card-clickable" style={{ marginBottom: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', overflow: 'hidden', padding: 0 }}>
            <div style={{ background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.45)), url(${featured.cover}) center/cover`, minHeight: '240px' }} />
            <div style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge badge-amber">{featured.category}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{featured.date} · {featured.readTime} read</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 800, marginBottom: '0.75rem' }}>{featured.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.93rem', marginBottom: '1.5rem' }}>{featured.excerpt}</p>
              <button className="btn btn-primary" style={{ alignSelf: 'flex-start', fontSize: '0.85rem' }}>Read Article →</button>
            </div>
          </div>
        )}
        <div className="grid-cols-3">
          {rest.map(post => (
            <div key={post.id} className="card card-clickable" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '170px', background: `linear-gradient(rgba(0,0,0,0.08),rgba(0,0,0,0.4)), url(${post.cover}) center/cover`, borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }} />
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                  <span className="badge badge-blue" style={{ fontSize: '0.65rem' }}>{post.category}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{post.readTime} read</span>
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, flex: 1 }} className="truncate-3">{post.excerpt}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
