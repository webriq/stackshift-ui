import { Link } from "@webriq-test/link";
import { useStackShiftUIComponents } from "@webriq-test/system";
import cn from "classnames";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";
import { extractLink } from "./helper";
import { type LabeledRoute, type StyleVariants } from "./types";

type Variant =
  | "outline"
  | "ghost"
  | "link"
  | "custom"
  | "solid"
  | "addToWishlist"
  | "unstyled"
  | "swiper_pagination"
  | "tab";
type TextSize = "xs" | "sm" | "md" | "lg";
type RadiusSize = "none" | "sm" | "md" | "base" | "lg" | "xl" | "2xl" | "full";

interface BaseType {
  children?: ReactNode;
  variant?: Variant;
  radius?: RadiusSize;
  size?: TextSize;
  ariaLabel?: string;
  isActive?: boolean;
}

interface LinkProps extends BaseType, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type"> {
  link: LabeledRoute;
  as: "link";
}

interface ButtonProps extends BaseType, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  loading?: boolean;
  disabled?: boolean;
  loadingComponent?: React.ReactNode;
}

type Props = ButtonProps | LinkProps;

const displayName = "Button";

export function Button({ children, ...props }: Props) {
  const { [displayName]: Component = "button" } = useStackShiftUIComponents();

  const sizes = {
    xs: "py-1 px-3 text-xs",
    sm: "py-2 px-4 text-sm",
    default: "py-3 px-6 text-default",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-7 text-lg",
  };

  const borderRadiusMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    base: "rounded-base",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
    global: "rounded-global",
  };

  const { radius, size, variant, ariaLabel, className, isActive } = props;

  const buttonRadius = radius ? borderRadiusMap[radius] : "rounded-global";
  const buttonSize = sizes[size ?? "default"];

  const commonStyles = "inline-block font-default text-default transition duration-200";
  const solid = `${commonStyles} ${buttonSize} ${buttonRadius} bg-primary hover:bg-primary/50 text-gray-50`;
  const custom = `inline-block bg-primary hover:bg-primary/50 ${buttonSize} ${buttonRadius} text-gray-50 font-bold transition duration-200`;
  const outline = `${commonStyles} ${buttonSize} ${buttonRadius} bg-white hover:bg-primary/50 outline outline-1 text-primary outline-primary`;
  const ghost = `${commonStyles} ${buttonRadius} ${buttonSize} bg-transparent hover:bg-primary/50 text-primary`;
  const linkType = `transition-200 text-primary hover:text-primary/50 underline ${buttonRadius} ${cn(buttonSize, "px-0 py-0")}`;
  const unstyled = ``;
  const swiper_pagination = `mr-1 ${isActive ? "bg-primary" : "bg-gray-200"} rounded-full p-1 focus:outline-none`;
  const tab = `mx-auto mb-1 w-auto px-4 py-2 rounded duration-200 transition focus:outline-none font-bold ${
    isActive
      ? "bg-gray-50 text-primary shadow"
      : "text-gray-700 hover:bg-secondary/50 hover:text-primary hover:shadow"
  }`;
  const addToWishlist = `${commonStyles} ${buttonRadius} ${buttonSize} ml-auto sm:ml-0 flex-shrink-0 inline-flex items-center justify-center w-full rounded-md border hover:border-primary`;

  const variants: StyleVariants<Variant> = {
    outline,
    ghost,
    link: linkType,
    custom,
    solid,
    addToWishlist,
    unstyled,
    swiper_pagination,
    tab,
  };

  const variantClass = variants[variant ?? "solid"];

  if (props.as === "link") {
    const { link, ...rest } = props as LinkProps;

    return (
      <Link
        className={cn(variantClass, className)}
        aria-label={ariaLabel}
        href={extractLink(link)}
        target={link.linkTarget}
        rel={link.linkTarget === "_blank" ? "noopener noreferrer" : ""}
        {...rest}>
        {children}
      </Link>
    );
  }

  const { loadingComponent, onClick, loading, disabled, type } = props;

  const Loader = loadingComponent ?? <FaSpinner className="animate-spin" size={30} />;

  return (
    <Component
      onClick={onClick}
      disabled={disabled ?? loading}
      className={cn(variantClass, className)}
      aria-label={ariaLabel}
      type={type}>
      {loading ? Loader : children}
    </Component>
  );
}
