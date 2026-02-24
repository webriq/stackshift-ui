"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import { toggleVariants } from "@stackshift-ui/toggle";

const displayName = "ToggleGroup";
const displayNameItem = "ToggleGroupItem";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={ToggleGroupPrimitive.Root}
      ref={ref}
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </Component>
  );
});

ToggleGroup.displayName = displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();
  const context = React.useContext(ToggleGroupContext);

  return (
    <Component
      as={ToggleGroupPrimitive.Item}
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}>
      {children}
    </Component>
  );
});

ToggleGroupItem.displayName = displayNameItem;

export { ToggleGroup, ToggleGroupItem };
