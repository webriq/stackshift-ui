import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

type CardBorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "global";

export interface CardProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  borderRadius?: CardBorderRadius;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Card";

export const Card: React.FC<CardProps> = ({ borderRadius, children, className, as, ...props }) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const radiusMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    global: "rounded-global",
  };
  const borderRadiusClass = radiusMap[borderRadius ?? "global"];

  const classes = `border border-solid border-slate-300 p-4 shadow-sm ${borderRadiusClass}`;

  return (
    <Component as={as} className={cn(classes, className)} {...props} data-testid={displayName}>
      {children}
    </Component>
  );
};

Card.displayName = displayName;
