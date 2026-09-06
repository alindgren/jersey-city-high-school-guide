# Jersey City High School Guide

An independent, parent-focused guide to selective high school options for Jersey City families applying for fall 2027.

## What is included

- Detailed profiles for McNair Academic, Infinity Institute, High Tech High School, County Prep, and Saint Dominic Academy
- A side-by-side comparison
- A dated eighth-grade admissions timeline
- A primary-source library and visible verification dates

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
