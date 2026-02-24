import React from "react";
import LogoCloudA from "./logo-cloud_a";
import LogoCloudB from "./logo-cloud_b";
import LogoCloudC from "./logo-cloud_c";
import LogoCloudD from "./logo-cloud_d";
import { Images, LabeledRoute, SectionsProps } from "./types";

const Variants = {
  variant_a: LogoCloudA,
  variant_b: LogoCloudB,
  variant_c: LogoCloudC,
  variant_d: LogoCloudD,
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
