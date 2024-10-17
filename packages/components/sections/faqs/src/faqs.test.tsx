import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Faqs } from "./faqs";

describe.concurrent("faqs", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Faqs />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
