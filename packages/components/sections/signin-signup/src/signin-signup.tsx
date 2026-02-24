import React from "react";
import SigninSignupA from "./signin_signup_a";
import SigninSignupB from "./signin_signup_b";
import { Form, LabeledRoute, LabeledRouteWithKey, Logo, SectionsProps } from "./types";

const Variants = {
  variant_a: SigninSignupA,
  variant_b: SigninSignupB,
};

export interface SignUpFormProps {
  logo?: Logo;
  title?: string;
  subtitle?: string;
  text?: string;
  firstButton?: LabeledRoute;
  secondButton?: LabeledRoute;
  formLinks?: LabeledRouteWithKey[];
  signInLink?: LabeledRoute;
  form?: Form;
}

const displayName = "SigninSignup";

export const SigninSignup: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants?.[variant as keyof typeof Variants];

  const props = {
    logo: data?.variants?.logo ?? undefined,
    title: data?.variants?.title ?? undefined,
    subtitle: data?.variants?.subtitle ?? undefined,
    text: data?.variants?.plainText ?? undefined,
    firstButton: data?.variants?.primaryButton ?? undefined,
    secondButton: data?.variants?.secondaryButton ?? undefined,
    formLinks: data?.variants?.formLinks ?? undefined,
    signInLink: data?.variants?.signinLink ?? undefined,
    form: data?.variants?.form ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

SigninSignup.displayName = displayName;
