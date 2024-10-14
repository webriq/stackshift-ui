import { lazy } from "react";
import { SectionsProps, BlogPost, LabeledRoute } from "./types";

const Variants = {
  variant_a: lazy(() => import("./blog_a")),
  variant_b: lazy(() => import("./blog_b")),
  variant_c: lazy(() => import("./blog_c")),
  variant_d: lazy(() => import("./blog_d")),
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
    posts: data?.variants?.posts ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
  };
  return Variant ? <Variant {...props} /> : null;
};

Blog.displayName = displayName;
