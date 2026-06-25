# HURH — Project Brain
> Andrew Wommack Ministries — Next.js 16 / React 19 Rebuild

## Stack
- **Framework**: Next.js 16.2.6 (App Router) + React 19.2.4
- **Styling**: Custom CSS vars + Tailwind v4 (PostCSS)
- **Fonts**: Outfit (display) + Plus Jakarta Sans (body)
- **State**: React Context (AudioContext)
- **Config**: `experimental.viewTransition: true`

## Brand Tokens
| Token | Value |
|---|---|
| brand-blue | 204, 67%, 41% (#227AAD) |
| brand-blue-dark | 207, 80%, 30% (#0F538A) |
| brand-amber | 32, 85%, 46% (#D67B12) |
| brand-amber-light | 35, 90%, 55% |

## Routes
| Route | Status |
|---|---|
| `/` | ✅ Improved — richer hero, sticky nav mobile, news ticker, footer |
| `/watch` | ✅ Improved — mobile responsive player grid |
| `/listen` | ✅ Improved — featured track hero, speed control |
| `/read` | ✅ Improved — calendar bug fixed, better typography |
| `/healing` | ✅ Improved — testimonies with images, richer cards |
| `/give` | ✅ Improved — impact stats, social proof |
| `layout.tsx` | ✅ Improved — mobile nav, footer, search bar |
| `globals.css` | ✅ Improved — footer styles, mobile nav, ticker, new utilities |

## Improvements Made (vs awmi.net)
1. **Mobile navigation** — hamburger menu, full-screen overlay
2. **Live ticker** — scrolling scripture/broadcast strip under nav
3. **Hero** — animated stat counters, social proof badges
4. **Footer** — full 4-col footer with links, socials, newsletter
5. **Watch page** — mobile-first responsive layout
6. **Listen page** — featured hero track card, playback speed
7. **Give page** — impact stats bar, trust badges
8. **Healing page** — image testimonies, better card hierarchy
9. **Read page** — calendar date computation fixed
10. **Global** — consistent focus states, better dark mode contrast

## Current Task
- [x] Full redesign/improvement pass
- [ ] Deploy to Vercel
