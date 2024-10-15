import { DefaultComponent, useStackShiftUIComponents } from "@webriq-test/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import { useState } from "react";
import { Flex } from "@webriq-test/flex";
import cn from "classnames";

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
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const [loaded, setLoaded] = useState(false);
  const sizeMap = {
    sm: 40,
    md: 80,
    lg: 120,
    xl: 160,
  };
  const avatarSize = typeof size === "number" ? `${size}px` : `${sizeMap[size]}px`;
  const initials = text ? text?.split(" ")?.reduce((acc, curr) => acc + curr[0], "") : "AB";
  const baseClass = `relative flex rounded-full aspect-square overflow-hidden border-2 border-solid border-primary-foreground`;

  return (
    <Component
      as={as}
      className={cn(baseClass, className)}
      style={{ maxWidth: avatarSize }}
      {...props}
      data-testid={displayName}>
      {(!loaded || !src) && (
        <Flex align="center" justify="center" className="w-full h-full bg-primary-foreground">
          <p
            style={{
              fontSize: `calc(${avatarSize}/2)`,
            }}
            className="text-white">
            {initials}
          </p>
        </Flex>
      )}
      {src && (
        <img
          className="object-cover object-center w-[100%] h-[100%]"
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
        />
      )}
      {(!loaded || !src) && (
        <Flex align="center" justify="center" className="w-full h-full bg-primary-foreground">
          <p
            style={{
              fontSize: `calc(${avatarSize}/2)`,
            }}
            className="text-white">
            {initials}
          </p>
        </Flex>
      )}
      {src && (
        <img
          className="object-cover object-center w-[100%] h-[100%]"
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
        />
      )}
    </Component>
  );
};

Avatar.displayName = displayName;
