import React from "react";
import HowItWorksA from "./how_it_works_a";
import HowItWorksB from "./how_it_works_b";
import HowItWorksC from "./how_it_works_c";
import HowItWorksD from "./how_it_works_d";
import HowItWorksE from "./how_it_works_e";
import { ArrayOfTitleAndText, SectionsProps } from "./types";

const Variants = {
  variant_a: HowItWorksA,
  variant_b: HowItWorksB,
  variant_c: HowItWorksC,
  variant_d: HowItWorksD,
  variant_e: HowItWorksE,
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
