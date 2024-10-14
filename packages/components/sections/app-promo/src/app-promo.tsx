import { lazy } from "react";
import { SectionsProps, Logo, StatItems, Images } from "./types";

const Variants = {
  variant_a: lazy(() => import("./app-promo_a")),
  variant_b: lazy(() => import("./app-promo_b")),
  variant_c: lazy(() => import("./app-promo_c")),
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
