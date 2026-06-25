# HURH — Project Brain
> Andrew Wommack Ministries — Next.js 16 / React 19 Rebuild

## Stack
- **Framework**: Next.js 16.2.6 (App Router) + React 19.2.4
- **Styling**: Custom CSS vars (no Tailwind utility classes used in JSX) + Tailwind v4 (PostCSS)
- **Fonts**: Outfit (display) + Plus Jakarta Sans (body) via Google Fonts
- **State**: React Context (AudioContext)
- **Config**: `experimental.viewTransition: true`

## File Tree
```
src/
├── app/
│   ├── layout.tsx          ← Global nav, header, AudioPlayer, ThemeToggle
│   ├── page.tsx            ← Homepage (Hero, Broadcast, Testimony, Ministries, CTA)
│   ├── globals.css         ← Design tokens, CSS vars, utility classes
│   ├── watch/page.tsx      ← Custom video player + episode grid
│   ├── listen/page.tsx     ← Audio library with search + category filter
│   ├── read/page.tsx       ← (not yet read)
│   ├── healing/page.tsx    ← (not yet read)
│   └── give/page.tsx       ← Partnership calculator + donation form
├── components/
│   ├── AudioPlayer.tsx     ← Persistent bottom audio player
│   └── ThemeToggle.tsx     ← Light/dark theme switcher
└── context/
    └── AudioContext.tsx    ← Global audio state (track, play/pause)

public/images/
├── hero_background.png
├── lance_testimony.png
├── charis_college.png
└── truth_liberty.png
```

## Brand Tokens
| Token | Value |
|---|---|
| brand-blue | 204, 67%, 41% (#227AAD) |
| brand-blue-dark | 207, 80%, 30% (#0F538A) |
| brand-amber | 32, 85%, 46% (#D67B12) |
| brand-amber-light | 35, 90%, 55% |

## Pages & Purpose
| Route | Purpose |
|---|---|
| `/` | Hero + Broadcast highlight + Testimony + Ministry grid + CTA |
| `/watch` | Custom video player + episode tabs grid |
| `/listen` | Audio library with search, categories, persistent player |
| `/read` | (TBD) |
| `/healing` | (TBD) |
| `/give` | Partnership benefit calculator + donation form |

## Key Patterns
- All pages use `'use client'`
- CSS classes: `.container`, `.glass-panel`, `.card`, `.btn`, `.btn-amber`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.grid-cols-3`, `.nav-link`, `.text-gradient-blue`, `.hide-mobile`
- Audio: global persistent player via `AudioContext`
- Themes: `[data-theme="dark"]` on root, toggled by ThemeToggle
- ViewTransitions: `document.startViewTransition()` used for tab switching

## Current Task
- [ ] npm install
- [ ] npm run build (check for errors)
- [ ] Replace public/images with optimized WebP images from user's upload
- [ ] Fix any build errors
- [ ] Deploy to Vercel
