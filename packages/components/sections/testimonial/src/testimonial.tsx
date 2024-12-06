import React, { lazy, Suspense } from "react";
import { Testimonial as ITestimonial, SectionsProps } from "./types";

export interface TestimonialProps {
  caption?: string;
  title?: string;
  testimonials?: ITestimonial[];
}

// Define variants with explicit error handling
const loadComponent = (path: string) => {
  try {
    return lazy(() => import(path));
  } catch (error) {
    console.error(`Failed to load component from ${path}:`, error);
    return null;
  }
};

const Variants = {
  variant_a: loadComponent("./testimonial_a"),
  variant_b: loadComponent("./testimonial_b"),
  variant_c: loadComponent("./testimonial_c"),
  variant_d: loadComponent("./testimonial_d"),
} as const;

export const Testimonial: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant as keyof typeof Variants;
  const Variant = variant && Variants[variant];

  const props = {
    caption: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    testimonials: data?.variants?.testimonials ?? undefined,
  };

  if (!Variant) return null;

  return (
    <Suspense fallback={null}>
      <Variant {...props} />
    </Suspense>
  );
};

Testimonial.displayName = "Testimonial";
