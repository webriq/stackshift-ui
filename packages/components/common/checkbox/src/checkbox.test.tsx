import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Checkbox } from "./checkbox";

describe.concurrent("checkbox", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Checkbox className={clx} />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
