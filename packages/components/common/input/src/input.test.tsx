import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Input } from "./input";

describe.concurrent("input", () => {
  afterEach(cleanup);

  test("Common: Input - test if renders without errors", ({ expect }) => {
    const clx = "input-class";
    render(<Input className={clx} />);
    expect(screen.getByTestId("input").classList).toContain(clx);
  });
});
