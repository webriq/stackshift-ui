import React from "react";
import FaqsA from "./faqs_a";
import FaqsB from "./faqs_b";
import FaqsC from "./faqs_c";
import { AskedQuestion, FaqsWithCategory, SectionsProps } from "./types";

const Variants = {
  variant_a: FaqsA,
  variant_b: FaqsB,
  variant_c: FaqsC,
};

export interface FAQProps {
  subtitle?: string;
  title?: string;
  faqs?: AskedQuestion[];
  faqsWithCategories?: FaqsWithCategory[];
}

const displayName = "Faqs";

export const Faqs: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    subtitle: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    faqs: (data?.variants?.faqs || data?.variants?.askedQuestions) ?? undefined,
    faqsWithCategories: data?.variants?.faqsWithCategories ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Faqs.displayName = displayName;
