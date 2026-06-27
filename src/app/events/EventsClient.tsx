'use client';
import React, { useState } from 'react';

const EVENTS = [
  { id: 1, title: 'Healing Is Here 2026', date: 'August 12–15, 2026', location: 'Colorado Springs, CO', type: 'Conference', description: 'Three days of healing, teaching, and testimonies. Live stream available worldwide.', featured: true },
  { id: 2, title: 'NXT Level Conference', date: 'July 18–20, 2026', location: 'Woodland Park, CO', type: 'Conference', description: 'A conference designed to take your faith to the next level.', featured: true },
  { id: 3, title: 'Truth & Liberty Conference', date: 'September 5–7, 2026', location: 'Colorado Springs, CO', type: 'Conference', description: 'Educating, unifying, and activating believers to impact culture.', featured: false },
  { id: 4, title: 'Live Bible Study', date: 'Every Tuesday, 7 PM MT', location: 'Online / Live Stream', type: 'Weekly', description: 'Join Andrew every Tuesday for a live verse-by-verse exploration of the Bible.', featured: false },
  { id: 5, title: 'Triumphant Gospel Triumphant Special', date: 'October 10, 2026', location: 'Woodland Park, CO', type: 'Special Event', description: 'A special live broadcast from Triumphant Bible Institute.', featured: false },
  { id: 6, title: 'SFBC Ministers Conference', date: 'November 3–5, 2026', location: 'Online / Hybrid', type: 'Conference', description: 'Annual conference for ministers, pastors, and church leaders.', featured: false },
];

const TYPE_COLORS: Record<string, string> = { Conference: 'hsl(var(--brand-blue))', Weekly: '#16a34a', 'Special Event': 'hsl(var(--brand-amber))' };
const TYPES = ['All', 'Conference', 'Weekly', 'Special Event'];

export default function EventsClient() {
  const [activeType, setActiveType] = useState('All');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const filtered = EVENTS.filter(e => activeType === 'All' || e.type === activeType);
  const featured = filtered.filter(e => e.featured);
  const regular = filtered.filter(e => !e.featured);

  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #0b4a2e, #020617)', padding: 'clamp(2rem,6vw,4rem) 0 clamp(2.5rem,7vw,5.5rem)', color: 'white' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'hsl(var(--brand-amber))' }}>Calendar</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Events & Conferences</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '520px', lineHeight: 1.65, fontSize: '0.97rem' }}>
            In-person conferences, live streams, and weekly broadcasts. Every event is an opportunity to receive and give life.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {TYPES.map(t => (
            <button key={t} onClick={() => setActiveType(t)} style={{ padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)', border: '1.5px solid', borderColor: activeType === t ? 'hsl(var(--brand-blue))' : 'var(--border-glass)', background: activeType === t ? 'hsl(var(--brand-blue))' : 'transparent', color: activeType === t ? 'white' : 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s ease' }}>{t}</button>
          ))}
        </div>

        {featured.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>Featured Events</h2>
            <div className="grid-cols-2">
              {featured.map(e => (
                <div key={e.id} className="card" style={{ borderColor: 'hsla(var(--brand-amber), 0.3)', background: 'linear-gradient(145deg, rgba(214,123,18,0.04), transparent)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="badge badge-amber">{e.type}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{e.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{e.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'hsl(var(--brand-blue))', fontWeight: 600, marginBottom: '0.75rem' }}>{e.location}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{e.description}</p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href="#" className="btn btn-amber" style={{ fontSize: '0.85rem' }}>Register Now</a>
                    <a href="#" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {regular.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>All Events</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {regular.map(e => (
                <div key={e.id} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1.25rem 1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', padding: '0.75rem 1rem', minWidth: '70px', flexShrink: 0 }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>{e.date.split(' ')[0]}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>—</div>
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: TYPE_COLORS[e.type] || 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{e.type}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>· {e.location}</span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{e.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }} className="truncate-2">{e.description}</p>
                  </div>
                  <a href="#" className="btn btn-outline btn-sm" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Register</a>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(34,122,173,0.06), rgba(214,123,18,0.04))' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Never Miss an Event</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Get notified about upcoming conferences and live streams.</p>
          {!notified ? (
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input className="input" type="email" placeholder="Your email address" style={{ maxWidth: '280px' }} value={notifyEmail} onChange={e => setNotifyEmail(e.target.value)} />
              <button className="btn btn-amber" onClick={() => notifyEmail && setNotified(true)}>Notify Me</button>
            </div>
          ) : (
            <p style={{ color: '#16a34a', fontWeight: 600 }}>✓ You're subscribed to event updates!</p>
          )}
        </div>
      </div>
    </div>
  );
}
