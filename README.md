# Karachi Unit

A website about Karachi: its history, culture and famous places (Mazar-e-Quaid, Mohatta Palace, Frere Hall, Clifton Beach, Empress Market).

**Live:** https://karachi-unit-sindh.lovable.app

## Features
- Full-screen video hero with animated text
- Animated logo (pulse + hover spin)
- Header with Home / About / Muqamat dropdown / Contact
- Mobile menu, dark mode
- Hover effects, transitions and @keyframes animations
- Footer with links, contact details and a "Verified" badge

## Tech stack
TanStack Start (React 19), Vite 7, Tailwind CSS v4, TypeScript, lucide-react.

## Setup
```sh
npm install
npm run dev     # http://localhost:8080
npm run build
```

## Structure
- `src/routes/` — pages (index, about, services, contact)
- `src/components/site/Layout.tsx` — header, footer, shared pieces
- `src/assets/` — logo and photos (see ASSETS.md)
- `src/styles.css` — theme colours and animations
