import type { ComponentDoc } from "./index";

export const datePickerDoc: ComponentDoc = {
  name: "DatePicker",
  slug: "date-picker",
  description:
    "A comprehensive date picker component combining a popover, calendar, and input field. Includes DatePickerInput for text input and DatePickerTime for time selection.",
  useCases: [
    "Form fields requiring date input",
    "Event and appointment scheduling",
    "Booking and reservation systems",
    "Date range filters in dashboards",
    "Birthday and anniversary selectors",
  ],
  category: "ui",
  importCode: `import { DatePicker, DatePickerInput, DatePickerTime } from "@stackshift-ui/react";`,
  individualImportCode: `import { DatePicker, DatePickerInput, DatePickerTime } from "@stackshift-ui/date-picker";`,
  usageCode: `const [date, setDate] = React.useState<Date>();

<DatePicker
  selected={date}
  onSelect={setDate}
/>`,
  props: [
    {
      name: "selected",
      type: "Date | undefined",
      required: false,
      description: "The selected date value.",
    },
    {
      name: "onSelect",
      type: "(date: Date | undefined) => void",
      required: false,
      description: "Callback when a date is selected.",
    },
    {
      name: "mode",
      type: '"single" | "range"',
      required: false,
      default: '"single"',
      description: "The selection mode for the date picker.",
    },
    {
      name: "placeholder",
      type: "string",
      required: false,
      default: '"Pick a date"',
      description: "Placeholder text for the input field.",
    },
    {
      name: "disabled",
      type: "boolean | Date[] | ((date: Date) => boolean)",
      required: false,
      description: "Dates that should be disabled.",
    },
    {
      name: "showTime",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether to show time selection.",
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
      title: "Basic Date Picker",
      description: "A simple date picker with calendar popup.",
      code: `const [date, setDate] = React.useState<Date>();

<DatePicker
  selected={date}
  onSelect={setDate}
  placeholder="Select a date"
/>`,
    },
    {
      title: "With Time Selection",
      description: "Include time selection in the date picker.",
      code: `const [date, setDate] = React.useState<Date>();

<DatePicker
  selected={date}
  onSelect={setDate}
  showTime
  placeholder="Select date and time"
/>`,
    },
    {
      title: "Date Range Picker",
      description: "Select a range of dates.",
      code: `const [dateRange, setDateRange] = React.useState<DateRange>();

<DatePicker
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  placeholder="Select date range"
/>`,
    },
    {
      title: "With Disabled Dates",
      description: "Disable past dates or specific date ranges.",
      code: `const [date, setDate] = React.useState<Date>();

<DatePicker
  selected={date}
  onSelect={setDate}
  disabled={(date) => date < new Date()}
  placeholder="Select future date"
/>`,
    },
    {
      title: "Custom Date Input",
      description: "Use DatePickerInput for custom styling.",
      code: `const [date, setDate] = React.useState<Date>();

<DatePickerInput
  value={date}
  onChange={setDate}
  placeholder="MM/DD/YYYY"
  className="w-full"
/>`,
    },
  ],
};
