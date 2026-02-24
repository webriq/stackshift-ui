import type { ComponentDoc } from "./index";

export const calendarDoc: ComponentDoc = {
  name: "Calendar",
  slug: "calendar",
  description:
    "A flexible calendar component for date selection built on react-day-picker. Supports single date, date ranges, multiple dates, and custom formatting. Includes CalendarDayButton sub-component for customization.",
  useCases: [
    "Date pickers in forms and booking systems",
    "Event scheduling and calendar views",
    "Date range selection for filters and reports",
    "Availability calendars for reservations",
    "Birthday and anniversary selectors",
  ],
  category: "ui",
  importCode: `import { Calendar, CalendarDayButton } from "@stackshift-ui/react";`,
  individualImportCode: `import { Calendar, CalendarDayButton } from "@stackshift-ui/calendar";`,
  usageCode: `const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`,
  props: [
    {
      name: "mode",
      type: '"single" | "multiple" | "range"',
      required: false,
      description: "The selection mode for the calendar.",
    },
    {
      name: "selected",
      type: "Date | Date[] | DateRange | undefined",
      required: false,
      description: "The selected date(s) or date range.",
    },
    {
      name: "onSelect",
      type: "(date: Date | Date[] | DateRange | undefined) => void",
      required: false,
      description: "Callback when a date is selected.",
    },
    {
      name: "showOutsideDays",
      type: "boolean",
      required: false,
      default: "true",
      description: "Whether to show days from adjacent months.",
    },
    {
      name: "captionLayout",
      type: '"label" | "dropdown" | "dropdown-years"',
      required: false,
      default: '"label"',
      description: "The layout style for the month/year caption.",
    },
    {
      name: "buttonVariant",
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
      required: false,
      default: '"ghost"',
      description: "The button variant to use for navigation and day buttons.",
    },
    {
      name: "disabled",
      type: "Date | Date[] | ((date: Date) => boolean)",
      required: false,
      description: "Dates that should be disabled and not selectable.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
  ],
  examples: [
    {
      title: "Single Date Selection",
      description: "Select a single date from the calendar.",
      code: `const [date, setDate] = React.useState<Date>();

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`,
    },
    {
      title: "Date Range Selection",
      description: "Select a range of dates for booking or filtering.",
      code: `const [dateRange, setDateRange] = React.useState<DateRange>();

<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
/>`,
    },
    {
      title: "With Disabled Dates",
      description: "Disable specific dates or date ranges.",
      code: `const [date, setDate] = React.useState<Date>();

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(date) => date < new Date()}
/>`,
    },
    {
      title: "Dropdown Navigation",
      description: "Use dropdown selectors for month and year navigation.",
      code: `const [date, setDate] = React.useState<Date>();

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  captionLayout="dropdown"
/>`,
    },
  ],
};
