"use client";

import type { Resource } from "@/types";
import { RESOURCE_TYPE_NAMES } from "@/types";
import { BookOpen, FileText } from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  cours: BookOpen,
  fiche: FileText,
};

export function CourseViewer({ resource }: { resource: Resource }) {
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
        <MarkdownRenderer content={resource.content} />
      </div>
    </article>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  // Simple markdown-to-HTML renderer for static content
  // Handles: headers, bold, italic, lists, tables, blockquotes, hr, links
  const html = content
    .trim()
    .split("\n")
    .map((line) => {
      // Headers
      if (line.startsWith("### "))
        return `<h3 class="mt-6 mb-3 text-lg font-bold text-warm-800">${inline(line.slice(4))}</h3>`;
      if (line.startsWith("## "))
        return `<h2 class="mt-8 mb-3 text-xl font-bold text-warm-800">${inline(line.slice(3))}</h2>`;
      if (line.startsWith("# "))
        return `<h1 class="mt-8 mb-4 text-2xl font-bold text-warm-900">${inline(line.slice(2))}</h1>`;

      // Horizontal rule
      if (line.match(/^-{3,}$/)) return '<hr class="my-6 border-warm-200" />';

      // Blockquote
      if (line.startsWith("> "))
        return `<blockquote class="my-3 border-l-4 border-accent-400 bg-accent-100/50 py-2 pl-4 pr-3 rounded-r-lg text-warm-700">${inline(line.slice(2))}</blockquote>`;

      // Unordered list
      if (line.startsWith("- "))
        return `<li class="ml-4 list-disc text-warm-700 my-1">${inline(line.slice(2))}</li>`;

      // Ordered list
      const olMatch = line.match(/^(\d+)\.\s/);
      if (olMatch)
        return `<li class="ml-4 list-decimal text-warm-700 my-1" value="${olMatch[1]}">${inline(line.slice(olMatch[0].length))}</li>`;

      // Table row
      if (line.startsWith("|")) {
        if (line.match(/^\|[\s-|]+$/)) return ""; // separator row
        const cells = line
          .split("|")
          .filter((c) => c.trim())
          .map((c) => `<td class="border border-warm-200 px-3 py-2">${inline(c.trim())}</td>`)
          .join("");
        return `<tr>${cells}</tr>`;
      }

      // Empty line
      if (line.trim() === "") return "<br />";

      // Regular paragraph
      return `<p class="my-2 text-warm-700">${inline(line)}</p>`;
    })
    .join("\n");

  // Wrap tables
  const wrappedHtml = html.replace(
    /(<tr>[\s\S]*?<\/tr>(\s*<tr>[\s\S]*?<\/tr>)*)/g,
    '<div class="my-4 overflow-x-auto"><table class="w-full border-collapse rounded-lg border border-warm-200 text-sm">$1</table></div>'
  );

  return (
    <div
      className="dys-content"
      dangerouslySetInnerHTML={{ __html: wrappedHtml }}
    />
  );
}

function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-warm-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-accent-600 underline hover:text-accent-700">$1</a>'
    );
}
