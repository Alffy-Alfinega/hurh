'use client';
import React, { useState } from 'react';

const DB: Record<string, { reference: string; verse: string; greekNote?: string; note: string }> = {
  'john 3:16': { reference: 'John 3:16', verse: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."', greekNote: 'The Greek word for loved here is "agapao" — representing divine, unconditional love based on the character of the giver, not the merit of the recipient.', note: "Many use this verse to preach fear. But the primary focus is God's motivation: love. He gave Jesus because He loved. Furthermore, \"eternal life\" is qualitative — communion with God that begins now, not just duration after death." },
  'romans 8:1': { reference: 'Romans 8:1', verse: '"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit."', greekNote: 'The Greek "katakrima" refers to a judicial sentence of punishment. In Christ, that sentence is entirely abolished.', note: "In the oldest manuscripts, the qualifying clause isn't in verse 1 — it was copied from verse 4. This means there is simply no condemnation for those in Christ, period. God does not condemn you when you fail." },
  'galatians 2:20': { reference: 'Galatians 2:20', verse: '"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me…"', greekNote: '"Systauroo" — jointly crucified, completely identified with Christ\'s death. Past tense and finished.', note: 'When Jesus died, your old self died with Him. You do not need to "die to self" daily as an ongoing effort. The old man is already dead. Your job is to reckon him dead and let the new creation take charge.' },
  '1 peter 2:24': { reference: '1 Peter 2:24', verse: '"Who his own self bare our sins in his own body on the tree…by whose stripes ye were healed."', greekNote: '"Iaomai" — to cure, to make whole. Same word used for physical healings in the Gospels. Past tense: were healed.', note: 'Notice the tense: you WERE healed. Not "will be." Not "might be." Jesus already paid for your healing at the cross. Faith is not acquiring healing — it is receiving what has already been fully provided.' },
};

export default function CommentaryClient() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<typeof DB[string] | null | undefined>(undefined);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const key = query.trim().toLowerCase().replace(/\s+/g, ' ');
    let found = null;
    for (const k in DB) { if (key.includes(k) || k.includes(key)) { found = DB[k]; break; } }
    setResult(found);
  };

  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)), #020617)', padding: '4rem 0 5.5rem', color: 'white' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'hsl(var(--brand-amber))' }}>Study Tool</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Living Commentary</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '540px', lineHeight: 1.65, fontSize: '0.97rem' }}>Verse-by-verse commentary with Greek word studies built from 40+ years of teaching.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '2.5rem 1.5rem', maxWidth: '800px' }}>
        <form onSubmit={handleSearch} style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Search by verse reference</label>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input className="input" type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='e.g. "John 3:16" or "Romans 8:1"' style={{ flex: 1 }} />
            <button type="submit" className="btn btn-primary">Look Up</button>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', alignSelf: 'center' }}>Try:</span>
            {['John 3:16', 'Romans 8:1', 'Galatians 2:20', '1 Peter 2:24'].map(s => (
              <button key={s} type="button" onClick={() => setQuery(s)} style={{ padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'hsl(var(--brand-blue))', fontSize: '0.78rem', cursor: 'pointer', fontWeight: 600 }}>{s}</button>
            ))}
          </div>
        </form>

        {result === null && (
          <div className="card" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            No commentary found for "{query}". Try John 3:16, Romans 8:1, Galatians 2:20, or 1 Peter 2:24.
          </div>
        )}

        {result && (
          <div className="card" style={{ borderLeft: '3px solid hsl(var(--brand-amber))' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{result.reference}</h2>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Living Commentary</span>
            </div>
            <div style={{ background: 'var(--bg-primary)', padding: '1.1rem 1.4rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid hsl(var(--brand-blue))', marginBottom: '1.25rem', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{result.verse}</div>
            {result.greekNote && (
              <div style={{ padding: '0.75rem 1rem', border: '1px dashed var(--border-glass)', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', fontSize: '0.86rem', lineHeight: 1.55 }}>
                <span style={{ fontWeight: 700, color: 'hsl(var(--brand-blue))' }}>Greek Word Study: </span>
                <span style={{ color: 'var(--text-secondary)' }}>{result.greekNote}</span>
              </div>
            )}
            <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>Commentary Note</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{result.note}</p>
          </div>
        )}

        {result === undefined && (
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 0.75rem' }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Enter a verse reference to access commentary notes.
          </div>
        )}
      </div>
    </div>
  );
}
