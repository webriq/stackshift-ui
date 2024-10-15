import React, { lazy } from "react";

import { LabeledRoute, Portfolios, PortfoliosWithCategories, SectionsProps } from "./types";

const Variants = {
  variant_a: lazy(() => import("./portfolio_a")),
  variant_b: lazy(() => import("./portfolio_b")),
  variant_c: lazy(() => import("./portfolio_c")),
  variant_d: lazy(() => import("./portfolio_d")),
};

export interface PortfolioProps {
  caption?: string;
  title?: string;
  portfoliosWithCategory?: PortfoliosWithCategories[];
  portfolios?: Portfolios[];
  primaryButton?: LabeledRoute;
  length?: number;
}

const displayName = "Portfolio";

export const Portfolio: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants?.[variant as keyof typeof Variants];

  const props = {
    caption: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    portfoliosWithCategory: data?.variants?.portfoliosWithCategories ?? undefined,
    portfolios: data?.variants?.portfolios ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
    length: data?.variants?.length,
  };

  return Variant ? <Variant {...props} /> : null;
};

Portfolio.displayName = displayName;
