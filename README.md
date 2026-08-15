# Jayakumar M — AI Engineer Portfolio

Premium, production-ready portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-native `@theme` tokens, no `tailwind.config.js` needed)
- **Framer Motion** — section reveals, hover/tap micro-interactions
- **GSAP** — loading screen sequence
- **Three.js** — subtle floating accent geometry behind the hero portrait
- **Lucide Icons**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                Route files: layout, page, robots.ts, sitemap.ts, manifest.ts
components/
  sections/          Hero, About, Skills, Projects, Education, RecruiterMode, Contact
  ui/                 Reusable primitives: GlassCard, MagneticButton, SectionHeading
  chatbot/            Pickachu — the floating AI assistant + its mascot SVG
  effects/            (reserved for future ambient/visual effects)
data/                 All editable content — skills.ts, projects.ts, education.ts,
                       chatbotKnowledge.ts, config.ts. Edit these, not the components,
                       to update site content.
hooks/useTheme.tsx    Light/dark theme context + localStorage persistence
public/
  images/avatar.png   Profile portrait
  resume/*.pdf         Downloadable resume (linked from Hero, Navbar, Contact, Recruiter Mode)
```

## Editing content

Everything visitor-facing lives in `data/`. For example, to add a new project, add an
entry to `data/projects.ts` — no component code needs to change.

To update the resume, replace `public/resume/Jayakumar_M_Resume.pdf` and update
`resumeUrl` in `data/config.ts` if you rename the file.

To teach the Pickachu chatbot new answers, add entries to `data/chatbotKnowledge.ts`
(each entry has `keywords` it matches against and an `answer`).

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new.
3. Framework preset: **Next.js** (auto-detected). No environment variables required.
4. Deploy.

Before going live, update `siteUrl` in `data/config.ts` to your real production domain —
it feeds `metadataBase`, Open Graph tags, the sitemap, and structured data.

## Accessibility & performance notes

- Keyboard focus rings, ARIA labels on interactive controls, and a "Skip to main content"
  link are already wired up.
- `prefers-reduced-motion` is respected globally in `globals.css`.
- The custom glow cursor automatically disables on touch devices.
- Images use `next/image` with explicit `sizes` for responsive loading.
