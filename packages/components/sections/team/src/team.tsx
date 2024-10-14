import { lazy } from "react";
import { SectionsProps, Team as ITeam } from "./types";

const Variants = {
  variant_a: lazy(() => import("./team_a")),
  variant_b: lazy(() => import("./team_b")),
  variant_c: lazy(() => import("./team_c")),
  variant_d: lazy(() => import("./team_d")),
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
