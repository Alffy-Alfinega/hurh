import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search teachings, sermons, scriptures, and resources.',
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>Loading search…</div>}>
      <SearchClient />
    </Suspense>
  );
}
