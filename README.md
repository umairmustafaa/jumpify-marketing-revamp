# Jumpify Marketing — Website

A fast, SEO-optimized marketing website for **Jumpify Marketing**, a real estate investment
consultancy specialising in Faisal Town Phase 2 and premium projects across Islamabad,
Rawalpindi & Dubai.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

## Getting Started

```bash
npm install      # first time only
npm run dev      # start local dev server → http://localhost:3000
npm run build    # production build
npm run start    # run the production build locally
```

## Editing content — one file does most of it

Almost all text, contact details, projects and blog posts live in **`lib/site.ts`**:

| What you want to change | Where |
| --- | --- |
| Business name, phone, email, address, social links | `site` object |
| Navigation menu | `nav` array |
| Homepage stat counters | `stats` array |
| Services (the 6 cards) | `services` array |
| Projects + payment plans + amenities | `projects` array |
| Blog posts | `posts` array |
| Testimonials | `testimonials` array |

Change a value there and it updates everywhere on the site automatically.

> **Before going live:** set `site.url` in `lib/site.ts` to your real domain
> (e.g. `https://jumpifymarketing.com`). Sitemaps, canonical URLs and social
> tags all use it.

## Project structure

```
app/
  layout.tsx              # global <head>, fonts, header/footer, SEO defaults
  page.tsx                # homepage (assembles the sections)
  about/                  # About page
  projects/               # Projects list + [slug] detail pages
  blog/                   # Blog list + [slug] article pages
  contact/                # Contact page + FAQ
  privacy-policy/
  sitemap.ts              # auto-generated /sitemap.xml
  robots.ts               # auto-generated /robots.txt
  manifest.ts             # PWA web manifest
  icon.tsx                # generated favicon
  opengraph-image.tsx     # generated social share image
components/               # reusable UI + page sections
lib/site.ts               # ← all business content & configuration
```

## SEO features built in

- Server-rendered / statically-generated HTML for every page (great for Google & speed)
- Per-page `<title>`, meta description, canonical URL, Open Graph & Twitter cards
- **JSON-LD structured data**: `RealEstateAgent`, `BreadcrumbList`, `BlogPosting`, `FAQPage`
- Auto `sitemap.xml` and `robots.txt`
- Auto-generated Open Graph share image and favicon
- Semantic HTML, fast Core Web Vitals, mobile-first responsive design

## Contact form — email via Resend

The contact form (`components/ContactForm.tsx`) does two things on submit:

1. **Sends an email** via `app/api/contact/route.ts` using the [Resend](https://resend.com) REST API.
2. **Opens WhatsApp** with a pre-filled message as a reliable fallback.

### Setup

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day).
2. Create an API key in the Resend dashboard.
3. Copy `.env.local` and fill in your credentials:

```bash
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=jumpifymarketing@gmail.com   # where enquiries land
```

4. Add both variables to your **Vercel project settings → Environment Variables** before deploying.

> If `RESEND_API_KEY` is absent (e.g. in local dev), the email step is skipped silently and
> the WhatsApp link still works — so you can develop without credentials.

## Suggested next steps

1. **Deploy** — push to GitHub and import in [Vercel](https://vercel.com). Netlify or any Node
   host also work.
2. **Add Resend API key** to Vercel env vars (see section above).
3. **Google Search Console** — verify the site and submit `https://jumpifymarketing.com/sitemap.xml`.
4. **Swap in real project photos** — drop files in `public/images/projects/` matching the
   `heroImage` path in each project entry in `lib/site.ts`.
