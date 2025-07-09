import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu";

describe.concurrent("dropdown-menu", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(
      <DropdownMenu data-testid="dropdown-menu">
        <DropdownMenuTrigger asChild data-testid="dropdown-menu-trigger">
          <button>Open Menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-menu-content" className={clx}>
          <p>This is a dropdown menu</p>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    expect(screen.getByTestId("dropdown-menu").classList).toContain(clx);
    expect(screen.getByTestId("dropdown-menu-trigger").textContent).toContain("Open Menu");
    expect(screen.getByTestId("dropdown-menu-content").textContent).toContain(
      "This is a dropdown menu",
    );
  });
});
