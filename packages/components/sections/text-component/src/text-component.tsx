import { PortableTextBlock } from "@portabletext/types";
import React from "react";
import { SectionsProps } from "./types";
import TextA from "./text_a";
import TextB from "./text_b";
import TextC from "./text_c";

const Variants = {
  variant_a: TextA,
  variant_b: TextB,
  variant_c: TextC,
};

export interface TextComponentProps {
  heading?: string;
  firstColumn?: PortableTextBlock[];
  secondColumn?: PortableTextBlock[];
  thirdColumn?: PortableTextBlock[];
}

const displayName = "TextComponent";

export const TextComponent: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    heading: data?.variants?.title ?? undefined,
    firstColumn: data?.variants?.firstColumn ?? undefined,
    secondColumn: data?.variants?.secondColumn ?? undefined,
    thirdColumn: data?.variants?.thirdColumn ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

TextComponent.displayName = displayName;
