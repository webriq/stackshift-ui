import React from "react";
import Markdown_A from "./markdown_a";
import { SectionsProps } from "./types";

const Variants = {
  variant_a: Markdown_A,
};

export const MarkdownSection: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    content: data?.variants?.content ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

MarkdownSection.displayName = "MarkdownSection";
