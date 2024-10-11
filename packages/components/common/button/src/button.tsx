import { useStackShiftUIComponents } from "@stackshift-ui/system";
import type { HTMLProps, ReactNode } from "react";

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

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  variant?: Variant;
  link?: {
    type: "internal" | "external" | "text";
    target: "_self" | "blank";
    href: "string";
  };
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  btnSize?: "sm" | "md" | "lg" | "xl";
}

const displayName = "Button";
export const Button = ({ children, type, ...props }: ButtonProps) => {
  const { [displayName]: Component = "button" } = useStackShiftUIComponents();

  return (
    <Component
      className="mb-4 bg-orange-200 text-white"
      type="button"
      {...props}
      data-testid={displayName}>
      {children}
    </Component>
  );
};
