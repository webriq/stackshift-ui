import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

export interface GridItemProps extends Omit<HTMLProps<HTMLElement>, "as" | "span"> {
  span?: Span;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

type Span = "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const displayName = "GridItem";

export const GridItem: React.FC<GridItemProps> = ({
  span = "auto",
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const spanVariants = {
    auto: "col-span-auto",
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
  };
  const spanClass = spanVariants[span];
  const classes = `${spanClass}`;

  return (
    <Component as={as} className={cn(classes, className)} {...props} data-testid={displayName}>
      {children}
    </Component>
  );
};

GridItem.displayName = displayName;
