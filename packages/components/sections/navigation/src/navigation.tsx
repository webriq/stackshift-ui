import { lazy } from "react";
import { SectionsProps, Logo, LabeledRouteWithKey, LabeledRoute } from "./types";

const Variants = {
  variant_a: lazy(() => import("./navigation_a")),
  variant_b: lazy(() => import("./navigation_b")),
  variant_c: lazy(() => import("./navigation_c")),
  variant_d: lazy(() => import("./navigation_d")),
  variant_e: lazy(() => import("./navigation_e")),
};

export interface ResponsiveNavLinksProps {
  menu: boolean;
  showMenu: () => void;
  links?: LabeledRouteWithKey[];
  primaryButton?: LabeledRoute;
  secondaryButton?: LabeledRoute;
}

export interface NavigationProps {
  template?: any;
  logo?: Logo;
  links?: LabeledRouteWithKey[];
  primaryButton?: LabeledRoute;
  secondaryButton?: LabeledRoute;
  banner?: any;
}

const displayName = "Navigation";

export const Navigation: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants?.[variant as keyof typeof Variants];

  const props = {
    logo: data?.variants?.logo ?? undefined,
    links: data?.variants?.routes ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
    secondaryButton: data?.variants?.secondaryButton ?? undefined,
    banner: data?.variants?.banner ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Navigation.displayName = displayName;
