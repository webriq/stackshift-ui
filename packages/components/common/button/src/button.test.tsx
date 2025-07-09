import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Button } from "./button";

describe.concurrent("button", () => {
  afterEach(cleanup);

  test("Common: Button - test if renders without errors", ({ expect }) => {
    const clx = "button-class";

    render(<Button className={clx}>Test Button</Button>);

    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button.classList).toContain(clx);
    expect(button.textContent).toBe("Test Button");
  });

  test("Common: Button - test if renders as child", ({ expect }) => {
    render(
      <Button asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          External Link
        </a>
      </Button>,
    );

    const link = screen.getByRole("link", { name: "External Link" });
    expect(link.tagName.toLowerCase()).toBe("a");
    expect(link.getAttribute("href")).toBe("#");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });

  test("Common: Button - test if renders with correct variant", ({ expect }) => {
    render(<Button variant="destructive">Destructive Button</Button>);

    const button = screen.getByRole("button", { name: "Destructive Button" });
    expect(button.classList).toContain("bg-destructive");
  });
});
