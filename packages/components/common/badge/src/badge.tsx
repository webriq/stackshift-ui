import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ComponentPropsWithRef, ElementType, ReactNode } from "react";

import { Badge as ShadcnBadge } from "@stackshift-ui/shadcn/src/components/ui/badge";

export interface BadgeProps extends ComponentPropsWithRef<typeof ShadcnBadge> {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Badge";

export const Badge: React.FC<BadgeProps> = ({ children, className, as, ...props }) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();
  const defaultClass = "px-3 py-1 text-sm font-bold uppercase rounded-full";

  return (
    <Component data-testid={displayName} as={as}>
      <ShadcnBadge
        className={cn(defaultClass, className)}
        variant={props.variant}
        {...props}
        data-testid={displayName}>
        {children}
      </ShadcnBadge>
    </Component>
  );
};

Badge.displayName = displayName;
