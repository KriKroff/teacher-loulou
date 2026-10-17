import { notFound } from "next/navigation";
import { ALL_MAPS, getZoneInfo, type MapId } from "@/data/atlas/countries";
import { PLAY_MODES, getPlayMode, type PlayMode } from "@/lib/atlas/progress";
import { LearnView } from "@/components/atlas/LearnView";
import { PlayView } from "@/components/atlas/PlayView";

interface Props {
  params: Promise<{ zone: string; mode: string }>;
}

const MODES = ["apprendre", ...PLAY_MODES.map((m) => m.id)];

export function generateStaticParams() {
  return ALL_MAPS.flatMap((z) => MODES.map((mode) => ({ zone: z.id, mode })));
}

export default async function AtlasModePage({ params }: Props) {
  const { zone, mode } = await params;
  if (!getZoneInfo(zone) || !MODES.includes(mode)) notFound();
  const mapId = zone as MapId;
  if (mode === "apprendre") return <LearnView mapId={mapId} />;
  if (!getPlayMode(mode)) notFound();
  return <PlayView mapId={mapId} mode={mode as PlayMode} />;
}
