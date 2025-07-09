import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Select";
const displayNameTrigger = "SelectTrigger";
const displayNameValue = "SelectValue";
const displayNameContent = "SelectContent";
const displayNameItem = "SelectItem";
const displayNameGroup = "SelectGroup";
const displayNameLabel = "SelectLabel";
const displayNameSeparator = "SelectSeparator";
const displayNameScrollUpButton = "SelectScrollUpButton";
const displayNameScrollDownButton = "SelectScrollDownButton";

// bypass typescript "SelectSharedProps" error
interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}

const Select = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ ...props }, ref) => {
    const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

    return <Component as={SelectPrimitive.Root} ref={ref} {...props} />;
  },
);
Select.displayName = displayName;

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({ className, ...props }, ref) => {
  const { [displayNameGroup]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component as={SelectPrimitive.Group} ref={ref} className={cn("p-1", className)} {...props} />
  );
});
SelectGroup.displayName = displayNameGroup;

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>(({ className, ...props }, ref) => {
  const { [displayNameValue]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SelectPrimitive.Value}
      ref={ref}
      className={cn("text-sm outline-none", className)}
      {...props}
    />
  );
});
SelectValue.displayName = displayNameValue;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { [displayNameTrigger]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SelectPrimitive.Trigger}
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className,
      )}
      {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </Component>
  );
});
SelectTrigger.displayName = displayNameTrigger;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => {
  const { [displayNameScrollUpButton]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SelectPrimitive.ScrollUpButton}
      ref={ref}
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}>
      <ChevronUp className="h-4 w-4" />
    </Component>
  );
});
SelectScrollUpButton.displayName = displayNameScrollUpButton;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => {
  const { [displayNameScrollDownButton]: Component = DefaultComponent } =
    useStackShiftUIComponents();

  return (
    <Component
      as={SelectPrimitive.ScrollDownButton}
      ref={ref}
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}>
      <ChevronDown className="h-4 w-4" />
    </Component>
  );
});
SelectScrollDownButton.displayName = displayNameScrollDownButton;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => {
  const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <SelectPrimitive.Portal>
      <Component
        as={SelectPrimitive.Content}
        ref={ref}
        className={cn(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </Component>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = displayNameContent;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  const { [displayNameLabel]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SelectPrimitive.Label}
      ref={ref}
      className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
      {...props}
    />
  );
});
SelectLabel.displayName = displayNameLabel;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { [displayNameItem]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SelectPrimitive.Item}
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </Component>
  );
});
SelectItem.displayName = displayNameItem;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { [displayNameSeparator]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={SelectPrimitive.Separator}
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  );
});
SelectSeparator.displayName = displayNameSeparator;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
