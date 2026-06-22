import { Section } from "@stackshift-ui/section";
import { useEffect, useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export interface MarkdownSectionProps {
  content?: string;
}

export default function Markdown_A({ content }: MarkdownSectionProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (!content) return;
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(content)
      .then(result => setHtml(result.toString()));
  }, [content]);

  if (!content) return null;

  return (
    <Section className="py-20 px-6 mx-auto bg-background">
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </Section>
  );
}

export { Markdown_A };
