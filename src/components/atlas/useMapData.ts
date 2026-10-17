"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import type { MapId } from "@/data/atlas/countries";

/** One shape of a pre-projected map (see scripts/build-atlas.ts). */
export interface MapFeature {
  /** Country id, or "T<iso>" for a territory */
  id: string;
  /** Territory label (only for territories) */
  t?: string;
  /** SVG path */
  d: string;
  /** Label anchor */
  c: [number, number];
  /** Focus box [x0, y0, x1, y1] of the main landmass */
  b: [number, number, number, number];
  /** Microstate → drawn with a tappable circle */
  s?: 1;
  /** Land area (map units²) of a microstate */
  a?: number;
}

export interface MapData {
  id: MapId;
  w: number;
  h: number;
  f: MapFeature[];
}

const cache = new Map<MapId, Promise<MapData>>();

function loadMap(id: MapId): Promise<MapData> {
  let p = cache.get(id);
  if (!p) {
    p = fetch(assetPath(`/atlas/${id}.json`)).then((r) => {
      if (!r.ok) throw new Error(`Carte introuvable : ${id}`);
      return r.json() as Promise<MapData>;
    });
    p.catch(() => cache.delete(id));
    cache.set(id, p);
  }
  return p;
}

export function useMapData(id: MapId): { data: MapData | null; error: string | null } {
  const [state, setState] = useState<{ id: MapId; data: MapData | null; error: string | null }>({
    id,
    data: null,
    error: null,
  });

  useEffect(() => {
    let alive = true;
    loadMap(id)
      .then((data) => alive && setState({ id, data, error: null }))
      .catch((e: Error) => alive && setState({ id, data: null, error: e.message }));
    return () => {
      alive = false;
    };
  }, [id]);

  return state.id === id ? state : { data: null, error: null };
}
