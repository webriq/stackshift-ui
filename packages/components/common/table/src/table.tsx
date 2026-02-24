"use client";

import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Table";
const displayNameHeader = "TableHeader";
const displayNameBody = "TableBody";
const displayNameFooter = "TableFooter";
const displayNameRow = "TableRow";
const displayNameHead = "TableHead";
const displayNameCell = "TableCell";
const displayNameCaption = "TableCaption";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </Component>
  );
}
Table.displayName = displayName;

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  const { [displayNameHeader]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="thead"
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}
TableHeader.displayName = displayNameHeader;

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  const { [displayNameBody]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="tbody"
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}
TableBody.displayName = displayNameBody;

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  const { [displayNameFooter]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="tfoot"
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  );
}
TableFooter.displayName = displayNameFooter;

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  const { [displayNameRow]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="tr"
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}
TableRow.displayName = displayNameRow;

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  const { [displayNameHead]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="th"
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}
TableHead.displayName = displayNameHead;

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  const { [displayNameCell]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="td"
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}
TableCell.displayName = displayNameCell;

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  const { [displayNameCaption]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="caption"
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}
TableCaption.displayName = displayNameCaption;

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
