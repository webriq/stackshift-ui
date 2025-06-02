import { Link } from "@stackshift-ui/link";
import { ConditionalLinkTypes, Logo } from "../types";

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

export const ConditionalLink = ({
  className,
  ariaLabel,
  style = {},
  children,
  link,
  target,
}: ConditionalLinkTypes) => {
  const defaultStyle =
    "inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-primary-foreground text-gray-50 font-bold leading-loose outline-none transition duration-200";

  if (!link?.internalLink && !link?.externalLink) {
    return (
      <a
        className={className ?? defaultStyle}
        aria-label={ariaLabel}
        //style={style}
        target={target}
        href="/page-not-found">
        {children}
      </a>
    );
  } else if (
    link?.type === "linkInternal" &&
    // link?.internalLink?.toLowerCase()?.includes("home")
    link?.internalLink?.toLowerCase() === "home"
  ) {
    return (
      <Link
        href={link?.referenceType === "projects" ? "/projects" : "/"}
        aria-label={ariaLabel}
        className={className ?? defaultStyle}
        //style={style}
        target={target}>
        {children}
      </Link>
    );
  } else if (link?.type === "linkInternal") {
    let hrefPath = "";

    switch (link?.referenceType) {
      case "projects":
        hrefPath = `/projects/${link?.internalLink}`;
        break;
      case "commercial":
        hrefPath = `/projects/commercial/${link?.internalLink}`;
        break;
      case "residential":
        hrefPath = `/projects/residential/${link?.internalLink}`;
        break;
      case "landscape":
        hrefPath = `/projects/landscape/${link?.internalLink}`;
        break;
      case "public":
        hrefPath = `/projects/public/${link?.internalLink}`;
        break;
      case "teaching":
        hrefPath = `/projects/teaching/${link?.internalLink}`;
        break;
      case "designInMotion":
        hrefPath = `/projects/future-projects/${link?.internalLink}`;
        break;
      case "renovation":
        hrefPath = `/projects/residential/renovation/${link?.internalLink}`;
        break;
      case "newConstruction":
        hrefPath = `/projects/residential/new-construction/${link?.internalLink}`;
        break;
      case "ourTeam":
        hrefPath = `/our-team/${link?.internalLink}`;
        break;
      case "recognition":
        hrefPath = `/recognition/${link?.internalLink}`;
        break;

      default:
        hrefPath = `/${link?.internalLink}`;
    }

    return (
      <Link
        href={hrefPath}
        aria-label={ariaLabel}
        className={className ?? defaultStyle}
        //style={style}
        target={target}>
        {children}
      </Link>
    );
  } else if (link?.type === "linkExternal") {
    return (
      <a
        aria-label={ariaLabel}
        className={className ?? defaultStyle}
        //style={style}
        href={link?.externalLink ?? ""}
        target={target}
        rel={link?.linkTarget === "_blank" ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href="/"
        aria-label={ariaLabel}
        className={className ?? defaultStyle}
        //style={style}
        target={target}>
        {children}
      </Link>
    );
  }
};
