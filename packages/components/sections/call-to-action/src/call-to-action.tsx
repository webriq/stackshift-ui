import { lazy } from "react";
import { SectionsProps, Logo, LabeledRoute, LabeledRouteWithKey, Form } from "./types";

const Variants = {
  variant_a: lazy(() => import("./call-to-action_a")),
  variant_b: lazy(() => import("./call-to-action_b")),
  variant_c: lazy(() => import("./call-to-action_c")),
  variant_d: lazy(() => import("./call-to-action_d")),
  variant_e: lazy(() => import("./call-to-action_e")),
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
