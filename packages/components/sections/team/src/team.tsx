import React from "react";
import { SectionsProps, Team as ITeam } from "./types";
import TeamA from "./team_a";
import TeamB from "./team_b";
import TeamC from "./team_c";
import TeamD from "./team_d";

const Variants = {
  variant_a: TeamA,
  variant_b: TeamB,
  variant_c: TeamC,
  variant_d: TeamD,
};

export interface MemberTextProps {
  member: {
    name?: string;
    plainText?: string;
    jobTitle?: string;
  };
}

export interface TeamsProps {
  caption?: string;
  title?: string;
  team?: ITeam[];
}

const displayName = "Team";

export const Team: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    caption: data?.variants?.subtitle ?? undefined,
    title: data?.variants?.title ?? undefined,
    team: data?.variants?.teams ?? undefined,
  };
  return Variant ? <Variant {...props} /> : null;
};

Team.displayName = displayName;
