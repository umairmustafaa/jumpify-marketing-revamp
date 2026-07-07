@AGENTS.md

# Jumpify Marketing website

Marketing site for a real estate investment consultancy (Faisal Town Phase 2 specialist),
modeled after winwin.com.pk. Next.js 16 App Router + React 19 + Tailwind CSS v4 + TypeScript.

- **All business content lives in `lib/site.ts`** — business info, nav, stats, services,
  projects (with payment plans/amenities), blog posts, testimonials. Edit content there first.
- Pages are in `app/`; reusable UI + homepage sections are in `components/`.
- SEO: per-page Metadata API, JSON-LD in `components/JsonLd.tsx`, auto `sitemap.ts`/`robots.ts`,
  generated `icon.tsx` + `opengraph-image.tsx`. Update `site.url` before deploying.
- Project images live in `public/images/` (developer project renders + generic community
  renders). Referenced from each project's `heroImage`/`gallery` in `lib/site.ts` via `next/image`.
- Do NOT add WinWin's logo/branded graphics — only developer/project marketing imagery.
- Contact form (`components/ContactForm.tsx`) opens a pre-filled WhatsApp message (no backend).
- Brand colors are Tailwind theme tokens in `app/globals.css`: `navy`, `gold`, `cream`.
