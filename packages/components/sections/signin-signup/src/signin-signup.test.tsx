import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { SigninSignup } from "./signin-signup";

describe.concurrent("signin-signup", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<SigninSignup />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
