"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Dialog";
const displayNameTrigger = "DialogTrigger";
const displayNamePortal = "DialogPortal";
const displayNameClose = "DialogClose";
const displayNameOverlay = "DialogOverlay";
const displayNameContent = "DialogContent";
const displayNameHeader = "DialogHeader";
const displayNameFooter = "DialogFooter";
const displayNameTitle = "DialogTitle";
const displayNameDescription = "DialogDescription";

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={DialogPrimitive.Root} data-slot="dialog" {...props} />;
}
Dialog.displayName = displayName;

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  const { [displayNameTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={DialogPrimitive.Trigger} data-slot="dialog-trigger" {...props} />;
}
DialogTrigger.displayName = displayNameTrigger;

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  const { [displayNamePortal]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={DialogPrimitive.Portal} data-slot="dialog-portal" {...props} />;
}
DialogPortal.displayName = displayNamePortal;

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  const { [displayNameClose]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={DialogPrimitive.Close} data-slot="dialog-close" {...props} />;
}
DialogClose.displayName = displayNameClose;

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  const { [displayNameOverlay]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DialogPrimitive.Overlay}
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}
DialogOverlay.displayName = displayNameOverlay;

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <Component
        as={DialogPrimitive.Content}
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </Component>
    </DialogPortal>
  );
}
DialogContent.displayName = displayNameContent;

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { [displayNameHeader]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}
DialogHeader.displayName = displayNameHeader;

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { [displayNameFooter]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}
DialogFooter.displayName = displayNameFooter;

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  const { [displayNameTitle]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DialogPrimitive.Title}
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}
DialogTitle.displayName = displayNameTitle;

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  const { [displayNameDescription]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DialogPrimitive.Description}
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
DialogDescription.displayName = displayNameDescription;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
