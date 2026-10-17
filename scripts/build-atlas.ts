/**
 * Generates the pre-projected SVG maps used by the Atlas module.
 *
 *   npm run build-atlas
 *
 * Reads Natural Earth (public domain) from the `world-atlas` package and writes
 * one JSON per map into public/atlas/. Paths are projected, clipped and
 * simplified at build time so the browser only draws ready-made SVG paths.
 */
import fs from "node:fs";
import path from "node:path";
import { feature, merge, neighbors } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, MultiPolygon, Polygon, Position } from "geojson";
import {
  geoAzimuthalEqualArea,
  geoConicConformal,
  geoEqualEarth,
  geoPath,
  type GeoProjection,
} from "d3-geo";
import { COUNTRIES, TERRITORY_NAMES, type MapId } from "../src/data/atlas/countries";

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "atlas");

type Props = { name: string };
type Topo = Topology<{ countries: GeometryCollection<Props> }>;

const load = (res: string): Topo =>
  JSON.parse(
    fs.readFileSync(path.join(ROOT, "node_modules", "world-atlas", `countries-${res}.json`), "utf8")
  );

const topo50 = load("50m");
const topo10 = load("10m");

// Natural Earth key (numeric id, or name when missing) → our country id
const nameOf = (g: { properties?: unknown }) => (g.properties as Props | undefined)?.name;
const keyOf = (g: { id?: string | number; properties?: unknown }) =>
  g.id !== undefined ? String(g.id) : nameOf(g) ?? "";

const ZONE_OF = new Map(COUNTRIES.map((c) => [c.id, c.zone as MapId]));
const COUNTRY_BY_KEY = new Map(COUNTRIES.map((c) => [c.iso, c.id]));
// Pieces merged into their sovereign country (as on French school maps)
const MERGE_INTO: Record<string, string> = {
  Somaliland: "SOM",
  "N. Cyprus": "CYP",
  "Siachen Glacier": "IND",
  "344": "CHN", // Hong Kong
  "446": "CHN", // Macao
  "248": "FIN", // Åland
};
// Missing from 50m → take the 10m geometry
const FROM_10M = new Set(["798"]); // Tuvalu
const SKIP = new Set(["Indian Ocean Ter."]);

// ── Group geometries by target id ────────────────────────────────
interface Group {
  id: string; // country id or "T<iso>" for territories
  kind: "country" | "territory";
  label?: string;
  topo: Topo;
  geoms: GeometryCollection<Props>["geometries"];
}

const groups = new Map<string, Group>();
function addGeom(topo: Topo, g: GeometryCollection<Props>["geometries"][number]) {
  const key = keyOf(g);
  if (SKIP.has(key)) return;
  const countryId = COUNTRY_BY_KEY.get(key) ?? MERGE_INTO[key];
  const id = countryId ?? `T${key}`;
  const grp =
    groups.get(id) ??
    ({
      id,
      kind: countryId ? "country" : "territory",
      label: countryId ? undefined : TERRITORY_NAMES[key] ?? nameOf(g),
      topo,
      geoms: [],
    } as Group);
  grp.geoms.push(g);
  groups.set(id, grp);
}
for (const g of topo50.objects.countries.geometries) addGeom(topo50, g);
for (const g of topo10.objects.countries.geometries) {
  if (FROM_10M.has(keyOf(g))) addGeom(topo10, g);
}

const missing = COUNTRIES.filter((c) => !groups.has(c.id));
if (missing.length) {
  throw new Error(`Countries missing from Natural Earth: ${missing.map((c) => c.name).join(", ")}`);
}

const geoms = new Map<string, Feature<Polygon | MultiPolygon>>();
for (const grp of groups.values()) {
  const geometry =
    grp.geoms.length === 1
      ? (feature(grp.topo, grp.geoms[0]) as Feature<Polygon | MultiPolygon>).geometry
      : merge(grp.topo, grp.geoms as never);
  geoms.set(grp.id, { type: "Feature", properties: {}, geometry });
}

// ── Neighbours (for harder QCM distractors) ──────────────────────
const geomList = topo50.objects.countries.geometries;
const nb = neighbors(geomList as never);
const neighbourMap: Record<string, Set<string>> = {};
geomList.forEach((g, i) => {
  const a = COUNTRY_BY_KEY.get(keyOf(g)) ?? MERGE_INTO[keyOf(g)];
  if (!a) return;
  for (const j of nb[i]) {
    const k = keyOf(geomList[j]);
    const b = COUNTRY_BY_KEY.get(k) ?? MERGE_INTO[k];
    if (b && b !== a) (neighbourMap[a] ??= new Set()).add(b);
  }
});

// ── Map definitions ──────────────────────────────────────────────
interface MapDef {
  id: MapId;
  width: number;
  height: number;
  projection: () => GeoProjection;
  /** lon/lat box the view is fitted on */
  box: [[number, number], [number, number]];
}

const MAPS: MapDef[] = [
  {
    id: "europe",
    width: 1000,
    height: 900,
    projection: () => geoConicConformal().rotate([-15, 0]).parallels([40, 65]),
    box: [[-25, 34], [45, 71]],
  },
  {
    id: "afrique",
    width: 1000,
    height: 1000,
    projection: () => geoAzimuthalEqualArea().rotate([-17, -2]),
    box: [[-26, -36], [58, 38]],
  },
  {
    id: "asie",
    width: 1000,
    height: 820,
    projection: () => geoAzimuthalEqualArea().rotate([-90, -28]),
    box: [[25, -11], [148, 55]],
  },
  {
    id: "amerique-nord",
    width: 1000,
    height: 1000,
    projection: () => geoConicConformal().rotate([100, 0]).parallels([20, 60]),
    box: [[-168, 7], [-55, 72]],
  },
  {
    id: "amerique-sud",
    width: 800,
    height: 1000,
    projection: () => geoAzimuthalEqualArea().rotate([60, 18]),
    box: [[-82, -56], [-34, 13]],
  },
  {
    id: "oceanie",
    width: 1000,
    height: 760,
    projection: () => geoAzimuthalEqualArea().rotate([-165, 15]),
    box: [[112, -48], [210, 15]],
  },
  {
    id: "monde",
    width: 1000,
    height: 500,
    projection: () => geoEqualEarth().rotate([-10, 0]),
    box: [[-169.9, -57], [189.9, 84]],
  },
];

/** Densified outline of the lon/lat box, so curved projections fit correctly. */
function boxOutline([[x0, y0], [x1, y1]]: MapDef["box"]): Position[] {
  const pts: Position[] = [];
  const steps = 24;
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    const y = y0 + ((y1 - y0) * i) / steps;
    pts.push([x, y0], [x, y1], [x0, y], [x1, y]);
  }
  return pts;
}

/** Path context that rounds coordinates and drops sub-pixel segments. */
class PathBuilder {
  private parts: string[] = [];
  private lx = 0;
  private ly = 0;
  private ringStart = 0;
  constructor(public minDist: number) {}
  moveTo(x: number, y: number) {
    this.lx = x;
    this.ly = y;
    this.ringStart = this.parts.length;
    this.parts.push(`M${r(x)},${r(y)}`);
  }
  lineTo(x: number, y: number) {
    if (Math.hypot(x - this.lx, y - this.ly) < this.minDist) return;
    this.lx = x;
    this.ly = y;
    this.parts.push(`L${r(x)},${r(y)}`);
  }
  closePath() {
    // Drop degenerate rings (less than a triangle), unless drawing a tiny country
    if (this.minDist > 0 && this.parts.length - this.ringStart < 3) {
      this.parts.length = this.ringStart;
      return;
    }
    this.parts.push("Z");
  }
  arc() {}
  result() {
    const s = this.parts.join("");
    this.parts = [];
    return s;
  }
}
const r = (n: number) => Math.round(n * 10) / 10;

function polygonsOf(f: Feature<Polygon | MultiPolygon>): Feature<Polygon>[] {
  const coords = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  return coords.map((c) => ({ type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: c } }));
}

fs.mkdirSync(OUT_DIR, { recursive: true });

// Microstates flagged on continent maps; reused on the world map
const smallIds = new Set<string>();

for (const def of MAPS) {
  // Extra geography around the frame so wide screens never show a cut edge
  const mx = def.id === "monde" ? 40 : def.width * 0.35;
  const my = def.id === "monde" ? 40 : def.height * 0.2;
  const projection = def.projection().fitSize([def.width, def.height], {
    type: "MultiPoint",
    coordinates: boxOutline(def.box),
  });
  projection.clipExtent([
    [-mx, -my],
    [def.width + mx, def.height + my],
  ]);
  const measure = geoPath(projection);
  const minDist = def.id === "monde" ? 0.6 : 0.8;
  const builder = new PathBuilder(minDist);
  const drawer = geoPath(projection, builder as never);

  const features: unknown[] = [];
  for (const [id, f] of geoms) {
    if (id === "T010") continue; // Antarctica
    const isCountry = groups.get(id)!.kind === "country";
    // Tiny countries are drawn without simplification so they never vanish
    builder.minDist = isCountry && measure.area(f) < 60 ? 0 : minDist;
    drawer(f);
    const d = builder.result();
    if (!d) continue;

    // Main polygon → label anchor and focus box (ignores far-away overseas parts)
    const polys = polygonsOf(f)
      .map((p) => ({ p, area: measure.area(p), bounds: measure.bounds(p), c: measure.centroid(p) }))
      .filter((x) => Number.isFinite(x.c[0]));
    if (!polys.length) continue;
    polys.sort((a, b) => b.area - a.area);
    const main = polys[0];
    const [[mx0, my0], [mx1, my1]] = main.bounds;
    const reach = Math.max(Math.hypot(mx1 - mx0, my1 - my0) * 1.2, 25);
    let [fx0, fy0, fx1, fy1] = [mx0, my0, mx1, my1];
    for (const q of polys) {
      if (Math.hypot(q.c[0] - main.c[0], q.c[1] - main.c[1]) > reach) continue;
      fx0 = Math.min(fx0, q.bounds[0][0]);
      fy0 = Math.min(fy0, q.bounds[0][1]);
      fx1 = Math.max(fx1, q.bounds[1][0]);
      fy1 = Math.max(fy1, q.bounds[1][1]);
    }
    const area = polys.reduce((s, q) => s + q.area, 0);
    // Anchor outside the visible frame → skip (e.g. Russia's east on the Europe map still drawn)
    const anchor = main.c;
    const grp = groups.get(id)!;
    const size = Math.max(fx1 - fx0, fy1 - fy0);
    const small =
      isCountry &&
      (def.id === "monde"
        ? smallIds.has(id)
        : ZONE_OF.get(id) === def.id &&
          (area < 200 || size < 9 || (area < 400 && area < 0.15 * (fx1 - fx0) * (fy1 - fy0))));
    if (small) smallIds.add(id);
    features.push({
      id,
      ...(isCountry ? {} : { t: grp.label }),
      d,
      c: [r(anchor[0]), r(anchor[1])],
      b: [r(fx0), r(fy0), r(fx1), r(fy1)],
      // Tiny countries get a tappable circle marker
      ...(small ? { s: 1, a: Math.round(area) } : {}),
    });
  }

  const out = { id: def.id, w: def.width, h: def.height, f: features };
  const file = path.join(OUT_DIR, `${def.id}.json`);
  fs.writeFileSync(file, JSON.stringify(out));
  console.log(`${def.id}: ${features.length} shapes, ${(fs.statSync(file).size / 1024).toFixed(0)} KB`);
}

const neighbourOut = Object.fromEntries(
  Object.entries(neighbourMap).map(([k, v]) => [k, [...v].sort()])
);
fs.writeFileSync(
  path.join(ROOT, "src", "data", "atlas", "neighbours.json"),
  JSON.stringify(neighbourOut, null, 0) + "\n"
);
console.log(`neighbours: ${Object.keys(neighbourOut).length} countries`);
