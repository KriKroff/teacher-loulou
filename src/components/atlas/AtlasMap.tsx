"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Minus, Plus, Maximize } from "lucide-react";
import { COUNTRY_BY_ID } from "@/data/atlas/countries";
import { cn } from "@/lib/utils";
import type { MapData, MapFeature } from "./useMapData";

export const MAP_COLORS = {
  ocean: "#CFE3F1",
  land: "#FFF3E2",
  context: "#E3DAD0",
  territory: "#EEE8E1",
  stroke: "#9C8B7A",
  highlight: "#F97316",
  correct: "#22C55E",
  wrong: "#EF4444",
  selected: "#3B82F6",
  mastered: "#4ADE80",
  learning: "#FDE047",
  review: "#F87171",
};

interface View {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface AtlasMapProps {
  data: MapData;
  /** Countries of the current zone (drawn brighter, tappable) */
  playable: Set<string>;
  /** Fill overrides per feature id */
  fills?: Record<string, string>;
  /** Feature drawn with a pulsing outline (and a ring when it is tiny) */
  pulseId?: string | null;
  /** Feature to zoom on when `focusKey` changes; null → whole map */
  focusId?: string | null;
  focusKey?: number | string;
  onTap?: (id: string) => void;
  /** Pan & zoom (off for small previews so the page can scroll) */
  interactive?: boolean;
  /** Show names of playable countries */
  showLabels?: boolean;
  /** Always show these names (e.g. the wrong country that was tapped) */
  labelIds?: string[];
  /** Initial view framed on these features instead of the whole map */
  fitIds?: string[];
  className?: string;
  ariaLabel?: string;
}

const TAP_SLOP = 8; // px
const MARKER_PX = 8;

function featureName(f: MapFeature): string {
  return COUNTRY_BY_ID[f.id]?.name ?? f.t ?? "";
}

function fullView(W: number, H: number, cw: number, ch: number): View {
  const contAspect = cw / ch;
  if (contAspect > W / H) {
    const w = H * contAspect;
    return { x: (W - w) / 2, y: 0, w, h: H };
  }
  const h = W / contAspect;
  return { x: 0, y: (H - h) / 2, w: W, h };
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Static layer: all shapes. Memoised so panning only touches the viewBox. */
const ShapesLayer = memo(function ShapesLayer({
  features,
  playable,
  fills,
}: {
  features: MapFeature[];
  playable: Set<string>;
  fills?: Record<string, string>;
}) {
  return (
    <g>
      {features.map((f) => {
        const isPlayable = playable.has(f.id);
        const fill =
          fills?.[f.id] ??
          (isPlayable ? MAP_COLORS.land : f.t ? MAP_COLORS.territory : MAP_COLORS.context);
        return (
          <path
            key={f.id}
            d={f.d}
            data-id={f.id}
            fill={fill}
            stroke={MAP_COLORS.stroke}
            strokeWidth={isPlayable ? 0.9 : 0.6}
            strokeDasharray={f.t ? "3 2" : undefined}
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            className={cn(isPlayable && "cursor-pointer")}
          />
        );
      })}
    </g>
  );
});

export function AtlasMap({
  data,
  playable,
  fills,
  pulseId,
  focusId,
  focusKey,
  onTap,
  interactive = true,
  showLabels = false,
  labelIds,
  fitIds,
  className,
  ariaLabel,
}: AtlasMapProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ cw: number; ch: number } | null>(null);
  const [view, setViewState] = useState<View | null>(null);
  const viewRef = useRef<View | null>(null);
  const animRef = useRef<number | null>(null);

  const setView = useCallback((v: View) => {
    viewRef.current = v;
    setViewState(v);
  }, []);

  const byId = useMemo(() => new Map(data.f.map((f) => [f.id, f])), [data]);

  // ── Container size ──
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setSize({ cw: width, ch: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const full = useMemo(
    () => (size ? fullView(data.w, data.h, size.cw, size.ch) : null),
    [data.w, data.h, size]
  );
  const minW = full ? full.w / (data.id === "monde" ? 30 : 16) : 1;

  const clamp = useCallback(
    (v: View): View => {
      if (!full || !size) return v;
      const w = Math.min(full.w, Math.max(minW, v.w));
      const h = (w * size.ch) / size.cw;
      // Keep the view centre over the map
      const cx = Math.min(Math.max(v.x + v.w / 2, full.x + w / 2), full.x + full.w - w / 2);
      const cy = Math.min(Math.max(v.y + v.h / 2, full.y + h / 2), full.y + full.h - h / 2);
      return { x: cx - w / 2, y: cy - h / 2, w, h };
    },
    [full, size, minW]
  );

  const fitView = useMemo((): View | null => {
    if (!full || !size || !fitIds?.length) return null;
    let [x0, y0, x1, y1] = [Infinity, Infinity, -Infinity, -Infinity];
    for (const id of fitIds) {
      const f = byId.get(id);
      if (!f) continue;
      x0 = Math.min(x0, f.b[0]);
      y0 = Math.min(y0, f.b[1]);
      x1 = Math.max(x1, f.b[2]);
      y1 = Math.max(y1, f.b[3]);
    }
    if (!Number.isFinite(x0)) return null;
    const pad = 0.15;
    const bw = (x1 - x0) * (1 + 2 * pad);
    const bh = (y1 - y0) * (1 + 2 * pad);
    const w = Math.max(bw, (bh * size.cw) / size.ch, full.w / 8);
    const h = (w * size.ch) / size.cw;
    return { x: (x0 + x1) / 2 - w / 2, y: (y0 + y1) / 2 - h / 2, w, h };
  }, [full, size, fitIds, byId]);

  // Refit on resize (keeps the current centre and zoom)
  useEffect(() => {
    if (!full) return;
    const v = viewRef.current;
    setView(v ? clamp(v) : clamp(fitView ?? full));
  }, [full, clamp, setView, fitView]);

  const animateTo = useCallback(
    (target: View) => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      const from = viewRef.current;
      if (!from || prefersReducedMotion()) {
        setView(target);
        return;
      }
      const start = performance.now();
      const duration = 500;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const e = 1 - Math.pow(1 - t, 3);
        setView({
          x: from.x + (target.x - from.x) * e,
          y: from.y + (target.y - from.y) * e,
          w: from.w + (target.w - from.w) * e,
          h: from.h + (target.h - from.h) * e,
        });
        animRef.current = t < 1 ? requestAnimationFrame(step) : null;
      };
      animRef.current = requestAnimationFrame(step);
    },
    [setView]
  );

  useEffect(() => () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
  }, []);

  // ── Auto-focus ──
  useEffect(() => {
    if (!full || !size || focusKey === undefined) return;
    const f = focusId ? byId.get(focusId) : undefined;
    if (!f) {
      animateTo(full);
      return;
    }
    const [x0, y0, x1, y1] = f.b;
    const dim = Math.max(x1 - x0, ((y1 - y0) * size.cw) / size.ch);
    const fullK = size.cw / full.w;
    // Big enough on screen → show the whole map for context
    if (dim * fullK >= 32) {
      animateTo(full);
      return;
    }
    const w = Math.min(full.w, Math.max(minW * 2, (dim * size.cw) / 48));
    const h = (w * size.ch) / size.cw;
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    animateTo(clamp({ x: cx - w / 2, y: cy - h / 2, w, h }));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- refocus only on a new question
  }, [focusKey, full === null]);

  // ── Gestures ──
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{ startX: number; startY: number; moved: boolean; multi: boolean; downId: string | null }>({
    startX: 0,
    startY: 0,
    moved: false,
    multi: false,
    downId: null,
  });

  const zoomAt = useCallback(
    (factor: number, px: number, py: number) => {
      const v = viewRef.current;
      if (!v || !size) return;
      const k = size.cw / v.w;
      const mx = v.x + px / k;
      const my = v.y + py / k;
      const w = Math.min(full?.w ?? v.w, Math.max(minW, v.w / factor));
      const k2 = size.cw / w;
      setView(clamp({ x: mx - px / k2, y: my - py / k2, w, h: (w * size.ch) / size.cw }));
    },
    [size, full, minW, clamp, setView]
  );

  const local = (e: { clientX: number; clientY: number }) => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    const p = local(e);
    pointers.current.set(e.pointerId, p);
    if (pointers.current.size === 1) {
      const target = (e.target as Element).closest("[data-id]");
      gesture.current = {
        startX: p.x,
        startY: p.y,
        moved: false,
        multi: false,
        downId: target?.getAttribute("data-id") ?? null,
      };
    } else {
      gesture.current.multi = true;
    }
    if (interactive) e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev || !size) return;
    const p = local(e);
    const g = gesture.current;
    if (Math.hypot(p.x - g.startX, p.y - g.startY) > TAP_SLOP) g.moved = true;
    if (!interactive) return;

    if (pointers.current.size === 1) {
      if (!g.moved) return;
      const v = viewRef.current!;
      const k = size.cw / v.w;
      setView(clamp({ ...v, x: v.x - (p.x - prev.x) / k, y: v.y - (p.y - prev.y) / k }));
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.entries()].map(([id, q]) => (id === e.pointerId ? p : q));
      const [a0, b0] = [...pointers.current.values()];
      const d0 = Math.hypot(a0.x - b0.x, a0.y - b0.y);
      const d1 = Math.hypot(a.x - b.x, a.y - b.y);
      const mid0 = { x: (a0.x + b0.x) / 2, y: (a0.y + b0.y) / 2 };
      const mid1 = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      if (d0 > 0) zoomAt(d1 / d0, mid1.x, mid1.y);
      const v = viewRef.current!;
      const k = size.cw / v.w;
      setView(clamp({ ...v, x: v.x - (mid1.x - mid0.x) / k, y: v.y - (mid1.y - mid0.y) / k }));
    }
    pointers.current.set(e.pointerId, p);
  };

  const onPointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    const had = pointers.current.delete(e.pointerId);
    const g = gesture.current;
    if (had && pointers.current.size === 0 && !g.moved && !g.multi && g.downId && onTap) {
      onTap(g.downId);
    }
  };

  // Wheel zoom (needs a non-passive listener)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !interactive) return;
    const onWheel = (e: WheelEvent) => {
      if ((e.target as Element).closest("button")) return;
      e.preventDefault();
      const r = el.getBoundingClientRect();
      zoomAt(Math.exp(-e.deltaY * 0.0025), e.clientX - r.left, e.clientY - r.top);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [interactive, zoomAt]);

  const k = view && size ? size.cw / view.w : 1;
  const fullK = full && size ? size.cw / full.w : 1;

  // ── Overlays that keep a constant on-screen size ──
  const markers = data.f.filter((f) => {
    if (!f.s || !playable.has(f.id)) return false;
    // Small previews: only microstates that carry a colour
    if (!interactive && !fills?.[f.id]) return false;
    const dim = Math.max(f.b[2] - f.b[0], f.b[3] - f.b[1]) * k;
    // Tiny on screen, or scattered islands with almost no land (archipelagos)
    return dim < 18 || (f.a ?? 0) * k * k < 300;
  });

  const pulse = pulseId ? byId.get(pulseId) : undefined;
  const pulseDim = pulse ? Math.max(pulse.b[2] - pulse.b[0], pulse.b[3] - pulse.b[1]) * k : 0;

  const labelSet = new Set(labelIds ?? []);
  const labels = data.f.filter((f) => {
    if (labelSet.has(f.id)) return true;
    if (!showLabels || !playable.has(f.id)) return false;
    const name = featureName(f);
    const widthPx = (f.b[2] - f.b[0]) * k;
    if (f.s) return k > fullK * 3;
    return widthPx > name.length * 7.5 || k > fullK * 6;
  });
  const fontPx = 12.5;

  const zoomBtn = (factor: number) => {
    if (!size) return;
    const v = viewRef.current;
    if (!v) return;
    const target = clamp({
      x: v.x + v.w / 2 - v.w / factor / 2,
      y: v.y + v.h / 2 - v.h / factor / 2,
      w: v.w / factor,
      h: v.h / factor,
    });
    animateTo(target);
  };

  return (
    <div
      ref={wrapRef}
      className={cn("relative h-full w-full overflow-hidden select-none", className)}
      style={{ backgroundColor: MAP_COLORS.ocean }}
    >
      {view && (
        <svg
          ref={svgRef}
          viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
          className="absolute inset-0 h-full w-full"
          style={{ touchAction: interactive ? "none" : "pan-y" }}
          role="img"
          aria-label={ariaLabel ?? "Carte"}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <ShapesLayer features={data.f} playable={playable} fills={fills} />

          {pulse && (
            <path
              d={pulse.d}
              fill="none"
              stroke="#7C2D12"
              strokeWidth={2.5}
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
              className="atlas-glow pointer-events-none"
            />
          )}

          {markers.map((f) => {
            const fill = fills?.[f.id] ?? MAP_COLORS.land;
            return (
              <g key={f.id} data-id={f.id} className="cursor-pointer">
                <circle cx={f.c[0]} cy={f.c[1]} r={18 / k} fill="transparent" />
                <circle
                  cx={f.c[0]}
                  cy={f.c[1]}
                  r={MARKER_PX / k}
                  fill={fill}
                  stroke="#6B5E50"
                  strokeWidth={1.5}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            );
          })}

          {pulse && pulseDim < 30 && (
            <circle
              cx={pulse.c[0]}
              cy={pulse.c[1]}
              r={22 / k}
              fill="none"
              stroke={MAP_COLORS.highlight}
              strokeWidth={3}
              vectorEffect="non-scaling-stroke"
              className="atlas-ring pointer-events-none"
            />
          )}

          {labels.map((f) => (
            <text
              key={f.id}
              x={f.c[0]}
              y={f.s ? f.c[1] - (MARKER_PX + 6) / k : f.c[1]}
              fontSize={fontPx / k}
              textAnchor="middle"
              dominantBaseline={f.s ? "auto" : "middle"}
              fill="#2D2620"
              stroke="#FFF8F0"
              strokeWidth={3.5 / k}
              paintOrder="stroke"
              fontWeight={labelSet.has(f.id) ? 700 : 500}
              className="pointer-events-none"
              style={{ letterSpacing: 0 }}
            >
              {featureName(f)}
            </text>
          ))}
        </svg>
      )}

      {interactive && view && full && view.w < full.w * 0.6 && (
        <button
          type="button"
          onClick={() => animateTo(full)}
          aria-label="Voir toute la carte"
          className="absolute left-2 top-2 w-28 overflow-hidden rounded-lg border-2 border-warm-50 shadow-md sm:w-36"
          style={{ backgroundColor: MAP_COLORS.ocean }}
        >
          <svg viewBox={`0 0 ${data.w} ${data.h}`} className="block w-full" aria-hidden>
            <ShapesLayer features={data.f} playable={playable} fills={fills} />
            <rect
              x={view.x}
              y={view.y}
              width={view.w}
              height={view.h}
              fill="rgba(37,99,235,0.12)"
              stroke="#2563EB"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </button>
      )}

      {interactive && (
        <div className="absolute bottom-2 right-2 flex flex-col gap-1.5">
          <MapButton label="Zoomer" onClick={() => zoomBtn(1.8)}>
            <Plus className="h-5 w-5" />
          </MapButton>
          <MapButton label="Dézoomer" onClick={() => zoomBtn(1 / 1.8)}>
            <Minus className="h-5 w-5" />
          </MapButton>
          <MapButton label="Voir toute la carte" onClick={() => full && animateTo(full)}>
            <Maximize className="h-4 w-4" />
          </MapButton>
        </div>
      )}
    </div>
  );
}

function MapButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-warm-200 bg-warm-50/95 text-warm-700 shadow-md transition-transform active:scale-90"
    >
      {children}
    </button>
  );
}
