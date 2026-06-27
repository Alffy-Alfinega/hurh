import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About the Ministry', description: 'Learn about The Triumphant Ministry — our mission, beliefs, leadership, and global reach.' };
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const BELIEFS = [
    { title: 'The Bible', body: 'We believe the entire Bible is the inspired, infallible Word of God — the final authority in all matters of faith and conduct.' },
    { title: 'Salvation by Grace', body: 'Salvation is a free gift received by faith alone, not by works. God\'s love and forgiveness are unconditional.' },
    { title: 'Divine Healing', body: 'Healing is in the atonement. It is always God\'s will to heal. By His stripes we were healed — past tense, fully provided.' },
    { title: 'Holy Spirit', body: 'Every believer can be baptized in the Holy Spirit with the evidence of speaking in tongues and operating in spiritual gifts.' },
    { title: 'The Church', body: 'The body of Christ is one church made up of all born-again believers worldwide, regardless of denominational background.' },
    { title: 'The Second Coming', body: 'Jesus Christ is returning bodily to earth. We live with expectation of His coming and occupy until He arrives.' },
  ];
  const TEAM = [
    { name: 'The Triumphant Ministry', role: 'Senior Pastor & Founder', img: '/images/1000045330.webp' },
    { name: 'Director of Operations', role: 'Executive VP', img: '/images/1000045323.webp' },
    { name: 'Head of Bible Institute', role: 'CEO, Triumphant Bible Institute', img: '/images/1000045324.webp' },
  ];
  return (
    <div>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)), #020617)', padding: 'clamp(2.5rem, 8vw, 5rem) 0 clamp(3rem, 10vw, 6rem)', color: 'white' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="eyebrow" style={{ color: 'hsl(var(--brand-amber))' }}>Our Story</span>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.1 }}>Teaching God's Unconditional Love & Grace</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            The Triumphant Ministry was founded in 1978 with one mission: to take God's message of grace and unconditional love to the world — free of charge. Today that message reaches over 180 countries and millions of people every year.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem 1rem', padding: '1.5rem 0' }}>
            {[['1978', 'Founded'], ['180+', 'Countries'], ['50M+', 'Lives Reached'], ['500+', 'Free Teachings'], ['40+', 'Languages'], ['Free', 'Always']].map(([n,l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.8rem', color: 'hsl(var(--brand-amber))' }}>{n}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
        {/* Mission */}
        <div style={{ maxWidth: '720px', margin: '0 auto 4rem' }}>
          <span className="eyebrow">Our Mission</span>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.01em', marginBottom: '1rem' }}>Changing Lives Through the Word</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem', marginBottom: '1rem' }}>
            We believe that a revelation of God's unconditional love and grace will transform anyone. When people truly understand that God's acceptance is not based on performance, they are freed to walk in the health, prosperity, and peace that He has already provided.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem' }}>
            That's why all of our core teachings are free. We do not charge for the Gospel. Our ministry is sustained entirely by the generosity of partners who believe in this mission.
          </p>
        </div>

        {/* Beliefs */}
        <div id="beliefs" style={{ marginBottom: '4rem' }}>
          <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>Foundation</span>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.01em', textAlign: 'center', marginBottom: '2.5rem' }}>What We Believe</h2>
          <div className="grid-cols-3">
            {BELIEFS.map(b => (
              <div key={b.title} className="card" style={{ borderTop: '2px solid hsl(var(--brand-amber))' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'hsl(var(--brand-blue-dark))' }}>{b.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div id="team" style={{ marginBottom: '4rem' }}>
          <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>Leadership</span>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.01em', textAlign: 'center', marginBottom: '2.5rem' }}>Ministry Leadership</h2>
          <div className="grid-cols-3">
            {TEAM.map(m => (
              <div key={m.name} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `url(${m.img}) center/cover`, margin: '0 auto 1rem', border: '3px solid var(--border-glass)' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{m.name}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(34,122,173,0.05), rgba(214,123,18,0.03))' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Get In Touch</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>Questions? Prayer requests? Partnership enquiries? We'd love to hear from you.</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/healing" className="btn btn-primary">Prayer Request</Link>
            <Link href="/give" className="btn btn-amber">Partner With Us</Link>
            <a href="mailto:info@triumphantministry.com" className="btn btn-outline">Email Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
