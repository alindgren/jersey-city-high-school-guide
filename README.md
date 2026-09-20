# Jersey City High School Guide

An independent, parent-focused guide to Jersey City public, charter, county technical, and Catholic high school options for families applying for fall 2027.

Live site: https://jersey-city-high-school-guide.alexlindgren.workers.dev

## What is included

- Eleven detailed profiles spanning selective public schools, small JCPS schools, county technical schools, public charters, and Catholic schools
- A dedicated JCPS academies and pathways guide
- A side-by-side comparison
- A dated eighth-grade admissions timeline
- A primary-source library and visible verification dates

This edition intentionally excludes Hoboken schools and non-Catholic private schools.

## Updating the guide

School content, comparison data, source links, and timeline items live in `lib/content.ts`. Adding another school there automatically creates a profile route and places the school in the shared site navigation surfaces.

Admissions facts should never be updated without also changing the relevant source review date. Prior-cycle dates must remain clearly labeled as planning references.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare deployment

The production site is configured as a Cloudflare Worker with static assets and observability enabled.

```bash
npm run deploy
```

For Cloudflare Workers Builds, use `npm run build` as the build command, `npm run deploy:built` as the production deploy command, and `npx wrangler versions upload` as the non-production deploy command. Connect `main` as the production branch and enable non-production branch builds for pull-request previews.

Set `NEXT_PUBLIC_SITE_URL` in the Cloudflare build environment to the final public origin so social links use the canonical domain.

## Automated admissions monitoring

The review-gated Orca agent prompt and VPS setup notes live in `ops/orca/`. The agent may open evidence-backed pull requests but must never merge or deploy them.
