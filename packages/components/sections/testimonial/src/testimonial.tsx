import React from "react";
import TestimonialA from "./testimonial_a";
import TestimonialB from "./testimonial_b";
import TestimonialC from "./testimonial_c";
import TestimonialD from "./testimonial_d";
import { Testimonial as ITestimonial, SectionsProps } from "./types";

export interface TestimonialProps {
  caption?: string;
  title?: string;
  testimonials?: ITestimonial[];
}

const Variants = {
  variant_a: TestimonialA,
  variant_b: TestimonialB,
  variant_c: TestimonialC,
  variant_d: TestimonialD,
};

export const Testimonial: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant as keyof typeof Variants;
  const Variant = variant && Variants[variant];

  const props = {
    caption: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    testimonials: data?.variants?.testimonials ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Testimonial.displayName = "Testimonial";
