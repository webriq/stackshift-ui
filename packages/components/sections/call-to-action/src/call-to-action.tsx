import React from "react";
import CallToActionA from "./call-to-action_a";
import CallToActionB from "./call-to-action_b";
import CallToActionC from "./call-to-action_c";
import CallToActionD from "./call-to-action_d";
import CallToActionE from "./call-to-action_e";
import { Form, LabeledRoute, LabeledRouteWithKey, Logo, SectionsProps } from "./types";

const Variants = {
  variant_a: CallToActionA,
  variant_b: CallToActionB,
  variant_c: CallToActionC,
  variant_d: CallToActionD,
  variant_e: CallToActionE,
};

export interface CTAProps {
  logo?: Logo;
  title?: string;
  plainText?: string;
  button?: LabeledRoute;
  features?: string[];
  formLinks?: LabeledRouteWithKey[];
  form?: Form;
  signInLink?: LabeledRoute;
}

const displayName = "CallToAction";

export const CallToAction: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    logo: data?.variants?.logo ?? undefined,
    title: data?.variants?.title ?? undefined,
    plainText: data?.variants?.plainText ?? undefined,
    button: data?.variants?.primaryButton ?? undefined,
    features: data?.variants?.tags ?? undefined,
    formLinks: data?.variants?.formLinks ?? undefined,
    form: data?.variants?.form ?? undefined,
    signInLink: data?.variants?.signInLink ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

CallToAction.displayName = displayName;
