/**
 * check-tables.ts — how fiche tables behave on phones.
 *
 * Run: npm run build && npm run check-tables [-- --widths=360,390 --only=anglais --strict]
 *
 * Serves the static export (out/), opens every fiche with Playwright and, for
 * each width, reports:
 *   - page overflow : the PAGE scrolls sideways (always a bug)
 *   - scrolls       : tables wider than the screen (they scroll inside their frame)
 *   - not pinned    : scrolling tables whose first column is not pinned (wide first column)
 *   - tall          : scrolling tables tall enough to get a pinned header row
 * --strict exits with code 1 on a page overflow.
 */

import fs from "fs";
import http from "http";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getAllResources } = require("../src/data/resources") as typeof import("../src/data/resources");

const OUT_DIR = path.resolve(__dirname, "..", "out");
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? "true"];
  })
);
const WIDTHS = (args.widths ?? "360,390").split(",").map(Number);
const ONLY = args.only;
const STRICT = args.strict === "true";

const MIME: Record<string, string> = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".json": "application/json", ".txt": "text/plain" };

function serve(): Promise<{ url: string; close: () => void }> {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url ?? "/").split("?")[0]);
    const file = [path.join(OUT_DIR, urlPath), path.join(OUT_DIR, `${urlPath}.html`), path.join(OUT_DIR, urlPath, "index.html")].find(
      (f) => f.startsWith(OUT_DIR) && fs.existsSync(f) && fs.statSync(f).isFile()
    );
    if (!file) return void res.writeHead(404).end();
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] ?? "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) =>
    server.listen(0, () => resolve({ url: `http://localhost:${(server.address() as { port: number }).port}`, close: () => server.close() }))
  );
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error("out/ is missing — run `npm run build` first.");
    process.exit(2);
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { chromium } = require("playwright") as typeof import("playwright");
  const pages = getAllResources()
    .filter((r) => (r.type === "fiche" || r.type === "cours") && r.mdxPath)
    .map((r) => `${r.level}/${r.subject}/${r.slug}`)
    .filter((p) => !ONLY || p.includes(ONLY));

  const { url, close } = await serve();
  const browser = await chromium.launch();
  let pageOverflows = 0;
  for (const width of WIDTHS) {
    let tables = 0, scrolls = 0, notPinned = 0, tall = 0;
    const lines: string[] = [];
    for (const p of pages) {
      const page = await browser.newPage({ viewport: { width, height: 800 } });
      await page.addInitScript("window.__name = (f) => f"); // tsx/esbuild helper used in evaluated code
      await page.goto(`${url}/${p}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      const r = await page.evaluate(() => ({
        pageOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        tables: Array.from(document.querySelectorAll(".responsive-table")).map((t) => ({
          scrolls: t.hasAttribute("data-scroll"),
          pinned: t.hasAttribute("data-sticky-col"),
          tall: t.hasAttribute("data-tall"),
          head: (t.querySelector("th, td")?.textContent ?? "").trim().slice(0, 30),
        })),
      }));
      tables += r.tables.length;
      scrolls += r.tables.filter((t) => t.scrolls).length;
      tall += r.tables.filter((t) => t.tall).length;
      for (const t of r.tables.filter((t) => t.scrolls && !t.pinned)) {
        notPinned++;
        lines.push(`  not pinned  ${p} — « ${t.head} »`);
      }
      if (r.pageOverflow) {
        pageOverflows++;
        lines.push(`  ✗ PAGE OVERFLOW  ${p}`);
      }
      await page.close();
    }
    console.log(`\n== ${width}px == ${tables} tableaux · ${scrolls} défilent dans leur cadre · ${notPinned} sans colonne figée · ${tall} assez longs pour figer la ligne d'en-tête`);
    if (lines.length) console.log(lines.join("\n"));
  }
  await browser.close();
  close();
  console.log(pageOverflows ? `\n✗ ${pageOverflows} page(s) qui débordent sur le côté.` : "\n✓ Aucune page ne déborde sur le côté.");
  if (STRICT && pageOverflows) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
