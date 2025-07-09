import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Testimonial } from "./testimonial";

describe.concurrent("testimonial", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Testimonial data-testid="testimonial" />);
    expect(screen.getByTestId("testimonial").classList).toContain(clx);
  });
});
