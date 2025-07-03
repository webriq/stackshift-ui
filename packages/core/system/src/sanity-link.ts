type LinkType = "linkInternal" | "linkExternal" | string;

interface LabeledRoute {
  type: LinkType;
  internalLink?: string;
  externalLink?: string;
  referenceType?: string;
}

interface SanityLink {
  href: string;
  target?: string;
  rel?: string;
}

/**
 * Builds a href attribute from a Sanity LabeledRoute object.
 */
export function buildSanityLink(link: LabeledRoute): SanityLink {
  if (!link) return { href: "/page-not-found" };

  if(link.type === "linkInternal" && !link.referenceType) {
    return { href: `/${link.internalLink}`, target: "_self", rel: "noopener noreferrer" };
  }

  if(link.type === "linkInternal" && link.referenceType) {
    const prefix = link.referenceType.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    return { href: `/${prefix}/${link.internalLink}`, target: "_self", rel: "noopener noreferrer" };
  }
  
  if (link.type === "linkExternal") {
    return { href: `${link.externalLink}`, target: "_blank", rel: "noopener noreferrer" };
  }

  return { href: "/page-not-found" };
}
