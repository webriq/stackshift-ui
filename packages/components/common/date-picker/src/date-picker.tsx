"use client";

import { Calendar as CalendarIcon, ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@stackshift-ui/button";
import { Calendar } from "@stackshift-ui/calendar";
import { Input } from "@stackshift-ui/input";
import { Label } from "@stackshift-ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@stackshift-ui/popover";

export interface DatePickerProps {
  label?: string;
  mode?: "single" | "multiple" | "range" | undefined;
  selectedDate?: Date;
  onSelect?: (date: Date) => void;
  required?: boolean;
  min?: number;
  max?: number;
}

export function DatePicker({ label, mode = "range", selectedDate, onSelect }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const date = selectedDate || new Date();

  const handleSelect = (date: Date) => {
    setOpen(false);
    onSelect?.(date);
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" className="w-48 justify-between font-normal">
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          {/* @ts-expect-error */}
          <Calendar mode={mode} selected={date} captionLayout="dropdown" onSelect={handleSelect} />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export interface DatePickerInputProps extends Omit<DatePickerProps, "mode"> {
  selectedMonth?: Date;
  onMonthChange?: (date: Date) => void;
}

export function DatePickerInput({
  label,
  selectedDate,
  onSelect,
  selectedMonth,
  onMonthChange,
}: DatePickerInputProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(selectedDate || new Date());
  const [month, setMonth] = React.useState(selectedMonth || date);
  const [value, setValue] = React.useState(formatDate(date));

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    setDate(date);
    setValue(formatDate(date));
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setValue(e.target.value);
    if (isValidDate(date)) {
      setDate(date);
      setMonth(date);
      onSelect?.(date);
      onMonthChange?.(date);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="June 01, 2025"
          className="bg-background pr-10"
          onChange={handleInputChange}
          onKeyDown={e => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2">
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}>
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={handleSelect}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export interface DatePickerTimeProps extends Omit<DatePickerProps, "mode"> {
  selectedTime?: string;
  onTimeChange?: (time: string) => void;
}

export function DatePickerTime({ label, selectedDate, onSelect }: DatePickerTimeProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(selectedDate);

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    setOpen(false);
    if (!date) return;
    onSelect?.(date);
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          {label}
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={handleSelect}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Time
        </Label>
        <Input
          /* @ts-expect-error */
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
}
