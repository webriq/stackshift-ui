import React, { lazy } from "react";
import { SectionsProps, Logo, ContactDetails, SocialLink, LabeledRouteWithKey } from "./types";

const Variants = {
  variant_a: lazy(() => import("./footer_a")),
  variant_b: lazy(() => import("./footer_b")),
  variant_c: lazy(() => import("./footer_c")),
  variant_d: lazy(() => import("./footer_d")),
};

export interface FooterProps {
  logo?: Logo;
  text?: string;
  contacts?: ContactDetails[];
  copyright?: string;
  socialMedia?: SocialLink[];
  menu?: LabeledRouteWithKey[];
  multipleMenus?: any;
}

const displayName = "Footer";

export const Footer: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    logo: data?.variants?.logo ?? undefined,
    text: data?.variants?.plainText ?? undefined,
    contacts: data?.variants?.contactDetails ?? undefined,
    copyright: data?.variants?.copyright ?? undefined,
    socialMedia: data?.variants?.socialLinks ?? undefined,
    menu: data?.variants?.menu ?? undefined,
    multipleMenus: data?.variants?.multipleMenus ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Footer.displayName = displayName;
