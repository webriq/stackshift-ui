import { lazy } from "react";
import { SectionsProps, StatItems } from "./types";

const Variants = {
  variant_a: lazy(() => import("./statistics_a")),
  variant_b: lazy(() => import("./statistics_b")),
  variant_c: lazy(() => import("./statistics_c")),
};

export interface StatsProps {
  stats?: StatItems[];
}

const displayName = "Statistics";

export const Statistics: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    stats: (data?.variants?.stats || data?.variants?.statItems) ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Statistics.displayName = displayName;
