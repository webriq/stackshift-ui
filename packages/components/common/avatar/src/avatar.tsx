import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import * as React from "react";

const displayNameAvatar = "Avatar";
const displayNameAvatarImage = "AvatarImage";
const displayNameAvatarFallback = "AvatarFallback";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { [displayNameAvatar]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={AvatarPrimitive.Root}
      ref={ref}
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
});
Avatar.displayName = displayNameAvatar;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  const { [displayNameAvatarImage]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={AvatarPrimitive.Image}
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  );
});
AvatarImage.displayName = displayNameAvatarImage;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  const { [displayNameAvatarFallback]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={AvatarPrimitive.Fallback}
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    />
  );
});
AvatarFallback.displayName = displayNameAvatarFallback;

export { Avatar, AvatarFallback, AvatarImage };
