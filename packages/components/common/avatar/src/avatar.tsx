import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ComponentProps, ElementType, ReactNode } from "react";

import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "@stackshift-ui/shadcn/src/components/ui/avatar";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, number> = {
  xs: 20,
  sm: 40,
  md: 80,
  lg: 120,
  xl: 160,
};

export interface AvatarProps extends ComponentProps<typeof ShadcnAvatar> {
  src?: string;
  alt?: string;
  size?: Size | number;
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
  size = typeof size === "number" ? size : sizes[size];
  const avatarSize = `${size}px`;

  const baseClass = cn(
    "relative flex rounded-full aspect-square overflow-hidden border-2 border-solid border-primary bg-primary h-full w-full",
    className,
  );

  const initials = text
    ?.split(" ")
    .map(name => name[0])
    .join("");

  return (
    <ShadcnAvatar asChild>
      <Component
        as={as}
        className={baseClass}
        {...props}
        data-testid={displayName}
        style={{ maxWidth: avatarSize, maxHeight: avatarSize }}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Component>
    </ShadcnAvatar>
  );
};
