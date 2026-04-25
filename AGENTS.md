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
- **Content**: MDX via `next-mdx-remote` — all fiches/cours are `.mdx` files using fiche primitives (see section below)
- **Math**: KaTeX via `remark-math` + `rehype-katex` — use `$...$` for inline, `$$...$$` for block formulas
- **Storage**: localStorage (no backend, no user accounts)
- **CI/CD**: GitHub Actions → GitHub Pages

## Project Structure

```
src/
  app/                          # Pages (App Router)
    layout.tsx                  # Root layout
    not-found.tsx               # Custom 404 page
    page.tsx                    # Home
    [level]/                    # Pages per level (4e, 3e...)
      page.tsx
      [subject]/                # Pages per subject (francais, svt...)
        page.tsx
        [slug]/                 # Individual resource pages
          page.tsx
          questions/            # All-questions view for quiz resources
            page.tsx
    historique/                 # Recently viewed resources
      page.tsx
    favoris/                    # Redirect → /historique
      page.tsx
    niveaux/                    # Level picker
      page.tsx
    progression/                # Overall progress dashboard
      page.tsx
    reglages/                   # Accessibility settings page
      page.tsx
  components/
    layout/                     # Header, MobileNav, Sidebar, Breadcrumb
    home/                       # Home page components
    resources/                  # Cards, resource lists
    content/                    # MdxRenderer, QuizPlayer, ResourceTracker
    fiche/                      # MDX primitive components (Section, Retenir, etc.)
    quiz/                       # Quiz sub-components (QuizSession, QuizResult, etc.)
      questions/                # One component per question type
    accessibility/              # Settings panel, ReadingRuler
  contexts/                     # React Contexts (AccessibilityContext)
  hooks/                        # Custom hooks
    useProgress.ts
    useQuizSession.ts           # Session persistence (24h TTL, localStorage)
    useRecentResources.ts
    useLocalStorage.ts
  data/                         # Content and data
    resources/                  # Resources organized by level/subject
      <level>/
        <subject>/
          index.ts              # Resource metadata (slug, mdxPath, quizData, etc.)
          fiches/               # MDX fiche files
            *.mdx
    quizzes/                    # Quiz JSON files (legacy — prefer inline quizData)
  lib/                          # Utilities
    asset-path.ts               # assetPath() for GitHub Pages compatibility
    haptics.ts                  # vibrateCorrect(), vibrateIncorrect()
    rehype-syllabify.ts         # Rehype plugin for syllable colorization
    selectQuizQuestions.ts      # Smart question selection algorithm
    sounds.ts                   # playCorrect(), playIncorrect(), playVictory()
    syllabify.ts                # Hypher-based syllabification
    utils.ts
  types/                        # Shared TypeScript types
scripts/
  validate-resources.ts         # Pre-build resource validation script
public/
  fonts/                        # OpenDyslexic, Lexend
  icons/                        # PWA icons (192x192, 512x512)
  manifest.json                 # PWA manifest
  robots.txt                    # Disallow all (no SEO)
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
  - `drag-on-image` — glisser des étiquettes sur les zones d'un schéma. Champs : `imageSrc`, `imageAlt`, `zones: { id, x, y, correctLabel }[]` (x/y en % de l'image), `labels[]` (banque + distracteurs éventuels). `correctAnswer` ignoré (validation par zones).
  - `click-on-image` — cliquer la bonne zone d'un schéma. Champs : `imageSrc`, `imageAlt`, `clickZones: { id, x, y, w, h, isCorrect, label? }[]` (x,y,w,h en % de l'image). `correctAnswer` = id de la zone correcte.
  - `audio-listen` — écouter un audio puis répondre QCM. Champ : `audioSrc` (chemin /public/sounds/ ou data:URI). `options` + `correctAnswer` comme un qcm classique. Le composant gère l'erreur audio élégamment.
  - `tri-categories` — glisser des items dans des colonnes-catégories. Champs : `items: { id, label }[]`, `categories: { id, label, correctItemIds: string[] }[]`. `correctAnswer` ignoré (validation par placement).
  - `completion-tableau` — remplir les cases manquantes d'un tableau. Champ : `table: { headers: string[], rows: ({ value: string } | { blank: true, correctAnswer: string })[][] }`. Validation insensible à la casse et aux accents.
- **Session size: 10 questions** — set `sessionSize: 10` explicitly on the quiz object
- **Smart selection**: prioritizes previously wrong answers, then unseen questions, then already-correct ones — implemented in `src/lib/selectQuizQuestions.ts`
- **3 mandatory levels**: Easy 🟢, Intermediate 🟡, Expert 🔴
- The `sessionSize` field on the `Quiz` object controls questions per session; `passingScore` is a percentage

## Cross-linking resources

- Every `fiche` or `cours` MDX file **MUST** end with a `<QuizLink>` component **when a quiz on the same topic exists in that subject**:
  ```mdx
  <QuizLink level="4e" subject="francais" />
  ```
  If a specific quiz slug is needed: `<QuizLink level="4e" subject="francais" slug="my-quiz-slug" />`
- Exception: if the fiche covers a topic without a dedicated quiz (e.g. `figures-de-style` in `francais` while the quizzes are about conjugaison), omit `<QuizLink>`. The validation script will warn but not fail the build in this case.
- `[slug]/page.tsx` automatically adds "Passer au quiz →" buttons at the **top and bottom** of every fiche/cours page by finding the first `quiz` resource in the same level/subject.
- `QuizPlayer` automatically adds "Revoir la fiche" links at the **top of level-select/intro screens** and at the **bottom of the result screen** by finding the first `fiche` resource using `getResourcesByLevelAndSubject`.
- **No hardcoded slugs** — always rely on these dynamic lookups.

## Commands

```bash
npm run dev                  # Dev server (http://localhost:3000)
npm run validate-resources   # Validate all resources (sessionSize, mdxPath, question counts)
npm run build                # Static build into out/ (runs validate-resources first via prebuild)
npm run lint                 # ESLint
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

## Fiche Primitives

All fiche/cours content is written in MDX and uses these components from `src/components/fiche/`:

| Component | Props | Purpose |
|-----------|-------|---------|
| `<Section>` | `title` (required), `color?`, `emoji?`, `index?` | Colored section header (replaces `##`) |
| `<Retenir>` | `color?`, `title?` | "À retenir" callout box |
| `<Definition>` | `term` (required) | Vocabulary definition block |
| `<Formule>` | — | Formula highlight box |
| `<Schema>` | `src`, `alt`, `caption?` | Image figure with caption (handles `assetPath` automatically) |
| `<Tableau>` | — | Styled table wrapper |
| `<Exemple>` | `title?` | Example callout |
| `<Astuce>` | `title?` | Tip callout |
| `<Erreur>` | `title?` | Warning/error callout |
| `<Vocabulaire>` | `term`, `children` | Inline vocabulary highlight |
| `<QuizLink>` | `level`, `subject`, `slug?`, `label?` | CTA button to the related quiz |

Available colors: `purple`, `blue`, `green`, `orange`, `cyan`, `brown`, `sand`, `rose`, `amber`

The syllabification plugin (`src/lib/rehype-syllabify.ts`) automatically colorizes syllables for DYS readers when the feature is enabled.

## Quiz Features (ADHD-oriented)

### Session persistence
- `useQuizSession(quizId, levelId)` persists the current quiz session in localStorage (TTL 24h).
- Key: `teacher-loulou-quiz-session-${quizId}-${levelId}`.
- On mount, `QuizSession` shows a "Reprendre / Recommencer" prompt if a saved session exists.
- Session is auto-saved after each answer and cleared on completion or restart.

### Reset progression
- `useProgress().resetQuizProgress(resourceSlug, quizLevelId?)` clears `questionHistory` and `quizScores`.
- Without `quizLevelId`: resets all levels. With it: resets only that level's history.
- Accessible from `QuizLevelSelect` via a "Réinitialiser ma progression" button and confirmation dialog.

### Next level CTA
- `QuizResult` shows a "Passer au niveau suivant" button when `score >= passingScore` AND a higher level exists.
- Level order: `facile → intermediaire → expert`.
- Implemented via `onNextLevel?: () => void` prop orchestrated by `QuizPlayer`.

### Question counter & pastilles
- During `QuizSession`, a "Question N/M" counter and a row of pastilles are shown above the progress bar.
- Pastilles: ● current, ✅/❌ past (colored), ○ upcoming. Component: `QuestionPastilles`.

### All-questions view
- Route: `/[level]/[subject]/[slug]/questions` — lists all questions grouped by level.
- Shows status per question (never seen / correct / incorrect), attempt count, last seen date.
- "Refaire" button links to `?retry=questionId` on the quiz page, which starts a single-question session.
- Linked from `QuizLevelSelect` and `QuizResult`.

### Streak counter
- `Streak` component in `QuizSession` shows "🔥 Série de N" above the progress section.
- Resets to 0 on any incorrect answer.
- Micro-toast at milestones 3 ("Excellent !"), 5 ("Imparable !"), 10 ("En feu !"). Disappears after 1.5s.

### Sound effects
- `src/lib/sounds.ts`: `playCorrect()`, `playIncorrect()`, `playVictory()` via Web Audio API (no audio files).
- Correct: 880Hz sine 80ms. Incorrect: 220Hz sawtooth 150ms. Victory: C5-E5-G5-C6 fanfare.
- Controlled by `AccessibilitySettings.sounds` (default **false** — avoids distracting ADHD users).

### Haptic feedback
- `src/lib/haptics.ts`: `vibrateCorrect()` (50ms), `vibrateIncorrect()` ([100, 50, 100]) via Vibration API.
- Controlled by `AccessibilitySettings.vibration` (default **true** — mobile-first feedback).

### Confetti
- `QuizResult` triggers `canvas-confetti` when `score >= passingScore` AND `settings.confetti === true`.
- Controlled by `AccessibilitySettings.confetti` (default **true**).

### Accessibility settings
Three new toggles in `AccessibilitySettings` (and `DEFAULT_ACCESSIBILITY_SETTINGS`):
- `sounds: boolean` — default `false`
- `vibration: boolean` — default `true`
- `confetti: boolean` — default `true`

All three are exposed in `AccessibilityControls` with icons Volume2, Smartphone, Sparkles.

### Progression page
- `/progression` — client component reading `useProgress().progressList`.
- Grouped by subject, shows scores, question stats, level breakdown, and drill-down links.
- Linked from `MobileNav` (replaces Réglages slot). Settings accessible via gear icon in `Header`.

## Validation

`scripts/validate-resources.ts` runs automatically before every `next build` (via the `prebuild` npm hook). Run it manually with `npm run validate-resources`.

### Strict checks (fail the build)
- Every `quiz` resource must have `sessionSize: 10` explicitly set on `quizData`.
- Every `fiche` / `cours` resource must have `mdxPath` defined and the file must exist on disk.

### Warning checks (do not fail the build)
- Leveled quiz levels must have ≥ 15 questions each. Flat quizzes must have ≥ 15 questions.
- Every `fiche` / `cours` MDX file should contain `<QuizLink>` when a quiz exists in the same subject.
- Orphaned `.mdx` files (under `src/data/resources/`) not referenced by any resource are flagged.

Known warning suppressions are documented in `MIGRATION_NOTES.md` at the root.

## Conventions

- Code and comments in **English**
- UI and content in **French**
- React components in PascalCase, files in kebab-case
- Use existing shadcn/ui-patterned components from `src/components/` when possible
- Always think mobile-first
- Always verify DYS/ADHD accessibility for every new component
