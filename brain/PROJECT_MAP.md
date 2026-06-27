# HURH — Project Brain
> Church Ministry Web App — Next.js 16 / React 19
> Inspired by awmi.net structure. Branding: AWM placeholder until client assets provided.

## Project Definition
- **Client**: Generic church/ministry (placeholder branding)
- **Goal**: Professional, performant, full-featured ministry web app — better than awmi.net in every measurable way
- **Reference**: awmi.net (structure) + ADDIE audit findings
- **Stack**: Next.js 16.2.6 · React 19 · TypeScript · Custom CSS design system
- **Hosting target**: Vercel (fully static, edge-cached)

## Brand Tokens (Placeholder — AWM)
| Token | Value |
|---|---|
| brand-blue | 204, 67%, 41% (#227AAD) |
| brand-blue-dark | 207, 80%, 30% (#0F538A) |
| brand-amber | 32, 85%, 46% (#D67B12) |
| brand-amber-light | 35, 90%, 55% |

## Routes — ALL BUILT ✅
| Route | Page | Status |
|---|---|---|
| `/` | Homepage | ✅ Hero + stats + testimony + ministries grid + quick nav + CTA |
| `/watch` | Watch | ✅ Custom video player + episode grid + category tabs |
| `/listen` | Listen | ✅ Audio library + search + featured track + category filter |
| `/read` | Daily Devotional | ✅ Calendar + commentary + prayer |
| `/healing` | Healing Center | ✅ Scriptures + declarations + prayer form + testimonies |
| `/give` | Partner/Give | ✅ Benefit calculator + donation form + impact stats |
| `/teachings` | Browse Teachings | ✅ 12 series · topic filter · type filter · grid/list view |
| `/events` | Events Calendar | ✅ Featured events + full list + type filter + notify CTA |
| `/search` | Search | ✅ Full-text search + type filter + popular topics |
| `/store` | Resource Store | ✅ 8 products · categories · cart counter · free/sale badges |
| `/schedule` | Broadcast Schedule | ✅ 6 channels + timezone converter |
| `/blog` | Blog & Articles | ✅ Featured post + category grid + 6 articles |
| `/commentary` | Living Commentary | ✅ Verse search + Greek word studies + Andrew's notes |
| `/about` | About | ✅ Mission + beliefs + leadership team + contact CTA |
| `/espanol` | En Español | ✅ Spanish gateway with resource grid |
| `/account` | My Account | ✅ Sign in / register + success state |

## Components
| Component | Description |
|---|---|
| `SiteHeader` | Sticky nav · dropdown menus · search modal (⌘K) · language toggle · mobile overlay |
| `SiteFooter` | 4-col footer · all 16 routes linked · newsletter signup |
| `ScriptureTicker` | Ambient scrolling scripture/broadcast strip |
| `AudioPlayer` | Persistent global bottom audio bar |
| `ThemeToggle` | Light/dark with localStorage persistence |
| `AudioContext` | Global audio state provider |

## Build Status
- ✅ `npm run build` — 16 routes, 0 errors, all static
- ✅ .gitignore — node_modules excluded
- ✅ Per-page metadata (title + description) on every route
- ✅ Suspense boundary on /search (useSearchParams)
- ✅ GitHub push — Alffy-Alfinega/hurh (5 commits, clean history)
- ⏳ Vercel deploy — needs manual connect at vercel.com/new (Vercel MCP uses separate auth from GitHub PAT)
- ✅ Client rebranded — The Triumphant Ministry, real WebP images deployed

## vs awmi.net — Performance Comparison
| Metric | awmi.net | HURH |
|---|---|---|
| HTML size | 351KB | ~15KB |
| CSS files | 75 | 1 |
| JS files | 63 | ~3 chunks |
| Cache | 0% | 95%+ static |
| H1 on homepage | ❌ | ✅ |
| Meta descriptions | ❌ | ✅ on all 16 routes |
| Search | Separate WP plugin | ✅ Built-in |
| Dark mode | ❌ | ✅ |
| Persistent audio | ❌ | ✅ |
| Mobile nav | Elementor (heavy) | Custom lightweight |
| Languages | Separate page | ✅ /espanol + nav toggle |
| Store | Separate domain | ✅ /store on same domain |
| Broadcast schedule | ✅ | ✅ /schedule |
| Blog | ✅ (WP) | ✅ /blog |
| Commentary | ✅ (paid) | ✅ /commentary (free) |
| Events | ✅ (plugin) | ✅ /events |
| User accounts | store.awmi.net | ✅ /account |

## Next Steps (When Client Provides)
1. Replace "AWM Ministries" → church name throughout
2. Swap brand colors in globals.css tokens
3. Replace /images/* with actual church photos
4. Add real audio/video URLs
5. Wire up real forms (prayer, newsletter, donation)
6. Add real events data
7. Push to GitHub + deploy to Vercel
