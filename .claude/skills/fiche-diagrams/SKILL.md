---
name: fiche-diagrams
description: Draw diagrams (schémas) for Teacher Loulou fiches — trees (famille/lignées), flows and processes, timelines (frises), Venn diagrams, comparisons, labelled cycles. Use whenever a fiche needs a schema, when the user asks to redo/fix a diagram, or when a diagram looks wrong on mobile. Covers the HTML-first primitives (ConnectedDiagram, DiagramNode, Frise, DiagramFrame), mobile rules and the mandatory check loop.
---

# Drawing fiche diagrams

Audience: 12–16 year olds with DYS/ADHD, **mostly on phones (320–430 px wide)**. A diagram that is fine on a computer but shrinks to 6 px text on a phone is a bug.

## The one rule: text is HTML, never SVG

An `<svg viewBox>` scales everything — including text — to the available width. A 360-unit-wide drawing shown in a 250 px phone frame turns 13 px text into 9 px; wider drawings get worse (measured: 3–6 px in several old diagrams). SVG text also never wraps, so it overflows its boxes.

So:
- **Boxes and labels = HTML** laid out with Tailwind (grid/flex, breakpoints). Text keeps its real size and wraps.
- **Lines, arrows, axes, shapes = SVG/CSS** drawn *behind* the HTML, positioned from the real boxes.
- SVG may contain text **only** for a single short tag (≤ 4 characters, e.g. "1", "Z+") when the drawing is never rendered below 1:1 scale. Otherwise put the text in HTML on top.
- Mermaid, chart-like auto-layout libraries and big viewBox SVGs were tested (see `scripts/check-diagrams.ts` history): Mermaid renders 3–4 px text on phones. Don't use them for fiche diagrams.

## Primitives (`src/components/fiche/`, all usable directly in MDX)

| Primitive | Use for | Notes |
|---|---|---|
| `DiagramFrame` (`Diagrams.tsx`) | Frame + title + caption around any diagram | Always wrap a diagram in it (the checker finds diagrams through it). |
| `ConnectedDiagram` + `DiagramNode` (`diagram/ConnectedDiagram.tsx`) | Trees, flows, cause → consequence chains, any boxes-and-arrows | Lay out nodes with CSS; pass `edges={[{from,to,route?,color?,dashed?}]}`. `route: "tree"` (default) = down/across/down org-chart lines, `"straight"` = direct. Arrows are recomputed on resize, so the same diagram can be 2 columns on phones and 4 on computers. |
| `Frise` (`diagram/Frise.tsx`) | Horizontal timelines | `start`, `end`, `step` (10), `majorStep` (50), `events: {year,label,kind?}` with kind `rupture` / `innovation` / `repere` / `neutre`. Every event shows its year and name next to its point (labels measured and spread on rows above/below, never overlapping). It keeps a normal size (≥ 720 px) and scrolls sideways on phones, with a hint — never shrink it, never replace names by numbered references (teacher's request). |

Examples: `diagram/TechnologieDiagrams.tsx` (tree with 4 lineages, 2-lineage tree, timeline, Venn with labels outside the circles).

## Layout recipes

- **Tree (famille → lignées, classification)**: parent `DiagramNode` centred (`mx-auto max-w-sm`), children in `grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-10`, one edge per child. Keep the tree shape on phones (2 × 2 with the trunk going down the gap) — a one-column "folder" list was rejected by the teacher.
- **Process / cycle**: `grid` of steps with `route: "straight"` edges; on phones prefer top → bottom, on `sm:` left → right.
- **Timeline**: always horizontal (`Frise`), as in school documents — never vertical, all information visible at rest.
- **Venn / overlapping shapes**: draw the shapes in SVG with no text inside; put names in HTML around the drawing (left/right aligned so they cannot collide) and list the intersections underneath.
- **Comparison (A vs B)**: two cards in `grid sm:grid-cols-2`, never a wide table inside the frame.

## Mobile rules

- Minimum rendered text: **12 px** for content, 11 px only for small caps tags ("LIGNÉE"). The checker flags < 11 px.
- Assume a frame content width of **~210 px at 320 px screens, ~250 px at 360, ~280 px at 390**. Two columns at 320 px leave ~90 px per card: prefer short words, one object per line (`Bougie ↓ lampe à pétrole`).
- Hyphenation: never on multi-word lines (hard for DYS readers). Allowed on a line that is a single long word (`hyphens-auto` only when the text has no space) and with a soft hyphen `­` in very long words (`électro­luminescence`).
- No horizontal scrolling inside a fiche diagram, **except timelines** (`Frise`), which keep a readable size and scroll sideways with a visible hint.
- Interactivity may only *add* help (highlight, guided steps); never hide information the student must learn.
- Colours carry meaning consistently (rupture = orange-700, innovation = blue-700, repère = stone-600 …) and always come with a text label or legend.
- Follow the teacher's document: same shapes (tree, frise), same words (verbatim vocabulary), same order.

## Mandatory loop

1. Write the diagram (prefer a new `export function XxxDiagram()` in a subject file under `src/components/fiche/diagram/`, re-exported from `fiche/index.ts`).
2. `npm run build` then `npm run check-diagrams -- --only=<subject-or-slug> --shots=all`.
3. Fix every reported issue, then **look** at the screenshots in `diagram-report/` (320, 390 and 1280 px at least) with the `diagram-review` skill checklist — the script cannot judge meaning or fidelity to the course.
4. Repeat at most twice more; if something still looks off, tell the user what and why.
