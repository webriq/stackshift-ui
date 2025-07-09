import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test } from "vitest";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu";

describe.concurrent("dropdown-menu", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", async ({ expect }) => {
    const clx = "my-class";
    const user = userEvent.setup();

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

    const trigger = screen.getByTestId("dropdown-menu-trigger");
    expect(trigger).toBeInTheDocument();

    user.click(trigger);

    const menu = await screen.findByTestId("dropdown-menu-content");
    expect(menu).toBeInTheDocument();
  });
});
