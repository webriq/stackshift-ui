import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { CheckboxGroup } from "./checkbox-group";

describe.concurrent("checkbox-group", () => {
  afterEach(cleanup);

  test("Common: Checkbox Group - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<CheckboxGroup className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
