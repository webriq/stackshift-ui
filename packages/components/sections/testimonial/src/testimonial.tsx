import React, { lazy } from "react";
import { SectionsProps, Testimonial as ITestimonial } from "./types";

const Variants = {
  variant_a: lazy(() => import("./testimonial_a")),
  variant_b: lazy(() => import("./testimonial_b")),
  variant_c: lazy(() => import("./testimonial_c")),
  variant_d: lazy(() => import("./testimonial_d")),
};

export interface TestimonialProps {
  caption?: string;
  title?: string;
  testimonials?: ITestimonial[];
}

const displayName = "Testimonial";

export const Testimonial: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    caption: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    testimonials: data?.variants?.testimonials ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Testimonial.displayName = displayName;
