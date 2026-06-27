'use client';

import React, { useState } from 'react';
import { useAudio, Track } from '@/context/AudioContext';

const AUDIOS: (Track & { category: string; description: string; year: string })[] = [
  { id: 'aud1', title: 'Spirit, Soul & Body: Part 1', speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', coverUrl: '/images/1000045321.webp', duration: '42:18', category: 'Spirit, Soul & Body', description: 'Understand the relational structure of your spirit, soul, and body. Learn how your spirit was instantly perfected at salvation.', year: '2025' },
  { id: 'aud2', title: 'Spirit, Soul & Body: Part 2', speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', coverUrl: '/images/1000045321.webp', duration: '45:30', category: 'Spirit, Soul & Body', description: 'Why your physical senses compete with your born-again spirit — and how the Word of God serves as a spiritual mirror.', year: '2025' },
  { id: 'aud3', title: "The Believer's Authority: Part 1", speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', coverUrl: '/images/1000045326.webp', duration: '38:10', category: "Believer's Authority", description: 'Explore the authority God has delegated to you as a believer. Stop begging God to do what He already commanded you to do.', year: '2026' },
  { id: 'aud4', title: "The Believer's Authority: Part 2", speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', coverUrl: '/images/1000045326.webp', duration: '40:15', category: "Believer's Authority", description: 'How to stand against satanic operations and enforce the victory Jesus already won.', year: '2026' },
  { id: 'aud5', title: "You've Already Got It!: Part 1", speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', coverUrl: '/images/1000045325.webp', duration: '44:50', category: "You've Already Got It", description: 'God has already blessed you with all spiritual blessings in Christ. Your healing and provision are waiting to manifest.', year: '2024' },
  { id: 'aud6', title: "You've Already Got It!: Part 2", speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', coverUrl: '/images/1000045325.webp', duration: '43:10', category: "You've Already Got It", description: "How to bypass unbelief and open the channel of faith so God's power flows from your spirit into your circumstances.", year: '2024' },
  { id: 'aud7', title: 'A Better Way to Pray: Part 1', speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', coverUrl: '/images/1000045321.webp', duration: '37:40', category: 'Prayer & Communion', description: 'Andrew challenges conventional prayer. Prayer is not about twisting God\'s arm — it\'s about communion and releasing His grace.', year: '2025' },
  { id: 'aud8', title: 'A Better Way to Pray: Part 2', speaker: 'The Triumphant Ministry', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', coverUrl: '/images/1000045321.webp', duration: '39:55', category: 'Prayer & Communion', description: "Commanding prayer vs pleading prayer. Harness the power of faith and declare God's promises over your health.", year: '2025' },
];

export default function ListenPage() {
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(AUDIOS.map(a => a.category)))];
  const featured = AUDIOS[0];

  const filteredAudios = AUDIOS.filter(item => {
    const q = searchQuery.toLowerCase();
    const matchSearch = item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
    const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ paddingBottom: '2rem' }}>
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)), #020617)', padding: '4rem 0 5rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '0', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(214,123,18,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="eyebrow" style={{ color: 'hsl(var(--brand-amber))' }}>Audio Archives</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Audio Teachings Library</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '540px', fontSize: '0.97rem', lineHeight: 1.65 }}>
            Stream hundreds of The Triumphant Ministry's core teaching series — absolutely free. The audio player persists as you browse.
          </p>
        </div>
      </div>

      {/* Featured track hero card */}
      <div className="container" style={{ marginTop: '-2.5rem', marginBottom: '2.5rem' }}>
        <div className="card" style={{
          padding: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(34,122,173,0.06) 0%, rgba(214,123,18,0.04) 100%)',
          borderColor: 'hsla(var(--brand-amber), 0.2)',
        }}>
          <div style={{ width: '110px', minHeight: '110px', background: `url(${featured.coverUrl}) center/cover`, flexShrink: 0 }} />
          <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Featured Series</span>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>{featured.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{featured.speaker} · {featured.duration}</p>
            </div>
            <button
              onClick={() => playTrack(featured)}
              className="btn btn-amber"
              style={{ flexShrink: 0 }}
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              {currentTrack?.id === featured.id && isPlaying ? 'Playing…' : 'Play Now'}
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Search + Filter */}
        <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 280px', position: 'relative' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input className="input" style={{ paddingLeft: '2.4rem' }} type="text" placeholder="Search teachings by title or keyword…" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          <select className="input" style={{ flex: '0 1 200px', cursor: 'pointer' }} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Track list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredAudios.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3.5rem', color: 'var(--text-muted)' }}>
              No teachings matched your search. Try "spirit", "authority", or "prayer".
            </div>
          ) : filteredAudios.map((track, idx) => {
            const isCurrent = currentTrack?.id === track.id;
            const isThisPlaying = isCurrent && isPlaying;
            return (
              <div key={track.id} className="card" style={{
                display: 'flex', alignItems: 'center', padding: '1rem 1.25rem',
                gap: '1rem', flexWrap: 'wrap',
                borderColor: isCurrent ? 'hsla(var(--brand-blue), 0.35)' : 'var(--border-glass)',
                background: isCurrent ? 'linear-gradient(135deg, rgba(34,122,173,0.04), rgba(214,123,18,0.02))' : 'var(--bg-secondary)',
              }}>
                {/* Track number */}
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace', minWidth: '22px', textAlign: 'right' }}>{String(idx + 1).padStart(2, '0')}</span>

                {/* Cover */}
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', background: `url(${track.coverUrl}) center/cover`, flexShrink: 0, border: '1px solid var(--border-glass)' }} />

                {/* Meta */}
                <div style={{ flex: '1 1 250px', minWidth: 0 }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--brand-amber))', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{track.category}</p>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.15rem' }} className="truncate-2">{track.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }} className="truncate-2">{track.description}</p>
                </div>

                {/* Right col */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0, marginLeft: 'auto' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{track.duration}</span>
                  <button
                    onClick={() => isCurrent ? togglePlay() : playTrack(track)}
                    style={{
                      width: '38px', height: '38px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      background: isThisPlaying
                        ? 'linear-gradient(135deg, hsl(var(--brand-amber)), hsl(var(--brand-amber-light)))'
                        : 'linear-gradient(135deg, hsl(var(--brand-blue)), hsl(var(--brand-blue-dark)))',
                      color: 'white', boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {isThisPlaying
                      ? <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
                      : <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '2px' }}><path d="M8 5v14l11-7z" /></svg>
                    }
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
