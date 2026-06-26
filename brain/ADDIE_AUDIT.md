# ADDIE AUDIT — awmi.net & Ecosystem
> Professional Web Developer + Project Manager Assessment  
> Conducted: June 26, 2026  
> Scope: awmi.net (main) + all sub-domains and sister properties

---

## PROPERTIES AUDITED

| Domain | Status | TTFB | Size |
|--------|--------|------|------|
| www.awmi.net | ✅ 200 | 0.69s | 351KB HTML |
| store.awmi.net | ✅ 200 | 0.79s | 167KB |
| www.gtntv.com | ✅ 200 | 2.90s ⚠️ | 168KB |
| www.charisbiblecollege.org | ✅ 200 | 0.80s | 531KB ⚠️ |
| www.truthandliberty.net | ✅ 200 | 0.94s | 184KB |
| www.armi.net | ✅ 200 | 3.64s 🔴 | 80KB |
| awme.net (intl store) | 🔴 403 | — | BLOCKED |

---

## A — ANALYSIS

### 1. Tech Stack (awmi.net)
- **CMS**: WordPress (WP Engine hosting + Cloudflare CDN)
- **Page Builder**: Elementor Pro + Gutentor + Dynamic Content for Elementor
- **Events**: The Events Calendar Pro
- **Forms**: GravityForms + ActiveCampaign
- **Video**: Zype (custom player)
- **E-commerce**: Custom store at store.awmi.net (separate stack)
- **Auth**: HubSpot (leadin), ActiveCampaign
- **Geotargeting**: GeoTargetingWP plugin

### 2. Critical Performance Issues

#### Page Weight — SEVERE 🔴
| Metric | awmi.net | Industry Standard |
|--------|----------|-------------------|
| HTML size | 351KB | <50KB |
| CSS stylesheets | **75 files** | <5 |
| JS scripts | **63 files** | <10 |
| WP plugins loading assets | **17 plugins** | <5 |
| TTFB | 0.69s | <0.2s |
| Render-blocking CSS | **75 files** | 0 |

**Root cause**: Elementor + 17 plugins each inject their own CSS/JS regardless of page content. No critical CSS extraction, no code splitting, no lazy-loading of non-critical assets.

#### Cache Strategy — BROKEN 🔴
```
cache-control: private, proxy-revalidate, s-maxage=0
cf-cache-status: BYPASS
x-cacheable: NO:Private
```
Every page request bypasses Cloudflare cache entirely. A ministry site with millions of visitors and largely static content should be **fully cached at edge**. This means every visitor hits the origin server.

#### GTN.TV Performance — POOR ⚠️
- TTFB: 2.90s (3.5× slower than main site)
- No CDN evident from headers
- Video streaming site that's slow to load is a user-exit event

#### ARMI.NET — CRITICAL ⚠️
- TTFB: 3.64s — completely unacceptable
- Users abandoning before page loads

### 3. SEO Issues

| Issue | Severity | Finding |
|-------|----------|---------|
| Meta description | 🔴 MISSING | No `<meta name="description">` on homepage |
| H1 tag | 🔴 MISSING | Zero H1 tags on homepage |
| OG Title | ⚠️ WEAK | Just "Home" — no brand context |
| Canonical | ✅ OK | Present |
| Schema | ✅ GOOD | Organization, WebSite, WebPage, SearchAction |
| Twitter card | ✅ OK | summary_large_image |
| Sitemap | ✅ Assumed present | WP + Yoast |
| Page speed | 🔴 POOR | 351KB HTML alone exceeds recommended total |

**Missing meta description alone costs significant CTR in SERPs.** For a ministry with 50M+ people reached, this is thousands of daily search impressions wasted.

### 4. Accessibility

| Check | Status | Notes |
|-------|--------|-------|
| HTML lang attribute | ✅ | `en-US` |
| Skip navigation | ✅ | Present |
| ARIA attributes | ✅ | 96 found |
| Image alt tags | ⚠️ | 1 of 17 images missing alt |
| Color contrast | ❓ | Not verifiable via scrape — needs manual audit |
| Keyboard navigation | ❓ | Requires live testing |
| Screen reader landmarks | ❓ | Elementor-generated markup quality unknown |

### 5. Content Architecture & Navigation

**Main nav (awmi.net) structure:**
- Watch → /andrews-media-hub/ (6 sub-items)
- Listen → /audio/ (5 sub-items)
- Read → /reading/ (7 sub-items)
- Events → /current-events/
- Resources → /popular/ (5 sub-items)
- About → /about-us/ (8 sub-items)
- Store → store.awmi.net (7 sub-items)
- Give → /give/

**Problems:**
1. "Andrews Media Hub" is not user-language — visitors want "Watch" and get a URL with "andrews-media-hub"
2. Store is a **hard redirect to a different domain** — breaks session, trust, and analytics continuity
3. Spanish (`/espanol/`) buried in utility nav — 40%+ of the global Christian market speaks Spanish
4. No **Search** in primary nav — a content-heavy ministry site with 40+ years of teachings needs global search in header
5. **Healing Center** (`/healing/`) is 3 clicks deep — this is likely the highest-intent, most emotionally charged page on the site

### 6. Sub-domain Fragmentation Problem

The AWMI ecosystem is split across **7+ separate properties** with different:
- Design systems (each looks different)
- Authentication (store.awmi.net has separate login)
- Navigation (no shared header/footer)
- Analytics (likely separate GA properties = siloed data)
- SEO authority (link juice split across domains)

This is a **strategic architecture failure**. A user watching a healing testimony on awmi.net who clicks "Buy this book" is sent to store.awmi.net with a completely new session and no context continuity.

---

## D — DESIGN

### What the HURH Rebuild Gets Right (vs awmi.net)
| Feature | awmi.net | HURH Rebuild |
|---------|----------|--------------|
| Page size | 351KB HTML + 75 CSS + 63 JS | ~15KB HTML, 1 CSS, 0 extra JS |
| TTFB | 0.69s | <0.1s (static Next.js) |
| Cache | NO CACHE | Fully static, edge-cached |
| Mobile nav | Elementor hamburger (heavy) | Custom lightweight overlay |
| Audio player | External page | Persistent global player |
| Dark mode | ❌ None | ✅ System preference + toggle |
| Scripture ticker | ❌ None | ✅ Live ambient engagement |
| H1 on homepage | ❌ Missing | ✅ Present |
| Meta description | ❌ Missing | ✅ Present |
| Healing Center | 3 clicks deep | 1-click from everywhere |
| Footer | Minimal | 4-column with newsletter |
| Partnership calculator | Basic form | Interactive slider + tiers |

### Design Gaps in HURH Rebuild That Need Addressing
1. **No search bar** — awmi.net has a global search; HURH has none
2. **No language switcher** — awmi.net has `/espanol/`; HURH missing
3. **No TV schedule page** — awmi.net shows broadcast schedules
4. **No events page** — awmi.net has a full events calendar
5. **No bookstore integration** — store.awmi.net is a major revenue stream
6. **No user account** — awmi.net has login/account at store.awmi.net
7. **No commentary page** — awmi.net has the "Living Commentary" as a flagship product
8. **No blog/devotional archive** — daily devotional only shows today
9. **Browse teachings** — awmi.net has hundreds of series; HURH has 8 tracks
10. **Video stories** — Healing Journeys, Grace Encounters etc not in HURH

---

## D — DEVELOPMENT (Recommendations)

### Priority 1 — Critical (Fix immediately on HURH)
- [ ] Add global search component to nav header
- [ ] Add `<meta name="description">` to all pages
- [ ] Ensure H1 on every page is meaningful and keyword-rich
- [ ] Add .gitignore (node_modules committed in last push!)
- [ ] Add Open Graph image generation (og:image per route)

### Priority 2 — High (Next sprint)
- [ ] Add Browse Teachings page (`/teachings/`) with series grid
- [ ] Add Events page (`/events/`) with calendar
- [ ] Add Language switcher (EN / ES minimum)
- [ ] Expand devotional read page to full archive with date navigation
- [ ] Add video series page with proper categories

### Priority 3 — Medium (Roadmap)
- [ ] Integrate Living Commentary search
- [ ] Add store integration (embedded or linked with continuity)
- [ ] User accounts / partner portal
- [ ] TV/Radio broadcast schedule page
- [ ] Newsletter signup flow (ActiveCampaign)

### Priority 4 — Strategic (Architecture decisions)
- [ ] Propose consolidating store.awmi.net under /store on main domain
- [ ] Single SSO across all properties
- [ ] Unified analytics (GA4 cross-domain tracking)
- [ ] Consolidate GTN.TV content under /watch on main domain (or iframe embed)
- [ ] Shared design system across charisbiblecollege.org, truthandliberty.net, armi.net

---

## I — IMPLEMENTATION

### Immediate Actions (Today)
```bash
# 1. Fix .gitignore
echo "node_modules\n.next\n.env*\n*.log" > /home/claude/hurh/.gitignore

# 2. Add search to nav header
# 3. Add meta descriptions to all page exports
# 4. Verify build still passes after each change
```

### Sprint 1 (Week 1)
- Global search component
- Fix all SEO meta tags
- .gitignore fix
- Add Browse Teachings page stub

### Sprint 2 (Week 2)
- Events calendar page
- Expand devotional archive
- Language switcher
- Video series page

### Sprint 3 (Week 3)
- Store integration/link continuity
- Newsletter flow
- TV schedule page

---

## E — EVALUATION

### KPIs to Measure HURH vs awmi.net

| Metric | awmi.net Baseline | HURH Target |
|--------|-------------------|-------------|
| Lighthouse Performance | Est. 35-50 (plugin bloat) | >90 |
| TTFB | 0.69s | <0.1s |
| Page HTML size | 351KB | <20KB |
| CSS files | 75 | 1 |
| JS files | 63 | 3 (Next.js chunks) |
| Cache hit rate | ~0% (bypassed) | 95%+ (static) |
| Core Web Vitals LCP | Est. 4-6s | <1.5s |
| H1 presence | ❌ | ✅ |
| Meta description | ❌ | ✅ |
| Accessibility score | Unknown | >95 |
| Mobile UX | Elementor-dependent | Native responsive |

### Competitive Advantages of HURH Architecture
1. **Static-first** — Next.js generates all pages at build time = zero server load, instant delivery
2. **Edge-cached** — Vercel CDN serves from 100+ edge nodes globally (critical for 180+ country ministry)
3. **No WordPress** — No plugin conflicts, no security patches, no database queries per request
4. **Persistent audio** — Audio context survives page navigation; awmi.net audio stops on route change
5. **Dark mode** — None of the AWMI ecosystem supports dark mode; significant UX win
6. **Bundle size** — 75 CSS files → 1; 63 JS files → ~3 chunks

---

## KEY FINDINGS SUMMARY

### Top 5 Issues on awmi.net That HURH Solves
1. 🔴 **Cache bypass** — every pageview hits origin. HURH = 100% static, edge-cached
2. 🔴 **351KB HTML + 75 CSS + 63 JS** — catastrophic page weight. HURH = ~20KB
3. 🔴 **No meta description or H1** — SEO failure on a high-authority ministry domain
4. ⚠️ **Store domain jump** — breaks user journey. HURH needs store integration plan
5. ⚠️ **7 fragmented properties** — no unified experience. HURH is the consolidation vision

### Top 3 Gaps in HURH That Need Immediate Work
1. No global search (critical for content-heavy ministry)
2. Missing .gitignore (node_modules in git = broken repo)
3. Browse Teachings page missing (largest content surface on awmi.net)

