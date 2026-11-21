"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Table that stays a table on phones (a grid is what makes conjugations and
 * comparisons readable). When it is wider than the screen:
 *  - it scrolls sideways inside its frame (the page itself never does), with a hint;
 *  - its first column stays pinned on the left when it is a narrow header
 *    column (pronouns, row labels…);
 *  - when it is also taller than most of the screen, the frame gets a max
 *    height so the header row can stay pinned at the top too.
 */

const STICKY_COL_MAX_RATIO = 0.38; // pin the first column only if it takes ≤ 38 % of the frame
const TALL_RATIO = 0.75; // "tall" = taller than 75 % of the viewport

export function ResponsiveTable({
  className,
  caption,
  children,
}: {
  className?: string;
  caption?: React.ReactNode;
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [state, setState] = useState({ scrolls: false, stickyCol: false, tall: false });
  const [edges, setEdges] = useState({ left: false, right: false });

  useLayoutEffect(() => {
    const wrap = scrollRef.current;
    const table = tableRef.current;
    if (!wrap || !table) return;
    const measure = () => {
      const scrolls = table.scrollWidth > wrap.clientWidth + 1;
      const firstCell = table.querySelector("tr > :first-child") as HTMLElement | null;
      const stickyCol = scrolls && !!firstCell && firstCell.offsetWidth <= wrap.clientWidth * STICKY_COL_MAX_RATIO;
      const tall = scrolls && !!table.tHead && table.offsetHeight > window.innerHeight * TALL_RATIO;
      setState((s) => (s.scrolls === scrolls && s.stickyCol === stickyCol && s.tall === tall ? s : { scrolls, stickyCol, tall }));
      updateEdges();
    };
    const updateEdges = () =>
      setEdges({ left: wrap.scrollLeft > 2, right: wrap.scrollLeft + wrap.clientWidth < wrap.scrollWidth - 2 });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    ro.observe(table);
    wrap.addEventListener("scroll", updateEdges, { passive: true });
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      wrap.removeEventListener("scroll", updateEdges);
    };
  }, []);

  return (
    <div className="my-4">
      <div
        className="responsive-table relative overflow-hidden rounded-lg border border-warm-200 bg-white"
        data-scroll={state.scrolls || undefined}
        data-sticky-col={state.stickyCol || undefined}
        data-tall={state.tall || undefined}
        data-edge-left={edges.left || undefined}
        data-edge-right={edges.right || undefined}
      >
        <div
          ref={scrollRef}
          className="overflow-x-auto overscroll-x-contain"
          style={state.tall ? { maxHeight: `${TALL_RATIO * 100}vh` } : undefined}
          tabIndex={state.scrolls ? 0 : undefined}
          aria-label={state.scrolls ? "Tableau qui défile de côté" : undefined}
          role={state.scrolls ? "region" : undefined}
        >
          <table ref={tableRef} className={`w-full border-collapse text-[0.8125rem] sm:text-sm ${className ?? ""}`}>
            {caption && <caption className="px-3 pt-3 text-left text-xs italic text-warm-500">{caption}</caption>}
            {children}
          </table>
        </div>
      </div>
      {state.scrolls && (
        <p className="mt-1 text-center text-xs text-warm-500" aria-hidden>
          ← Fais glisser le tableau pour tout voir →
        </p>
      )}
    </div>
  );
}
