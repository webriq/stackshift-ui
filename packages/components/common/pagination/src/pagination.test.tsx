import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Pagination } from "./pagination";

describe.concurrent("pagination", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Pagination data-testid="pagination" className={clx} />);
    expect(screen.getByTestId("pagination").classList).toContain(clx);
  });
});
