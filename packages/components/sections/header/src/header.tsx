import React from "react";
import HeaderA from "./header_a";
import HeaderB from "./header_b";
import HeaderC from "./header_c";
import HeaderD from "./header_d";
import HeaderE from "./header_e";
import HeaderF from "./header_f";
import HeaderG from "./header_g";
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
  variant_a: HeaderA,
  variant_b: HeaderB,
  variant_c: HeaderC,
  variant_d: HeaderD,
  variant_e: HeaderE,
  variant_f: HeaderF,
  variant_g: HeaderG,
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
  mediaItems?: Images[];
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
    mediaItems: data?.variants?.mediaItems ?? undefined,
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
