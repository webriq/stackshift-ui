import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Heading } from "./heading";

describe.concurrent("heading", () => {
  afterEach(cleanup);

  test("Common: Heading - test if renders without errors", ({ expect }) => {
    const clx = "heading-class";
    render(<Heading className={clx} />);
    expect(screen.getByTestId("h1").classList).toContain(clx);
  });
});
