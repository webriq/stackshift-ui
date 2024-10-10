import { useComponents } from "@stackshift-ui/system";
import type { HTMLProps, ReactNode } from "react";

export interface LinkProps extends HTMLProps<HTMLLinkElement> {
  children?: ReactNode;
}

/**
 *
 *
 * @example
 * ```tsx
 * <Link />
 * ```
 *
 * @source - Source code
 */
const displayName = "Link";
export const Link = ({ children, ...props }: LinkProps) => {
  const components = useComponents();
  const { [displayName]: Component = "span" } = components;

  return (
    <Component {...props} data-testid="link">
      {children}
    </Component>
  );
};
