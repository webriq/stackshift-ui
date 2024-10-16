import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Radio } from "./radio";

describe.concurrent("radio", () => {
  afterEach(cleanup);

  test("Common: Radio - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(
      <Radio
        className={clx}
        name="stackshift-radio"
        ariaLabel="stackshift radio input"
        item="StackShift"
      />,
    );
    expect(screen.getByTestId("label").classList).toBeDefined();
  });
});
