"use client";

import { createContext, useCallback, useContext, useId, useLayoutEffect, useRef, useState } from "react";

/**
 * HTML-first diagrams: boxes are ordinary HTML laid out with CSS (so text is
 * real text — it wraps, keeps its font size, never leaves its box), and the
 * connectors are drawn in an SVG overlay computed from the boxes' real
 * positions. When the layout changes (phone ↔ computer, font size, zoom…) the
 * arrows follow automatically.
 *
 *   <ConnectedDiagram edges={[{ from: "famille", to: "l1" }]}>
 *     <DiagramNode id="famille">…</DiagramNode>
 *     <div className="grid grid-cols-2 sm:grid-cols-4"><DiagramNode id="l1">…</DiagramNode>…</div>
 *   </ConnectedDiagram>
 */

export interface DiagramEdge {
  from: string;
  to: string;
  /** "tree": down, across, down (org-chart). "straight": direct line. */
  route?: "tree" | "straight";
  color?: string;
  dashed?: boolean;
}

type Registry = (id: string, el: HTMLElement | null) => void;
const RegistryContext = createContext<Registry | null>(null);

export function DiagramNode({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const register = useContext(RegistryContext);
  const ref = useCallback((el: HTMLDivElement | null) => register?.(id, el), [id, register]);
  return (
    <div ref={ref} data-node={id} className={className}>
      {children}
    </div>
  );
}

interface Box {
  left: number;
  right: number;
  top: number;
  bottom: number;
  cx: number;
}

function pathFor(a: Box, b: Box, route: "tree" | "straight"): string {
  if (route === "straight") return `M${a.cx} ${a.bottom} L${b.cx} ${b.top}`;
  // Leave the source downwards, run across just above the target, then drop in.
  const elbow = Math.max(a.bottom + 8, b.top - 14);
  return `M${a.cx} ${a.bottom} V${elbow} H${b.cx} V${b.top}`;
}

export function ConnectedDiagram({
  edges,
  className,
  children,
  ariaLabel,
}: {
  edges: DiagramEdge[];
  className?: string;
  children: React.ReactNode;
  /** Text alternative describing the whole diagram. */
  ariaLabel?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodes = useRef(new Map<string, HTMLElement>());
  const [paths, setPaths] = useState<{ d: string; color: string; dashed: boolean }[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const register = useCallback<Registry>((id, el) => {
    if (el) nodes.current.set(id, el);
    else nodes.current.delete(id);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const measure = () => {
      const c = container.getBoundingClientRect();
      const boxOf = (id: string): Box | null => {
        const el = nodes.current.get(id);
        // display:none nodes (other breakpoint) have an empty rect
        if (!el || el.offsetParent === null) return null;
        const r = el.getBoundingClientRect();
        return { left: r.left - c.left, right: r.right - c.left, top: r.top - c.top, bottom: r.bottom - c.top, cx: r.left - c.left + r.width / 2 };
      };
      const next: { d: string; color: string; dashed: boolean }[] = [];
      for (const e of edges) {
        const a = boxOf(e.from);
        const b = boxOf(e.to);
        if (a && b) next.push({ d: pathFor(a, b, e.route ?? "tree"), color: e.color ?? "#57534E", dashed: !!e.dashed });
      }
      setPaths(next);
      setSize({ w: c.width, h: c.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    nodes.current.forEach((el) => ro.observe(el));
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [edges]);

  return (
    <RegistryContext.Provider value={register}>
      <div ref={containerRef} className={`relative ${className ?? ""}`} role={ariaLabel ? "img" : undefined} aria-label={ariaLabel}>
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-visible"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
        >
          <defs>
            {Array.from(new Set(paths.map((p) => p.color))).map((color) => (
              <marker key={color} id={`${uid}-${color.replace("#", "")}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 Z" fill={color} />
              </marker>
            ))}
          </defs>
          {paths.map((p, i) => (
            <path
              key={i}
              d={p.d}
              fill="none"
              stroke={p.color}
              strokeWidth={2}
              strokeDasharray={p.dashed ? "5 4" : undefined}
              strokeLinejoin="round"
              markerEnd={`url(#${uid}-${p.color.replace("#", "")})`}
            />
          ))}
        </svg>
        {children}
      </div>
    </RegistryContext.Provider>
  );
}
