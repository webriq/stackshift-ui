"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "DropdownMenu";
const displayNamePortal = "DropdownMenuPortal";
const displayNameTrigger = "DropdownMenuTrigger";
const displayNameContent = "DropdownMenuContent";
const displayNameGroup = "DropdownMenuGroup";
const displayNameItem = "DropdownMenuItem";
const displayNameCheckboxItem = "DropdownMenuCheckboxItem";
const displayNameRadioGroup = "DropdownMenuRadioGroup";
const displayNameRadioItem = "DropdownMenuRadioItem";
const displayNameLabel = "DropdownMenuLabel";
const displayNameSeparator = "DropdownMenuSeparator";
const displayNameShortcut = "DropdownMenuShortcut";
const displayNameSub = "DropdownMenuSub";
const displayNameSubTrigger = "DropdownMenuSubTrigger";
const displayNameSubContent = "DropdownMenuSubContent";

const DropdownMenu = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>
>(({ ...props }, ref) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component as={DropdownMenuPrimitive.Root} data-slot="dropdown-menu" ref={ref} {...props} />
  );
});
DropdownMenu.displayName = displayName;

const DropdownMenuPortal = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Portal>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>
>(({ ...props }, ref) => {
  const { [displayNamePortal]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Portal}
      data-slot="dropdown-menu-portal"
      ref={ref}
      {...props}
    />
  );
});
DropdownMenuPortal.displayName = displayNamePortal;

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ ...props }, ref) => {
  const { [displayNameTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Trigger}
      data-slot="dropdown-menu-trigger"
      ref={ref}
      {...props}
    />
  );
});
DropdownMenuTrigger.displayName = displayNameTrigger;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <DropdownMenuPortal>
      <Component
        as={DropdownMenuPrimitive.Content}
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className,
        )}
        ref={ref}
        {...props}
      />
    </DropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = displayNameContent;

const DropdownMenuGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>(({ ...props }, ref) => {
  const { [displayNameGroup]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Group}
      data-slot="dropdown-menu-group"
      ref={ref}
      {...props}
    />
  );
});
DropdownMenuGroup.displayName = displayNameGroup;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
  }
>(({ className, inset, variant = "default", ...props }, ref) => {
  const { [displayNameItem]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Item}
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = displayNameItem;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const { [displayNameCheckboxItem]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.CheckboxItem}
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      ref={ref}
      {...props}>
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </Component>
  );
});
DropdownMenuCheckboxItem.displayName = displayNameCheckboxItem;

const DropdownMenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>
>(({ ...props }, ref) => {
  const { [displayNameRadioGroup]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.RadioGroup}
      data-slot="dropdown-menu-radio-group"
      ref={ref}
      {...props}
    />
  );
});
DropdownMenuRadioGroup.displayName = displayNameRadioGroup;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { [displayNameRadioItem]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.RadioItem}
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      ref={ref}
      {...props}>
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </Component>
  );
});
DropdownMenuRadioItem.displayName = displayNameRadioItem;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const { [displayNameLabel]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Label}
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      ref={ref}
      {...props}
    />
  );
});
DropdownMenuLabel.displayName = displayNameLabel;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { [displayNameSeparator]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Separator}
      ref={ref}
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
});
DropdownMenuSeparator.displayName = displayNameSeparator;

const DropdownMenuShortcut = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => {
  const { [displayNameShortcut]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="span"
      ref={ref}
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
});
DropdownMenuShortcut.displayName = displayNameShortcut;

const DropdownMenuSub = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Sub>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Sub>
>(({ ...props }, ref) => {
  const { [displayNameSub]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component as={DropdownMenuPrimitive.Sub} ref={ref} data-slot="dropdown-menu-sub" {...props} />
  );
});
DropdownMenuSub.displayName = displayNameSub;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => {
  const { [displayNameSubTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.SubTrigger}
      ref={ref}
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className,
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </Component>
  );
});
DropdownMenuSubTrigger.displayName = displayNameSubTrigger;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const { [displayNameSubContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.SubContent}
      ref={ref}
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      {...props}
    />
  );
});
DropdownMenuSubContent.displayName = displayNameSubContent;

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
