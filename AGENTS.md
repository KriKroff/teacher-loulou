# Teacher Loulou

## Project

Learning website adapted for DYS disorders and ADHD, targeting French middle and high school students. Born to help Loulou (4ème student), but aimed at any student with these conditions.

## Target Audience

**Teenagers (collège/lycée) with dyslexia, dysphonia, or ADHD.**

### Design Requirements

#### Mandatory DYS adaptations
- OpenDyslexic font available as a toggle option
- Default font must be highly readable (Lexend or Atkinson Hyperlegible)
- Increased spacing: letters (0.05-0.15em), words (0.1-0.3em), line-height (1.5-2.5)
- Warm cream background (`#FFF8F0`), **never pure white** (`#FFFFFF`)
- Dark grey text (`#2D2D2D`), **never pure black** (`#000000`)
- Short paragraphs, chunked content with visual separators
- Reading ruler (overlay that follows the current line)
- Alternating colored syllables to aid decoding

#### Mandatory ADHD adaptations
- Clean interface, no unnecessary visual distractions
- Clear and predictable navigation
- Visual progress indicators (progress bars, badges, rewards)
- Short sessions with regular encouragement
- Measured gamification (engaging but not intrusive)
- Timer/Pomodoro to structure study sessions

#### General design
- **Mobile-first**: majority of users are on smartphones
- Responsive: works on mobile, tablet, and desktop
- Visually appealing for teenagers (modern, colorful but not aggressive)
- **Never condescending**: tone and design must suit 12–18 year olds

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Export**: Static (`output: 'export'`) for GitHub Pages
- **UI**: Tailwind CSS + shadcn/ui patterns (components inlined as source, no npm package — use existing components in `src/components/` as reference)
- **Storage**: localStorage (no backend, no user accounts)
- **CI/CD**: GitHub Actions → GitHub Pages

## Project Structure

```
src/
  app/                          # Pages (App Router)
    layout.tsx                  # Root layout
    page.tsx                    # Home
    [level]/                    # Pages per level (4e, 3e...)
      page.tsx
      [subject]/                # Pages per subject (francais, svt...)
        page.tsx
        [slug]/                 # Individual resource pages
          page.tsx
    reglages/                   # Accessibility settings page
      page.tsx
  components/
    layout/                     # Header, MobileNav, Sidebar, Breadcrumb
    home/                       # Home page components
    resources/                  # Cards, resource lists
    content/                    # QuizPlayer, CourseViewer, etc.
    accessibility/              # Settings panel, ReadingRuler
  contexts/                     # React Contexts (AccessibilityContext)
  hooks/                        # Custom hooks (useProgress, useRecentResources, useLocalStorage)
  data/                         # Content and data
    resources/                  # Resources organized by level/subject
    quizzes/                    # Quiz JSON files
  lib/                          # Utilities (assetPath, selectQuizQuestions, utils)
  types/                        # Shared TypeScript types
public/
  fonts/                        # OpenDyslexic, Lexend
```

## Content Organization

Resources are organized by **school level** → **subject** → **resource**.

Levels: `6e`, `5e`, `4e`, `3e`, `2nde`, `1ere`, `terminale`

> Current content: **4e only** (`src/data/resources/4e/`). Other levels are architecturally supported but have no data yet.

Resource types: `cours`, `fiche`, `exercice`, `quiz`, `video`, `lien`, `html`

Quiz files are stored as JSON in `src/data/quizzes/` for reuse across resource entries.

## Quiz Rules

- **15–20 distinct questions per pool (strict minimum)**:
  - For **leveled quizzes** (with `levels`): each level must have **at least 15 questions** (20 is better)
  - For **flat quizzes** (no levels): the root `questions` array must have at least 15 questions
- **Use question types that fit the learning goal** — variety is encouraged, but not mandatory for every quiz:
  - `qcm` — QCM classique (1 bonne réponse)
  - `vrai-faux` — Vrai ou Faux
  - `texte-a-trous` — cliquer la bonne option pour remplir un blanc
  - `texte-a-trous-select` — style Duolingo : cliquer des tuiles de mots pour remplir plusieurs blancs (`___`). `correctAnswer` est un tableau ordonné, `options` la banque de mots (+ distracteurs)
  - `association` — relier des paires gauche/droite
  - `qcm-multiple` — plusieurs bonnes réponses
  - `ordre` — remettre dans le bon ordre (drag-and-drop)
  - `nombre` — saisir un nombre/une année. `correctAnswer` est une string numérique ; `tolerance` (optionnel) permet une marge
  - `slider` — curseur entre min et max. `options: ["min", "max"]` ou `options: ["min", "max", "step"]` ; `correctAnswer` est la valeur exacte ; `tolerance` (optionnel) permet une marge
  - `intrus` — trouver l'élément qui n'appartient pas au groupe (comme un QCM visuel)
- **Session size: 10 questions** — set `sessionSize: 10` explicitly on the quiz object
- **Smart selection**: prioritizes previously wrong answers, then unseen questions, then already-correct ones — implemented in `src/lib/selectQuizQuestions.ts`
- **3 mandatory levels**: Easy 🟢, Intermediate 🟡, Expert 🔴
- The `sessionSize` field on the `Quiz` object controls questions per session; `passingScore` is a percentage

## Cross-linking resources

- Every `fiche` or `cours` resource **MUST** include a link to its quiz at the bottom of the `content` field:
  ```markdown
  > 🎯 **Prêt(e) à te tester ?** → [Faire le quiz sur ce chapitre →](/level/subject/quiz-slug)
  ```
- `[slug]/page.tsx` automatically adds "Passer au quiz →" buttons at the **top and bottom** of every fiche/cours page by finding the first `quiz` resource in the same level/subject.
- `QuizPlayer` automatically adds "Revoir la fiche" links at the **top of level-select/intro screens** and at the **bottom of the result screen** by finding the first `fiche` resource using `getResourcesByLevelAndSubject`.
- **No hardcoded slugs** — always rely on these dynamic lookups.

## Commands

```bash
npm run dev      # Dev server (http://localhost:3000)
npm run build    # Static build into out/
npm run lint     # ESLint
```

## Gotchas

### Public asset paths
`next/image` and `next/link` handle `basePath` automatically.
For everything else (raw `<img>` tags, `<video>`, CSS background URLs), use `assetPath()`:

```ts
import { assetPath } from '@/lib/asset-path';
// <img src={assetPath('/images/foo.jpg')} />
```

Without this, assets break in production (GitHub Pages serves under `/teacher-loulou`).

### `NEXT_PUBLIC_BASE_PATH` env var
In CI/production: `NEXT_PUBLIC_BASE_PATH=/teacher-loulou`
Locally: unset (empty = no prefix). To test production behavior locally:

```bash
NEXT_PUBLIC_BASE_PATH=/teacher-loulou npm run build
```

## Conventions

- Code and comments in **English**
- UI and content in **French**
- React components in PascalCase, files in kebab-case
- Use existing shadcn/ui-patterned components from `src/components/` when possible
- Always think mobile-first
- Always verify DYS/ADHD accessibility for every new component
