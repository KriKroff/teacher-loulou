/**
 * validate-resources.ts
 *
 * Run: npm run validate-resources (or automatically via prebuild)
 *
 * Checks:
 *   - Every quiz resource has sessionSize === 10 (strict — fails build)
 *   - Every fiche/cours resource has mdxPath defined and the file exists (strict)
 *   - Leveled quiz levels have ≥ 15 questions each (warning — does not fail build)
 *   - Flat quiz questions array has ≥ 15 questions (warning)
 */

import fs from "fs";
import path from "path";

// Use relative imports to stay independent from Next.js / @/ path aliases
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getAllResources } = require("../src/data/resources") as typeof import("../src/data/resources");

const ROOT = path.resolve(__dirname, "..");
const RESOURCES_DIR = path.join(ROOT, "src", "data", "resources");

// ── helpers ──────────────────────────────────────────────────────────────────

let hasError = false;
let hasWarning = false;

function error(msg: string): void {
  console.error(`✗ ERROR: ${msg}`);
  hasError = true;
}

function warn(msg: string): void {
  console.warn(`⚠ WARNING: ${msg}`);
  hasWarning = true;
}

function ok(msg: string): void {
  console.log(`✓ ${msg}`);
}

// ── main audit ────────────────────────────────────────────────────────────────

const resources = getAllResources();

// Group by level+subject for cross-link checks
type LevelSubjectKey = string;
const byLevelSubject = new Map<LevelSubjectKey, typeof resources>();
for (const r of resources) {
  const key = `${r.level}/${r.subject}`;
  if (!byLevelSubject.has(key)) byLevelSubject.set(key, []);
  byLevelSubject.get(key)!.push(r);
}

// ── A. Quiz audits ────────────────────────────────────────────────────────────

for (const r of resources) {
  if (!r.relatedResourceSlug) continue;

  const related = resources.find(
    (candidate) =>
      candidate.level === r.level &&
      candidate.subject === r.subject &&
      candidate.slug === r.relatedResourceSlug
  );

  if (!related) {
    error(
      `[${r.level}/${r.subject}/${r.slug}] relatedResourceSlug="${r.relatedResourceSlug}" does not resolve to a resource in the same level/subject`
    );
    continue;
  }
}

for (const r of resources) {
  if (r.type !== "quiz") continue;
  const quiz = r.quizData;
  if (!quiz) {
    error(`[${r.level}/${r.subject}/${r.slug}] type=quiz but quizData is missing`);
    continue;
  }

  // sessionSize check (STRICT)
  if (quiz.sessionSize === undefined) {
    error(`[${r.level}/${r.subject}/${r.slug}] sessionSize is missing (must be 10)`);
  } else if (quiz.sessionSize !== 10) {
    error(`[${r.level}/${r.subject}/${r.slug}] sessionSize=${quiz.sessionSize} (must be 10)`);
  }

  // Question count checks (WARNING only)
  if (quiz.levels && quiz.levels.length > 0) {
    for (const lvl of quiz.levels) {
      if (lvl.questions.length < 15) {
        warn(
          `[${r.level}/${r.subject}/${r.slug}] level "${lvl.id}" has ${lvl.questions.length} questions (minimum 15). See MIGRATION_NOTES.md.`
        );
      }
    }
  } else {
    // flat quiz
    const flatQuestions = quiz.questions ?? [];
    if (flatQuestions.length < 15) {
      warn(
        `[${r.level}/${r.subject}/${r.slug}] flat quiz has ${flatQuestions.length} questions (minimum 15). See MIGRATION_NOTES.md.`
      );
    }
  }
}

// ── B. Fiche/cours audits ────────────────────────────────────────────────────

for (const r of resources) {
  if (r.type !== "fiche" && r.type !== "cours") continue;

  // mdxPath must be defined (STRICT)
  if (!r.mdxPath) {
    error(`[${r.level}/${r.subject}/${r.slug}] mdxPath is missing`);
    continue;
  }

  // mdxPath must point to an existing file (STRICT)
  const mdxAbs = path.join(RESOURCES_DIR, r.mdxPath);
  if (!fs.existsSync(mdxAbs)) {
    error(`[${r.level}/${r.subject}/${r.slug}] mdxPath file not found: ${mdxAbs}`);
  }

}

// ── C. MDX file existence pass (all .mdx under resources/) ───────────────────
//  Catch orphaned .mdx files that are not referenced by any resource (informational only)

const allMdxFiles = fs
  .readdirSync(RESOURCES_DIR, { recursive: true })
  .filter((f) => typeof f === "string" && f.endsWith(".mdx")) as string[];

const referencedMdxPaths = new Set(
  resources.filter((r) => r.mdxPath).map((r) => r.mdxPath as string)
);

for (const mdxRelative of allMdxFiles) {
  if (!referencedMdxPaths.has(mdxRelative)) {
    warn(`Orphaned MDX file not referenced by any resource: ${mdxRelative}`);
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────

console.log("");
if (hasError) {
  console.error(`✗ Validation FAILED — fix the errors above before building.`);
  process.exit(1);
} else if (hasWarning) {
  console.log(`⚠ Validation passed with warnings (see above). Check MIGRATION_NOTES.md for known TODOs.`);
} else {
  ok("Resources valid — all checks passed.");
}
