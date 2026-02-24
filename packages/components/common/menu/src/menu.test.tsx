import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./menu";

describe.concurrent("menu", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    const { unmount } = render(<NavigationMenu data-testid="menu" className={clx} />);
    expect(screen.getByTestId("menu").classList).toContain(clx);
    unmount();
  });
});
