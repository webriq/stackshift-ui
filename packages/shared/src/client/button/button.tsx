import type { HTMLProps, ReactNode } from "react";
import { useComponents } from "../test-package";
import styles from "./button.module.scss";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

const displayName = "Button";
export const Button = ({ children, ...props }: ButtonProps) => {
  const { [displayName]: Component } = useComponents();

  const className = [props.className, styles["button"]].filter(Boolean).join(" ");
  return (
    <Component {...props} className={className} data-testid="button">
      {children} from default222
    </Component>
  );
};
