<div align="center">

<img src="src/assets/images/logo.svg" alt="LISIÈRE" width="180" />

# LISIÈRE — When Form Follows Emotions

**A future-facing creative research: an editorial landing page showcasing original stocking designs.**

[**Live demo →**](https://lisere-landing.vercel.app/) · [Repository](https://github.com/Igor241086/lisere-landing)

![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?logo=vite&logoColor=white&style=flat-square)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white&style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white&style=flat-square)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black&style=flat-square)
![Status](https://img.shields.io/badge/Status-In_development-orange?style=flat-square)
![Figma](https://img.shields.io/badge/Designed_in-Figma-F24E1E?logo=figma&logoColor=white&style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel&logoColor=white&style=flat-square)

<!-- Add a screenshot or GIF: docs/preview.png -->
<!-- <img src="docs/preview.png" alt="LISIÈRE landing preview" width="900" /> -->

</div>

> 🚧 **Work in progress.** The project is under active development: the design of the stockings, the content and the code are still being refined, and some sections or details may change.

---

## Table of contents

- [About](#about)
- [Concept & collections](#concept--collections)
- [Design approach](#design-approach)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Performance notes](#performance-notes)
- [Deployment](#deployment)
- [Status & roadmap](#status--roadmap)
- [Credits & disclaimer](#credits--disclaimer)
- [Author](#author)

## About

**Lisière** is not a store — it is a visual story about femininity, style and subtlety.

The project was created to **present the author's own stocking designs** (concept stage) through a cinematic, editorial web experience instead of a conventional product catalogue. Rather than identical product cards and dry specifications, the visitor gets mood, ritual and atmosphere: four visual "moods", each with its own imagery, copy and technical sketch.

It is also a front-end showcase: a hand-crafted, animation-rich landing page built from scratch with attention to typography, grid, scroll behaviour and image loading.

## Concept & collections

The story is told through four collections, each introduced by a bold statement block, a full-screen parallax scene and a technical sketch:

| Collection | Translation | Mood |
| --- | --- | --- |
| **Soir Désiré** | *Desired evening* | A private evening ritual — white marble, candlelight, silk. |
| **Code Vestimentaire** | *Dress code* | Refinement hidden beneath office precision. |
| **Rendez-vous Élégant** | *Elegant meeting* | Velvet shadows, crystal, golden accents; dignity over fashion. |
| **Look de tous les jours** | *Everyday look* | Quiet luxury — every day as ritual, not routine. |

> Technical sketches are intentionally shown as a preview only: the designs are still under development.

## Design approach

The visual language is inspired by award-winning web design (**Awwwards**) and the digital presence of luxury houses such as **Dior**, **Christian Louboutin** and **Wolford**:

- Large, high-contrast editorial typography with generous white space
- Full-bleed photography with cinematic parallax
- Restrained monochrome palette (`#0a0a0a` / `#ffffff`) with translucent borders
- Slow, deliberate motion — smooth inertial scrolling and staggered reveals
- A 15-column custom grid for asymmetric, magazine-like layouts

The layouts and visual system were designed in **Figma** before being implemented in code.

**Typography**

| Role | Font |
| --- | --- |
| Headings | Abril Fatface |
| Body | DM Sans |
| Descriptions | Instrument Serif |

## Features

- **Two-stage narrative** — an animated hero ("Discover the concept") transitions into the full story over a blurred backdrop
- **Smooth inertial scrolling** powered by Lenis, synchronised with GSAP ScrollTrigger
- **Parallax image sections** built with Framer Motion (`useScroll` / `useTransform`)
- **Scroll-triggered reveals** via a reusable `useSectionReveal` hook (Framer Motion + Intersection Observer)
- **Progressive image loading** — LQIP placeholder → AVIF/WebP through `<picture>`
- **Hero image preloading** with a custom `useImagePreload` hook
- **Custom 15-column grid** written in SCSS
- **Modular architecture** — one component and one stylesheet per section
- **Code quality tooling** — ESLint, Prettier and Husky git hooks

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 19, PropTypes |
| Build tool | Vite 8 (`@vitejs/plugin-react`) |
| Styling | SCSS via `sass-embedded` (variables, grid, per-component modules) |
| Design | Figma |
| Animation | Framer Motion, GSAP + ScrollTrigger |
| Smooth scroll | Lenis (`@studio-freight/lenis`) |
| Utilities | `react-intersection-observer`, `react-icons` |
| Quality | ESLint 10, Prettier 3, Husky |
| Hosting | Vercel |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) — a version supported by Vite 8 (20.19+ recommended)
- npm

### Installation

```bash
# clone the repository
git clone https://github.com/Igor241086/lisere-landing.git
cd lisere-landing

# install dependencies
npm install

# start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format the codebase with Prettier |

## Project structure

```text
lisere-landing/
├── .husky/                      # Git hooks
├── public/                      # Static assets
├── src/
│   ├── assets/images/           # Logo, photography (AVIF / WebP / LQIP), sketches
│   ├── components/
│   │   ├── common/              # Shared pieces (HeroBg)
│   │   ├── Header.jsx           # Logo / home navigation
│   │   ├── Hero.jsx             # Animated entry screen
│   │   ├── Intro.jsx            # About the project
│   │   ├── StatementBlock.jsx   # Editorial statements between sections
│   │   ├── SoirDesire.jsx           ┐
│   │   ├── CodeVestimentaire.jsx    │ Four collection sections
│   │   ├── RendezVousElegant.jsx    │ (each with its own .scss)
│   │   ├── LookDeTousLesJours.jsx   ┘
│   │   ├── MoodSketch.jsx       # Technical sketch preview
│   │   ├── ParallaxSection.jsx  # Reusable parallax wrapper
│   │   └── InConclusion.jsx     # Closing CTA, social links, footer
│   ├── hooks/                   # useLenisScroll, useSectionReveal, useImagePreload
│   ├── styles/
│   │   ├── abstracts/           # SCSS variables
│   │   ├── base/                # Global base styles
│   │   ├── layout/              # 15-column grid
│   │   └── main.scss            # Styles entry point
│   ├── App.jsx                  # Page flow & section composition
│   └── main.jsx                 # Entry point
├── eslint.config.mjs
├── .prettierrc
├── index.html
├── vite.config.js
└── package.json
```

## Performance notes

- Every photograph ships in **three variants**: a tiny blurred LQIP, a WebP and a lighter AVIF, served through `<picture>`
- The hero background is preloaded before being revealed to avoid flashes
- Parallax and reveal animations rely on transforms and opacity
- Touch devices keep native scrolling (`smoothTouch: false`)

## Deployment

The project is deployed on **Vercel**.

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

## Status & roadmap

The project is **in active development**. The live demo reflects the current state of the work and may be updated at any time.

- [x] Landing structure and four collection sections
- [x] Parallax, smooth scrolling and reveal animations
- [x] Optimised imagery (LQIP + WebP/AVIF)
- [ ] Final stocking designs and technical sketches (in progress)
- [ ] Content and copy refinement
- [ ] Ongoing performance and responsive polish

## Credits & disclaimer

- **Stocking designs and the overall concept** — created by the author
- **Photography** — generated with AI, used for concept presentation only
- **Design references** — Awwwards showcases, Dior, Christian Louboutin, Wolford (inspiration only; no affiliation with these brands)
- This is a **non-commercial concept project**: no products are for sale and no orders are processed

© 2025–2026 Igor241086. All rights reserved. The designs, imagery and copy may not be reused without permission.

## Author

**Igor241086** — concept, design and front-end development

[![GitHub](https://img.shields.io/badge/GitHub-Igor241086-181717?logo=github&style=flat-square)](https://github.com/Igor241086)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ihor_Mahats-0A66C2?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/ihor-mahats-0b1046287/)

<div align="center">

*Chic does not announce itself.*

</div>
