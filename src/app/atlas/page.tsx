import type { Metadata } from "next";
import { AtlasHome } from "@/components/atlas/AtlasHome";

export const metadata: Metadata = { title: "Atlas des pays - Teacher Loulou" };

export default function AtlasPage() {
  return <AtlasHome />;
}
