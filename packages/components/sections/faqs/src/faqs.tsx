import { lazy } from "react";
import { AskedQuestion, FaqsWithCategory, SectionsProps } from "./types";

const Variants = {
  variant_a: lazy(() => import("./faqs_a")),
  variant_b: lazy(() => import("./faqs_b")),
  variant_c: lazy(() => import("./faqs_c")),
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
