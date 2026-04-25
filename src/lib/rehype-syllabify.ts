import type { Plugin } from "unified";
import type { Root, Element, Text, ElementContent } from "hast";
import { visit, SKIP } from "unist-util-visit";
import { syllabifyWord } from "./syllabify";

/**
 * Wraps every syllable in a <span class="syllable-a|syllable-b"> alternation.
 * The actual color is applied via CSS rules guarded by
 * html[data-syllable-colors="true"] so the toggle stays reactive without
 * re-rendering the MDX tree.
 *
 * Skips nodes inside <code>, <pre>, <style> and KaTeX-rendered math
 * (.katex / .math classes), where syllabification would break the output.
 */
export const rehypeSyllabify: Plugin<[], Root> = () => {
  let parity = 0;
  const SKIP_TAGS = new Set(["code", "pre", "style", "script"]);
  const skipByClass = (el: Element): boolean => {
    const cls = el.properties?.className;
    if (!cls) return false;
    const classList = Array.isArray(cls) ? cls : [cls];
    return classList.some((c) => {
      const s = String(c);
      return s === "katex" || s === "math" || s.startsWith("katex");
    });
  };

  const isSyllableSpan = (el: Element): boolean => {
    if (el.tagName !== "span") return false;
    const cls = el.properties?.className;
    if (!cls) return false;
    const classList = Array.isArray(cls) ? cls : [cls];
    return classList.some((c) => {
      const s = String(c);
      return s === "syllable-a" || s === "syllable-b";
    });
  };

  return (tree) => {
    parity = 0;
    visit(tree, "element", (node: Element) => {
      if (SKIP_TAGS.has(node.tagName)) return SKIP;
      if (skipByClass(node)) return SKIP;
      if (isSyllableSpan(node)) return SKIP;
      if (!node.children) return;

      const newChildren: ElementContent[] = [];
      for (const child of node.children) {
        if (child.type !== "text") {
          newChildren.push(child);
          continue;
        }
        const textNode = child as Text;
        const segments = textNode.value.split(/(\s+)/);
        for (const seg of segments) {
          if (seg.length === 0) continue;
          if (/^\s+$/.test(seg)) {
            newChildren.push({ type: "text", value: seg });
            continue;
          }
          const syllables = syllabifyWord(seg);
          if (syllables.length === 1) {
            const span: Element = {
              type: "element",
              tagName: "span",
              properties: { className: [parity % 2 === 0 ? "syllable-a" : "syllable-b"] },
              children: [{ type: "text", value: seg }],
            };
            parity++;
            newChildren.push(span);
            continue;
          }
          for (const syl of syllables) {
            const span: Element = {
              type: "element",
              tagName: "span",
              properties: { className: [parity % 2 === 0 ? "syllable-a" : "syllable-b"] },
              children: [{ type: "text", value: syl }],
            };
            parity++;
            newChildren.push(span);
          }
        }
      }
      node.children = newChildren;
    });
  };
};
