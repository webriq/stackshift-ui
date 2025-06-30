import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";

import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "@stackshift-ui/shadcn/src/components/ui/avatar";

type ImageSize = "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends Omit<HTMLProps<HTMLElement>, "as" | "size"> {
  src: string;
  alt: string;
  size?: ImageSize | number;
  text?: string;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Avatar";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "image",
  size = "sm",
  text,
  children,
  className,
  as,
  ...props
}) => {
  const components = useStackShiftUIComponents();
  const { [displayName]: Component = DefaultComponent } = components;

  const sizeMap = {
    sm: 40,
    md: 80,
    lg: 120,
    xl: 160,
  };
  const avatarSize = typeof size === "number" ? `${size}px` : `${sizeMap[size]}px`;
  const initials = text ? text?.split(" ")?.reduce((acc, curr) => acc + curr[0], "") : "AB";
  const baseClass = `relative flex rounded-full aspect-square overflow-hidden border-2 border-solid border-primary`;

  return (
    <Component
      as={as}
      className={cn(baseClass, className)}
      style={{ maxWidth: avatarSize }}
      {...props}
      data-testid={displayName}>
      <ShadcnAvatar className="w-full h-full bg-primary">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback className="text-white">{initials}</AvatarFallback>
      </ShadcnAvatar>
    </Component>
  );
};
