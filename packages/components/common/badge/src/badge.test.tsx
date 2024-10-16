import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Badge } from "./badge";

describe.concurrent("badge", () => {
  afterEach(cleanup);

  test("Common: Badge - test if renders without errors", ({ expect }) => {
    const clx = "badge-class";
    render(<Badge className={clx} />);

    const elements = screen.getAllByTestId("div");
    elements.forEach(element => {
      expect(element.classList).toBeDefined();
    });
  });
});
