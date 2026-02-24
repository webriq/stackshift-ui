import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Text } from "./text";

describe.concurrent("text", () => {
  afterEach(cleanup);

  test("Common: Text - test if renders without errors", ({ expect }) => {
    const clx = "text-class";
    render(<Text className={clx}>Test text content</Text>);
    const text = screen.getByText("Test text content");
    screen.debug(text);
    expect(text.classList).toContain(clx);
    expect(text.tagName.toLowerCase()).toBe("p"); // default element
  });

  test("Common: Text - test with different element type", ({ expect }) => {
    render(<Text as="span">Test span</Text>);
    const text = screen.getByText("Test span");
    expect(text.tagName.toLowerCase()).toBe("span");
  });

  test("Common: Test - test with different sizes", ({ expect }) => {
    render(<Text fontSize="lg">Test large text</Text>);
    const text = screen.getByText("Test large text");
    expect(text.classList).toContain("text-lg");

    render(<Text fontSize="xl">Test extra large text</Text>);
    const text2 = screen.getByText("Test extra large text");
    expect(text2.classList).toContain("text-xl");

    render(<Text fontSize="2xl">Test 2x large text</Text>);
    const text3 = screen.getByText("Test 2x large text");
    expect(text3.classList).toContain("text-2xl");

    render(<Text fontSize="3xl">Test 3x large text</Text>);
    const text4 = screen.getByText("Test 3x large text");
    expect(text4.classList).toContain("text-3xl");

    render(<Text fontSize="4xl">Test 4x large text</Text>);
    const text5 = screen.getByText("Test 4x large text");
    expect(text5.classList).toContain("text-4xl");

    render(<Text fontSize="5xl">Test 5x large text</Text>);
    const text6 = screen.getByText("Test 5x large text");
    expect(text6.classList).toContain("text-5xl");
  });

  test("Common: Text - test with different weights", ({ expect }) => {
    render(<Text weight="bold">Test bold text</Text>);
    const text = screen.getByText("Test bold text");
    expect(text.classList).toContain("font-bold");

    render(<Text weight="semibold">Test semibold text</Text>);
    const text2 = screen.getByText("Test semibold text");
    expect(text2.classList).toContain("font-semibold");

    render(<Text weight="medium">Test medium text</Text>);
    const text3 = screen.getByText("Test medium text");
    expect(text3.classList).toContain("font-medium");
  });

  test("Common: Text - test with muted", ({ expect }) => {
    render(<Text muted>Test muted text</Text>);
    const text = screen.getByText("Test muted text");
    expect(text.classList).toContain("text-gray-500");
  });

  test("Common: Text - test with custom class", ({ expect }) => {
    render(<Text className="custom-class">Test custom class</Text>);
    const text = screen.getByText("Test custom class");
    expect(text.classList).toContain("custom-class");
  });

  test("Common: Text - test with custom style", ({ expect }) => {
    render(<Text style={{ color: "red" }}>Test custom style</Text>);
    const text = screen.getByText("Test custom style");
    expect(text.style.color).toBe("red");
  });

  test("Common: Text - test with as prop", ({ expect }) => {
    render(<Text as="h1">Test as prop</Text>);
    const text = screen.getByText("Test as prop");
    expect(text.tagName.toLowerCase()).toBe("h1");
  });
});
