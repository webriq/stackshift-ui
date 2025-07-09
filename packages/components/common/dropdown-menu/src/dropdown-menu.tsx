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

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={DropdownMenuPrimitive.Root} data-slot="dropdown-menu" {...props} />;
}
DropdownMenu.displayName = displayName;

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  const { [displayNamePortal]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component as={DropdownMenuPrimitive.Portal} data-slot="dropdown-menu-portal" {...props} />
  );
}
DropdownMenuPortal.displayName = displayNamePortal;

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  const { [displayNameTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component as={DropdownMenuPrimitive.Trigger} data-slot="dropdown-menu-trigger" {...props} />
  );
}
DropdownMenuTrigger.displayName = displayNameTrigger;

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
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
        {...props}
      />
    </DropdownMenuPortal>
  );
}
DropdownMenuContent.displayName = displayNameContent;

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  const { [displayNameGroup]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={DropdownMenuPrimitive.Group} data-slot="dropdown-menu-group" {...props} />;
}
DropdownMenuGroup.displayName = displayNameGroup;

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
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
      {...props}
    />
  );
}
DropdownMenuItem.displayName = displayNameItem;

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
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
      {...props}>
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </Component>
  );
}
DropdownMenuCheckboxItem.displayName = displayNameCheckboxItem;

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  const { [displayNameRadioGroup]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.RadioGroup}
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}
DropdownMenuRadioGroup.displayName = displayNameRadioGroup;

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  const { [displayNameRadioItem]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.RadioItem}
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}>
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </Component>
  );
}
DropdownMenuRadioItem.displayName = displayNameRadioItem;

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  const { [displayNameLabel]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Label}
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    />
  );
}
DropdownMenuLabel.displayName = displayNameLabel;

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  const { [displayNameSeparator]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.Separator}
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}
DropdownMenuSeparator.displayName = displayNameSeparator;

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  const { [displayNameShortcut]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="span"
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = displayNameShortcut;

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  const { [displayNameSub]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as={DropdownMenuPrimitive.Sub} data-slot="dropdown-menu-sub" {...props} />;
}
DropdownMenuSub.displayName = displayNameSub;

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  const { [displayNameSubTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.SubTrigger}
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
}
DropdownMenuSubTrigger.displayName = displayNameSubTrigger;

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  const { [displayNameSubContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={DropdownMenuPrimitive.SubContent}
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      {...props}
    />
  );
}
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
