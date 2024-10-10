import { useComponents } from "@stackshift-ui/system";
import type { HTMLProps, ReactNode } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

const displayName = "Button";
export const Button = ({ children, type, ...props }: ButtonProps) => {
  console.log("useComponents 111 43242", useComponents);
  const { [displayName]: Component = "button" } = useComponents();

  return (
    <Component type="button" {...props} data-testid="button">
      {children}
    </Component>
  );
};
