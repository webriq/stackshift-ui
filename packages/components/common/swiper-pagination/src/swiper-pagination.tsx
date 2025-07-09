import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";

type ColorScheme = "blue" | "white";

export interface SwiperPaginationProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  isActive?: boolean;
  colorScheme?: ColorScheme;
  onClick?: (...arg0: any[]) => any;
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "SwiperPagination";

export const SwiperPagination: React.FC<SwiperPaginationProps> = ({
  isActive = false,
  colorScheme = "blue",
  onClick,
  ariaLabel,
  children,
  className,
  as = "button",
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const variantClass = {
    blue: `mr-1 ${isActive ? "bg-primary" : "bg-gray-200"} rounded-full p-1 focus:outline-none`,
    white: `mr-2 inline-block h-2 w-2 rounded-full ${
      isActive ? "bg-white focus:outline-none" : "bg-gray-500 focus:outline-none"
    }`,
  };

  const classes = variantClass[colorScheme];

  return (
    <Component
      onClick={onClick}
      aria-label={ariaLabel}
      as={as}
      className={cn(classes, className)}
      {...props}
    />
  );
};

SwiperPagination.displayName = displayName;
