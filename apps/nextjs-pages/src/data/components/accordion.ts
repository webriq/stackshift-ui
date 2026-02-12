import type { ComponentDoc } from "./index";

export const accordionDoc: ComponentDoc = {
  name: "Accordion",
  slug: "accordion",
  description:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
  useCases: [
    "FAQs and help sections where users need to find specific answers",
    "Product feature lists with expandable details",
    "Navigation menus with collapsible sections",
    "Settings panels with grouped options",
    "Content-heavy pages that need to be organized into digestible sections",
  ],
  category: "ui",
  importCode: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@stackshift-ui/accordion";`,
  usageCode: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  props: [
    {
      name: "type",
      type: '"single" | "multiple"',
      required: true,
      description:
        'Determines whether one or multiple items can be opened at the same time. Use "single" for only one item open at a time, "multiple" for any number.',
    },
    {
      name: "collapsible",
      type: "boolean",
      required: false,
      default: "false",
      description:
        'When type is "single", allows closing content when clicking the trigger of an open item.',
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      required: false,
      description:
        "The value of the item(s) to expand by default (uncontrolled).",
    },
    {
      name: "value",
      type: "string | string[]",
      required: false,
      description: "The controlled value of the item(s) to expand.",
    },
    {
      name: "onValueChange",
      type: "(value: string | string[]) => void",
      required: false,
      description: "Event handler called when the expanded state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "When true, prevents the user from interacting with the accordion.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
  ],
  examples: [
    {
      title: "Default",
      description: "A simple accordion with single item expansion.",
      code: `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match your theme.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
    {
      title: "Multiple",
      description: "Allow multiple items to be open at the same time.",
      code: `<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes! With type="multiple", you can have any number of items open.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      Each item operates independently. Opening one doesn't close others.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
    {
      title: "Default Open",
      description: "Set a default item to be expanded on mount.",
      code: `<Accordion type="single" collapsible defaultValue="item-2" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Item</AccordionTrigger>
    <AccordionContent>
      This item is closed by default.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
    <AccordionContent>
      This item is open by default using defaultValue="item-2".
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
  ],
};
