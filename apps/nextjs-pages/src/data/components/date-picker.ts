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
  usageCode: `<DatePicker label="Select Date" />`,
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "Label text displayed above the date picker.",
    },
    {
      name: "mode",
      type: '"single"',
      required: false,
      default: '"single"',
      description: "The selection mode for the calendar. Use single for date selection.",
    },
    {
      name: "selectedDate",
      type: "Date",
      required: false,
      description: "The selected date value.",
    },
    {
      name: "onSelect",
      type: "(date: Date) => void",
      required: false,
      description: "Callback when a date is selected.",
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
      title: "Basic DatePicker",
      description: "A button-style date picker with calendar popup and dropdown navigation.",
      code: `const [date, setDate] = React.useState(new Date());

<DatePicker
  label="Select Date"
  mode="single"
  selectedDate={date}
  onSelect={setDate}
/>`,
    },
    {
      title: "DatePickerInput",
      description: "A text input with calendar icon for typing or selecting dates.",
      code: `const [date, setDate] = React.useState(new Date());

<DatePickerInput
  label="Birth Date"
  selectedDate={date}
  onSelect={setDate}
/>`,
    },
    {
      title: "DatePickerTime",
      description: "Date picker combined with a time input field.",
      code: `const [date, setDate] = React.useState(new Date());

<DatePickerTime
  label="Event Date"
  selectedDate={date}
  onSelect={setDate}
/>`,
    },
  ],
};
