'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function AccountClient() {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ background: 'linear-gradient(135deg, hsl(var(--brand-amber)), hsl(var(--brand-amber-light)))', color: 'white', width: '50px', height: '50px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', fontSize: '1.2rem', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>AW</span>
          <h1 style={{ fontSize: '1.6rem', letterSpacing: '-0.01em' }}>Partner Account</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.35rem' }}>Access your benefits, library, and giving history</p>
        </div>
        <div className="card" style={{ padding: '2.5rem' }}>
          {!submitted ? (
            <>
              <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', padding: '3px', marginBottom: '2rem', gap: '3px' }}>
                {(['login', 'register'] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '0.55rem', border: 'none', borderRadius: '6px', background: tab === t ? 'var(--bg-secondary)' : 'transparent', color: tab === t ? 'var(--text-primary)' : 'var(--text-secondary)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', transition: 'all 0.15s ease' }}>
                    {t === 'login' ? 'Sign In' : 'Create Account'}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tab === 'register' && (
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Full Name</label>
                    <input className="input" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                )}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Email Address</label>
                  <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Password</label>
                  <input className="input" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                {tab === 'login' && <div style={{ textAlign: 'right' }}><a href="#" style={{ fontSize: '0.82rem', color: 'hsl(var(--brand-blue))', fontWeight: 600 }}>Forgot password?</a></div>}
                <button className="btn btn-amber" style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }} onClick={() => (email && password) && setSubmitted(true)}>
                  {tab === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'hsla(var(--brand-amber),0.12)', color: 'hsl(var(--brand-amber))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Welcome!</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Signed in as <strong>{email}</strong></p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link href="/listen" className="btn btn-primary" style={{ justifyContent: 'center' }}>Browse Audio Library</Link>
                <Link href="/give" className="btn btn-outline" style={{ justifyContent: 'center' }}>Partner Benefits</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
