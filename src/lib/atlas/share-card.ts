import type { MapId } from "@/data/atlas/countries";
import type { MapData } from "@/components/atlas/useMapData";
import { MAP_COLORS } from "@/components/atlas/AtlasMap";

/**
 * Draws the Atlas result as a 1080×1350 PNG (4:5, fits a WhatsApp chat nicely).
 * Everything happens in the browser: the map is rebuilt as a standalone SVG,
 * rasterised, then the score card is drawn around it on a canvas.
 */

export const CARD_W = 1080;
export const CARD_H = 1350;

/** Hex stops of the zone gradients used on the Atlas cards (see ZONES in countries.ts) */
const ZONE_GRADIENT: Record<MapId, [string, string]> = {
  europe: ["#38BDF8", "#2563EB"],
  afrique: ["#FBBF24", "#EA580C"],
  asie: ["#FB7185", "#DC2626"],
  "amerique-nord": ["#A78BFA", "#9333EA"],
  "amerique-sud": ["#34D399", "#16A34A"],
  oceanie: ["#22D3EE", "#0D9488"],
  monde: ["#6366F1", "#C026D3"],
};

const TEXT = "#2D2620";
const TEXT_SOFT = "#6B5E50";
const TEXT_MUTED = "#8B7B6B";
const BG = "#FFF8F0";
const FONT = `Lexend, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", system-ui, sans-serif`;

export interface ShareCardInput {
  data: MapData;
  playable: Set<string>;
  /** Scored answers, in order */
  answers: { id: string; ok: boolean }[];
  pct: number;
  emoji: string;
  message: string;
  zone: { id: MapId; name: string; emoji: string };
  mode: { name: string; emoji: string };
  /** Formatted duration, when the timer was on */
  time?: string | null;
}

// ── Map ───────────────────────────────────────────────────────────

function mapSvg(input: ShareCardInput, width: number, height: number): string {
  const { data, playable, answers } = input;
  const fills: Record<string, string> = {};
  for (const a of answers) fills[a.id] = a.ok ? MAP_COLORS.mastered : MAP_COLORS.review;

  // Frame the scored countries (same rule as AtlasMap's fitIds)
  const byId = new Map(data.f.map((f) => [f.id, f]));
  let [x0, y0, x1, y1] = [Infinity, Infinity, -Infinity, -Infinity];
  for (const a of answers) {
    const f = byId.get(a.id);
    if (!f) continue;
    x0 = Math.min(x0, f.b[0]);
    y0 = Math.min(y0, f.b[1]);
    x1 = Math.max(x1, f.b[2]);
    y1 = Math.max(y1, f.b[3]);
  }
  if (!Number.isFinite(x0)) [x0, y0, x1, y1] = [0, 0, data.w, data.h];
  const aspect = width / height;
  const pad = 0.15;
  const bw = (x1 - x0) * (1 + 2 * pad);
  const bh = (y1 - y0) * (1 + 2 * pad);
  // Never zoom out past the whole map (overseas parts can stretch the box a lot)
  const fullW = Math.max(data.w, data.h * aspect);
  const vw = Math.min(fullW, Math.max(bw, bh * aspect, data.w / 8));
  const vh = vw / aspect;
  const vx = vw === fullW ? (data.w - vw) / 2 : (x0 + x1) / 2 - vw / 2;
  const vy = vw === fullW ? (data.h - vh) / 2 : (y0 + y1) / 2 - vh / 2;
  const k = width / vw; // px per map unit

  const parts: string[] = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${vx} ${vy} ${vw} ${vh}">`,
    `<rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="${MAP_COLORS.ocean}"/>`,
  ];
  for (const f of data.f) {
    const isPlayable = playable.has(f.id);
    const fill =
      fills[f.id] ?? (isPlayable ? MAP_COLORS.land : f.t ? MAP_COLORS.territory : MAP_COLORS.context);
    const sw = (isPlayable ? 1.6 : 1) / k;
    const dash = f.t ? ` stroke-dasharray="${5 / k} ${3 / k}"` : "";
    parts.push(
      `<path d="${f.d}" fill="${fill}" stroke="${MAP_COLORS.stroke}" stroke-width="${sw}" stroke-linejoin="round"${dash}/>`
    );
  }
  // Microstates too small to see get a dot, like on the result page
  for (const f of data.f) {
    if (!f.s || !fills[f.id]) continue;
    const dim = Math.max(f.b[2] - f.b[0], f.b[3] - f.b[1]) * k;
    if (dim >= 24 && (f.a ?? 0) * k * k >= 500) continue;
    parts.push(
      `<circle cx="${f.c[0]}" cy="${f.c[1]}" r="${11 / k}" fill="${fills[f.id]}" stroke="#6B5E50" stroke-width="${2.5 / k}"/>`
    );
  }
  parts.push("</svg>");
  return parts.join("");
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Image de la carte illisible"));
    img.src = src;
  });
}

// ── Canvas helpers ────────────────────────────────────────────────

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Centred text, shrunk until it fits `maxW` */
function text(
  ctx: CanvasRenderingContext2D,
  value: string,
  x: number,
  y: number,
  { size, weight = 400, color = TEXT, maxW = CARD_W - 160 }: { size: number; weight?: number; color?: string; maxW?: number }
) {
  let s = size;
  ctx.font = `${weight} ${s}px ${FONT}`;
  while (s > 16 && ctx.measureText(value).width > maxW) {
    s -= 2;
    ctx.font = `${weight} ${s}px ${FONT}`;
  }
  ctx.fillStyle = color;
  ctx.fillText(value, x, y);
}

// ── Card ──────────────────────────────────────────────────────────

export async function renderShareCard(input: ShareCardInput): Promise<Blob> {
  if (document.fonts) {
    await Promise.all(
      [500, 600, 700].map((w) => document.fonts.load(`${w} 40px Lexend`).catch(() => undefined))
    );
  }

  const canvas = document.createElement("canvas");
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas indisponible");
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const cx = CARD_W / 2;
  const M = 48;
  const innerW = CARD_W - 2 * M;

  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  // Header: zone, on its Atlas gradient
  const [g0, g1] = ZONE_GRADIENT[input.zone.id] ?? ZONE_GRADIENT.monde;
  const grad = ctx.createLinearGradient(M, 0, CARD_W - M, 0);
  grad.addColorStop(0, g0);
  grad.addColorStop(1, g1);
  roundRect(ctx, M, M, innerW, 170, 40);
  ctx.fillStyle = grad;
  ctx.fill();
  text(ctx, "🌍 Atlas des pays", cx, M + 48, { size: 34, weight: 600, color: "rgba(255,255,255,0.92)" });
  text(ctx, `${input.zone.emoji} ${input.zone.name}`, cx, M + 112, {
    size: 64,
    weight: 700,
    color: "#FFFFFF",
    maxW: innerW - 80,
  });

  // Score card
  const cardY = M + 170 + 24;
  const cardH = 360;
  ctx.save();
  ctx.shadowColor = "rgba(74,64,56,0.12)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 6;
  roundRect(ctx, M, cardY, innerW, cardH, 40);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = "#FFE4C8";
  ctx.lineWidth = 3;
  roundRect(ctx, M, cardY, innerW, cardH, 40);
  ctx.stroke();

  const good = input.answers.filter((a) => a.ok).length;
  text(ctx, input.emoji, cx, cardY + 64, { size: 76 });
  text(ctx, `${input.pct} %`, cx, cardY + 170, { size: 136, weight: 700 });
  const details = [`${good} / ${input.answers.length}`, `${input.mode.emoji} ${input.mode.name}`];
  if (input.time) details.push(`⏱️ ${input.time}`);
  text(ctx, details.join("  ·  "), cx, cardY + 260, { size: 38, weight: 500, color: TEXT_SOFT });
  text(ctx, input.message, cx, cardY + 318, { size: 42, weight: 600, color: "#352E28", maxW: innerW - 80 });

  // Map
  const mapY = cardY + cardH + 24;
  const mapH = 580;
  const svg = mapSvg(input, innerW, mapH);
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  try {
    const img = await loadImage(url);
    ctx.save();
    roundRect(ctx, M, mapY, innerW, mapH, 32);
    ctx.clip();
    ctx.drawImage(img, M, mapY, innerW, mapH);
    ctx.restore();
  } finally {
    URL.revokeObjectURL(url);
  }
  ctx.strokeStyle = "#DACCB8";
  ctx.lineWidth = 3;
  roundRect(ctx, M, mapY, innerW, mapH, 32);
  ctx.stroke();

  // Legend
  const legendY = mapY + mapH + 40;
  ctx.font = `500 34px ${FONT}`;
  const items: [string, string][] = [
    [MAP_COLORS.mastered, "Réussi"],
    [MAP_COLORS.review, "Raté"],
  ];
  const sq = 30;
  const gapIn = 14;
  const gapOut = 56;
  const widths = items.map(([, l]) => sq + gapIn + ctx.measureText(l).width);
  let lx = cx - (widths.reduce((s, w) => s + w, 0) + gapOut * (items.length - 1)) / 2;
  ctx.textAlign = "left";
  items.forEach(([color, label], i) => {
    roundRect(ctx, lx, legendY - sq / 2, sq, sq, 7);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#B8A898";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = TEXT_SOFT;
    ctx.fillText(label, lx + sq + gapIn, legendY + 1);
    lx += widths[i] + gapOut;
  });
  ctx.textAlign = "center";

  // Footer
  text(ctx, "Teacher Loulou · Et toi, tu fais combien ?", cx, CARD_H - 40, {
    size: 30,
    weight: 500,
    color: TEXT_MUTED,
  });

  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Export PNG impossible"))), "image/png")
  );
}
