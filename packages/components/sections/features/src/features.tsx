import React from "react";
import FeaturesA from "./features_a";
import FeaturesB from "./features_b";
import FeaturesC from "./features_c";
import FeaturesD from "./features_d";
import FeaturesE from "./features_e";
import FeaturesF from "./features_f";
import FeaturesG from "./features_g";
import FeaturesH from "./features_h";
import {
    ArrayOfImageTitleAndText,
    FeaturedItem,
    Images,
    LabeledRoute,
    SectionsProps,
} from "./types";

const Variants = {
  variant_a: FeaturesA,
  variant_b: FeaturesB,
  variant_c: FeaturesC,
  variant_d: FeaturesD,
  variant_e: FeaturesE,
  variant_f: FeaturesF,
  variant_g: FeaturesG,
  variant_h: FeaturesH,
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
