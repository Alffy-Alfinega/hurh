'use client';
import React, { useState } from 'react';

const CATEGORIES = ['All', 'Books', 'Audio', 'Video', 'Study Packs', 'Free'];
const PRODUCTS = [
  { id: 1, title: 'Grace, The Power of the Gospel', category: 'Books', price: 15, originalPrice: null as number | null, free: false, cover: '/images/1000045321.webp', description: 'The most life-changing book on grace you will ever read.' },
  { id: 2, title: 'Spirit, Soul & Body USB', category: 'Audio', price: 0, originalPrice: null as number | null, free: true, cover: '/images/1000045334.webp', description: 'All four parts of the Spirit, Soul & Body series — free download.' },
  { id: 3, title: "The Believer's Authority", category: 'Audio', price: 12, originalPrice: 16 as number | null, free: false, cover: '/images/1000045333.webp', description: 'Four-part audio series on your God-given authority as a believer.' },
  { id: 4, title: "God's Will for You", category: 'Books', price: 10, originalPrice: null as number | null, free: false, cover: '/images/1000045321.webp', description: "Discover what God's will really is — and how to walk in it daily." },
  { id: 5, title: 'Healing Journey Study Pack', category: 'Study Packs', price: 35, originalPrice: 50 as number | null, free: false, cover: '/images/1000045336.webp', description: 'Book + 4-part audio + scripture declaration card set for healing.' },
  { id: 6, title: 'The New You & the Holy Spirit', category: 'Video', price: 0, originalPrice: null as number | null, free: true, cover: '/images/1000045334.webp', description: 'Six-part video series — stream free online.' },
  { id: 7, title: 'Christian Survival Kit', category: 'Free', price: 0, originalPrice: null as number | null, free: true, cover: '/images/1000045333.webp', description: 'Six foundational booklets for new and growing believers.' },
  { id: 8, title: "Our Classics Collection", category: 'Audio', price: 49, originalPrice: 79 as number | null, free: false, cover: '/images/1000045321.webp', description: '20+ foundational teaching series on one USB drive.' },
];

export default function StoreClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<number[]>([]);
  const [added, setAdded] = useState<number | null>(null);
  const filtered = PRODUCTS.filter(p => activeCategory === 'All' || p.category === activeCategory || (activeCategory === 'Free' && p.free));
  const handleAdd = (id: number) => { setCart(c => [...c, id]); setAdded(id); setTimeout(() => setAdded(null), 1500); };

  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)), #020617)', padding: '4rem 0 5.5rem', color: 'white' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="eyebrow" style={{ color: 'hsl(var(--brand-amber))' }}>Bookstore</span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Resource Store</h1>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.97rem' }}>Books, audio, video, and study materials to go deeper.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Cart ({cart.length})</span>
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)} style={{ padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)', border: '1.5px solid', borderColor: activeCategory === c ? 'hsl(var(--brand-blue))' : 'var(--border-glass)', background: activeCategory === c ? 'hsl(var(--brand-blue))' : 'transparent', color: activeCategory === c ? 'white' : 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s ease' }}>{c}</button>
          ))}
        </div>
        <div className="grid-cols-4">
          {filtered.map(p => (
            <div key={p.id} className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '180px', background: `url(${p.cover}) center/cover`, borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}>
                {p.free && <span className="badge badge-green" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', fontSize: '0.65rem' }}>FREE</span>}
                {p.originalPrice && <span className="badge badge-amber" style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', fontSize: '0.65rem' }}>SALE</span>}
              </div>
              <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'hsl(var(--brand-blue))', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem', display: 'block' }}>{p.category}</span>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, flex: 1, marginBottom: '1rem' }} className="truncate-3">{p.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <div>
                    {p.free ? <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#16a34a', fontSize: '1rem' }}>Free</span>
                      : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem' }}>${p.price}{p.originalPrice && <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '0.35rem', textDecoration: 'line-through' }}>${p.originalPrice}</span>}</span>}
                  </div>
                  <button onClick={() => handleAdd(p.id)} className="btn btn-sm" style={{ background: added === p.id ? '#16a34a' : 'linear-gradient(135deg, hsl(var(--brand-blue)), hsl(var(--brand-blue-dark)))', color: 'white', fontSize: '0.75rem', padding: '0.4rem 0.75rem', border: 'none', transition: 'background 0.3s ease' }}>
                    {added === p.id ? '✓ Added' : p.free ? 'Get Free' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
