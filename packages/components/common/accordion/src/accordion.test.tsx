import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

describe("accordion", () => {
  test("Common: Accordion - test if renders without errors", async () => {
    const clx = "accordion-class";

    render(
      <Accordion data-testid="accordion" type="single" className={clx} collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="accordion-trigger">First item</AccordionTrigger>
          <AccordionContent>This is the first accordion item content.</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const accordion = screen.getByTestId("accordion");

    expect(accordion.classList).toContain(clx);

    const firstItem = accordion.querySelector("[data-slot=accordion-item]");
    expect(firstItem).toBeDefined();

    const trigger = screen.getByTestId("accordion-trigger");
    expect(trigger).toBeDefined();

    expect(screen.queryByText("This is the first accordion item content.")).toBeNull();

    const user = userEvent.setup();
    await user.click(trigger);

    expect(await screen.findByText("This is the first accordion item content.")).toBeDefined();
  });

  test("Common: Accordion - test if renders with multiple items", async () => {
    const clx = "accordion-class";

    render(
      <Accordion data-testid="accordion-multiple" type="multiple" className={clx}>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="accordion-trigger">First item</AccordionTrigger>
          <AccordionContent>This is the first accordion item content.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger data-testid="accordion-trigger">Second item</AccordionTrigger>
          <AccordionContent>This is the second accordion item content.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger data-testid="accordion-trigger">Third item</AccordionTrigger>
          <AccordionContent>This is the third accordion item content.</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const accordion = screen.getByTestId("accordion-multiple");
    expect(accordion.classList).toContain(clx);

    const items = accordion.querySelectorAll("[data-slot=accordion-item]");
    expect(items.length).toBe(3);

    const triggers = screen.getAllByTestId("accordion-trigger");
    expect(triggers.length).toBe(3);

    const user = userEvent.setup();

    await user.click(triggers[0]);
    expect(
      await screen.findByText("This is the first accordion item content."),
    ).toBeInTheDocument();

    await user.click(triggers[1]);
    expect(
      await screen.findByText("This is the second accordion item content."),
    ).toBeInTheDocument();
  });
});
