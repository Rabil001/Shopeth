# Falcon

Falcon is a modern Next.js marketing website for an AI development company that helps businesses adopt AI through strategy, custom development, implementation, and support.

## Stack
- Next.js (App Router)
- React
- Tailwind CSS

## Project structure
- `app/`: route files and page-level layout
- `components/layout/`: shared navigation and footer
- `components/sections/`: homepage sections
- `components/ui/`: reusable page and content primitives
- `content/`: central content configuration for services, process, industries, and FAQ
- `lib/`: navigation helpers

## Current pages
- Home
- About
- Services
- Process
- Industries
- FAQ
- Contact

## Design direction
- Semantic page structure using HTML5 sections and landmarks
- Mixed dark and light visual rhythm
- Cinematic hero with background video support
- Premium motion with reveal animations and subtle parallax treatment

## Next steps
- Add a real hero background video asset in `public/videos/falcon-hero.mp4`
- Connect the contact form to an email or CRM workflow
- Add dedicated case studies and stronger proof elements
- Refine motion with scroll-triggered interactions if a library is introduced

## Cloudflare deployment
This repository is preconfigured for Cloudflare Workers with OpenNext.

- `next.config.mjs`: ensures the project has an explicit Next.js config file for Cloudflare/OpenNext setup.
- `open-next.config.ts`: enables the Cloudflare OpenNext adapter.
- `wrangler.jsonc`: defines the Worker entrypoint, assets binding, and `nodejs_compat` flag.
- `npm run preview`: builds and previews the app in the Workers runtime.
- `npm run deploy`: builds with OpenNext and deploys with Wrangler.