import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Table } from "./table";

describe.concurrent("table", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Table data-testid="table" className={clx} />);
    expect(screen.getByTestId("table").classList).toContain(clx);
  });
});
