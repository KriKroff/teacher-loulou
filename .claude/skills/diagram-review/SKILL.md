---
name: diagram-review
description: Review fiche diagrams (schémas) on phone and computer sizes before committing or when the user reports a diagram problem. Runs the automated checker (overflow, clipped text, overlaps, text too small) at 320/360/390/768/1280 px, then a visual checklist on screenshots. Use after creating or changing any diagram, or to audit existing fiches.
---

# Reviewing fiche diagrams

## 1. Automated check

```bash
npm run build                                   # the checker reads the static export in out/
npm run check-diagrams -- --only=technologie    # substring of "level/subject/slug"; omit for every fiche
npm run check-diagrams -- --only=<slug> --shots=all --widths=320,390,1280   # screenshots of every diagram
npm run check-diagrams -- --paths=some/page     # any page with <figure> or [data-diagram]
npm run check-diagrams -- --strict              # exit 1 on any issue (CI)
```

Locally, Playwright needs a browser once: `npx playwright install chromium`.

What it reports, per diagram and width (screenshots of failing diagrams in `diagram-report/`, git-ignored):

| Kind | Meaning | Usual fix |
|---|---|---|
| `tiny` | text rendered < 11 px (SVG text scaled down by its viewBox) | move the text to HTML (see `fiche-diagrams` skill) |
| `clipped` | text leaves its visible box (card, pill, svg, frame) | shorter words, one item per line, 2 columns instead of 4 on phones, soft hyphen in a very long single word |
| `overlap` | two texts overlap | let the layout place them (grid/flex, `Frise` rows) instead of absolute coordinates |
| `overflow` | diagram wider than its frame | fluid layout, no fixed widths |
| `scroll` | (info) sideways scroll area inside the diagram | avoid in fiches |

A clean run is required, but **not sufficient**.

## 2. Visual checklist (read the screenshots — 320, 390 and 1280 px)

- [ ] Same shape as the teacher's document (tree stays a tree, frise is horizontal, same boxes and words).
- [ ] Every arrow starts and ends on the right boxes; nothing points into empty space.
- [ ] Reading order is obvious on a phone (top → bottom, left → right).
- [ ] Colours match their legend; colour is never the only carrier of meaning.
- [ ] No word broken in the middle on multi-word lines; at most a hyphen on a lone long word at 320 px.
- [ ] Nothing cramped: comfortable padding, aligned card edges, consistent gaps.
- [ ] Caption / legend present when symbols or colours are used.
- [ ] The diagram adds something the text doesn't already say better.

## 3. Report

Tell the user what was checked (widths, number of diagrams), what was fixed, and any compromise left (e.g. hyphenation at 320 px). Do not claim "parfait sur mobile" without screenshots at 320 and 390 px.
