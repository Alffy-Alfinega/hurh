import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'En Español', description: 'Enseñanzas, transmisiones y recursos de TM Ministerios en español.' };
import Link from 'next/link';

export default function EspanolPage() {
  const RESOURCES = [
    { title: 'La Verdad del Evangelio (TV)', desc: 'Vea el programa diario de The Triumphant Ministry en español, de lunes a viernes.', href: '/watch', icon: '📺' },
    { title: 'Enseñanzas de Audio', desc: 'Cientos de series de enseñanza gratuitas completamente en español.', href: '/listen', icon: '🎧' },
    { title: 'Devocional Diario', desc: 'El devocional diario de Andrew traducido al español — lea cada día.', href: '/read', icon: '📖' },
    { title: 'Centro de Sanidad', desc: 'Escrituras de sanidad y solicitud de oración — en su idioma.', href: '/healing', icon: '✝️' },
    { title: 'Libros y Recursos', desc: 'Materiales de estudio, libros y enseñanzas disponibles en español.', href: '/store', icon: '📚' },
    { title: 'Asóciese Con Nosotros', desc: 'Conviértase en socio y ayude a llevar este mensaje a todo el mundo.', href: '/give', icon: '🤝' },
  ];
  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, #7c3aed, #020617)', padding: '5rem 0 6rem', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🇪🇸</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '0.75rem' }}>Ministerios TM</span>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>Bienvenidos al Español</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2rem' }}>
            El amor incondicional y la gracia de Dios son para todos. Acceda a enseñanzas, transmisiones y recursos completamente en español — todo gratis.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/watch" className="btn btn-amber btn-lg">Ver Transmisión</Link>
            <Link href="/listen" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Escuchar Gratis</Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>Recursos en Español</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem' }}>Todo lo que necesita para crecer en su fe — en su idioma.</p>
        </div>
        <div className="grid-cols-3">
          {RESOURCES.map(r => (
            <Link key={r.title} href={r.href} className="card card-clickable" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>{r.icon}</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{r.title}</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>{r.desc}</p>
              <span style={{ fontSize: '0.82rem', color: 'hsl(var(--brand-blue))', fontWeight: 600 }}>Acceder →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
