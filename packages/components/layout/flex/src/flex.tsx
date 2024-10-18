import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";

type Justify = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch";
type Direction = "row" | "row-reverse" | "col" | "col-reverse";
type Align = "start" | "end" | "baseline" | "stretch" | "center";

export interface FlexProps extends Omit<HTMLProps<HTMLElement>, "as" | "wrap"> {
  children?: ReactNode;
  className?: string;
  align?: Align;
  direction?: Direction;
  justify?: Justify;
  wrap?: boolean;
  gap?: number;
  as?: ElementType;
  [key: string]: any;
}

const displayName = "Flex";

export const Flex: React.FC<FlexProps> = ({
  children,
  className,
  align = "start",
  direction = "row",
  justify = "start",
  wrap = false,
  gap,
  as = "div",
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const directionVariants = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };

  const alignVariants = {
    start: "items-start",
    end: "items-end",
    baseline: "items-baseline",
    stretch: "items-stretch",
    center: "items-center",
  };

  const justifyVariants = {
    normal: "justify-normal",
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
    stretch: "justify-stretch",
  };

  const directionClass = directionVariants[direction];
  const alignClass = alignVariants[align];
  const justifyClass = justifyVariants[justify];
  const classes = `flex ${directionClass} ${alignClass} ${justifyClass} ${
    wrap ? "flex-wrap" : ""
  } gap-${gap ? gap : 0}`;

  return (
    <Component as={as} className={cn(classes, className)} {...props} data-testid="flex">
      {children}
    </Component>
  );
};

Flex.displayName = displayName;
