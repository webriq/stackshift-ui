import type { HTMLProps, ReactNode } from "react";
import { useComponents } from "../test-package";
import styles from "./button.module.scss";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

const displayName = "Button";
export const Button = ({ children, type, ...props }: ButtonProps) => {
  const { [displayName]: Component = "button" } = useComponents();

  const className = [props.className, styles["button"]].filter(Boolean).join(" ");
  return (
    <Component type="button" {...props} className={className} data-testid="button">
      {children}
    </Component>
  );
};
