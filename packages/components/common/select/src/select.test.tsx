import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Select } from "./select";

describe.concurrent("select", () => {
  afterEach(cleanup);

  test("Common: Select - test if renders without errors", ({ expect }) => {
    const clx = "select-class";
    render(
      <Select
        className={clx}
        name="stackshift-select"
        ariaLabel="stackshift select"
        items={["Option 1", "Option 2", "Option 3"]}
      />,
    );
    expect(screen.getByTestId("select").classList).toContain(clx);
  });
});
