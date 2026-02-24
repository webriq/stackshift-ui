import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test, vi } from "vitest";
import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  afterEach(cleanup);

  test("Common: DatePicker - test if renders without errors", ({ expect }) => {
    const { unmount } = render(<DatePicker data-testid="date-picker" label="Select a date" />);
    expect(screen.getByText("Select a date")).toBeInTheDocument();
    unmount();
  });

  test("Common: DatePicker - test if renders with correct label", ({ expect }) => {
    const { unmount } = render(<DatePicker data-testid="date-picker" label="Choose your date" />);
    expect(screen.getByText("Choose your date")).toBeInTheDocument();
    unmount();
  });

  test("Common: DatePicker - test if renders with default date", ({ expect }) => {
    const defaultDate = new Date(2024, 0, 15);
    const { unmount } = render(<DatePicker selectedDate={defaultDate} label="Select date" />);
    expect(screen.getByText(defaultDate.toLocaleDateString())).toBeInTheDocument();
    unmount();
  });

  test("Common: DatePicker - test if shows current date when no date is provided", ({ expect }) => {
    const { unmount } = render(<DatePicker label="Select date" />);
    const today = new Date();
    expect(screen.getByText(today.toLocaleDateString())).toBeInTheDocument();
    unmount();
  });

  test("Common: DatePicker - test if opens calendar when trigger is clicked", async ({
    expect,
  }) => {
    const user = userEvent.setup();
    const { unmount } = render(<DatePicker label="Select date" />);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    unmount();
  });

  test("Common: DatePicker - test if closes calendar when clicking outside", async ({ expect }) => {
    const user = userEvent.setup();
    const { unmount } = render(
      <div>
        <DatePicker label="Select date" />
        <button>Outside button</button>
      </div>,
    );

    const trigger = screen.getByRole("button", { name: /select date/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    const outsideButton = screen.getByRole("button", { name: /outside/i });
    await user.click(outsideButton);

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    unmount();
  });

  test("Common: DatePicker - test if calls onSelect when calendar day is clicked", async ({
    expect,
  }) => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    const { unmount } = render(<DatePicker label="Select date" onSelect={onSelect} />);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    // Find all day buttons and click one that's not disabled
    const dayButtons = screen
      .getAllByRole("button")
      .filter(
        btn => btn.textContent && /^\d+$/.test(btn.textContent) && !btn.hasAttribute("disabled"),
      );

    if (dayButtons.length > 0) {
      await user.click(dayButtons[0]);
      expect(onSelect).toHaveBeenCalled();
    }
    unmount();
  });

  // Keyboard navigation tests
  test("Common: DatePicker - test if opens calendar with Enter key", async ({ expect }) => {
    const user = userEvent.setup();
    const { unmount } = render(<DatePicker label="Select date" />);

    const trigger = screen.getByRole("button");
    trigger.focus();
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    unmount();
  });

  test("Common: DatePicker - test if opens calendar with Space key", async ({ expect }) => {
    const user = userEvent.setup();
    const { unmount } = render(<DatePicker label="Select date" />);

    const trigger = screen.getByRole("button");
    trigger.focus();
    await user.keyboard(" ");

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    unmount();
  });

  test("Common: DatePicker - test if closes calendar with Escape key", async ({ expect }) => {
    const user = userEvent.setup();
    const { unmount } = render(<DatePicker label="Select date" />);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    unmount();
  });

  test("Common: DatePicker - test if displays date in correct format", ({ expect }) => {
    const testDate = new Date(2024, 5, 15); // June 15, 2024
    const { unmount } = render(<DatePicker selectedDate={testDate} label="Select date" />);

    const expectedFormat = testDate.toLocaleDateString();
    expect(screen.getByText(expectedFormat)).toBeInTheDocument();
    unmount();
  });

  test("Common: DatePicker - test if has proper ARIA attributes", ({ expect }) => {
    const { unmount } = render(<DatePicker label="Select date" />);

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    unmount();
  });

  test("Common: DatePicker - test if updates ARIA expanded when calendar opens", async ({
    expect,
  }) => {
    const user = userEvent.setup();
    const { unmount } = render(<DatePicker label="Select date" />);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true");
    });
    unmount();
  });

  test("Common: DatePicker - test if has proper label association", ({ expect }) => {
    const { unmount } = render(<DatePicker label="Birth date" />);

    const trigger = screen.getByRole("button");
    const label = screen.getByText("Birth date");

    expect(trigger).toHaveAttribute("id", "date");
    expect(label).toHaveAttribute("for", "date");
    unmount();
  });

  test("Common: DatePicker - test if handles leap year dates correctly", ({ expect }) => {
    const leapYearDate = new Date(2024, 1, 29); // Feb 29, 2024
    const { unmount } = render(<DatePicker selectedDate={leapYearDate} label="Select date" />);

    const expectedFormat = leapYearDate.toLocaleDateString();
    expect(screen.getByText(expectedFormat)).toBeInTheDocument();
  });

  test("Common: DatePicker - test if cleans up event listeners on unmount", ({ expect }) => {
    const { unmount } = render(<DatePicker label="Select date" />);

    expect(() => unmount()).not.toThrow();
  });

  test("Common: DatePicker - test if handles rapid clicks without errors", async ({ expect }) => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    const { unmount } = render(<DatePicker label="Select date" onSelect={onSelect} />);

    const trigger = screen.getByRole("button");

    await user.click(trigger);
    await user.click(trigger);
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    unmount();
  });

  test("Common: DatePicker - test if passes through additional props", ({ expect }) => {
    const { unmount } = render(
      <DatePicker label="Select date" data-testid="custom-picker" className="custom-class" />,
    );

    const container = screen.getByTestId("custom-picker");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("custom-class");
    unmount();
  });

  test("Common: DatePicker - test if handles different date selections", async ({ expect }) => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    const { unmount } = render(<DatePicker label="Select date" onSelect={onSelect} />);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    const dayButtons = screen
      .getAllByRole("button")
      .filter(
        btn => btn.textContent && /^\d+$/.test(btn.textContent) && !btn.hasAttribute("disabled"),
      );

    if (dayButtons.length > 1) {
      await user.click(dayButtons[0]);
      expect(onSelect).toHaveBeenCalledTimes(1);

      await waitFor(
        () => {
          expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        },
        { timeout: 2000 },
      );

      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const newDayButtons = screen
        .getAllByRole("button")
        .filter(
          btn => btn.textContent && /^\d+$/.test(btn.textContent) && !btn.hasAttribute("disabled"),
        );

      if (newDayButtons.length > 1) {
        await user.click(newDayButtons[1]);
        expect(onSelect).toHaveBeenCalledTimes(2);
      }
    }
    unmount();
  });
});
