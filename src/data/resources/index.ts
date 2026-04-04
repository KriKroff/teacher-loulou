import type { Resource, SchoolLevel, Subject } from "@/types";

// Import all resource registries
import { resources as francais4e } from "./4e/francais";
import { resources as svt4e } from "./4e/svt";
import { resources as physiqueChimie4e } from "./4e/physique-chimie";
import { resources as histoireGeo4e } from "./4e/histoire-geo";

// Master resource list
const allResources: Resource[] = [
  ...francais4e,
  ...svt4e,
  ...physiqueChimie4e,
  ...histoireGeo4e,
];

export function getAllResources(): Resource[] {
  return allResources.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getResourcesByLevel(level: SchoolLevel): Resource[] {
  return allResources.filter((r) => r.level === level);
}

export function getResourcesByLevelAndSubject(
  level: SchoolLevel,
  subject: Subject
): Resource[] {
  return allResources.filter(
    (r) => r.level === level && r.subject === subject
  );
}

export function getResourceBySlug(
  level: SchoolLevel,
  subject: Subject,
  slug: string
): Resource | undefined {
  return allResources.find(
    (r) => r.level === level && r.subject === subject && r.slug === slug
  );
}

export function getAvailableLevels(): SchoolLevel[] {
  const levels = new Set(allResources.map((r) => r.level));
  return Array.from(levels);
}

export function getAvailableSubjects(level: SchoolLevel): Subject[] {
  const subjects = new Set(
    allResources.filter((r) => r.level === level).map((r) => r.subject)
  );
  return Array.from(subjects);
}

export function getRecentlyAdded(count: number = 5): Resource[] {
  return getAllResources().slice(0, count);
}
