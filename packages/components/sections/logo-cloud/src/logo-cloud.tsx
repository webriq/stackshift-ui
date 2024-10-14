import React, { lazy } from "react";
import { SectionsProps, Images, LabeledRoute } from "./types";

const Variants = {
  variant_a: lazy(() => import("./logo-cloud_a")),
  variant_b: lazy(() => import("./logo-cloud_b")),
  variant_c: lazy(() => import("./logo-cloud_c")),
  variant_d: lazy(() => import("./logo-cloud_d")),
};

export interface LogoCloudProps {
  title?: string;
  images?: Images[];
  text?: string;
  button?: LabeledRoute;
}

const displayName = "LogoCloud";

export const LogoCloud: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    title: data?.variants?.title ?? undefined,
    images: data?.variants?.images ?? undefined,
    text: data?.variants?.plainText ?? undefined,
    button: data?.variants?.primaryButton ?? undefined,
  };
  return Variant ? <Variant {...props} /> : null;
};

LogoCloud.displayName = displayName;
