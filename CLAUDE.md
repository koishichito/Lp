@AGENTS.md

# MedMatch LP - Codebase Guide

## Project Overview

Medical doctor-hospital matching service ("MedMatch") landing page. Japanese-language, static-exported Next.js site deployed to GitHub Pages.

**Live URL:** `https://koishichito.github.io/Lp/`

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.2 |
| UI | React | 19.2.4 |
| Language | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| PostCSS | @tailwindcss/postcss | ^4 |
| Linter | ESLint 9 (flat config) | ^9 |
| Deployment | GitHub Pages via GitHub Actions | - |

## Project Structure

```
src/
└── app/
    ├── layout.tsx        # Root layout (metadata, html lang="ja")
    ├── page.tsx          # Single-page LP (~570 lines, "use client")
    ├── globals.css       # Design tokens & Tailwind config
    └── favicon.ico
public/                   # Static assets (SVGs)
.github/workflows/
└── deploy.yml            # GitHub Pages CI/CD
next.config.ts            # Static export + basePath config
```

This is a **single-page application** — all LP content lives in `src/app/page.tsx`.

## Development

```bash
npm run dev       # Start dev server
npm run build     # Production build (static export → ./out/)
npm run lint      # ESLint
```

### Static Export

`next.config.ts` sets `output: "export"`. The build produces static HTML in `./out/`. No Node.js server is needed.

The `PAGES_BASE_PATH` env var controls the base path (set to `/Lp` in CI).

## Design System

### Colors (defined in `globals.css` as CSS custom properties → Tailwind tokens)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#0066CC` | Brand blue — CTAs, links, icons, headers |
| `primary-dark` | `#004C99` | Hover states, gradient endpoints |
| `primary-light` | `#E6F0FF` | Light backgrounds, icon containers |
| `secondary` | `#00A67E` | Teal — hospital context, success indicators |
| `secondary-light` | `#E6F9F4` | Light teal backgrounds |
| `accent` | `#FF6B35` | Orange — available for highlights |
| `gray-50`–`gray-900` | Slate scale | Text hierarchy, backgrounds, borders |

Use via Tailwind classes: `bg-primary`, `text-secondary`, `border-gray-200`, etc.

### Typography

System font stack optimized for Japanese: Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, Yu Gothic, sans-serif. No external font loading (Google Fonts unavailable in build environment).

### Layout Conventions

- **Section container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section spacing:** `py-20`
- **Responsive grid:** `grid sm:grid-cols-2 lg:grid-cols-3 gap-8`
- **Breakpoints:** `sm` (640px), `md` (768px), `lg` (1024px)

### Button Patterns

| Style | Classes | Use |
|-------|---------|-----|
| Primary solid | `bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl` | Main CTA |
| Outline | `border-2 border-primary text-primary bg-white hover:bg-gray-50` | Secondary CTA |
| Glass | `bg-white/10 backdrop-blur border-2 border-white/30 text-white` | CTAs on dark backgrounds |

## Page Sections (in order)

1. **Header** — Sticky nav, logo, links, CTA button
2. **Hero** — Gradient background, headline, dual CTAs (doctor/hospital), trust badges
3. **Problems** — Two-column pain points (doctor vs hospital)
4. **Features** — 6-card grid (AI matching, advisors, confidentiality, speed, retention, market data)
5. **Stats** — Blue background, 4 key numbers
6. **Flow** — 4-step process with numbered circles and connecting line
7. **Testimonials** — 3 cards with star ratings and quotes
8. **FAQ** — 5 accordion items using `useState`
9. **CTA** — Final conversion section with gradient background
10. **Footer** — 4-column links, contact info, copyright

## Component Architecture

All components are in `page.tsx`:

- **Icon components** (`IconSearch`, `IconUsers`, `IconShield`, etc.) — Inline SVGs with configurable `className`
- **`FAQItem`** — Accordion component using `useState` for open/close
- **`Home`** — Main page component rendering all sections

## Deployment

**CI/CD:** `.github/workflows/deploy.yml`
- **Triggers:** Push to `main` or `claude/doctor-hospital-matching-lp-TUxCV`
- **Process:** Checkout → Node 20 setup → `npm ci` → Build (with `PAGES_BASE_PATH=/Lp`) → Deploy to `gh-pages` branch via `peaceiris/actions-gh-pages@v4`
- **GitHub Pages** source must be set to `gh-pages` branch in repo settings

## Conventions

- **All copy is in Japanese** — maintain natural Japanese across headings, descriptions, CTAs, and metadata
- **Section dividers** use comment style: `{/* ────────── SectionName ────────── */}`
- **Icons** are self-contained SVG functional components, not imported from a library
- **Tailwind only** — no CSS modules, no styled-components, no inline style objects
- **Responsive-first** — default styles for mobile, then `sm:` / `md:` / `lg:` overrides
- **No dark mode** — light theme only (no `prefers-color-scheme` handling)
- **No external dependencies** beyond Next.js, React, and Tailwind — keep the bundle minimal
