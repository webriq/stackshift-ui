import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Skeleton } from "./skeleton";

describe.concurrent("skeleton", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Skeleton data-testid="skeleton-component" className={clx} />);
    expect(screen.getByTestId("skeleton-component").classList).toContain(clx);
  });
});
