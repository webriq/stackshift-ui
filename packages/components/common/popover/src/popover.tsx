"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Popover";
const displayNameTrigger = "PopoverTrigger";
const displayNameContent = "PopoverContent";
const displayNameAnchor = "PopoverAnchor";

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={PopoverPrimitive.Root} data-slot="popover" {...props} />;
}
Popover.displayName = displayName;

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  const { [displayNameTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={PopoverPrimitive.Trigger} data-slot="popover-trigger" {...props} />;
}
PopoverTrigger.displayName = displayNameTrigger;

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <PopoverPrimitive.Portal>
      <Component
        as={PopoverPrimitive.Content}
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
PopoverContent.displayName = displayNameContent;

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  const { [displayNameAnchor]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={PopoverPrimitive.Anchor} data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
