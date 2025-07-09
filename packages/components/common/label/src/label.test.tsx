import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Label } from "./label";

describe.concurrent("label", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Label data-testid="label" className={clx} />);
    expect(screen.getByTestId("label").classList).toContain(clx);
  });
});
