"use client";

import type { Resource } from "@/types";
import { RESOURCE_TYPE_NAMES } from "@/types";
import { BookOpen, FileText } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Hypher = require("hypher");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const frPatterns = require("hyphenation.fr");

const hyphenator = new Hypher(frPatterns);

const SYLLABLE_COLORS = ["#1D4ED8", "#B45309"] as const;

const typeIcons: Record<string, React.ElementType> = {
  cours: BookOpen,
  fiche: FileText,
};

export function CourseViewer({ resource }: { resource: Resource }) {
  const { settings } = useAccessibility();
  const Icon = typeIcons[resource.type] || BookOpen;

  if (!resource.content) return null;

  return (
    <article className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-medium text-accent-600">
            {RESOURCE_TYPE_NAMES[resource.type]}
          </span>
          <h1 className="text-xl font-bold text-warm-800">
            {resource.title}
          </h1>
        </div>
      </div>

      <div className="course-content rounded-2xl border border-warm-200 bg-white/80 p-5 sm:p-8">
        <MarkdownRenderer
          content={resource.content}
          syllableColors={settings.syllableColors}
        />
      </div>
    </article>
  );
}

function MarkdownRenderer({
  content,
  syllableColors,
}: {
  content: string;
  syllableColors: boolean;
}) {
  const html = content
    .trim()
    .split("\n")
    .map((line) => {
      if (line.startsWith("### "))
        return `<h3 class="mt-6 mb-3 text-lg font-bold text-warm-800">${inline(line.slice(4))}</h3>`;
      if (line.startsWith("## "))
        return `<h2 class="mt-8 mb-3 text-xl font-bold text-warm-800">${inline(line.slice(3))}</h2>`;
      if (line.startsWith("# "))
        return `<h1 class="mt-8 mb-4 text-2xl font-bold text-warm-900">${inline(line.slice(2))}</h1>`;
      if (line.match(/^-{3,}$/)) return '<hr class="my-6 border-warm-200" />';
      if (line.startsWith("> "))
        return `<blockquote class="my-3 border-l-4 border-accent-400 bg-accent-100/50 py-2 pl-4 pr-3 rounded-r-lg text-warm-700">${inline(line.slice(2))}</blockquote>`;
      if (line.startsWith("- "))
        return `<li class="ml-4 list-disc text-warm-700 my-1">${inline(line.slice(2))}</li>`;
      const olMatch = line.match(/^(\d+)\.\s/);
      if (olMatch)
        return `<li class="ml-4 list-decimal text-warm-700 my-1" value="${olMatch[1]}">${inline(line.slice(olMatch[0].length))}</li>`;
      if (line.startsWith("|")) {
        if (line.match(/^\|[\s-|]+$/)) return "";
        const cells = line
          .split("|")
          .filter((c) => c.trim())
          .map(
            (c) =>
              `<td class="border border-warm-200 px-3 py-2">${inline(c.trim())}</td>`
          )
          .join("");
        return `<tr>${cells}</tr>`;
      }
      if (line.trim() === "") return "<br />";
      return `<p class="my-2 text-warm-700">${inline(line)}</p>`;
    })
    .join("\n");

  const wrappedHtml = html.replace(
    /(<tr>[\s\S]*?<\/tr>(\s*<tr>[\s\S]*?<\/tr>)*)/g,
    '<div class="my-4 overflow-x-auto"><table class="w-full border-collapse rounded-lg border border-warm-200 text-sm">$1</table></div>'
  );

  const finalHtml = syllableColors
    ? syllabifyHtml(wrappedHtml)
    : wrappedHtml;

  return (
    <div
      className="dys-content"
      dangerouslySetInnerHTML={{ __html: finalHtml }}
    />
  );
}

/**
 * Processes an HTML string and wraps syllables of each word in colored spans.
 * Text inside HTML tags is left untouched; only visible text nodes are syllabified.
 */
function syllabifyHtml(html: string): string {
  let colorIndex = 0;

  // Split into alternating segments: text and html tags/entities
  const segments = html.split(/(<[^>]+>|&[a-z]+;|&#\d+;)/);

  return segments
    .map((segment) => {
      // Leave tags and entities as-is
      if (segment.startsWith("<") || segment.startsWith("&")) {
        return segment;
      }
      // Syllabify text content
      return segment.replace(/\S+/g, (word) => {
        const syllables = syllabifyWord(word);
        return syllables
          .map((syl) => {
            const color = SYLLABLE_COLORS[colorIndex % 2];
            colorIndex++;
            return `<span style="color:${color}">${syl}</span>`;
          })
          .join("");
      });
    })
    .join("");
}

function syllabifyWord(word: string): string[] {
  // Strip surrounding punctuation to hyphenate the core
  const match = word.match(/^([^a-zA-ZÀ-ÿ]*)([a-zA-ZÀ-ÿ'-]+)([^a-zA-ZÀ-ÿ]*)$/);
  if (!match) return [word];

  const [, prefix, core, suffix] = match;
  const syllables: string[] = hyphenator.hyphenate(core);

  if (syllables.length <= 1) return [word];

  return syllables.map((syl: string, i: number) => {
    if (i === 0) return prefix + syl;
    if (i === syllables.length - 1) return syl + suffix;
    return syl;
  });
}

function inline(text: string): string {
  return text
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-bold text-warm-900">$1</strong>'
    )
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-accent-600 underline hover:text-accent-700">$1</a>'
    );
}
