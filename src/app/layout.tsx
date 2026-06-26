import type { Metadata } from 'next';
import './globals.css';
import { AudioProvider } from '@/context/AudioContext';
import { AudioPlayer } from '@/components/AudioPlayer';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ScriptureTicker } from '@/components/ScriptureTicker';

export const metadata: Metadata = {
  title: { default: 'AWM Ministries | Grace & Truth', template: '%s | AWM Ministries' },
  description: 'Teaching God\'s unconditional love and grace. Watch daily broadcasts, access thousands of free audio teachings, healing scriptures, and partner resources.',
  keywords: ['ministry', 'gospel', 'healing', 'grace', 'andrew wommack', 'teachings', 'church'],
  openGraph: {
    type: 'website',
    siteName: 'AWM Ministries',
    title: 'AWM Ministries | Grace & Truth',
    description: 'Teaching God\'s unconditional love and grace to the world — free of charge.',
  },
  twitter: { card: 'summary_large_image', site: '@awmministries' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <AudioProvider>
          <ScriptureTicker />
          <SiteHeader />
          <main style={{ flex: '1 0 auto', paddingBottom: 'calc(var(--player-height) + 1rem)' }}>
            {children}
          </main>
          <SiteFooter />
          <AudioPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
