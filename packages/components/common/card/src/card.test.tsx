import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Card } from "./card";

describe.concurrent("card", () => {
  afterEach(cleanup);

  test("Common: Card - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Card className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
