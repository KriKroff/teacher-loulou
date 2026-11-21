/**
 * check-diagrams.ts — automated visual QA for fiche diagrams.
 *
 * Run: npm run build && npm run check-diagrams [-- --only=technologie --widths=320,390,1280 --strict]
 *
 * Serves the static export (out/), opens every fiche page with Playwright at
 * several screen widths and inspects every <figure> (DiagramFrame) and every
 * element marked [data-diagram]. Reports, per diagram and per width:
 *   - overflow  : the diagram is wider than its frame (page scrolls sideways)
 *   - clipped   : a text is cut by the edge of its <svg> or of the diagram
 *   - overlap   : two texts overlap
 *   - tiny      : a text is rendered smaller than MIN_FONT_PX on screen
 *   - scroll    : (info) the diagram contains a sideways scroll area
 * Screenshots of every diagram with an issue go to diagram-report/
 * (--shots=all: every diagram, for a visual review).
 * --paths=a/b,c/d checks those page paths instead of the fiches.
 * With --strict the script exits with code 1 when an issue is found.
 */

import fs from "fs";
import http from "http";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getAllResources } = require("../src/data/resources") as typeof import("../src/data/resources");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "out");
const REPORT_DIR = path.join(ROOT, "diagram-report");
const MIN_FONT_PX = 11;

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? "true"];
  })
);
const WIDTHS = (args.widths ?? "320,360,390,768,1280").split(",").map(Number);
const ONLY = args.only; // substring matched against "level/subject/slug"
const STRICT = args.strict === "true";
const SHOTS_ALL = args.shots === "all";
const EXTRA_PATHS = args.paths ? args.paths.split(",") : null; // explicit page paths instead of fiches

// ── tiny static server for out/ ──────────────────────────────────────────────
const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function serve(): Promise<{ url: string; close: () => void }> {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url ?? "/").split("?")[0]);
    const candidates = [
      path.join(OUT_DIR, urlPath),
      path.join(OUT_DIR, `${urlPath}.html`),
      path.join(OUT_DIR, urlPath, "index.html"),
    ];
    const file = candidates.find((f) => f.startsWith(OUT_DIR) && fs.existsSync(f) && fs.statSync(f).isFile());
    if (!file) {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] ?? "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) =>
    server.listen(0, () => {
      const port = (server.address() as { port: number }).port;
      resolve({ url: `http://localhost:${port}`, close: () => server.close() });
    })
  );
}

// ── in-page inspection (runs in the browser) ─────────────────────────────────
interface Issue {
  kind: "overflow" | "clipped" | "overlap" | "tiny" | "scroll";
  detail: string;
}
interface DiagramResult {
  index: number;
  title: string;
  issues: Issue[];
}

function inspect(minFont: number): DiagramResult[] {
  type R = { left: number; right: number; top: number; bottom: number };
  const inside = (a: R, b: R, tol = 1) =>
    a.left >= b.left - tol && a.right <= b.right + tol && a.top >= b.top - tol && a.bottom <= b.bottom + tol;
  const overlapArea = (a: R, b: R) =>
    Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) *
    Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  const label = (s: string) => (s.length > 40 ? `${s.slice(0, 40)}…` : s);
  const visible = (el: Element) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== "hidden" && cs.display !== "none";
  };

  const diagrams = Array.from(document.querySelectorAll("article figure, [data-diagram]")).filter(
    (el, i, all) => !all.some((other) => other !== el && other.contains(el))
  );

  return diagrams.map((fig, index) => {
    const issues: Issue[] = [];
    const title = (fig.querySelector("h3, figcaption")?.textContent ?? `schéma ${index + 1}`).trim();
    const figRect = fig.getBoundingClientRect();

    // Deliberate sideways scroll areas: reported as info, and their content is
    // checked against the scroll area instead of the frame.
    const scrollers = Array.from(fig.querySelectorAll<HTMLElement>("*")).filter((el) => {
      const ox = getComputedStyle(el).overflowX;
      return (ox === "auto" || ox === "scroll") && el.scrollWidth > el.clientWidth + 1;
    });
    for (const s of scrollers) issues.push({ kind: "scroll", detail: `zone qui défile (${s.scrollWidth}px dans ${s.clientWidth}px)` });
    const inScroller = (el: Element) => scrollers.some((s) => s.contains(el));

    if ((fig as HTMLElement).scrollWidth > (fig as HTMLElement).clientWidth + 1 && scrollers.length === 0) {
      issues.push({ kind: "overflow", detail: `${(fig as HTMLElement).scrollWidth}px de contenu pour ${(fig as HTMLElement).clientWidth}px` });
    }

    // Collect every visible text box: SVG <text> and HTML leaf text.
    // `lines` = one rect per rendered line (wrapped HTML text), used for overlaps
    const texts: { el: Element; rect: R; lines: R[]; text: string; svg: SVGSVGElement | null }[] = [];
    for (const t of Array.from(fig.querySelectorAll("svg text"))) {
      if (!visible(t) || !t.textContent?.trim()) continue;
      const svg = (t as SVGTextElement).ownerSVGElement;
      const r = t.getBoundingClientRect();
      texts.push({ el: t, rect: r, lines: [r], text: t.textContent.trim(), svg });
      // rendered size = font-size in user units × screen scale of the svg
      const scale = svg?.getScreenCTM()?.a ?? 1;
      const px = parseFloat(getComputedStyle(t).fontSize) * scale;
      if (px < minFont) issues.push({ kind: "tiny", detail: `« ${label(t.textContent.trim())} » affiché à ${px.toFixed(1)}px` });
    }
    const walker = document.createTreeWalker(fig, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const parent = n.parentElement;
      if (!parent || !n.textContent?.trim() || !visible(parent)) continue;
      // HTML inside an SVG <foreignObject> (Mermaid labels…) is scaled with the drawing
      const hostSvg = parent.closest("svg");
      if (hostSvg && !parent.closest("foreignObject")) continue;
      const svgScale = hostSvg ? ((hostSvg as SVGSVGElement).getScreenCTM()?.a ?? 1) : 1;
      const range = document.createRange();
      range.selectNodeContents(n);
      const rects = Array.from(range.getClientRects());
      if (rects.length === 0) continue;
      const rect = {
        left: Math.min(...rects.map((r) => r.left)),
        right: Math.max(...rects.map((r) => r.right)),
        top: Math.min(...rects.map((r) => r.top)),
        bottom: Math.max(...rects.map((r) => r.bottom)),
      };
      texts.push({ el: parent, rect, lines: rects, text: n.textContent.trim(), svg: (hostSvg as SVGSVGElement | null) ?? null });
      const px = parseFloat(getComputedStyle(parent).fontSize) * svgScale;
      if (px < minFont) issues.push({ kind: "tiny", detail: `« ${label(n.textContent.trim())} » affiché à ${px.toFixed(1)}px` });
      // HTML text spilling out of its own box (narrow card, nowrap…)
      // nearest *visible* box (border or background): a card, a pill, a cell…
      let box: Element = parent;
      while (box !== fig && box.parentElement) {
        const cs = getComputedStyle(box);
        const hasBorder = ["Top", "Right", "Bottom", "Left"].some(
          (side) => parseFloat(cs.getPropertyValue(`border-${side.toLowerCase()}-width`)) > 0
        );
        const hasBg = cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent";
        if (hasBorder || hasBg) break;
        box = box.parentElement;
      }
      if (!inScroller(parent) && !inside(rect, box.getBoundingClientRect(), 1)) {
        issues.push({ kind: "clipped", detail: `« ${label(n.textContent.trim())} » sort de sa boîte` });
      }
    }

    for (const t of texts) {
      if (inScroller(t.el)) continue;
      if (t.svg && !inside(t.rect, t.svg.getBoundingClientRect())) {
        issues.push({ kind: "clipped", detail: `« ${label(t.text)} » coupé par le bord du dessin` });
      } else if (!inside(t.rect, figRect)) {
        issues.push({ kind: "clipped", detail: `« ${label(t.text)} » sort du cadre` });
      }
    }

    for (let i = 0; i < texts.length; i++) {
      for (let j = i + 1; j < texts.length; j++) {
        const a = texts[i];
        const b = texts[j];
        if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
        let area = 0;
        let smaller = Infinity;
        for (const la of a.lines) {
          for (const lb of b.lines) {
            const ar = overlapArea(la, lb);
            if (ar > area) {
              area = ar;
              smaller = Math.min((la.right - la.left) * (la.bottom - la.top), (lb.right - lb.left) * (lb.bottom - lb.top));
            }
          }
        }
        if (area > 6 && area > smaller * 0.08) {
          issues.push({ kind: "overlap", detail: `« ${label(a.text)} » chevauche « ${label(b.text)} »` });
        }
      }
    }

    // de-duplicate identical messages
    const seen = new Set<string>();
    return {
      index,
      title,
      issues: issues.filter((x) => {
        const key = x.kind + x.detail;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      }),
    };
  });
}

// ── main ─────────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error("out/ is missing — run `npm run build` first.");
    process.exit(2);
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { chromium } = require("playwright") as typeof import("playwright");

  const pages = EXTRA_PATHS ?? getAllResources()
    .filter((r) => (r.type === "fiche" || r.type === "cours") && r.mdxPath)
    .map((r) => `${r.level}/${r.subject}/${r.slug}`)
    .filter((p) => !ONLY || p.includes(ONLY));

  fs.rmSync(REPORT_DIR, { recursive: true, force: true });
  fs.mkdirSync(REPORT_DIR, { recursive: true });

  const { url, close } = await serve();
  const browser = await chromium.launch();
  let problems = 0;
  let diagramsSeen = 0;

  for (const p of pages) {
    const lines: string[] = [];
    for (const width of WIDTHS) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      // tsx/esbuild wraps named functions with __name(); define it in the page
      await page.addInitScript("window.__name = (f) => f");
      await page.goto(`${url}/${p}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      const results = await page.evaluate(inspect, MIN_FONT_PX);
      if (width === WIDTHS[0]) diagramsSeen += results.length;
      for (const d of results) {
        const real = d.issues.filter((i) => i.kind !== "scroll");
        const shot = path.join(REPORT_DIR, `${p.replace(/\//g, "__")}__${d.index}__${width}.png`);
        if (real.length === 0) {
          if (SHOTS_ALL) await page.locator("article figure, [data-diagram]").nth(d.index).screenshot({ path: shot }).catch(() => {});
          continue;
        }
        problems += real.length;
        lines.push(`  [${width}px] ${d.title}`);
        for (const i of d.issues) lines.push(`      ${i.kind.padEnd(8)} ${i.detail}`);
        await page.locator("article figure, [data-diagram]").nth(d.index).screenshot({ path: shot }).catch(() => {});
      }
      await page.close();
    }
    if (lines.length) console.log(`\n${p}\n${lines.join("\n")}`);
  }

  await browser.close();
  close();
  console.log(
    `\n${diagramsSeen} schéma(s) sur ${pages.length} page(s), largeurs ${WIDTHS.join("/")}px : ` +
      (problems === 0 ? "✓ aucun problème." : `✗ ${problems} problème(s). Captures dans diagram-report/.`)
  );
  if (STRICT && problems > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
