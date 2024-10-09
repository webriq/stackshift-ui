import { HTMLProps, ReactNode } from "react";
import { useComponents } from "../test-package";
import styles from "./image.module.scss";

export interface ImageProps extends HTMLProps<HTMLImageElement> {
  children?: ReactNode;
}

/**
 * Image component
 *
 * @example
 * ```tsx
 * <Image />
 * ```
 *
 * @source - Source code
 */
const displayName = "Image";
export const Image = ({ children, ...props }: ImageProps) => {
  const components = useComponents();
  const { [displayName]: Component = "img" } = components;
  const className = [props.className, styles["image"]].filter(Boolean).join(" ");

  return (
    <Component {...props} className={className} data-testid="image">
      {children}
    </Component>
  );
};
