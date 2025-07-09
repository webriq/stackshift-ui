"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Sheet";
const displayNameTrigger = "SheetTrigger";
const displayNamePortal = "SheetPortal";
const displayNameClose = "SheetClose";
const displayNameOverlay = "SheetOverlay";
const displayNameContent = "SheetContent";
const displayNameHeader = "SheetHeader";
const displayNameFooter = "SheetFooter";
const displayNameTitle = "SheetTitle";
const displayNameDescription = "SheetDescription";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={SheetPrimitive.Root} data-slot="sheet" {...props} />;
}
Sheet.displayName = displayName;

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  const { [displayNameTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={SheetPrimitive.Trigger} data-slot="sheet-trigger" {...props} />;
}
SheetTrigger.displayName = displayNameTrigger;

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  const { [displayNameClose]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={SheetPrimitive.Close} data-slot="sheet-close" {...props} />;
}
SheetClose.displayName = displayNameClose;

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  const { [displayNamePortal]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={SheetPrimitive.Portal} data-slot="sheet-portal" {...props} />;
}
SheetPortal.displayName = displayNamePortal;

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  const { [displayNameOverlay]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SheetPrimitive.Overlay}
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}
SheetOverlay.displayName = displayNameOverlay;

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <SheetPortal>
      <SheetOverlay />
      <Component
        as={SheetPrimitive.Content}
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className,
        )}
        {...props}>
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </Component>
    </SheetPortal>
  );
}
SheetContent.displayName = displayNameContent;

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { [displayNameHeader]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}
SheetHeader.displayName = displayNameHeader;

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { [displayNameFooter]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}
SheetFooter.displayName = displayNameFooter;

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  const { [displayNameTitle]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SheetPrimitive.Title}
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}
SheetTitle.displayName = displayNameTitle;

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  const { [displayNameDescription]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SheetPrimitive.Description}
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
SheetDescription.displayName = displayNameDescription;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
