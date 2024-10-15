import { Heading, Section } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
  tags: ["autodocs"],
  args: {
    children: "Heading",
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

export const Primary: Story = {
  render: ({ children }) => (
    <Section>
      <Heading type="h1">{children}</Heading>
    </Section>
  ),
};
