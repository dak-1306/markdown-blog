// npm install marked dompurify
import { marked } from "marked";
import DOMPurify from "dompurify";

export function markdownToHtml(markdown = "") {
  // configure marked if needed (code highlighting, options)
  const rawHtml = marked.parse(markdown);
  return DOMPurify.sanitize(rawHtml);
}

// utility extras
export function excerptFromMarkdown(markdown = "", maxChars = 160) {
  const text = markdown
    .replace(/[#*>`~\-[\]()!]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length <= maxChars ? text : text.slice(0, maxChars).trim() + "…";
}

export function slugify(text = "") {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}
