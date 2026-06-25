'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <span style={{ background: 'linear-gradient(135deg, hsl(var(--brand-amber)), hsl(var(--brand-amber-light)))', color: 'white', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '7px', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.95rem' }}>AW</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>AWM Ministries</span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', maxWidth: '280px', marginBottom: '1.5rem' }}>
              Sharing the message of God's grace, healing, and unconditional love to the world — free of charge.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z' },
                { label: 'X / Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                    {s.label === 'YouTube' && <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Ministry col */}
          <div>
            <p className="footer-heading">Ministry</p>
            {[['/', 'Home'], ['/watch', 'Watch Gospel Truth'], ['/listen', 'Audio Library'], ['/read', 'Daily Devotional'], ['/healing', 'Healing Center'], ['/give', 'Partner With Us']].map(([href, label]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
            ))}
          </div>

          {/* Resources col */}
          <div>
            <p className="footer-heading">Resources</p>
            {[['https://www.charisbiblecollege.org', 'Charis Bible College'], ['https://truthandliberty.net', 'Truth & Liberty'], ['https://www.awmi.net', 'AWMI Official Site'], ['#', 'Bookstore'], ['#', 'TV Schedule'], ['#', 'Events']].map(([href, label]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="footer-link">{label}</a>
            ))}
          </div>

          {/* Newsletter col */}
          <div>
            <p className="footer-heading">Stay Connected</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', lineHeight: 1.55 }}>
              Receive Andrew's weekly devotional and broadcast updates directly in your inbox.
            </p>
            {!subbed ? (
              <div className="newsletter-input">
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                <button onClick={() => { if (email) setSubbed(true); }}>Subscribe</button>
              </div>
            ) : (
              <div style={{ padding: '0.75rem 1rem', background: 'rgba(22,163,74,0.12)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(22,163,74,0.2)', fontSize: '0.85rem', color: '#4ade80' }}>
                ✓ You're subscribed!
              </div>
            )}
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.75rem' }}>No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Andrew Wommack Ministries, Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Use', 'Contact'].map(t => (
              <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', transition: 'color 0.18s ease' }} onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
