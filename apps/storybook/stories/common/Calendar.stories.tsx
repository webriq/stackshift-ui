import { Calendar } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "Common/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible calendar component built on Radix UI primitives for date selection and navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["single", "multiple", "range"],
      description: "Selection mode for the calendar",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the calendar is disabled",
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Show days from previous/next months",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Compact: Story = {
  args: {
    mode: "range",
  },
  render: arg => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="relative max-w-xs w-full">
        <Calendar
          mode={arg.mode}
          selected={date}
          onSelect={setDate}
          className="rounded-md border text-sm w-full"
          classNames={{
            day: "h-8 w-8 p-0 text-xs flex items-center justify-center",
            head_cell: "text-xs font-medium",
          }}
        />
      </div>
    );
  },
};

export const SingleSelection: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="relative space-y-4 relative max-w-xs w-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-full"
          classNames={{
            day: "h-8 w-8 p-0 text-xs flex items-center justify-center",
            head_cell: "text-xs font-medium",
          }}
        />
        {date && <p className="text-sm text-gray-600">Selected: {date.toLocaleDateString()}</p>}
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[]>([]);

    return (
      <div className="space-y-4 relative max-w-xs w-full">
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          className="rounded-md border w-full"
          classNames={{
            day: "h-8 w-8 p-0 text-xs flex items-center justify-center",
            head_cell: "text-xs font-medium",
          }}
        />
        {dates.length > 0 && (
          <div className="text-sm text-gray-600">
            <p>Selected dates:</p>
            <ul className="list-disc list-inside">
              {dates.map((date, index) => (
                <li key={index}>{date.toLocaleDateString()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date }>({});

    return (
      <div className="space-y-4 relative max-w-xs w-full">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          className="rounded-md border w-full"
          classNames={{
            day: "h-8 w-8 p-0 text-xs flex items-center justify-center",
            head_cell: "text-xs font-medium",
          }}
        />
        {(range?.from || range?.to) && (
          <div className="text-sm text-gray-600">
            {range.from && <p>From: {range.from.toLocaleDateString()}</p>}
            {range.to && <p>To: {range.to.toLocaleDateString()}</p>}
          </div>
        )}
      </div>
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();

    const disabledDays = [
      new Date(2024, 0, 1), // New Year's Day
      new Date(2024, 11, 25), // Christmas
      { dayOfWeek: [0, 6] }, // Weekends
    ];

    return (
      <div className="space-y-4 relative max-w-xs w-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={disabledDays}
          className="rounded-md border w-full"
          classNames={{
            day: "h-8 w-8 p-0 text-xs flex items-center justify-center",
            head_cell: "text-xs font-medium",
          }}
        />
        <p className="text-sm text-gray-600">Weekends and holidays are disabled</p>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border-2 border-blue-200 shadow-lg relative max-w-xs w-full"
        classNames={{
          head_cell: "text-blue-600 font-semibold",
          cell: "text-center p-0 relative [&:has([aria-selected])]:bg-blue-50",
          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-blue-100",
          day_selected: "bg-blue-600 text-white hover:bg-blue-700",
          day_today: "bg-gray-100 text-gray-900",
        }}
      />
    );
  },
};

export const BookingCalendar: Story = {
  render: () => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);

    const bookedDates = [
      new Date(2024, new Date().getMonth(), 15),
      new Date(2024, new Date().getMonth(), 16),
      new Date(2024, new Date().getMonth(), 22),
    ];

    const handleSelect = (dates: Date[] | undefined) => {
      setSelectedDates(dates || []);
    };

    return (
      <div className="space-y-4 relative max-w-xs w-full">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Book Your Stay</h3>
          <p className="text-sm text-gray-600">Select your check-in and check-out dates</p>
        </div>

        <Calendar
          mode="multiple"
          selected={selectedDates}
          onSelect={handleSelect}
          disabled={bookedDates}
          className="rounded-md border w-full"
        />

        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Booked</span>
          </div>
        </div>

        {selectedDates.length > 0 && (
          <div className="p-4 bg-blue-50 rounded-md">
            <p className="font-semibold">Selected Dates:</p>
            <p className="text-sm">
              {selectedDates.map(date => date.toLocaleDateString()).join(", ")}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const EventCalendar: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    const events = {
      [new Date(2024, new Date().getMonth(), 10).toDateString()]: [
        "Team Meeting",
        "Project Review",
      ],
      [new Date(2024, new Date().getMonth(), 15).toDateString()]: ["Client Presentation"],
      [new Date(2024, new Date().getMonth(), 20).toDateString()]: ["Workshop", "Training Session"],
    };

    return (
      <div className="space-y-4 relative max-w-xs w-full">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Event Calendar</h3>
          <p className="text-sm text-gray-600">Click on dates to view events</p>
        </div>

        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border w-full"
          modifiers={{
            hasEvents: Object.keys(events).map(dateStr => new Date(dateStr)),
          }}
          modifiersClassNames={{
            hasEvents: "bg-green-100 text-green-800 font-semibold",
          }}
          classNames={{
            day: "h-8 w-8 p-0 text-xs flex items-center justify-center",
            head_cell: "text-xs font-medium",
          }}
        />

        {selectedDate && events[selectedDate.toDateString()] && (
          <div className="p-4 bg-green-50 rounded-md">
            <p className="font-semibold">Events on {selectedDate.toLocaleDateString()}:</p>
            <ul className="list-disc list-inside text-sm mt-2">
              {events[selectedDate.toDateString()].map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};
