# BCP Man And Small Van

Single-page React website for **BCP Man And Small Van** — man & van services across Bournemouth, Christchurch and Poole.

Built with **React + Vite** and **React Bits** (animated UI components: `TextType`, `TiltedCard`, `SpotlightCard`) for modern cards and typewriter text animations. No full house removal work — small moves, collections, clearances, deliveries.

## Features

- Typewriter headline and captions via React Bits `TextType`
- Modern hover cards via React Bits `SpotlightCard` (services) and `TiltedCard` (van & gallery images)
- Three colour themes (gold / orange / blue) — pick the top-right dots
- Responsive: tablet, mobile and small-phone breakpoints
- WhatsApp quote form
- GSAP + Motion-driven animations

## Sections

- Hero with type animation + call/WhatsApp CTAs
- Services (room/flat moves, office moves, clearances, disposal, single item to full loads, marketplace collections, student moves, storage moves)
- Coverage (Poole, Bournemouth, Christchurch)
- About ("20 years in removals")
- Insurance strip
- WhatsApp quote form
- Van specs (Vauxhall — height, loading length, internal width)
- Photo gallery with typewriter captions
- How it works
- Contact / footer

## Stack

- React 19
- Vite 7
- React Bits (TextType, TiltedCard, SpotlightCard)
- GSAP + Motion
- Google Fonts: Fraunces, Inter, Caveat

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the dist build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to GitHub Pages. The app uses relative asset paths (`base: './'`), so `dist/` works under Pages, a subfolder, or any static host.

## Contact

Phone / WhatsApp: 07922 227398