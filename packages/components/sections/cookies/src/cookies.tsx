// Cookie Consent for GDPR (using Orestbida)
// https://cookieconsent.orestbida.com/

import { lazy } from "react";

import { ConsentModalPosition } from "vanilla-cookieconsent";
import { SectionsProps } from "./types";

const Variants = {
  variant_a: lazy(() => import("./cookies_a")),
};

export interface CookiesProps {
  title?: string;
  description?: string;
  allowCookieBtn?: string;
  denyCookieBtn?: string;
  config?: {
    enableAnalytics: boolean;
    cookiePolicy?: {
      siteName: string;
      cookiePolicyPage?: any;
      consentModal?: {
        position: ConsentModalPosition;
      };
    };
  };
  contactLink?: any;
}

const displayName = "Cookies";

export const Cookies: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    title: data?.variants?.heading ?? undefined,
    description: data?.variants?.description ?? undefined,
    allowCookieBtn: data?.variants?.acceptButtonLabel ?? undefined,
    denyCookieBtn: data?.variants?.declineButtonLabel ?? undefined,
    config: data?.variants?.config ?? undefined,
    contactLink: data?.variants?.contactLink ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Cookies.displayName = displayName;
