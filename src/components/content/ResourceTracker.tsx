"use client";

import { useEffect } from "react";
import { useRecentResources } from "@/hooks/useRecentResources";
import { useProgress } from "@/hooks/useProgress";
import type { Resource } from "@/types";

export function ResourceTracker({ resource }: { resource: Resource }) {
  const { addRecent } = useRecentResources();
  const { updateProgress } = useProgress();

  useEffect(() => {
    addRecent({
      slug: resource.slug,
      level: resource.level,
      subject: resource.subject,
      title: resource.title,
      type: resource.type,
    });
    updateProgress(resource.slug, resource.level, resource.subject, {});
  }, [resource, addRecent, updateProgress]);

  return null;
}
