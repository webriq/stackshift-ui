import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Cookies } from "./cookies";

describe.concurrent("cookies", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    render(<Cookies data={{ variant: "variant_a" }} />);
    // @todo: add proper test for variant_a
  });
});
