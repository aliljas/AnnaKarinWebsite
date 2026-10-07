# Connect People Development

One-page marketing site for **Anna-Karin Liljas — Certified Executive Coach & Consultant**.
Built with [Astro](https://astro.build): static output, plain semantic HTML and scoped CSS, a few
lines of vanilla JS for the mobile menu and scroll-in fade.

The brief is in `CLAUDE.md`; the approved copy is in `content.md`.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output locally
```

## How it is put together

```
content.md                  ← the client's final copy (source of truth for wording)
src/
  content/site.ts           ← ALL copy, links, the testimonials flag, and every open TODO
  pages/index.astro         ← the single page, sections in order
  pages/404.astro           ← "page not found" (noindex)
  layouts/BaseLayout.astro  ← <head>, SEO / Open Graph / Twitter tags, fonts, scroll-in script
  styles/global.css         ← design tokens (palette, type, spacing) + shared primitives
  components/
    Header.astro            ← sticky header, logo, anchor nav, mobile menu
    Hero.astro              ← #welcome — name/title, motto, opening paragraph, photo
    WhyWorkWithMe.astro     ← the remaining two paragraphs
    Development.astro       ← #development — For Leaders / Teams / Individuals
    Commitment.astro        ← sand pull-quote band
    WaysToWork.astro        ← red10 / Time to Think / direct
    Testimonials.astro      ← built, hidden behind SHOW_TESTIMONIALS
    Connect.astro           ← #connect — LinkedIn + email
    Footer.astro
    SmartLink.astro         ← every link; external ones open in a new tab with rel="noopener"
  assets/photos/            ← hero photo (Astro serves it as resized WebP)
public/
  brand/                    ← logo, reversed logo, favicon set
  og-image.jpg              ← 1200×630 social share card (see below)
  robots.txt, sitemap.xml
  photos/                   ← spare portrait (not used on the page)
```

To change wording or a link, edit `src/content/site.ts` — no component needs touching.

## Design system

Tokens are at the top of `src/styles/global.css`: `--cream`, `--sand`, `--ink`, `--slate`,
`--mist`, `--white` (see `CLAUDE.md`). Fonts are self-hosted via `@fontsource`: Cormorant Garamond
500/600 (headline and headings) and Jost 400/500 (everything else). The logo's script is outlined
inside the SVG, so no script webfont is loaded.

## Turning the testimonials on

Add real, approved quotes to `testimonials.items` in `src/content/site.ts`, then set
`SHOW_TESTIMONIALS = true`. The section renders nothing while the list is empty.

## Open before launch

Search the code for `TODO:` — each one lives in `src/content/site.ts`.

## Social share image

`public/og-image.jpg` (1200×630) is what LinkedIn, Slack and X show when the link is shared. It is
rendered from `scripts/og-image.html` — after changing the motto, her title or the photo, run:

```bash
node scripts/og-image.mjs   # needs Edge or Chrome installed (or set BROWSER=/path/to/browser)
```
