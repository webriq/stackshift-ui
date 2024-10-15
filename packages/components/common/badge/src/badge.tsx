import { DefaultComponent, useStackShiftUIComponents } from "@webriq-test/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import { Flex } from "@webriq-test/flex";
import cn from "classnames";

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
    <Component className={className} {...props} data-testid={displayName}>
      <Flex>
        <div className={cn(defaultClass, className)}>{children}</div>
      </Flex>
    </Component>
  );
};

Badge.displayName = displayName;
