import { DefaultComponent, useStackShiftUIComponents } from "@webriq-test/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

export interface GridProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  columns?: Columns;
  gap?: number;
  align?: Align;
  justify?: Justify;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

type Justify = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch";
type Columns = "none" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Align = "start" | "end" | "baseline" | "stretch" | "center";

const displayName = "Grid";

export const Grid: React.FC<GridProps> = ({
  columns = 1,
  gap = 0,
  align = "stretch",
  justify = "start",
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const columnClass = {
    none: "grid-cols-none",
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-1",
    12: "grid-cols-12",
  };

  const alignVariants = {
    start: "items-start",
    end: "items-end",
    baseline: "items-baseline",
    stretch: "items-stretch",
    center: "items-center",
  };

  const justifyVariants = {
    normal: "justify-items-normal",
    start: "justify-items-start",
    end: "justify-items-end",
    center: "justify-items-center",
    between: " justify-items-between",
    around: "justify-items-around",
    evenly: "justify-items-evenly",
    stretch: "justify-items-stretch",
  };

  const column = columnClass[columns] || "grid-cols-1";
  const alignClass = alignVariants[align];
  const justifyClass = justifyVariants[justify];
  const classes = `grid w-full ${column} ${alignClass} ${justifyClass} gap-${gap ?? 0}`;

  return (
    <Component as={as} className={cn(classes, className)} {...props} data-testid={displayName}>
      {children}
    </Component>
  );
};

Grid.displayName = displayName;
