# Vasanth Portfolio

A responsive portfolio for a video editor, animator, and AI editor. Built with Astro and Tailwind CSS.

The interface uses Starwind UI components. The installed component source lives under `src/components/starwind`, with its registry recorded in `starwind.config.json`.

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

- Edit biography, clients, tools, contact links, and the Cal.com booking URL in `src/data/portfolio.ts`.
- Compose the page in `src/pages/index.astro`.
- Edit section markup and scoped styles in `src/components/portfolio`.
- Keep Starwind tokens and Tailwind setup in `src/styles/starwind.css`.
- Edit portfolio colors, typography, resets, and shared layout utilities in `src/styles/portfolio-theme.css`.
- Replace `public/images/vasanth-portrait-placeholder.png` with the final portrait.
- Replace the showreel and project placeholders before publishing.

## Booking link

Replace the placeholder `profile.calUrl` in `src/data/portfolio.ts` with Vasanth's full Cal.com booking URL before publishing. The contact section opens that page in a new tab and keeps email as a direct contact option.
