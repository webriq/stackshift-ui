import React from "react";
import NavigationA from "./navigation_a";
import NavigationB from "./navigation_b";
import NavigationC from "./navigation_c";
import NavigationD from "./navigation_d";
import NavigationF from "./navigation_f";
import NavigationG from "./navigation_g";
import NavigationH from "./navigation_h";
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
  variant_a: NavigationA,
  variant_b: NavigationB,
  variant_c: NavigationC,
  variant_d: NavigationD,
  variant_f: NavigationF,
  variant_g: NavigationG,
  variant_h: NavigationH,
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
