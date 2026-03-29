"use client";

import Link from "next/link";
import type { Resource } from "@/types";
import { RESOURCE_TYPE_NAMES, SUBJECT_COLORS } from "@/types";
import {
  BookOpen,
  FileText,
  Dumbbell,
  HelpCircle,
  Video,
  ExternalLink,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, React.ElementType> = {
  cours: BookOpen,
  fiche: FileText,
  exercice: Dumbbell,
  quiz: HelpCircle,
  video: Video,
  lien: ExternalLink,
  html: Globe,
};

const typeColors: Record<string, string> = {
  cours: "bg-blue-100 text-blue-700",
  fiche: "bg-amber-100 text-amber-700",
  exercice: "bg-emerald-100 text-emerald-700",
  quiz: "bg-purple-100 text-purple-700",
  video: "bg-red-100 text-red-700",
  lien: "bg-indigo-100 text-indigo-700",
  html: "bg-slate-100 text-slate-700",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = typeIcons[resource.type] || BookOpen;

  const href =
    resource.type === "lien" && resource.externalUrl
      ? resource.externalUrl
      : `/${resource.level}/${resource.subject}/${resource.slug}`;

  const isExternal = resource.type === "lien" && resource.externalUrl;

  const CardContent = (
    <div className="group flex gap-4 rounded-2xl border border-warm-200 bg-white/60 p-4 transition-all hover:border-accent-300 hover:bg-white hover:shadow-md">
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
          typeColors[resource.type]
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="truncate font-semibold text-warm-800 group-hover:text-accent-600">
            {resource.title}
          </h3>
          {isExternal && (
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-warm-400" />
          )}
        </div>
        <p className="mb-2 line-clamp-2 text-sm text-warm-600">
          {resource.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              typeColors[resource.type]
            )}
          >
            {RESOURCE_TYPE_NAMES[resource.type]}
          </span>
          {resource.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-warm-100 px-2 py-0.5 text-xs text-warm-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={resource.externalUrl} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    );
  }

  return <Link href={href}>{CardContent}</Link>;
}
