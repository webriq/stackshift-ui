import { lazy } from "react";
import { PortableTextBlock } from "sanity";
import { SectionsProps } from "./types";

const Variants = {
  variant_a: lazy(() => import("./text_a")),
  variant_b: lazy(() => import("./text_b")),
  variant_c: lazy(() => import("./text_c")),
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
