import { notFound } from "next/navigation";
import { ALL_MAPS, getZoneInfo, type MapId } from "@/data/atlas/countries";
import { ZoneHub } from "@/components/atlas/ZoneHub";

interface Props {
  params: Promise<{ zone: string }>;
}

export function generateStaticParams() {
  return ALL_MAPS.map((z) => ({ zone: z.id }));
}

export default async function AtlasZonePage({ params }: Props) {
  const { zone } = await params;
  if (!getZoneInfo(zone)) notFound();
  return <ZoneHub mapId={zone as MapId} />;
}
