import { lazy } from "react";
import {
  LabeledRoute,
  LabeledRouteWithKey,
  Logo,
  Logos,
  MegaMenu,
  SectionsProps,
  SocialLink,
} from "./types";

const Variants = {
  variant_a: lazy(() => import("./navigation_a")),
  variant_b: lazy(() => import("./navigation_b")),
  variant_c: lazy(() => import("./navigation_c")),
  variant_d: lazy(() => import("./navigation_d")),
  variant_f: lazy(() => import("./navigation_f")),
  variant_g: lazy(() => import("./navigation_g")),
  variant_h: lazy(() => import("./navigation_h")),
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
  smallLogo?: Logo;
  logos?: Logos[];
  links?: LabeledRouteWithKey[];
  primaryButton?: LabeledRoute;
  secondaryButton?: LabeledRoute;
  banner?: any;
  multipleLinks?: any;
  title?: string;
  socialMedia?: SocialLink[];
  dropdownMenu?: LabeledRouteWithKey[];
  iconLinks?: LabeledRouteWithKey[];
  megaMenu?: MegaMenu[];
}

const displayName = "Navigation";

export const Navigation: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants?.[variant as keyof typeof Variants];

  const props = {
    logo: data?.variants?.logo ?? undefined,
    smallLogo: data?.variants?.smallLogo ?? undefined,
    links: data?.variants?.routes ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
    secondaryButton: data?.variants?.secondaryButton ?? undefined,
    banner: data?.variants?.banner ?? undefined,
    multipleLinks: data?.variants?.multipleLinks ?? undefined,
    title: data?.variants?.title ?? undefined,
    dropdownMenu: data?.variants?.dropdownMenu ?? undefined,
    logos: data?.variants?.logos ?? undefined,
    socialMedia: data?.variants?.socialMedia ?? undefined,
    socialLinks: data?.variants?.socialLinks ?? undefined,
    iconLinks: data?.variants?.iconLinks ?? undefined,
    megaMenu: data?.variants?.megaMenu ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Navigation.displayName = displayName;
