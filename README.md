# Jersey City High School Guide

An independent, parent-focused guide to Jersey City public, charter, county technical, and Catholic high school options for families applying for fall 2027.

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
