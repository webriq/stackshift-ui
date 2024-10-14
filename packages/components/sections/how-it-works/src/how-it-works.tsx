import { lazy } from "react";
import { SectionsProps, ArrayOfTitleAndText } from "./types";

const Variants = {
  variant_a: lazy(() => import("./how_it_works_a")),
  variant_b: lazy(() => import("./how_it_works_b")),
  variant_c: lazy(() => import("./how_it_works_c")),
  variant_d: lazy(() => import("./how_it_works_d")),
  variant_e: lazy(() => import("./how_it_works_e")),
};

export interface HowItWorksProps {
  subtitle?: string;
  title?: string;
  text?: string;
  video?: string;
  steps?: ArrayOfTitleAndText[];
}

const displayName = "HowItWorks";

export const HowItWorks: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    subtitle: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    text: data?.variants?.plainText ?? undefined,
    video: data?.variants?.youtubeLink ?? undefined,
    steps: data?.variants?.arrayOfTitleAndText ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

HowItWorks.displayName = displayName;
