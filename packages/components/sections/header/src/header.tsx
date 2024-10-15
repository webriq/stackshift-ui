import { lazy } from "react";

import { SectionsProps, Images, MainImage, LabeledRouteWithKey, Form, Template } from "./types";

const Variants = {
  variant_a: lazy(() => import("./header_a")),
  variant_b: lazy(() => import("./header_b")),
  variant_c: lazy(() => import("./header_c")),
  variant_d: lazy(() => import("./header_d")),
  variant_e: lazy(() => import("./header_e")),
};

export interface ButtonProps {
  as?: string;
  label?: string;
  link?: {
    target?: string;
    route?: string;
  };
  ariaLabel?: string;
  variant?: string;
}

export interface HeaderProps {
  template?: Template;
  mainImage?: MainImage;
  images?: Images[];
  title?: string;
  description?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  videoLink?: string;
  formLinks?: LabeledRouteWithKey[];
  form?: Form;
}

const displayName = "Header";

export const Header: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    mainImage: data?.variants?.mainImage ?? undefined,
    images: data?.variants?.images ?? undefined,
    title: data?.variants?.title ?? undefined,
    description: data?.variants?.description ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
    secondaryButton: data?.variants?.secondaryButton ?? undefined,
    videoLink: data?.variants?.youtubeLink ?? undefined,
    formLinks: data?.variants?.formLinks ?? undefined,
    form: data?.variants?.form ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Header.displayName = displayName;
