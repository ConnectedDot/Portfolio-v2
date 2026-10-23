# Theophilus Samuel · Developer Portfolio

A responsive React and TypeScript portfolio with a personal photo, evidence-based case studies, seven project entries and live Cal.com meeting booking.

## Stack and interactions

- React 18, TypeScript and Vite.
- Dark/light themes, remembered locally.
- Entrance and scroll reveals, hover interactions and a moving technology ribbon.
- Pauseable motion and system reduced-motion support.
- Search and category filters, linked case studies, engineering/evidence tabs and CV download.
- Keyboard navigation with Control/Command+K.
- Cal.com booking through the official React embed, loaded on demand, with a direct fallback.
- Professional email and telephone links.

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build runs the application TypeScript check and writes static assets to `dist/`. No backend or environment variables are required.

See `DEPLOYMENT.md` for placing this clean source into a new GitHub branch.

## Vercel deployment

The included `vercel.json` sets Vite, `npm ci`, `npm run build` and the `dist` output directory. Use the repository root as the Vercel project root.

This source is prepared for a new `feature/senior-portfolio-redesign` branch. No repository branch or Vercel production-branch setting was changed by this export. An existing Git integration may create a branch preview automatically. To promote this version, deliberately select/merge the appropriate branch in the existing deployment workflow.

Routes use URL hashes, so the case-study links do not require server-side rewrites. The noindex metadata is retained for review deployments. Noindex is an indexing preference, not authentication: configure Vercel Deployment Protection if the deployment needs to remain private. The separate ChatGPT Sites preview retains its own owner-only access.

## Edit content

- `src/projects.ts`: project descriptions, contributions, implementation status, technology tags and evidence summaries.
- `src/App.tsx`: personal positioning, experience, contact details and the main sections.
- `src/components/BookingDialog.tsx`: the existing `theophilus-samuel/30min` Cal.com event.
- `src/index.css`: themes, layout, responsiveness and motion.
- `public/Theophilus-Samuel-CV.pdf`: the supplied October 2026 CV.
- `public/assets/`: optimised original portfolio photograph and earlier project captures.

Cal.com owns meeting availability, timezone handling and booking. The embed shows loading/failure states and retains the direct booking link. This source needs no Cal.com API key and does not change calendar configuration.

## Project evidence and privacy

Recent case studies cover Fortis Growth & Delivery, an anonymised enterprise travel frontend and the proposed Connected Care architecture. Four earlier project entries and visual captures are preserved from Portfolio-v2.

Implementation and proposed features are distinguished. No adoption, revenue or performance numbers have been invented. Private project code, credentials, tenant addresses, live client records and medical information are excluded. Keep the existing Git history when uploading this source to a new branch. Private Sites hosting metadata, the QA harness, generated build output and dependencies are excluded from this standalone source.

## Validation

The current source passed its TypeScript and Vite production build. The corresponding private preview was reviewed at 320px, 390px, 768px, 1024px and desktop widths. Browser checks covered project navigation/search, case-study tabs, keyboard navigation, theme changes, motion pause and the live Cal.com embed. No test meeting was created.
