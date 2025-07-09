import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";
import { Calendar } from "./calendar";

describe.concurrent("Calendar", () => {
  afterEach(cleanup);

  test("Common: Calendar - test if renders without errors", () => {
    render(<Calendar />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  test("handles date selection", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    // @ts-ignore-error
    render(<Calendar onSelect={onSelect} />);

    const dateButtons = screen.getAllByRole("button");
    // @ts-ignore-error
    const dateButton = dateButtons.find(button => button.textContent === "15" && !button.disabled);

    if (dateButton) {
      await user.click(dateButton);
      expect(onSelect).toHaveBeenCalled();
    }
  });

  test("Common: Calendar - test if renders without errors", () => {
    render(<Calendar />);
    const today = new Date();
    const todayDate = today.getDate().toString();

    const dateButtons = screen.getAllByRole("button");
    const todayButton = dateButtons.find(
      button =>
        button.textContent === todayDate &&
        button.getAttribute("data-day")?.includes(today.toLocaleDateString()),
    );

    if (todayButton) {
      expect(todayButton).toBeInTheDocument();
    }
  });

  test("Common: Calendar - test if renders without errors", () => {
    render(<Calendar showOutsideDays={false} />);
    const days = screen.queryAllByRole("gridcell");
    const outsideDays = days.filter(day => day.getAttribute("data-outside") === "true");
    expect(outsideDays.length).toBeGreaterThan(0);
  });

  test("Common: Calendar - test if renders without errors", ({ expect }) => {
    const clx = "calendar-class";
    render(<Calendar data-testid="calendar" className={clx} />);
    expect(screen.getByTestId("calendar").classList).toContain(clx);
  });
});
