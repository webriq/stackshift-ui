import React from "react";
import NewsletterA from "./newsletter_a";
import NewsletterB from "./newsletter_b";
import { Form, Logo, SectionsProps } from "./types";

const Variants = {
  variant_a: NewsletterA,
  variant_b: NewsletterB,
};

export interface NewsletterProps {
  logo?: Logo | null;
  title?: string | null;
  description?: string | null;
  form?: Form | null;
}

const displayName = "Newsletter";

export const Newsletter: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants?.[variant as keyof typeof Variants];

  const props = {
    logo: data?.variants?.logo,
    title: data?.variants?.title,
    description: data?.variants?.description,
    form: data?.variants?.form,
  };

  return Variant ? <Variant {...props} /> : null;
};

Newsletter.displayName = displayName;
