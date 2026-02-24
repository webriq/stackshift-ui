import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Contact } from "./contact";

describe.concurrent("contact", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Contact data-testid="contact" />);
    expect(screen.getByTestId("contact").classList).toContain(clx);
  });
});
