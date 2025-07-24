import React from "react";
import { BlogPost, LabeledRoute, SectionsProps } from "./types";
import BlogA from "./blog_a";
import BlogB from "./blog_b";
import BlogC from "./blog_c";
import BlogD from "./blog_d";

const Variants = {
  variant_a: BlogA,
  variant_b: BlogB,
  variant_c: BlogC,
  variant_d: BlogD,
};

export interface BlogProps {
  subtitle?: string;
  title?: string;
  posts?: BlogPost[];
  primaryButton?: LabeledRoute;
}
const displayName = "Blog";

export const Blog: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    subtitle: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    posts: (data?.variants?.posts || data?.variants?.blogPosts) ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
  };
  return Variant ? <Variant {...props} /> : null;
};

Blog.displayName = displayName;
