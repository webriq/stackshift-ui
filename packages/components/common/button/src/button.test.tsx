import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Button } from "./button";

describe.concurrent("button", () => {
  afterEach(cleanup);

  test("Common: Button - test if renders without errors", ({ expect }) => {
    const clx = "button-class";
    render(<Button className={clx} />);
    expect(screen.getByTestId("button").classList).toContain(clx);
  });
});
