import { Flex } from "@stackshift-ui/flex";
import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";

import { Badge as ShadcnBadge } from "@stackshift-ui/shadcn/src/components/ui/badge";

export interface BadgeProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Badge";

export const Badge: React.FC<BadgeProps> = ({ children, className, as, ...props }) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();
  const defaultClass = "px-3 py-1 text-sm font-bold uppercase rounded-full";

  return (
    // <Component className={className} {...props} data-testid={displayName}>
    <ShadcnBadge className={cn(defaultClass, className)} {...props} data-testid={displayName}>
      {children}
    </ShadcnBadge>
    // {/* <Flex>
    //   <div className={cn(defaultClass, className)}>{children}</div>
    // </Flex> */}
    // </Component>
  );
};

Badge.displayName = displayName;
