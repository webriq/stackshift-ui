import { Logo } from "../types";

export const logoLink = (logo?: Logo) => {
  if (logo?.internalLink && logo?.type === "linkInternal") {
    if (logo?.internalLink?.toLowerCase()?.includes("home")) {
      return "/";
    }
    return `/${logo.internalLink}`;
  } else if (logo?.externalLink && logo?.type === "linkExternal") {
    return logo?.externalLink ?? "/";
  } else {
    return "/";
  }
};
