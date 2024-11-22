import React, { lazy } from "react";

import {
  ArrayOfImageTitleAndText,
  FeaturedItem,
  Images,
  LabeledRoute,
  SectionsProps,
} from "./types";

const Variants = {
  variant_a: lazy(() => import("./features_a")),
  variant_b: lazy(() => import("./features_b")),
  variant_c: lazy(() => import("./features_c")),
  variant_d: lazy(() => import("./features_d")),
  variant_e: lazy(() => import("./features_e")),
  variant_f: lazy(() => import("./features_f")),
  variant_g: lazy(() => import("./features_g")),
  variant_h: lazy(() => import("./features_h")),
};

export interface FeaturesProps {
  caption?: string;
  title?: string;
  description?: string;
  features?: ArrayOfImageTitleAndText[];
  tags?: string[];
  featuredItems?: FeaturedItem[];
  images?: Images[];
  primaryButton?: LabeledRoute;
}

export interface FeaturesProps {
  caption?: string;
  title?: string;
  description?: string;
  features?: ArrayOfImageTitleAndText[];
  tags?: string[];
  featuredItems?: FeaturedItem[];
  images?: Images[];
  primaryButton?: LabeledRoute;
}

const displayName = "Features";

export const Features: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    caption: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    description: data?.variants?.description ?? undefined,
    features: data?.variants?.arrayOfImageTitleAndText ?? undefined,
    tags: data?.variants?.tags ?? undefined,
    featuredItems: data?.variants?.featuredItems ?? undefined,
    images: data?.variants?.images ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Features.displayName = displayName;
