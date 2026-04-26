# Teacher Loulou

## Project

Learning website for French middle/high school students with dyslexia, dysphonia, or ADHD. Static Next.js app deployed to GitHub Pages. **Most work consists of adding new fiches and quizzes.**

## Creating a Fiche

1. Create `src/data/resources/4e/<subject>/fiches/<slug>.mdx`
2. Register it in `src/data/resources/4e/<subject>/index.ts`:

```ts
{
  slug: "francais-subjonctif-fiche",
  title: "Le subjonctif présent",
  description: "...",
  type: "fiche",
  level: "4e",
  subject: "francais",
  chapter: "Chapitre — ...",
  createdAt: "2026-04-26T12:00:00Z",
  updatedAt: "2026-04-26T12:00:00Z",
  tags: ["subjonctif", "conjugaison", "fiche"],
  relatedResourceSlug: "francais-subjonctif-quiz",
  mdxPath: "4e/francais/fiches/francais-subjonctif-fiche.mdx",
}
```

3. Run `npm run validate-resources` to verify.

Subjects: `espagnol`, `francais`, `histoire-geo`, `physique-chimie`, `svt`

## Creating a Quiz

Add an entry in the same `index.ts` with `type: "quiz"` and inline `quizData`:

```ts
{
  slug: "francais-subjonctif-quiz",
  title: "Quiz — Le subjonctif présent",
  description: "...",
  type: "quiz",
  level: "4e",
  subject: "francais",
  chapter: "Chapitre — ...",
  createdAt: "2026-04-26T12:00:00Z",
  updatedAt: "2026-04-26T12:00:00Z",
  tags: ["subjonctif", "quiz"],
  relatedResourceSlug: "francais-subjonctif-fiche",
  quizData: {
    title: "Le subjonctif présent",
    description: "Choisis ton niveau.",
    passingScore: 60,
    sessionSize: 10,
    levels: [
      { id: "facile", name: "Facile", emoji: "🟢", description: "...", questions: [ /* ≥15 */ ] },
      { id: "intermediaire", name: "Intermédiaire", emoji: "🟡", description: "...", questions: [ /* ≥15 */ ] },
      { id: "expert", name: "Expert", emoji: "🔴", description: "...", questions: [ /* ≥15 */ ] },
    ],
  },
}
```

**Quiz rules:**
- 3 mandatory levels: `facile` 🟢, `intermediaire` 🟡, `expert` 🔴
- ≥15 questions per level (20 preferred)
- `sessionSize: 10` — always set explicitly
- `passingScore: 60` (percentage)
- Fiche and quiz share the same `chapter` value — cross-linking is automatic, no hardcoded slugs

## Fiche Primitives

All MDX fiches use these components from `src/components/fiche/`:

| Component | Props | Purpose |
|-----------|-------|---------|
| `<Section>` | `title` (req), `color?`, `emoji?`, `index?` | Colored section header (replaces `##`) |
| `<Retenir>` | `color?`, `title?` | "À retenir" callout |
| `<Definition>` | `term` (req) | Vocabulary definition block |
| `<Formule>` | — | Formula highlight box |
| `<Schema>` | `src`, `alt`, `caption?` | Image with caption (`assetPath` handled automatically) |
| `<Tableau>` | — | Styled table wrapper |
| `<Exemple>` | `title?` | Example callout |
| `<Astuce>` | `title?` | Tip callout |
| `<Erreur>` | `title?` | Warning callout |
| `<Vocabulaire>` | `term`, `children` | Inline vocab highlight |
| `<Glossaire>` | — | Vocabulary section container |
| `<GlossaireItem>` | `term` (req) | Row inside `<Glossaire>` |

Colors: `purple`, `blue`, `green`, `orange`, `cyan`, `brown`, `sand`, `rose`, `amber`

Math: `$...$` inline, `$$...$$` block (KaTeX via remark-math + rehype-katex).

### Built-in SVG Diagrams

Subject-specific inline diagrams in `src/components/fiche/Diagrams.tsx` — no props needed.
To add a new diagram: add an `export function` to `Diagrams.tsx`, re-export from `fiche/index.ts`.

## Quiz Question Types

| Type | Key fields |
|------|------------|
| `qcm` | `options[]`, `correctAnswer` |
| `vrai-faux` | `correctAnswer: "Vrai" \| "Faux"` |
| `texte-a-trous` | statement with `___`, `options[]`, `correctAnswer` |
| `texte-a-trous-select` | statement with N `___`, `options[]`, `correctAnswer: string[]` (ordered) |
| `association` | `pairs: { left, right }[]` |
| `qcm-multiple` | `options[]`, `correctAnswer: string[]` |
| `ordre` | `items[]`, `correctAnswer: string[]` (correct order) |
| `nombre` | `correctAnswer: string` (numeric), `tolerance?` |
| `slider` | `options: ["min","max"]` or `["min","max","step"]`, `correctAnswer`, `tolerance?` |
| `intrus` | `options[]`, `correctAnswer` (the odd one out) |
| `drag-on-image` | `imageSrc`, `imageAlt`, `zones: {id,x,y,correctLabel}[]` (x/y in %), `labels[]` |
| `click-on-image` | `imageSrc`, `imageAlt`, `clickZones: {id,x,y,w,h,isCorrect,label?}[]` (% coords), `correctAnswer` (zone id) |
| `audio-listen` | `audioSrc`, `options[]`, `correctAnswer` |
| `tri-categories` | `items: {id,label}[]`, `categories: {id,label,correctItemIds[]}[]` |
| `completion-tableau` | `table: {headers[], rows: ({value}\|{blank,correctAnswer})[][]}` — case/accent insensitive |

## Content Guidelines (DYS/ADHD)

**In fiches:**
- Short paragraphs — 2-3 sentences max before a visual break
- Prefer bullet points, tables, and callouts over prose
- Define all jargon; ELI8 style — never condescending
- Tone and language level: 12-16 year olds
- Start each fiche with a `<Glossaire>` of key terms when the chapter has specific vocabulary

**Design (applied globally — don't override in MDX):**
- Background `#FFF8F0`, text `#2D2D2D` — never pure white/black
- Font: Lexend / Atkinson Hyperlegible

## Commands

```bash
npm run dev                  # Dev server (http://localhost:3000)
npm run validate-resources   # Validate all resources — run before committing
npm run build                # Static build → out/ (runs validate-resources first)
npm run lint                 # ESLint
```

## Gotchas

**Public asset paths:** `next/image` and `next/link` handle `basePath` automatically. For raw `<img>`, `<video>`, CSS backgrounds — use `assetPath()`:

```ts
import { assetPath } from '@/lib/asset-path';
// <img src={assetPath('/images/foo.jpg')} />
```

Without this, assets break in production (GitHub Pages serves under `/teacher-loulou`).

**`NEXT_PUBLIC_BASE_PATH`:** In CI/prod: `/teacher-loulou`. Locally: unset. To test prod behavior:

```bash
NEXT_PUBLIC_BASE_PATH=/teacher-loulou npm run build
```

## Conventions

- Code and comments in English; UI and content in French
- React components: PascalCase; files: kebab-case
- Slug pattern: `<subject>-<topic>-fiche` / `<subject>-<topic>-quiz`
- Always mobile-first; verify DYS/ADHD constraints for every new component
- Use existing components from `src/components/` before creating new ones