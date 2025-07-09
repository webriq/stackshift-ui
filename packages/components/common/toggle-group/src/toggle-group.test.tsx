import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

describe.concurrent("toggle-group", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(
      <ToggleGroup type="single" data-testid="toggle-group" className={clx}>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByTestId("toggle-group").classList).toContain(clx);
  });
});
