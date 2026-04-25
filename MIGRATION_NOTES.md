# Migration Notes

## TODO: Quiz pools < 15 questions à compléter

The following quiz pools have fewer than the required minimum of 15 questions per level
(see AGENTS.md "Quiz Rules"). They were flagged by `npm run validate-resources` and must
be completed before the quiz is considered production-ready for that level.

### `quiz-present-indicatif` (4e / français) — flat quiz

- **Type**: flat (no levels)
- **Current**: 8 questions
- **Required**: ≥ 15 questions
- **File**: `src/data/resources/4e/francais/index.ts` (inline `quizData`)
- **Action**: Add ≥ 7 more questions covering présent de l'indicatif (1er, 2e, 3e groupe,
  verbes irréguliers avoir/être/aller/faire/prendre…)

### `pc-masse-gaz-quiz` (4e / physique-chimie) — leveled quiz

- **Type**: leveled (facile / intermédiaire / expert)
- **Current**: 10 / 10 / 10 questions per level
- **Required**: ≥ 15 per level (20 recommended)
- **File**: `src/data/resources/4e/physique-chimie/index.ts` (inline `quizData`)
- **Action**: Add ≥ 5 questions per level. Topics to cover:
  - Facile: propriétés des gaz, états de la matière, composition de l'air (N2/O2/Ar/CO2)
  - Intermédiaire: pression atmosphérique, unités (Pa, hPa, atm, mmHg), masse volumique
  - Expert: technique du déplacement d'eau, calculs de masse volumique, conversions d'unités
