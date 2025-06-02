import React, { lazy } from "react";
import {
  Form,
  HeaderSections,
  Images,
  LabeledRouteWithKey,
  MainImage,
  SectionsProps,
  Template,
} from "./types";

const Variants = {
  variant_a: lazy(() => import("./header_a")),
  variant_b: lazy(() => import("./header_b")),
  variant_c: lazy(() => import("./header_c")),
  variant_d: lazy(() => import("./header_d")),
  variant_e: lazy(() => import("./header_e")),
  variant_f: lazy(() => import("./header_f")),
  variant_g: lazy(() => import("./header_g")),
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
  subtitle?: string;
  description?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  videoLink?: string;
  formLinks?: LabeledRouteWithKey[];
  form?: Form;
  isFullWidth?: boolean;
  subtitlePosition?: "top" | "bottom";
  position?: "left" | "center" | "right";
  spacing?: number;
  isOrdered?: boolean;
  startingPosition?: "left" | "right";
  headerSections?: HeaderSections[];
}

const displayName = "Header";

export const Header: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    mainImage: data?.variants?.mainImage ?? undefined,
    images: data?.variants?.images ?? undefined,
    title: data?.variants?.title ?? undefined,
    subtitle: data?.variants?.subtitle ?? undefined,
    description: data?.variants?.description ?? undefined,
    primaryButton: data?.variants?.primaryButton ?? undefined,
    secondaryButton: data?.variants?.secondaryButton ?? undefined,
    videoLink: data?.variants?.youtubeLink ?? undefined,
    formLinks: data?.variants?.formLinks ?? undefined,
    form: data?.variants?.form ?? undefined,
    spacing: data?.variants?.spacing ?? undefined,
    isOrdered: data?.variants?.isOrdered ?? undefined,
    startingPosition: data?.variants?.startingPosition ?? undefined,
    headerSections: data?.variants?.headerSections ?? undefined,
    subtitlePosition: data?.variants?.subtitlePosition ?? undefined,
    isFullWidth: data?.variants?.isFullWidth ?? undefined,
    position: data?.variants?.position ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Header.displayName = displayName;
