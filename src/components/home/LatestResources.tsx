import { getRecentlyAdded } from "@/data/resources";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { Sparkles } from "lucide-react";

export function LatestResources() {
  const resources = getRecentlyAdded(5);

  if (resources.length === 0) return null;

  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent-500" />
        <h2 className="text-lg font-bold text-warm-800">
          Dernières ressources ajoutées
        </h2>
      </div>
      <div className="space-y-3">
        {resources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </section>
  );
}
