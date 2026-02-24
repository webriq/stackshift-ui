import React from "react";
import { SectionsProps, StatItems } from "./types";
import StatisticsA from "./statistics_a";
import StatisticsB from "./statistics_b";
import StatisticsC from "./statistics_c";

const Variants = {
  variant_a: StatisticsA,
  variant_b: StatisticsB,
  variant_c: StatisticsC,
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
