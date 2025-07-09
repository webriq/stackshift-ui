"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Tooltip";
const displayNameProvider = "TooltipProvider";
const displayNameTrigger = "TooltipTrigger";
const displayNameContent = "TooltipContent";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  const { [displayNameProvider]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={TooltipPrimitive.Provider}
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}
TooltipProvider.displayName = displayNameProvider;

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <TooltipProvider>
      <Component as={TooltipPrimitive.Root} data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}
Tooltip.displayName = displayName;

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  const { [displayNameTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={TooltipPrimitive.Trigger} data-slot="tooltip-trigger" {...props} />;
}
TooltipTrigger.displayName = displayNameTrigger;

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <TooltipPrimitive.Portal>
      <Component
        as={TooltipPrimitive.Content}
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className,
        )}
        {...props}>
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </Component>
    </TooltipPrimitive.Portal>
  );
}
TooltipContent.displayName = displayNameContent;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
