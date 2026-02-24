import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Team } from "./team";

describe.concurrent("team", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Team data-testid="team" />);
    expect(screen.getByTestId("team").classList).toContain(clx);
  });
});
