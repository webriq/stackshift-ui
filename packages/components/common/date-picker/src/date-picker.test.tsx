import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { DatePicker } from "./date-picker";

// TODO: add more tests
describe.concurrent("date-picker", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    render(<DatePicker data-testid="date-picker" label="Select a date" />);
    expect(screen.getByText("Select a date")).not.toBeNull();
  });
});
