"use client";

import { DropdownMenuTrigger } from "@stackshift-ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";

import { Button } from "@stackshift-ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@stackshift-ui/dropdown-menu";
import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "DataTableViewOptions";

export function DataTableViewOptions<TData>({ table, ...props }: { table: Table<TData> }) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
            <Settings2 />
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table
            .getAllColumns()
            .filter(column => typeof column.accessorFn !== "undefined" && column.getCanHide())
            .map(column => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={value => column.toggleVisibility(!!value)}>
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </Component>
  );
}
DataTableViewOptions.displayName = displayName;
