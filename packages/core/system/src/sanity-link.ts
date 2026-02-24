export interface LabeledRoute extends ConditionalLink {
  ariaLabel?: string;
  label?: string;
  linkTarget?: string;
  linkType?: string;
  _type?: string;
  linkInternal?: any;
  linkExternal?: any;
  referenceType?: string;
  multipleRoutes?: LabeledRouteWithKey[];
  multipleInnerRoutes?: LabeledRouteWithKey[];
}
export interface ConditionalLink {
  type?: string;
  internalLink?: string | null;
  externalLink?: string | null;
}

export interface LabeledRouteWithKey extends LabeledRoute {
  _key?: string;
  image?: string;
  alt?: string;
  multipleRoutes?: LabeledRouteWithKey[];
  featuredRoute?: {
    featuredLink: LabeledRoute;
    mainImage: {
      image: string;
      alt: string;
    };
  };
  routeType?: string;
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
