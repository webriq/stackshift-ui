import React from "react";
import PortfolioA from "./portfolio_a";
import PortfolioB from "./portfolio_b";
import PortfolioC from "./portfolio_c";
import PortfolioD from "./portfolio_d";
import { LabeledRoute, Portfolios, PortfoliosWithCategories, SectionsProps } from "./types";

const Variants = {
  variant_a: PortfolioA,
  variant_b: PortfolioB,
  variant_c: PortfolioC,
  variant_d: PortfolioD,
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
