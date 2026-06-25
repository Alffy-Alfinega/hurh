import type { Metadata } from 'next';
import './globals.css';
import { AudioProvider } from '@/context/AudioContext';
import { AudioPlayer } from '@/components/AudioPlayer';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ScriptureTicker } from '@/components/ScriptureTicker';

export const metadata: Metadata = {
  title: 'Andrew Wommack Ministries | Grace & Truth',
  description: 'A modern digital experience of Andrew Wommack Ministries — daily broadcasts, audio teachings, healing scriptures, and partnership tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <AudioProvider>
          <ScriptureTicker />
          <SiteHeader />
          <main style={{ flex: '1 0 auto', paddingBottom: 'calc(var(--player-height) + 1.5rem)' }}>
            {children}
          </main>
          <SiteFooter />
          <AudioPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
