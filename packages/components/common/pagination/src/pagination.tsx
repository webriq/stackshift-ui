import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import * as React from "react";

import { Button, buttonVariants } from "@stackshift-ui/button";
import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Pagination";
const displayNameContent = "PaginationContent";
const displayNameItem = "PaginationItem";
const displayNameLink = "PaginationLink";
const displayNamePrevious = "PaginationPrevious";
const displayNameNext = "PaginationNext";
const displayNameEllipsis = "PaginationEllipsis";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="nav"
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}
Pagination.displayName = displayName;

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="ul"
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}
PaginationContent.displayName = displayNameContent;

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  const { [displayNameItem]: Component = DefaultComponent } = useStackShiftUIComponents();

  return <Component as="li" data-slot="pagination-item" {...props} />;
}
PaginationItem.displayName = displayNameItem;

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  const { [displayNameLink]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="a"
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
PaginationLink.displayName = displayNameLink;

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  const { [displayNamePrevious]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={PaginationLink}
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}>
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </Component>
  );
}
PaginationPrevious.displayName = displayNamePrevious;

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  const { [displayNameNext]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as={PaginationLink}
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}>
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </Component>
  );
}
PaginationNext.displayName = displayNameNext;

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  const { [displayNameEllipsis]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component
      as="span"
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}>
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </Component>
  );
}
PaginationEllipsis.displayName = displayNameEllipsis;

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
