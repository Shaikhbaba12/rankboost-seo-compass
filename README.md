# RankBoost SEO — website source code

RankBoost SEO (rankboost-seo-compass) is a marketing website for guest posting,
SEO backlinks and content writing services. Built with TanStack Start, React,
TypeScript and Tailwind CSS v4.

## Upload this code to GitHub

1. Download this ZIP and unzip it.
2. On GitHub, create the repository `Shaikhbaba12/rankboost-seo-compass` (leave it empty, no README).
3. In the unzipped folder, run:

```sh
git init
git add .
git commit -m "Initial commit: RankBoost SEO website"
git branch -M main
git remote add origin https://github.com/Shaikhbaba12/rankboost-seo-compass.git
git push -u origin main
```

## Run it locally

You need Node.js and bun (or npm).

```sh
bun install     # or: npm install
bun run dev     # or: npm run dev
```

The site then opens on http://localhost:8080.

## What is in this codebase

| Path | What it holds |
| --- | --- |
| `src/routes/` | Every page: home, services, blog list, blog post, contact |
| `src/components/site/` | Header, footer, pricing cards, blog cards, live projects, expert section |
| `src/lib/site.ts` | Business data: contact details, packages and prices, services |
| `src/lib/posts.ts` | Blog articles |
| `src/lib/site-images.ts` | Which picture each service card and article uses |
| `src/assets/` | Generated pictures used by the site |
| `src/integrations/supabase/` | Backend client (auto-generated, do not edit) |
| `drizzle/migrations/` | Database schema for contact form submissions |
| `src/test/` | Tests for prices, links and routing |

## Backend (Lovable Cloud)

The contact form writes into the `contact_submissions` table. The schema is in
`drizzle/migrations/0000_create_contact_submissions.sql`. `.env` holds the
project's public backend keys only — no secret keys are in this codebase.

## Checks

```sh
bun run test          # run the tests
bun run lint          # code checks
```
