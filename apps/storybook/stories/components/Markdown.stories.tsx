import type { Meta, StoryObj } from "@storybook/react-vite";
import { MarkdownSection } from "@stackshift-ui/react";

const meta: Meta<typeof MarkdownSection> = {
  title: "Components/Markdown",
  component: MarkdownSection,
  tags: ["autodocs"],
} satisfies Meta<typeof MarkdownSection>;

export default meta;

const sampleMarkdown = `# Markdown Section

This section renders **Markdown** content as sanitized HTML.

## Features

- Parses Markdown with \`remark\`
- Converts to HTML via \`remark-rehype\`
- Sanitizes output with \`rehype-sanitize\`

### Example

> Blockquotes, [links](https://webriq.com), and \`inline code\` are all supported.

1. First item
2. Second item
3. Third item
`;

const Template: StoryObj<typeof MarkdownSection> = {
  render: args => <MarkdownSection {...args} />,
};

export const VariantA: StoryObj<typeof MarkdownSection> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        content: sampleMarkdown,
      },
    },
  },
};
