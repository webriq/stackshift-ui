import React, { lazy } from "react";
import { Form, Logo, SectionsProps } from "./types";

const Variants = {
  variant_a: lazy(() => import("./newsletter_a")),
  variant_b: lazy(() => import("./newsletter_b")),
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
