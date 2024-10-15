import { LabeledRoute } from "../types";

export const extractLink = (link: LabeledRoute) => {
  //not found page
  if (!link?.internalLink && !link?.externalLink) {
    return "/page-not-found";
  }

  //home page
  if (link?.type === "linkInternal" && link?.internalLink?.toLowerCase()?.includes("home")) {
    return "/";
  }

  //internal link
  if (link?.type === "linkInternal") {
    return `/${link?.internalLink}`;
  }

  //external link
  if (link?.type === "linkExternal") {
    return `${link?.externalLink}`;
  }

  return "/";
};
