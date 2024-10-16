import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Checkbox } from "./checkbox";

describe.concurrent("checkbox", () => {
  afterEach(cleanup);

  test("Common: Checkbox - test if renders without errors", ({ expect }) => {
    const clx = "checkbox-class";
    render(<Checkbox className={clx} />);
    expect(screen.getByTestId("label").classList).toBeDefined();
  });
});
