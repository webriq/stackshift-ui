import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Input } from "./input";

describe.concurrent("input", () => {
  afterEach(cleanup);

  test("Common: Input - test if renders without errors", ({ expect }) => {
    const clx = "input-class";
    render(<Input className={clx} placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input.classList).toContain(clx);
  });

  test("Common: Input - test with aria-label", ({ expect }) => {
    render(<Input aria-label="Test input" />);
    const input = screen.getByLabelText("Test input");
    expect(input.tagName.toLowerCase()).toBe("input");
  });

  test("Common: Input - test with different types", ({ expect }) => {
    render(<Input type="email" placeholder="Enter your email" />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input.getAttribute("type")).toBe("email");

    render(<Input type="password" placeholder="Enter your password" />);
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    expect(passwordInput.getAttribute("type")).toBe("password");

    render(<Input type="number" placeholder="Enter your age" />);
    const numberInput = screen.getByPlaceholderText("Enter your age");
    expect(numberInput.getAttribute("type")).toBe("number");

    render(<Input type="tel" placeholder="Enter your phone number" />);
    const telInput = screen.getByPlaceholderText("Enter your phone number");
    expect(telInput.getAttribute("type")).toBe("tel");
  });

  test("Common: Input - test with required attribute", ({ expect }) => {
    render(<Input type="text" placeholder="Enter your name" required />);
    const input = screen.getByPlaceholderText("Enter your name");
    expect(input.getAttribute("required")).toBe("");
  });
});
