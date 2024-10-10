import { useComponents } from "@stackshift-ui/system";
import type { HTMLProps, ReactNode } from "react";

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

  return (
    <Component {...props} data-testid="image">
      {children}
    </Component>
  );
};
