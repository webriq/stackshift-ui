import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

describe.concurrent("select", () => {
  afterEach(cleanup);

  test("Common: Select - test if renders without errors", ({ expect }) => {
    const clx = "select-class";
    render(
      <Select data-testid="select-container">
        <SelectTrigger data-testid="select" className={clx}>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent data-testid="select-content" className={clx}>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByTestId("select").classList).toContain(clx);
  });
});
