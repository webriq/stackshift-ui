import React from "react";
import AppPromoA from "./app-promo_a";
import AppPromoB from "./app-promo_b";
import AppPromoC from "./app-promo_c";
import { Images, Logo, SectionsProps, StatItems } from "./types";

const Variants = {
  variant_a: AppPromoA,
  variant_b: AppPromoB,
  variant_c: AppPromoC,
};

export interface AppPromoProps {
  logo?: Logo;
  subtitle?: string;
  title?: string;
  description?: string;
  statistics?: StatItems[];
  features?: string[];
  images?: Images[];
}

const displayName = "AppPromo";

export const AppPromo: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    logo: data?.variants?.logo ?? undefined,
    subtitle: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    description: data?.variants?.description ?? undefined,
    statistics: data?.variants?.stats ?? undefined,
    features: data?.variants?.tags ?? undefined,
    images: data?.variants?.images ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

AppPromo.displayName = displayName;
