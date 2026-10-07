# Connect People Development — website

Project brief for Claude Code. Read this and `content.md` before changing anything.

## What this is
A one-page, scrolling marketing site for **Anna-Karin Liljas**, Certified Executive Coach & Consultant, operating as **Connect People Development LLC** (her own company; she also consults for red10 People Development and is a certified Time to Think facilitator).

- Planned domain: `connectpeopledev.com` (not registered yet).
- Repo: https://github.com/aliljas/AnnaKarinWebsite
- Stack: **Astro**, static output, no backend. Hosting later on Cloudflare Pages / Netlify / Vercel.

## Hard requirements
- **One scrolling page.** Sticky header: logo left, nav right (Welcome · Development · Connect) with smooth-scroll anchors. Nav collapses to a simple menu on mobile.
- **Simple and uncrowded.** Generous whitespace. When in doubt, remove rather than add.
- **Use the copy in `content.md` verbatim.** Don't invent claims, clients, numbers or testimonials.
- Every external link opens in a new tab with `rel="noopener"`.
- Accessible: semantic landmarks, one `<h1>`, alt text, visible focus states, WCAG AA contrast.
- Mobile-first and fully responsive.
- No cookie banner, no trackers, no heavy JS. Astro components + CSS; a few lines of vanilla JS for the mobile menu and scroll-in effect are fine.

## Layout (top to bottom)
1. **Header** – `public/brand/connect-logo.svg` on the left (height ~44–48px), nav on the right.
2. **Hero (Welcome)** – *chosen October 2026 from three options, after her prototype PDF.* Two columns on a cream band. Left: name and title in spaced small caps over a short mist rule, the motto as an `<h1>` in Cormorant Garamond 600 (not script), the first "Why work with me" paragraph, then a solid "Let's connect" button and an outlined "Ways to work with me" button (`#ways`). Right: the coaching photo (rounded corners, soft shadow). On phones the photo sits directly under the headline so her face is on the first screen.
3. **Why work with me** – heading on the left, the remaining two paragraphs on the right (the first one opens the hero). No photo here.
4. **Development for you and your team** (`#development`) – three cards: For Leaders, For Teams, For Individuals.
5. **My commitment** – a short, centered pull-quote band (sand background) ending with the motto.
6. **Ways to work with me** – three cards, each with its own link(s): red10, Time to Think, Connect People Development (direct).
7. **Connect** (`#connect`) – closing line, then LinkedIn and email buttons.
8. **Footer** – small logo, "Connect People Development LLC", address placeholder, © year.

A **testimonials** component should exist but be hidden behind a flag (`SHOW_TESTIMONIALS = false`) until she has real quotes.

## Design system
Warm, personal, calm, professional. Echoes her LinkedIn banner (soft greys) and her logo. The logo's device — spaced small caps with a short thin mist rule — is reused as the label treatment (hero byline, commitment band).

Colors (CSS custom properties on `:root`):
| token | hex | use |
|---|---|---|
| `--cream` | `#FBF8F3` | page background |
| `--sand` | `#EFE8DE` | alternate section bands |
| `--ink` | `#2F3437` | body text, headlines |
| `--slate` | `#4A6A73` | accent: buttons, links, small caps labels |
| `--mist` | `#8FA9AF` | thin rules, borders |
| `--white` | `#FFFFFF` | cards |

Type (self-host with `@fontsource/*` npm packages, not a Google Fonts link):
- **Parisienne** – script, used ONLY inside the logo, where it is outlined in the SVG. No script webfont is loaded; don't add script text to the page.
- **Cormorant Garamond 500/600** – the hero headline and section headings. Headings use lining numerals (`font-variant-numeric: lining-nums`), or "red10" renders as "red1o".
- **Jost 400/500** – body, nav, buttons, small caps labels (letter-spacing ~0.2em, uppercase, small size — same treatment as "PEOPLE DEVELOPMENT LLC" in the logo).

Feel: thin `--mist` rules as dividers, generous line-height (1.7), body max-width ~65ch, subtle fade-up on scroll (respect `prefers-reduced-motion`). No gradients, no glassmorphism, no stock-icon clutter.

## Assets
- `public/brand/connect-logo.svg` – primary logo (transparent background)
- `public/brand/connect-logo-reversed.svg` – for dark backgrounds
- `public/brand/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`
- `src/assets/photos/anna-karin-coaching.jpg` – hero photo, 1280×854. Lives in `src/assets/` so Astro's `<Image>` serves resized WebP; show it at most ~640px wide (not sharp enough for full width).
- `public/og-image.jpg` – 1200×630 social share card (Open Graph / Twitter). Source: `scripts/og-image.html`; regenerate with `node scripts/og-image.mjs` after changing the motto, name or photo.
- `public/photos/anna-karin-portrait.jpg` – 600×750 crop, spare (no longer used on the page)

## SEO
- `<title>`: Anna-Karin Liljas | Executive Coach & Consultant | Connect People Development
- Meta description: Executive coaching, team development and leadership support for leaders, teams and individuals. Based in the US, working globally.
- Open Graph + Twitter card tags (`summary_large_image`), canonical `https://connectpeopledev.com/`, favicon set.
- `public/robots.txt` + `public/sitemap.xml` (one URL); `src/pages/404.astro` is `noindex`.

## Placeholders still open
Mark each with `TODO:` in code so they're easy to find:
- Business address for the footer (use a registered-agent or PO box, not a home address)
- ~~Final email~~ — decided: keep `Anna-Karin.Liljas@red10dev.com` (no `@connectpeopledev.com` switch planned)
- Link for "Connect People Development LLC" in Ways to Work With Me → point to `#connect` for now

## Working rules
- Keep sections as separate components in `src/components/` so copy is easy to edit.
- Put all copy and links in one data file (`src/content/site.ts`) so text changes never require touching layout.
- Run `npm run build` before saying a change is done; fix any errors.
- Don't deploy, push, or register anything without being asked.
