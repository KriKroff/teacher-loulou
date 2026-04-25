import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import * as ficheComponents from "@/components/fiche";
import { rehypeSyllabify } from "@/lib/rehype-syllabify";

const markdownComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-8 mb-4 text-2xl sm:text-3xl font-extrabold text-warm-900"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-3 text-xl sm:text-2xl font-bold text-warm-800"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-6 mb-2 text-lg font-bold text-warm-800"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-3 text-warm-800 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-3 ml-6 list-disc space-y-1 text-warm-800" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-3 ml-6 list-decimal space-y-1 text-warm-800" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-4 border-l-4 border-accent-400 bg-accent-100/50 py-2 pl-4 pr-3 rounded-r-lg text-warm-700"
      {...props}
    />
  ),
  hr: () => <hr className="my-6 border-warm-200" />,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 overflow-x-auto rounded-lg border border-warm-200 bg-white/80">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-warm-200 bg-warm-100 px-3 py-2 text-left font-bold text-warm-800"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-warm-200 px-3 py-2 text-warm-800" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-warm-900" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-accent-600 underline hover:text-accent-700"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-warm-100 px-1.5 py-0.5 font-mono text-sm text-warm-900"
      {...props}
    />
  ),
};

interface Props {
  source: string;
}

export function MdxRenderer({ source }: Props) {
  return (
    <article className="dys-content rounded-2xl border border-warm-200 bg-white/80 p-5 sm:p-8">
      <MDXRemote
        source={source}
        components={{ ...markdownComponents, ...ficheComponents }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeKatex, rehypeSyllabify],
          },
        }}
      />
    </article>
  );
}
