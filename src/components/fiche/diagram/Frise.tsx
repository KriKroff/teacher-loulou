"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Horizontal timeline, drawn with HTML labels (real font size) over a CSS
 * axis. Every event shows its year and name next to its point; labels are
 * measured after render and spread over rows above / below the axis so they
 * never overlap. The frise keeps a normal size (at least MIN_WIDTH px): on a
 * narrow phone it scrolls sideways instead of shrinking.
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

const MIN_WIDTH = 720; // px — below this, the frise scrolls sideways
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
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [available, setAvailable] = useState(0);
  const [layout, setLayout] = useState<{ placed: Placed[]; aboveH: number; belowH: number } | null>(null);

  const width = available ? Math.max(available, MIN_WIDTH) : 0;
  const scrolls = width > available;
  const xOf = (year: number) => PAD_LEFT + ((year - start) / (end - start)) * (width - PAD_LEFT - PAD_RIGHT);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setAvailable(el.clientWidth));
    ro.observe(el);
    setAvailable(el.clientWidth);
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
          side: (i % 2 === 0 ? "above" : "below") as "above" | "below",
        };
      });
      setLayout(assignRows(items, width));
    };
    measure();
    document.fonts?.ready.then(measure).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, events]);

  const ticks: number[] = [];
  for (let t = start; t <= end; t += step) ticks.push(t);
  const axisTop = layout ? layout.aboveH : 0;
  const height = layout ? layout.aboveH + AXIS_ZONE + layout.belowH : 160;

  return (
    <div
      role="img"
      aria-label={events.map((e) => `${e.year} : ${e.label}${e.kind && FRISE_KINDS[e.kind].tag ? ` (${FRISE_KINDS[e.kind].tag})` : ""}`).join(". ")}
    >
      <div ref={scrollRef} className="overflow-x-auto overscroll-x-contain pb-1" tabIndex={scrolls ? 0 : undefined} aria-hidden>
        <div className="relative" style={{ width: width || "100%", height }}>
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
                    <div
                      className={`absolute -translate-x-1/2 tabular-nums ${major ? "text-[13px] font-extrabold text-warm-800" : "text-[11px] text-warm-500"}`}
                      style={{ left: xOf(t), top: axisTop + 12 }}
                    >
                      {major ? t : ""}
                    </div>
                  </div>
                );
              })}
              {events.map((e, i) => {
                const color = FRISE_KINDS[e.kind ?? "neutre"].color;
                const tag = FRISE_KINDS[e.kind ?? "neutre"].tag;
                const p = layout?.placed[i];
                const x = xOf(e.year);
                const labelH = labelRefs.current[i]?.offsetHeight ?? 0;
                const above = p ? p.top < axisTop : true;
                const lineTop = p ? (above ? p.top + labelH : axisTop) : axisTop;
                const lineBottom = p ? (above ? axisTop : p.top) : axisTop;
                return (
                  <div key={e.year + e.label}>
                    {p && (
                      <div
                        className="absolute -translate-x-1/2"
                        style={{ left: x, top: lineTop, height: Math.max(0, lineBottom - lineTop), borderLeft: `2px dashed ${color}` }}
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
                      className="absolute max-w-[170px] text-center leading-tight"
                      style={{ left: p?.left ?? 0, top: p?.top ?? 0, visibility: p ? "visible" : "hidden" }}
                    >
                      <span className="block text-[13px] font-extrabold" style={{ color }}>
                        {e.year} {tag}
                      </span>
                      <span className="block text-[13px] text-warm-900">{e.label}</span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      {scrolls && (
        <p className="mt-1 text-center text-xs text-warm-500" aria-hidden>
          ← Fais glisser la frise pour voir toutes les dates →
        </p>
      )}
    </div>
  );
}
