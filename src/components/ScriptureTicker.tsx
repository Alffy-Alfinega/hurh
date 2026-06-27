'use client';
import React from 'react';

const ITEMS = [
  { text: '"By His stripes you were healed."', ref: '1 Peter 2:24' },
  { text: '"God so loved the world He gave His only Son."', ref: 'John 3:16' },
  { text: '"I am the Lord who heals you."', ref: 'Exodus 15:26' },
  { text: '"My word is medicine to all your flesh."', ref: 'Proverbs 4:22' },
  { text: 'Triumphant Gospel airs Mon–Fri at 7 AM & 10 PM EST on Daystar & TBN' },
  { text: '"The same Spirit that raised Jesus dwells in you."', ref: 'Romans 8:11' },
  { text: 'Healing Is Here Conference — August 12–15 · Register Now' },
  { text: '"Bless the Lord who heals all your diseases."', ref: 'Psalm 103:3' },
];

export const ScriptureTicker: React.FC = () => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <span className="ticker-label">LIVE ▸</span>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className="ticker-item">
              {item.text}
              {item.ref && <span className="ticker-item-ref">— {item.ref}</span>}
            </span>
            <span className="ticker-sep" aria-hidden="true">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
