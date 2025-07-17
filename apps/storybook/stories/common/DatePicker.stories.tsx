import { Button, DatePicker, DatePickerInput, DatePickerTime, Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Common/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A date picker component built on Radix UI primitives with calendar integration for selecting dates, date ranges, and times.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["single", "multiple", "range"],
      description: "Selection mode for the date picker",
    },
    label: {
      control: { type: "text" },
      description: "Label for the date picker",
    },
    selectedDate: {
      control: { type: "date" },
      description: "Currently selected date",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => (
    <div className="relative w-[320px] h-full flex items-center justify-center">
      <DatePicker label="Select your birth date" />
    </div>
  ),
};

export const WithInput: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    return (
      <div className="space-y-4">
        <DatePickerInput
          label="Date with Input"
          selectedDate={selectedDate}
          onSelect={setSelectedDate}
        />
        {selectedDate && (
          <div className="text-sm text-gray-600">Selected: {selectedDate.toLocaleDateString()}</div>
        )}
      </div>
    );
  },
};

export const WithTime: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    return (
      <div className="space-y-4">
        <DatePickerTime
          label="Date & Time"
          selectedDate={selectedDate}
          onSelect={setSelectedDate}
        />
        {selectedDate && (
          <div className="text-sm text-gray-600">Selected: {selectedDate.toLocaleDateString()}</div>
        )}
      </div>
    );
  },
};

export const BookingForm: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date>();
    const [checkOut, setCheckOut] = useState<Date>();
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Booking:", { checkIn, checkOut, guests });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 p-6 border rounded-lg max-w-md">
        <h3 className="text-lg font-semibold">Book Your Stay</h3>

        <div className="grid grid-cols-2 gap-4">
          <DatePickerInput label="Check-in" selectedDate={checkIn} onSelect={setCheckIn} />
          <DatePickerInput label="Check-out" selectedDate={checkOut} onSelect={setCheckOut} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <select
            id="guests"
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>
                {num} Guest{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" className="w-full" disabled={!checkIn || !checkOut}>
          Book Now
        </Button>

        {checkIn && checkOut && (
          <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
            <p>
              <strong>Check-in:</strong> {checkIn.toLocaleDateString()}
            </p>
            <p>
              <strong>Check-out:</strong> {checkOut.toLocaleDateString()}
            </p>
            <p>
              <strong>Guests:</strong> {guests}
            </p>
            <p>
              <strong>Nights:</strong>{" "}
              {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))}
            </p>
          </div>
        )}
      </form>
    );
  },
};

export const EventScheduler: Story = {
  render: () => {
    const [eventDate, setEventDate] = useState<Date>();
    const [eventTitle, setEventTitle] = useState("");
    const [eventDescription, setEventDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Event:", { eventDate, eventTitle, eventDescription });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-lg max-w-md">
        <h3 className="text-lg font-semibold">Schedule Event</h3>

        <div className="space-y-2">
          <Label htmlFor="event-title">Event Title</Label>
          <input
            id="event-title"
            type="text"
            value={eventTitle}
            onChange={e => setEventTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <DatePickerTime
          label="Event Date & Time"
          selectedDate={eventDate}
          onSelect={setEventDate}
        />

        <div className="space-y-2">
          <Label htmlFor="event-description">Description</Label>
          <textarea
            id="event-description"
            value={eventDescription}
            onChange={e => setEventDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full" disabled={!eventDate || !eventTitle}>
          Schedule Event
        </Button>
      </form>
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">Large date picker with bigger calendar size</div>
        <div className="[--cell-size:theme(spacing.12)]">
          <DatePicker
            label="Large Date Picker"
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
        {selectedDate && (
          <div className="text-sm text-gray-600">Selected: {selectedDate.toLocaleDateString()}</div>
        )}
      </div>
    );
  },
};
