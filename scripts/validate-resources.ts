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
 *   - Language production types (traduction, construire-phrase,
 *     correction-erreur, expression-libre): answer data is consistent (strict)
 */

import fs from "fs";
import path from "path";

// Use relative imports to stay independent from Next.js / @/ path aliases
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getAllResources } = require("../src/data/resources") as typeof import("../src/data/resources");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { parseTaggedText, tokenizeTaggedText } = require("../src/lib/tagged-text") as typeof import("../src/lib/tagged-text");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ION_CHARGES } = require("../src/lib/ion") as typeof import("../src/lib/ion");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { normalizeEnglish, chunkPresent, requiredWordPresent, countWords } = require("../src/lib/english-answer") as typeof import("../src/lib/english-answer");

/** Counts occurrences of each string (trimmed). */
function multiset(items: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const it of items) m.set(it.trim(), (m.get(it.trim()) ?? 0) + 1);
  return m;
}
/** Tiles of `order` missing from `tiles` (respecting duplicates). */
function missingTiles(order: string[], tiles: string[]): string[] {
  const available = multiset(tiles);
  const missing: string[] = [];
  for (const t of order) {
    const n = available.get(t.trim()) ?? 0;
    if (n === 0) missing.push(t);
    else available.set(t.trim(), n - 1);
  }
  return missing;
}

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

  // Data checks for question types whose answers can't be checked by TypeScript (STRICT)
  const allQuestions = [...(quiz.questions ?? []), ...(quiz.levels ?? []).flatMap((l) => l.questions)];
  for (const q of allQuestions) {
    const where = `[${r.level}/${r.subject}/${r.slug}] question "${q.id}"`;
    if (q.type === "nature-mots") {
      const targets = parseTaggedText(q.taggedText ?? "").filter((s) => s.kind === "target");
      if (targets.length === 0) error(`${where}: nature-mots has no [mot|Réponse] target`);
      for (const t of targets) {
        if (t.kind === "target" && !(q.options ?? []).includes(t.answer ?? "")) {
          error(`${where}: answer "${t.answer}" for "${t.text}" is not in options`);
        }
      }
    }
    if (q.type === "surlignage") {
      const targets = tokenizeTaggedText(q.taggedText ?? "").filter((t) => t.kind === "word" && t.isTarget);
      if (targets.length === 0) error(`${where}: surlignage has no [mot] target`);
    }
    if (q.type === "etude-texte") {
      if (!q.subQuestions?.length) error(`${where}: etude-texte has no subQuestions`);
      for (const sq of q.subQuestions ?? []) {
        if (!sq.options.includes(sq.correctAnswer)) {
          error(`${where}: sub-question "${sq.question}" correctAnswer is not in options`);
        }
      }
    }
    if (q.type === "construire-ion") {
      const b = q.ionBuilder;
      if (!b) error(`${where}: construire-ion has no ionBuilder`);
      else if (
        !Number.isInteger(b.z) ||
        !Number.isInteger(b.targetElectrons) ||
        b.z < 1 ||
        b.targetElectrons < 0 ||
        b.targetElectrons > b.z + 4
      ) {
        error(`${where}: construire-ion targetElectrons=${b.targetElectrons} out of range for z=${b.z}`);
      } else if (b.targetElectrons === b.z) {
        error(`${where}: construire-ion targetElectrons equals z — the target must be a charged ion`);
      }
    }
    if (q.type === "formule-ion") {
      const ans = q.correctAnswer;
      if (!Array.isArray(ans) || ans.length !== 2) {
        error(`${where}: formule-ion correctAnswer must be [symbol, charge]`);
      } else {
        if (!(q.options ?? []).includes(ans[0])) error(`${where}: symbol "${ans[0]}" is not in options`);
        if (!(ION_CHARGES as readonly string[]).includes(ans[1])) {
          error(`${where}: charge "${ans[1]}" must be one of ${ION_CHARGES.join(", ")}`);
        }
      }
    }
    if (q.type === "traduction") {
      const accepted = q.acceptedAnswers ?? [];
      if (!q.sourceText?.trim()) error(`${where}: traduction has no sourceText`);
      if (accepted.length === 0 || accepted.some((a) => !normalizeEnglish(a))) {
        error(`${where}: traduction needs non-empty acceptedAnswers`);
      } else {
        for (const chunk of q.keyChunks ?? []) {
          if (!chunkPresent(accepted[0], chunk)) {
            error(`${where}: keyChunk "${chunk}" is not in acceptedAnswers[0] "${accepted[0]}"`);
          }
        }
      }
    }
    if (q.type === "construire-phrase") {
      const tiles = q.tiles ?? [];
      if (!q.sourceText?.trim()) warn(`${where}: construire-phrase has no sourceText`);
      if (!Array.isArray(q.correctAnswer) || q.correctAnswer.length === 0) {
        error(`${where}: construire-phrase correctAnswer must be a non-empty string[] (tiles in order)`);
      } else {
        const orders = [q.correctAnswer, ...(q.acceptedOrders ?? [])];
        orders.forEach((order, k) => {
          const name = k === 0 ? "correctAnswer" : `acceptedOrders[${k - 1}]`;
          if (!Array.isArray(order) || order.length === 0) {
            error(`${where}: ${name} must be a non-empty string[]`);
            return;
          }
          const missing = missingTiles(order, tiles);
          if (missing.length > 0) error(`${where}: ${name} uses tiles not in tiles: ${missing.map((t) => `"${t}"`).join(", ")}`);
        });
        if (tiles.length <= q.correctAnswer.length) warn(`${where}: construire-phrase has no distractor tile`);
      }
    }
    if (q.type === "correction-erreur") {
      const targets = parseTaggedText(q.taggedText ?? "").filter((seg) => seg.kind === "target");
      if (targets.length === 0) error(`${where}: correction-erreur has no [faux|correction] target`);
      for (const t of targets) {
        if (t.kind !== "target") continue;
        const alts = (t.answer ?? "").split("|").map((a) => a.trim());
        if (!t.answer) {
          error(`${where}: target "[${t.text}]" has no correction (write [${t.text}|correction], or [${t.text}|-] to delete)`);
        } else if (alts.some((a) => a === "")) {
          error(`${where}: target "[${t.text}|${t.answer}]" has an empty alternative (use "-" to mean "delete the word")`);
        } else if (alts.some((a) => a !== "-" && normalizeEnglish(a) === normalizeEnglish(t.text))) {
          error(`${where}: target "[${t.text}|${t.answer}]" — a correction is identical to the wrong word`);
        }
      }
    }
    if (q.type === "expression-libre") {
      const model = q.modelAnswer ?? "";
      if (!model.trim()) {
        error(`${where}: expression-libre has no modelAnswer`);
      } else {
        for (const w of q.requiredWords ?? []) {
          if (!requiredWordPresent(model, w)) error(`${where}: modelAnswer does not contain required word "${w}"`);
        }
        if (q.minWords !== undefined && countWords(model) < q.minWords) {
          error(`${where}: modelAnswer has ${countWords(model)} words (< minWords=${q.minWords})`);
        }
      }
    }
    for (const d of q.atomDiagrams ?? []) {
      if (!Number.isInteger(d.z) || !Number.isInteger(d.electrons) || d.z < 1 || d.electrons < 0) error(`${where}: invalid atomDiagram (z=${d.z}, electrons=${d.electrons})`);
    }
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
