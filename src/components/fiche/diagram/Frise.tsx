"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Horizontal timeline, drawn with HTML labels (real font size, wraps if
 * needed) over a CSS axis. Labels are measured after render and spread over
 * several rows above / below the axis so that they never overlap. Narrow
 * screens get numbered markers on the axis and the full list underneath.
 */

export type FriseKind = "rupture" | "innovation" | "repere" | "neutre";

export interface FriseEvent {
  year: number;
  label: string;
  kind?: FriseKind;
}

export const FRISE_KINDS: Record<FriseKind, { color: string; tag: string }> = {
  rupture: { color: "#C2410C", tag: "RUPTURE" },
  innovation: { color: "#1D4ED8", tag: "Innovation" },
  repere: { color: "#57534E", tag: "Repère" },
  neutre: { color: "#0F766E", tag: "" },
};

const COMPACT_BELOW = 560; // px of available width
const PAD_LEFT = 16;
const PAD_RIGHT = 30; // room for the arrow head
const AXIS_ZONE = 46; // ticks + year labels under the axis
const GAP = 8;

interface Placed {
  left: number;
  top: number;
}

function assignRows(
  items: { x: number; w: number; h: number; side: "above" | "below" }[],
  width: number
): { placed: Placed[]; aboveH: number; belowH: number } {
  const rowsEnd: Record<"above" | "below", number[]> = { above: [], below: [] };
  const rowsH: Record<"above" | "below", number[]> = { above: [], below: [] };
  const tmp = items.map((it) => {
    const left = Math.min(Math.max(it.x - it.w / 2, 0), Math.max(0, width - it.w));
    const ends = rowsEnd[it.side];
    let row = ends.findIndex((end) => end + GAP <= left);
    if (row === -1) {
      row = ends.length;
      ends.push(-Infinity);
      rowsH[it.side].push(0);
    }
    ends[row] = left + it.w;
    rowsH[it.side][row] = Math.max(rowsH[it.side][row], it.h);
    return { left, row, side: it.side };
  });
  const offset = (side: "above" | "below", row: number) =>
    rowsH[side].slice(0, row).reduce((a, h) => a + h + GAP + 6, 0);
  const aboveH = rowsH.above.reduce((a, h) => a + h + GAP + 6, 0) + 10;
  const belowH = rowsH.below.reduce((a, h) => a + h + GAP + 6, 0) + 4;
  const placed = tmp.map((t, i) => {
    const h = items[i].h;
    return t.side === "above"
      ? { left: t.left, top: aboveH - 10 - offset("above", t.row) - h - 6 }
      : { left: t.left, top: aboveH + AXIS_ZONE + offset("below", t.row) };
  });
  return { placed, aboveH, belowH };
}

export function Frise({
  start,
  end,
  step = 10,
  majorStep = 50,
  events,
}: {
  start: number;
  end: number;
  step?: number;
  majorStep?: number;
  events: FriseEvent[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [width, setWidth] = useState(0);
  const [layout, setLayout] = useState<{ placed: Placed[]; aboveH: number; belowH: number } | null>(null);

  const compact = width > 0 && width < COMPACT_BELOW;
  const xOf = (year: number) => PAD_LEFT + ((year - start) / (end - start)) * (width - PAD_LEFT - PAD_RIGHT);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Second pass: measure the rendered labels, then place them on rows.
  useLayoutEffect(() => {
    if (!width) return;
    const measure = () => {
      const items = events.map((e, i) => {
        const node = labelRefs.current[i];
        return {
          x: xOf(e.year),
          w: node?.offsetWidth ?? 0,
          h: node?.offsetHeight ?? 0,
          side: (compact ? "above" : i % 2 === 0 ? "above" : "below") as "above" | "below",
        };
      });
      setLayout(assignRows(items, width));
    };
    measure();
    document.fonts?.ready.then(measure).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, compact, events]);

  const ticks: number[] = [];
  for (let t = start; t <= end; t += step) ticks.push(t);
  const axisTop = layout ? layout.aboveH : 0;
  const height = layout ? layout.aboveH + AXIS_ZONE + (compact ? 0 : layout.belowH) : 120;

  return (
    <div
      role="img"
      aria-label={events.map((e) => `${e.year} : ${e.label}${e.kind && FRISE_KINDS[e.kind].tag ? ` (${FRISE_KINDS[e.kind].tag})` : ""}`).join(". ")}
    >
      <div ref={ref} className="relative w-full" style={{ height }} aria-hidden>
        {width > 0 && (
          <>
            {/* axis + arrow */}
            <div className="absolute h-[3px] rounded bg-warm-700" style={{ left: 4, right: 10, top: axisTop - 1.5 }} />
            <div
              className="absolute h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent border-l-warm-700"
              style={{ right: 0, top: axisTop - 7 }}
            />
            {ticks.map((t) => {
              const major = t % majorStep === 0;
              return (
                <div key={t}>
                  <div
                    className="absolute -translate-x-1/2 bg-warm-700"
                    style={{ left: xOf(t), top: axisTop - (major ? 9 : 5), width: major ? 3 : 1.5, height: major ? 18 : 10 }}
                  />
                  {major && (
                    <div className="absolute -translate-x-1/2 text-[13px] font-extrabold tabular-nums text-warm-800" style={{ left: xOf(t), top: axisTop + 12 }}>
                      {t}
                    </div>
                  )}
                </div>
              );
            })}
            {events.map((e, i) => {
              const color = FRISE_KINDS[e.kind ?? "neutre"].color;
              const tag = FRISE_KINDS[e.kind ?? "neutre"].tag;
              const p = layout?.placed[i];
              const x = xOf(e.year);
              const labelBottom = p ? p.top + (labelRefs.current[i]?.offsetHeight ?? 0) : axisTop;
              const lineTop = p ? (p.top < axisTop ? labelBottom : axisTop) : axisTop;
              const lineBottom = p ? (p.top < axisTop ? axisTop : p.top) : axisTop;
              return (
                <div key={e.year + e.label}>
                  {p && (
                    <div
                      className="absolute -translate-x-1/2"
                      style={{ left: x, top: lineTop, height: Math.max(0, lineBottom - lineTop), borderLeft: `2px ${compact ? "solid" : "dashed"} ${color}` }}
                    />
                  )}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
                    style={{ left: x, top: axisTop, width: 14, height: 14, background: color }}
                  />
                  <div
                    ref={(el) => {
                      labelRefs.current[i] = el;
                    }}
                    className={
                      compact
                        ? "absolute flex h-6 w-6 items-center justify-center rounded-full text-xs font-extrabold text-white"
                        : "absolute max-w-[170px] text-center leading-tight"
                    }
                    style={{ left: p?.left ?? 0, top: p?.top ?? 0, visibility: p ? "visible" : "hidden", background: compact ? color : undefined }}
                  >
                    {compact ? (
                      i + 1
                    ) : (
                      <>
                        <span className="block text-[13px] font-extrabold" style={{ color }}>
                          {e.year} {tag}
                        </span>
                        <span className="block text-[13px] text-warm-900">{e.label}</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      {compact && (
        <ol className="mt-1 space-y-1.5">
          {events.map((e, i) => {
            const k = FRISE_KINDS[e.kind ?? "neutre"];
            return (
              <li key={e.year + e.label} className="flex items-start gap-2 text-sm text-warm-900">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white" style={{ background: k.color }}>
                  {i + 1}
                </span>
                <span className="pt-0.5">
                  <b className="tabular-nums">{e.year}</b> {k.tag && <b style={{ color: k.color }}>{k.tag}</b>} · {e.label}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
