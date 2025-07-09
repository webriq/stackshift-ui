import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Toggle } from "./toggle";

describe.concurrent("toggle", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Toggle data-testid="toggle" className={clx} />);
    expect(screen.getByTestId("toggle").classList).toContain(clx);
  });
});
