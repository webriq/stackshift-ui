import { useStackShiftUIComponents } from "@stackshift-ui/system";
import type { HTMLProps, ReactNode } from "react";

export interface ImageProps extends HTMLProps<HTMLImageElement> {
  loading?: "lazy" | "eager" | undefined;
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
export const Image = ({ children, loading = "lazy", ...props }: ImageProps) => {
  const components = useStackShiftUIComponents();
  const { [displayName]: Component = "img" } = components;

  return (
    <Component loading={loading} {...props} data-testid="image">
      {children}
    </Component>
  );
};
