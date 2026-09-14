# Vasanth Portfolio

A responsive portfolio for a video editor, animator, and AI editor. Built with Astro and Tailwind CSS.

The interface uses Astro-first Full.dev UI primitives. The registry is configured in `components.json`, and the local Button, Card, and Section source files live under `src/components/ui`.

## Development

```sh
pnpm install
pnpm dev --background
```

Manage the background server with `pnpm astro dev status`, `pnpm astro dev logs`, and `pnpm astro dev stop`.

Create a production build with:

```sh
pnpm build
```

## Content

- Edit biography, clients, tools, and contact links in `src/data/portfolio.ts`.
- Edit page structure in `src/pages/index.astro`.
- Edit the visual system and responsive layout in `src/styles/global.css`.
- Replace `public/images/vasanth-portrait-placeholder.png` with the final portrait.
- Replace the showreel and project placeholders before publishing.
