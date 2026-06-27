'use client';

import React, { useState } from 'react';

const SCRIPTURES = [
  { reference: 'Isaiah 53:5', verse: '"But he was wounded for our transgressions...and with his stripes we are healed."', declaration: 'Jesus took my sicknesses. By His stripes, I was healed. Healing belongs to me right now.', category: 'general' },
  { reference: 'Proverbs 4:20-22', verse: '"My son, attend to my words...they are life unto those that find them, and health to all their flesh."', declaration: "God's word is medicine to my flesh. I meditate on it and it brings health and strength to every cell.", category: 'chronic' },
  { reference: 'Romans 8:11', verse: '"...he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you."', declaration: 'The Spirit who raised Jesus lives in me. He is restoring and vitalizing my physical body right now.', category: 'terminal' },
  { reference: '2 Timothy 1:7', verse: '"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."', declaration: 'I refuse anxiety and fear. God has given me power, love, and a perfectly sound and peaceful mind.', category: 'mental' },
  { reference: 'Psalms 103:3', verse: '"Who forgiveth all thine iniquities; who healeth all thy diseases;"', declaration: 'Healing all my diseases is a direct benefit of my covenant with God. My body is strong and fully restored.', category: 'general' },
];

const TESTIMONIES = [
  { name: "Lance's Liver Healing", preview: 'Doctors gave Lance weeks to live due to critical liver failure. By standing on 1 Peter 2:24 and applying Andrew\'s teaching, his body was completely transformed.', category: 'terminal' },
  { name: "Hannah's Eyesight Restored", preview: 'Diagnosed with progressive macular degeneration, Hannah claimed God\'s promise for healing. At her next check-up, her retina was completely healthy and her vision fully restored.', category: 'chronic' },
  { name: 'Freedom from 15-Year Back Pain', preview: 'Michael lived with debilitating lumbar stenosis for 15 years. During a Triumphant Healing conference, he commanded the pain to leave. It vanished immediately — he has been drug-free since.', category: 'chronic' },
  { name: 'Healed of Stage 4 Cancer', preview: 'Given a terminal diagnosis, Margaret refused to accept it. She listened to healing scriptures daily. Her oncologist called her results "medically inexplicable." She is cancer-free today.', category: 'terminal' },
];

const TABS = [
  { id: 'all', label: 'All' }, { id: 'general', label: 'General' },
  { id: 'terminal', label: 'Terminal' }, { id: 'chronic', label: 'Chronic' }, { id: 'mental', label: 'Mental' },
];

export default function HealingPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', condition: 'general', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const filteredScriptures = activeTab === 'all' ? SCRIPTURES : SCRIPTURES.filter(s => s.category === activeTab);

  return (
    <div>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0b4a2e, #020617)', padding: '4.5rem 0 5.5rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="badge badge-green" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Grace &amp; Recovery</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>Triumphant Healing Center</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '540px', margin: '0 auto', fontSize: '0.97rem', lineHeight: 1.65, fontStyle: 'italic' }}>
            "He sent his word, and healed them, and delivered them from their destructions." — Psalms 107:20
          </p>
        </div>
      </div>

      {/* Main grid */}
      <div className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem', alignItems: 'start' }}>
            {/* Scriptures panel */}
            <div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>Healing Scriptures &amp; Declarations</h2>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {TABS.map(t => (
                  <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                    padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)', border: '1.5px solid',
                    borderColor: activeTab === t.id ? 'hsl(var(--brand-blue))' : 'var(--border-glass)',
                    background: activeTab === t.id ? 'hsl(var(--brand-blue))' : 'transparent',
                    color: activeTab === t.id ? 'white' : 'var(--text-secondary)',
                    cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, transition: 'all 0.15s ease',
                  }}>{t.label}</button>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {filteredScriptures.map((s, i) => (
                  <div key={i} className="card" style={{ padding: '1.4rem', borderLeft: '3px solid hsl(var(--brand-blue))' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                      <strong style={{ color: 'hsl(var(--brand-blue-dark))', fontSize: '0.95rem' }}>{s.reference}</strong>
                      <span className="badge badge-blue" style={{ fontSize: '0.65rem' }}>{s.category}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.85rem', lineHeight: 1.55 }}>{s.verse}</p>
                    <div style={{ padding: '0.7rem 0.9rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                      <p style={{ fontSize: '0.82rem', margin: 0 }}>
                        <span style={{ fontWeight: 700, color: 'hsl(var(--brand-amber))' }}>Declare: </span>
                        <span style={{ color: 'var(--text-secondary)' }}>"{s.declaration}"</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer form */}
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              {!submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>Submit a Prayer Request</h2>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Our prayer ministers stand in faith with you. Submit your details and we will agree with you for complete healing.</p>
                  </div>
                  {[
                    { name: 'name', label: 'Your Name *', type: 'text', placeholder: 'Enter your name' },
                    { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'Enter your email' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>{f.label}</label>
                      <input className="input" type={f.type} name={f.name} required placeholder={f.placeholder} value={(form as any)[f.name]} onChange={handleChange} />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Condition Category</label>
                    <select className="input" name="condition" value={form.condition} onChange={handleChange} style={{ cursor: 'pointer' }}>
                      <option value="general">General Healing</option>
                      <option value="terminal">Critical / Terminal</option>
                      <option value="chronic">Chronic Illness / Pain</option>
                      <option value="mental">Mental Peace / Depression</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>What are we agreeing for?</label>
                    <textarea className="input" name="message" rows={4} placeholder="Describe your prayer request…" value={form.message} onChange={handleChange} style={{ resize: 'vertical' }} />
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}
                    onClick={() => { if (form.name && form.email) setSubmitted(true); }}>
                    Submit Prayer Agreement
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(22,163,74,0.12)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h2 style={{ fontSize: '1.6rem' }}>Standing in Agreement</h2>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    Thank you, <strong>{form.name}</strong>. Your request has been received. Our prayer team is standing with you in faith.
                  </p>
                  <div className="card" style={{ padding: '1.1rem 1.25rem', fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    "If two of you shall agree on earth as touching any thing that they shall ask, it shall be done." — Matthew 18:19
                  </div>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">Submit Another Request</button>
                </div>
              )}
            </div>
          </div>

          {/* Testimony cards */}
          <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>Verified Reports</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.01em' }}>Recovery Journeys</h2>
            </div>
            <div className="grid-cols-2">
              {TESTIMONIES.map((t, i) => (
                <div key={i} className="card" style={{ borderLeft: '3px solid hsl(var(--brand-amber))' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, flex: 1 }}>{t.name}</h3>
                    <span className="badge badge-amber" style={{ fontSize: '0.65rem', flexShrink: 0, marginLeft: '0.5rem' }}>{t.category}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{t.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
