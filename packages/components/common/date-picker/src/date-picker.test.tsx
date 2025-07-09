import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { DatePicker } from "./date-picker";

describe.concurrent("date-picker", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<DatePicker data-testid="date-picker" className={clx} />);
    expect(screen.getByTestId("date-picker").classList).toContain(clx);
  });
});
