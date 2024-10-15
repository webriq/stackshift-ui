import { useStackShiftUIComponents } from "@webriq-test/system";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

const displayName = "Link";
export const Link = ({ children, ...props }: LinkProps) => {
  const components = useStackShiftUIComponents();
  const { [displayName]: Component = "a" } = components;

  return (
    <Component {...props} data-testid="link">
      {children}
    </Component>
  );
};
