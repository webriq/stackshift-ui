import React from "react";
import FooterA from "./footer_a";
import FooterB from "./footer_b";
import FooterC from "./footer_c";
import FooterD from "./footer_d";
import { ContactDetails, LabeledRouteWithKey, Logo, SectionsProps, SocialLink } from "./types";

const Variants = {
  variant_a: FooterA,
  variant_b: FooterB,
  variant_c: FooterC,
  variant_d: FooterD,
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
