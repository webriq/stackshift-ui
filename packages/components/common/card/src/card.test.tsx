import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

describe.concurrent("Card Components", () => {
  afterEach(cleanup);

  describe("Card", () => {
    afterEach(cleanup);

    test("Common: Card - test if renders without errors", ({ expect }) => {
      const { unmount } = render(<Card data-testid="card-1" />);
      expect(screen.getByTestId("card-1")).toBeInTheDocument();
      unmount();
    });

    test("Common: Card - test if renders with custom className", ({ expect }) => {
      const customClass = "my-custom-class";
      const { unmount } = render(
        <Card data-testid="card-with-custom-class" className={customClass} />,
      );
      expect(screen.getByTestId("card-with-custom-class")).toHaveClass(customClass);
      unmount();
    });

    test("applies default classes", ({ expect }) => {
      const { unmount } = render(<Card data-testid="card-with-default-classes" />);
      const card = screen.getByTestId("card-with-default-classes");
      expect(card).toHaveClass(
        "rounded-lg",
        "border",
        "bg-card",
        "text-card-foreground",
        "shadow-sm",
      );
      unmount();
    });

    test("Common: Card - test if renders with custom id and role", ({ expect }) => {
      const { unmount } = render(
        <Card data-testid="card-with-id-and-role" id="test-id" role="region" />,
      );
      const card = screen.getByTestId("card-with-id-and-role");
      expect(card).toHaveAttribute("id", "test-id");
      expect(card).toHaveAttribute("role", "region");
      unmount();
    });

    test("Common: Card - test if renders with custom content", ({ expect }) => {
      const { unmount } = render(
        <Card data-testid="card-with-content">
          <span>Card With custom content</span>
        </Card>,
      );
      expect(screen.getByText("Card With custom content")).toBeInTheDocument();
      unmount();
    });
  });

  describe("CardHeader", () => {
    afterEach(cleanup);

    test("Common: CardHeader - test if renders without errors", ({ expect }) => {
      const { unmount } = render(<CardHeader data-testid="card-header" />);
      expect(screen.getByTestId("card-header")).toBeInTheDocument();
      unmount();
    });

    test("Common: CardHeader - test default classes", ({ expect }) => {
      const { unmount } = render(<CardHeader data-testid="card-header-with-default-classes" />);
      const header = screen.getByTestId("card-header-with-default-classes");
      expect(header).toHaveClass("flex", "flex-col", "space-y-1.5", "p-6");
      unmount();
    });

    test("Common: CardHeader - test if renders with custom className", ({ expect }) => {
      const customClass = "custom-header-class";
      const { unmount } = render(
        <CardHeader data-testid="card-header-with-custom-class" className={customClass} />,
      );
      expect(screen.getByTestId("card-header-with-custom-class")).toHaveClass(customClass);
      unmount();
    });
  });

  describe("CardTitle", () => {
    afterEach(cleanup);

    test("Common: CardTitle - test if renders without errors", ({ expect }) => {
      const { unmount } = render(<CardTitle data-testid="card-title" />);
      expect(screen.getByTestId("card-title")).toBeInTheDocument();
      unmount();
    });

    test("Common: CardTitle - test default classes", ({ expect }) => {
      const { unmount } = render(<CardTitle data-testid="card-title-with-default-classes" />);
      const title = screen.getByTestId("card-title-with-default-classes");
      expect(title).toHaveClass("text-2xl", "font-semibold", "leading-none", "tracking-tight");
      unmount();
    });

    test("Common: CardTitle - test if renders with custom className", ({ expect }) => {
      const customClass = "custom-title-class";
      const { unmount } = render(
        <CardTitle data-testid="card-title-with-custom-class" className={customClass} />,
      );
      expect(screen.getByTestId("card-title-with-custom-class")).toHaveClass(customClass);
      unmount();
    });

    test("Common: CardTitle - test if renders with custom content", ({ expect }) => {
      const { unmount } = render(
        <CardTitle data-testid="card-title-with-content">Card Title With Content</CardTitle>,
      );
      expect(screen.getByText("Card Title With Content")).toBeInTheDocument();
      unmount();
    });
  });

  describe("CardDescription", () => {
    afterEach(cleanup);

    test("Common: CardDescription - test if renders without errors", ({ expect }) => {
      const { unmount } = render(<CardDescription data-testid="card-description" />);
      expect(screen.getByTestId("card-description")).toBeInTheDocument();
      unmount();
    });

    test("Common: CardDescription - test default classes", ({ expect }) => {
      const { unmount } = render(
        <CardDescription data-testid="card-description-with-default-classes" />,
      );
      const description = screen.getByTestId("card-description-with-default-classes");
      expect(description.getAttribute("class")).toContain("text-sm text-muted-foreground");
      unmount();
    });

    test("Common: CardDescription - test if renders with custom className", ({ expect }) => {
      const customClass = "custom-description-class";
      const { unmount } = render(
        <CardDescription
          data-testid="card-description-with-custom-class"
          className={customClass}
        />,
      );
      expect(
        screen.getByTestId("card-description-with-custom-class").getAttribute("class"),
      ).toContain(customClass);
      unmount();
    });

    test("Common: CardDescription - test if renders with custom content", ({ expect }) => {
      const { unmount } = render(
        <CardDescription data-testid="card-description">Test Description</CardDescription>,
      );
      expect(screen.getByText("Test Description")).toBeInTheDocument();
      unmount();
    });
  });

  describe("CardContent", () => {
    afterEach(cleanup);

    test("Common: CardContent - test if renders without errors", ({ expect }) => {
      const { unmount } = render(<CardContent data-testid="card-content" />);
      expect(screen.getByTestId("card-content")).toBeInTheDocument();
      unmount();
    });

    test("Common: CardContent - test default classes", ({ expect }) => {
      const { unmount } = render(<CardContent data-testid="card-content-with-default-classes" />);
      const content = screen.getByTestId("card-content-with-default-classes");
      expect(content.getAttribute("class")).toContain("p-6 pt-0");
      unmount();
    });

    test("Common: CardContent - test if renders with custom className", ({ expect }) => {
      const customClass = "custom-content-class";
      const { unmount } = render(
        <CardContent data-testid="card-content-with-custom-class" className={customClass} />,
      );
      expect(screen.getByTestId("card-content-with-custom-class").getAttribute("class")).toContain(
        customClass,
      );
      unmount();
    });

    test("Common: CardContent - test if renders with custom content", ({ expect }) => {
      const { unmount } = render(
        <CardContent data-testid="card-content">Test Content</CardContent>,
      );
      expect(screen.getByText("Test Content")).toBeInTheDocument();
      unmount();
    });
  });

  describe("CardFooter", () => {
    afterEach(cleanup);

    test("Common: CardFooter - test if renders without errors", ({ expect }) => {
      const { unmount } = render(<CardFooter data-testid="card-footer" />);
      expect(screen.getByTestId("card-footer")).toBeInTheDocument();
      unmount();
    });

    test("Common: CardFooter - test default classes", ({ expect }) => {
      const { unmount } = render(<CardFooter data-testid="card-footer-with-default-classes" />);
      const footer = screen.getByTestId("card-footer-with-default-classes");
      expect(footer.getAttribute("class")).toContain("flex items-center p-6 pt-0");
      unmount();
    });

    test("Common: CardFooter - test if renders with custom className", ({ expect }) => {
      const customClass = "custom-footer-class";
      const { unmount } = render(
        <CardFooter data-testid="card-footer-with-custom-class" className={customClass} />,
      );
      expect(screen.getByTestId("card-footer-with-custom-class").getAttribute("class")).toContain(
        customClass,
      );
      unmount();
    });

    test("Common: CardFooter - test if renders with custom content", ({ expect }) => {
      const { unmount } = render(<CardFooter data-testid="card-footer">Footer Content</CardFooter>);
      expect(screen.getByText("Footer Content")).toBeInTheDocument();
      unmount();
    });
  });

  describe("Card Integration", () => {
    afterEach(cleanup);

    test("Common: Card - test if renders with all components", ({ expect }) => {
      const { unmount } = render(
        <Card data-testid="card-with-all-components">
          <CardHeader data-testid="card-header-with-all-components">
            <CardTitle data-testid="card-title-with-all-components">Card Title</CardTitle>
            <CardDescription data-testid="card-description-with-all-components">
              Card Description
            </CardDescription>
          </CardHeader>
          <CardContent data-testid="card-content-with-all-components">
            <p>This is the card content.</p>
          </CardContent>
          <CardFooter data-testid="card-footer-with-all-components">
            <button>Action Button</button>
          </CardFooter>
        </Card>,
      );

      // Verify all components are rendered
      expect(screen.getByTestId("card-with-all-components")).toBeInTheDocument();
      expect(screen.getByTestId("card-header-with-all-components")).toBeInTheDocument();
      expect(screen.getByTestId("card-title-with-all-components")).toBeInTheDocument();
      expect(screen.getByTestId("card-description-with-all-components")).toBeInTheDocument();
      expect(screen.getByTestId("card-content-with-all-components")).toBeInTheDocument();
      expect(screen.getByTestId("card-footer-with-all-components")).toBeInTheDocument();

      // Verify content is rendered correctly
      expect(screen.getByText("Card Title")).toBeInTheDocument();
      expect(screen.getByText("Card Description")).toBeInTheDocument();
      expect(screen.getByText("This is the card content.")).toBeInTheDocument();
      expect(screen.getByText("Action Button")).toBeInTheDocument();
      unmount();
    });

    test("Common: Card - test if components are rendered in correct order", ({ expect }) => {
      const { unmount } = render(
        <Card data-testid="card-content-order">
          <CardHeader data-testid="card-header-content-order">
            <CardTitle data-testid="card-title-content-order">Title</CardTitle>
          </CardHeader>
          <CardContent data-testid="card-content-content-order">Content</CardContent>
        </Card>,
      );

      const card = screen.getByTestId("card-content-order");
      const header = screen.getByTestId("card-header-content-order");
      const title = screen.getByTestId("card-title-content-order");
      const content = screen.getByTestId("card-content-content-order");

      // Verify hierarchy
      expect(card).toContainElement(header);
      expect(card).toContainElement(content);
      expect(header).toContainElement(title);
      unmount();
    });
  });

  describe("Accessibility", () => {
    afterEach(cleanup);

    test("Common: Card - test if renders with correct role", ({ expect }) => {
      const { unmount } = render(
        <Card data-testid="card" role="article">
          <CardHeader data-testid="card-header">
            <CardTitle data-testid="card-title">Accessible Title</CardTitle>
            <CardDescription data-testid="card-description">Accessible Description</CardDescription>
          </CardHeader>
          <CardContent data-testid="card-content">Accessible Content</CardContent>
          <CardFooter data-testid="card-footer">Accessible Footer</CardFooter>
        </Card>,
      );

      expect(screen.getByRole("article")).toBeInTheDocument();
      expect(screen.getByText("Accessible Title")).toBeInTheDocument();
      expect(screen.getByText("Accessible Description")).toBeInTheDocument();
      unmount();
    });

    test("Common: Card - test if renders with ARIA attributes", ({ expect }) => {
      const { unmount } = render(
        <Card
          data-testid="card-with-aria"
          aria-label="Test card"
          aria-describedby="card-description">
          <CardContent id="card-description">Card with ARIA attributes</CardContent>
        </Card>,
      );

      const card = screen.getByTestId("card-with-aria");
      expect(card).toHaveAttribute("aria-label", "Test card");
      expect(card).toHaveAttribute("aria-describedby", "card-description");
      unmount();
    });
  });
});
