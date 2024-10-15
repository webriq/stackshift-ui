import { DefaultComponent, useStackShiftUIComponents } from "@webriq-test/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

export interface ContainerProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  children?: ReactNode;
  className?: string;
  maxWidth?: Width;
  as?: ElementType;
}

type Width = "sm" | "md" | "lg" | "xl" | "2xl" | "full" | number;

const displayName = "Container";

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = "full",
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const widthVariants = {
    sm: "384px",
    md: "448px",
    lg: "512px",
    xl: "576px",
    "2xl": "672px",
    full: "100%",
  };

  const widthClass =
    typeof maxWidth === "number" ? `${maxWidth.toString()}px` : widthVariants[maxWidth];
  const width = widthClass ?? "80rem";

  const classes = "mx-auto w-full px-4";

  return (
    <Component
      as={as}
      className={cn(classes, className)}
      style={{ maxWidth: width }}
      {...props}
      data-testid={displayName}>
      {children}
    </Component>
  );
};

Container.displayName = displayName;
