import { useStackShiftUIComponents } from "@stackshift-ui/system";
import type { HTMLProps, ReactNode } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

const displayName = "Button";
export const Button = ({ children, type, ...props }: ButtonProps) => {
  const { [displayName]: Component = "button" } = useStackShiftUIComponents();

  return (
    <Component type="button" {...props} data-testid={displayName}>
      {children}
    </Component>
  );
};
