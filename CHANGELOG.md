# Changelog

## 2026-04-25 — Refonte complète (9 phases)

Full technical overhaul of teacher-loulou, eliminating tech debt and aligning the codebase
with ADHD/DYS best practices across content, quiz, and UX.

### Phase 0 — Quick wins
- Replaced Next.js boilerplate README with a project README (DYS/ADHD pitch, demo link, stack)
- Removed unused SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`)
- Removed dead code: `SyllableText.tsx`, unused imports in `ResourceCard.tsx`
- Cleaned up `next.config.ts`

### Phase 1 — Lint fixes + FOUC
- Fixed `useLocalStorage` lazy-init to eliminate flash of unstyled content (OpenDyslexic font, spacings)
- Fixed `QuizPlayer` useEffect/useMemo ESLint violations
- `npm run lint` → 0 errors, 0 warnings

### Phase 2 — Noindex
- Added `robots: { index: false, follow: false }` to root metadata
- Created `public/robots.txt` (Disallow all)

### Phase 3 — MDX setup + fiche primitives
- Installed `next-mdx-remote`, `remark-gfm`, `remark-math`, `rehype-katex`, `katex`
- Created `src/components/fiche/` library: Section, Retenir, Definition, Formule, Schema,
  Tableau, Exemple, Astuce, Erreur, Vocabulaire, QuizLink
- Created `src/components/content/MdxRenderer.tsx` (RSC, KaTeX, syllabification plugin)
- Added `mdxPath` to `Resource` type

### Phase 4 — MDX content migration
- Migrated all fiches/cours to `.mdx` format under `src/data/resources/4e/<subject>/fiches/`
- Subjects migrated: francais (3), espagnol (1), histoire-geo (1), svt (1), physique-chimie (1)
- Deleted `SVTPuberteFiche.tsx` (1241L), `PCMasseGazFiche.tsx` (1026L), `CourseViewer.tsx`
- Extracted syllabification logic to `src/lib/syllabify.ts`

### Phase 5 — UX polish
- Renamed Favoris → Historique (route + MobileNav)
- Added `/favoris` static redirect
- Replaced hardcoded "Loulou" greeting with generic "Salut !"
- Created `src/app/not-found.tsx` (custom 404)
- Added touch support to `ReadingRuler` (mobile drag)
- Added skip-to-content link in layout
- Added ARIA attributes to all accessibility sliders
- Fixed MobileNav active state for nested level/subject routes
- Added PWA manifest + theme-color meta tag

### Phase 6 — QuizPlayer refactor
- Split 1428-line `QuizPlayer.tsx` into ~15 focused components under `src/components/quiz/`:
  `QuizLevelSelect`, `QuizIntro`, `QuizSession`, `QuizResult`, `QuestionShell`
- One component per question type under `src/components/quiz/questions/`
- `QuizPlayer` reduced to ~200-line orchestrator

### Phase 7 — Quiz ADHD features
- Session persistence: `useQuizSession` (localStorage, 24h TTL, resume prompt)
- Reset progression: button + confirmation dialog on `QuizLevelSelect`
- "Passer au niveau suivant" CTA on `QuizResult` when score ≥ passingScore
- Question pastilles + "N/10" counter in `QuizSession`
- All-questions view: `/[level]/[subject]/[slug]/questions`
- Streak counter with milestone micro-toasts (3/5/10)
- Sound effects via Web Audio API (`src/lib/sounds.ts`) — default OFF
- Haptic feedback via Vibration API (`src/lib/haptics.ts`) — default ON
- Confetti on success (`canvas-confetti`) — default ON
- `/progression` page: overall progress dashboard
- Three new `AccessibilitySettings` toggles: `sounds`, `vibration`, `confetti`

### Phase 8 — New question types
- Added 5 new interactive question types: `drag-on-image`, `click-on-image`, `audio-listen`,
  `tri-categories`, `completion-tableau`
- Each type: TypeScript interface in `src/types/index.ts`, component in `src/components/quiz/questions/`
- SVT quiz uses `drag-on-image` and `click-on-image` for anatomical diagrams

### Phase 9 — Compliance audit & validation
- Audit & fix `sessionSize`:
  - `pc-masse-gaz-quiz`: 8 → 10
  - `svt-puberte-quiz`: missing → 10
  - `quiz-present-indicatif`: missing → 10
- Cross-link audit: all fiches with matching quizzes have `<QuizLink>` at end of MDX.
  `figures-de-style` intentionally skipped (no topic-matching quiz in subject).
- Created `scripts/validate-resources.ts` with strict (sessionSize, mdxPath) and warning
  (question counts, QuizLink presence) checks
- Installed `tsx` devDependency; added `validate-resources` + `prebuild` npm scripts
- Created `MIGRATION_NOTES.md` documenting quiz pools < 15 questions to complete
- Updated `AGENTS.md`: Project Structure, Commands, Cross-linking exception, new Validation section
- Build: 34 static HTML pages, lint 0 errors, validation passes with documented warnings
