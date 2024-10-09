import { HTMLProps, ReactNode } from "react";
import { useComponents } from "../test-package";
import styles from "./link.module.scss";

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

  console.log("link ni", Component);

  const className = [props.className, styles["link"]].filter(Boolean).join(" ");
  return (
    <Component {...props} data-testid="link">
      {children}
    </Component>
  );
};
