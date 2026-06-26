import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Broadcast Schedule', description: 'Gospel Truth TV and radio broadcast times worldwide.' };

export default function SchedulePage() {
  const CHANNELS = [
    { name: 'Daystar Television', times: ['Mon–Fri 7:00 AM ET', 'Mon–Fri 10:00 PM ET', 'Sat 12:00 PM ET'] },
    { name: 'TBN (Trinity Broadcasting)', times: ['Mon–Fri 6:30 AM ET', 'Sat 1:00 AM ET'] },
    { name: 'Inspiration Network', times: ['Mon–Fri 8:30 AM ET', 'Sun 5:30 PM ET'] },
    { name: 'Gospel Truth Network (GTN)', times: ['24/7 Online Streaming'] },
    { name: 'AWM Website', times: ['On Demand — All Episodes'] },
    { name: 'Sirius XM Radio', times: ['Channel 131 — Mon–Fri 12:00 PM ET'] },
  ];
  const TIMEZONES = [
    { zone: 'ET (Eastern)', offset: 0 },
    { zone: 'CT (Central)', offset: -1 },
    { zone: 'MT (Mountain)', offset: -2 },
    { zone: 'PT (Pacific)', offset: -3 },
  ];
  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--brand-blue-dark)), #020617)', padding: '4rem 0 5.5rem', color: 'white' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'hsl(var(--brand-amber))' }}>On Air</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Broadcast Schedule</h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '520px', lineHeight: 1.65 }}>Gospel Truth airs on networks worldwide. Find a time and channel that works for you — or watch anytime online.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
        <div className="grid-cols-2" style={{ marginBottom: '3rem' }}>
          {CHANNELS.map(ch => (
            <div key={ch.name} className="card">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'hsl(var(--brand-blue-dark))' }}>{ch.name}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {ch.times.map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'hsl(var(--brand-amber))', flexShrink: 0 }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Time Zone Converter</h3>
          <div className="grid-cols-4">
            {TIMEZONES.map(tz => (
              <div key={tz.zone} style={{ textAlign: 'center', padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>{tz.zone}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>{tz.offset === 0 ? '7:00 AM' : `${7 + tz.offset}:00 AM`}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Weekdays</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
