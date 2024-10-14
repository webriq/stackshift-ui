import { Logo } from "../types";

// WebriQ form redirect thank you page on successful submission
export const thankYouPageLink = (link: any) => {
  if (!link) {
    return "/thank-you";
  } else {
    if (link?.linkType === "linkInternal") {
      return `/${link?.internalLink}`;
    } else {
      return link?.externalLink;
    }
  }
};

export function getInputType(
  type?: string | undefined,
): "text" | "email" | "password" | "number" | undefined {
  switch (type) {
    case "inputEmail":
      return "email";
    case "inputPassword":
      return "password";
    case "inputNumber":
      return "number";
    default:
      return "text";
  }
}

export const logoLink = (logo: Logo) => {
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
