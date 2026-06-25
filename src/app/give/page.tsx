'use client';

import React, { useState } from 'react';

const TIERS = [
  { name: 'Grace Partner', minAmount: 10, maxAmount: 29, badge: 'Grace Circle', color: 'hsl(var(--brand-blue))', benefits: ['Monthly Andrew Wommack Newsletter (Print & Digital)', 'Partner Devotional booklet (mailed quarterly)', 'Personal prayer agreement from our ministers'] },
  { name: 'Gospel Truth Partner', minAmount: 30, maxAmount: 99, badge: 'Gospel Envoy', color: 'hsl(var(--brand-blue-dark))', benefits: ['All Grace Partner benefits', '15% discount on all bookstore resources', 'Exclusive monthly teaching MP3 download', 'Online access to standard study commentaries'] },
  { name: 'Pillar Partner', minAmount: 100, maxAmount: 299, badge: 'Ministry Pillar', color: 'hsl(var(--brand-amber))', benefits: ['All Gospel Truth Partner benefits', 'Full premium Living Commentary access', 'Complimentary study guides for new releases', 'Reserved VIP seating at all AWMI conferences'] },
  { name: 'Foundation Pillar', minAmount: 300, maxAmount: 1000, badge: 'Foundation Circle', color: 'hsl(var(--brand-amber-light))', benefits: ['All Pillar Partner benefits', 'Autographed Leather Study Bible by Andrew', 'Annual Woodland Park Ranch partner banquet invite', 'Quarterly video briefings with ministry leadership'] },
];

const IMPACT_STATS = [
  { number: '180+', label: 'Countries' }, { number: '50M+', label: 'Lives Touched' },
  { number: '40+', label: 'Languages' }, { number: 'FREE', label: 'To Recipients' },
];

export default function GivePage() {
  const [partnerAmount, setPartnerAmount] = useState(50);
  const [giveType, setGiveType] = useState<'monthly' | 'onetime'>('monthly');
  const [presetAmount, setPresetAmount] = useState(50);
  const [customText, setCustomText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentTier = TIERS.find(t => partnerAmount >= t.minAmount && partnerAmount <= t.maxAmount) || TIERS[TIERS.length - 1];

  return (
    <div>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)), #020617)', padding: '4.5rem 0 5.5rem', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Faithful Stewardship</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>Partnering in Grace &amp; Truth</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '560px', margin: '0 auto', fontSize: '0.97rem', lineHeight: 1.65 }}>
            Your support broadcasts the message of God's unconditional love to millions — at no cost to them. Every gift makes a global difference.
          </p>
        </div>
      </div>

      {/* Impact stats */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '1.75rem 0', gap: '1rem' }}>
            {IMPACT_STATS.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 900, color: 'hsl(var(--brand-amber))', lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Calculator */}
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>Partnership Benefit Calculator</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Drag the slider to see your benefit tier.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Monthly Level</span>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'hsl(var(--brand-amber))', lineHeight: 1, fontFamily: 'var(--font-display)' }}>
                    ${partnerAmount}<span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
                  </span>
                </div>
                <input type="range" min="10" max="500" step="5" value={Math.min(partnerAmount, 500)} onChange={e => { setPartnerAmount(parseInt(e.target.value)); setPresetAmount(0); }}
                  style={{ width: '100%', accentColor: 'hsl(var(--brand-blue))', cursor: 'pointer', height: '6px', borderRadius: '3px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  <span>$10</span><span>$100</span><span>$250</span><span>$500+</span>
                </div>
              </div>

              {/* Active tier card */}
              <div style={{ border: `1px solid ${currentTier.color}30`, borderRadius: 'var(--radius-md)', padding: '1.5rem', background: 'var(--bg-primary)', borderLeft: `3px solid ${currentTier.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{currentTier.name}</h3>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', background: `${currentTier.color}18`, color: currentTier.color }}>{currentTier.badge}</span>
                </div>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Your Benefits</p>
                <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {currentTier.benefits.map((b, i) => (
                    <li key={i} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Donation form */}
            <div className="card" style={{ padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              {!submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  <h2 style={{ fontSize: '1.6rem', letterSpacing: '-0.01em' }}>Select Gift Amount</h2>

                  {/* Toggle */}
                  <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', padding: '4px', gap: '4px' }}>
                    {(['monthly', 'onetime'] as const).map(t => (
                      <button key={t} type="button" onClick={() => setGiveType(t)} style={{
                        flex: 1, padding: '0.55rem', border: 'none', borderRadius: '6px', cursor: 'pointer',
                        fontSize: '0.88rem', fontWeight: 600, fontFamily: 'var(--font-display)',
                        background: giveType === t ? 'var(--bg-secondary)' : 'transparent',
                        color: giveType === t ? 'var(--text-primary)' : 'var(--text-secondary)',
                        boxShadow: giveType === t ? 'var(--shadow-xs)' : 'none',
                        transition: 'all 0.15s ease',
                      }}>
                        {t === 'monthly' ? 'Monthly Gift' : 'One-Time Gift'}
                      </button>
                    ))}
                  </div>

                  {/* Presets */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                    {[20, 50, 100, 250].map(amt => {
                      const sel = presetAmount === amt && !customText;
                      return (
                        <button key={amt} type="button" onClick={() => { setPresetAmount(amt); setPartnerAmount(amt); setCustomText(''); }}
                          style={{ padding: '0.7rem 0', border: `1.5px solid ${sel ? 'hsl(var(--brand-amber))' : 'var(--border-glass)'}`, borderRadius: 'var(--radius-sm)', background: sel ? 'linear-gradient(135deg, hsl(var(--brand-amber)), hsl(var(--brand-amber-light)))' : 'var(--bg-primary)', color: sel ? 'white' : 'var(--text-primary)', fontWeight: 700, fontFamily: 'var(--font-display)', cursor: 'pointer', fontSize: '0.95rem', transition: 'all 0.15s ease' }}>
                          ${amt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom */}
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>Or Enter Custom Amount ($)</label>
                    <input className="input" type="number" min="1" placeholder="Other amount" value={customText}
                      onChange={e => { setCustomText(e.target.value); const p = parseInt(e.target.value); if (!isNaN(p) && p > 0) { setPartnerAmount(p); setPresetAmount(0); } }} />
                  </div>

                  {/* Trust badges */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', padding: '0.75rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>🔒 Secure</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>✓ Tax Deductible</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>↩ Cancel Anytime</span>
                  </div>

                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {giveType === 'monthly' ? 'Your card will be charged monthly. Modify or cancel anytime in the partner portal.' : 'A single charge will be processed immediately. Thank you for your generosity!'}
                  </p>

                  <button className="btn btn-amber" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }} onClick={() => partnerAmount > 0 && setSubmitted(true)}>
                    Complete ${partnerAmount} {giveType === 'monthly' ? 'Monthly' : 'One-Time'} Gift
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'hsla(var(--brand-amber), 0.12)', color: 'hsl(var(--brand-amber))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h2 style={{ fontSize: '1.6rem' }}>Gift Received!</h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    Thank you for your generous gift of <strong>${partnerAmount}</strong>. You are helping bring God's grace to the world — free of charge.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '0.5rem' }}>Give Again</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
