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

## Contact form setup

The contact page posts to the on-demand Cloudflare Worker route at `POST /api/contact`. The rest of the site remains prerendered.

1. In `wrangler.jsonc`, set:
   - `PUBLIC_TURNSTILE_SITE_KEY` to the public key for the portfolio hostname.
   - `CONTACT_FROM_EMAIL` to a sender on your verified Resend domain, such as `Vasanth Portfolio <contact@example.com>`.
   - `CONTACT_TO_EMAIL` to the inbox that should receive inquiries.
2. Add production secrets without committing them:

   ```sh
   pnpm wrangler secret put RESEND_API_KEY
   pnpm wrangler secret put TURNSTILE_SECRET_KEY
   ```

3. For local development, copy `.dev.vars.example` to `.dev.vars` and replace the placeholder values. Cloudflare publishes [Turnstile test keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) for local testing.

The Resend message uses the visitor's address as `Reply-To`, so replying from the destination inbox responds to the visitor.
- Compose the page in `src/pages/index.astro`.
- Edit section markup and scoped styles in `src/components/portfolio`.
- Keep Full.dev and Tailwind defaults in `src/styles/global.css`.
- Edit portfolio colors, typography, resets, and shared layout utilities in `src/styles/portfolio-theme.css`.
- Replace `public/images/vasanth-portrait-placeholder.png` with the final portrait.
- Replace the showreel and project placeholders before publishing.
