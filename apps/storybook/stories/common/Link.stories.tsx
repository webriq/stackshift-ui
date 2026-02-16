// @ts-nocheck - story demo file
import { Link } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Link> = {
  title: "Common/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    href: "#",
    children: "Link text",
  },
  argTypes: {
    href: {
      control: { type: "text" },
      description: "URL or path the link points to",
    },
    target: {
      control: { type: "radio" },
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Where to open the linked document",
    },
    rel: {
      control: { type: "text" },
      description: "Relationship between current and linked document",
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  render: args => <Link {...args} />,
};

export const ExternalLink: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "External link (opens in new tab)",
  },
  render: args => <Link {...args} />,
};

export const Styled: Story = {
  args: {
    className: "text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors",
    children: "Styled link with hover effects",
  },
  render: args => <Link {...args} />,
};

export const ButtonStyle: Story = {
  args: {
    className:
      "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors no-underline",
    children: "Link styled as button",
  },
  render: args => <Link {...args} />,
};

export const Navigation: Story = {
  render: args => (
    <nav className="space-x-6">
      <Link href="#home" className="text-gray-700 hover:text-gray-900">
        Home
      </Link>
      <Link href="#about" className="text-gray-700 hover:text-gray-900">
        About
      </Link>
      <Link href="#services" className="text-gray-700 hover:text-gray-900">
        Services
      </Link>
      <Link href="#contact" className="text-gray-700 hover:text-gray-900">
        Contact
      </Link>
    </nav>
  ),
};

export const InlineText: Story = {
  render: args => (
    <p className="text-gray-700 max-w-md">
      This is a paragraph with an{" "}
      <Link href="#" className="text-blue-600 hover:underline">
        inline link
      </Link>{" "}
      that demonstrates how links work within text content. You can also have{" "}
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline">
        external links
      </Link>{" "}
      that open in new tabs.
    </p>
  ),
};

export const WithIcons: Story = {
  render: args => (
    <div className="space-y-4">
      <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to previous page
      </Link>

      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800">
        Visit external site
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </Link>

      <Link
        href="mailto:contact@example.com"
        className="inline-flex items-center text-blue-600 hover:text-blue-800">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Send email
      </Link>
    </div>
  ),
};

export const States: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Normal state</p>
        <Link href="#" className="text-blue-600 hover:text-blue-800">
          Normal link
        </Link>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Visited state (simulated)</p>
        <Link href="#" className="text-purple-600 hover:text-purple-800">
          Visited link
        </Link>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Disabled state</p>
        <Link
          href="#"
          className="text-gray-400 cursor-not-allowed pointer-events-none"
          aria-disabled="true">
          Disabled link
        </Link>
      </div>
    </div>
  ),
};

export const Accessibility: Story = {
  render: args => (
    <div className="space-y-4">
      <Link
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded">
        Skip to main content
      </Link>

      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="external-link-desc"
        className="text-blue-600 hover:underline">
        External link with description
      </Link>
      <div id="external-link-desc" className="text-sm text-gray-600">
        Opens in a new tab
      </div>
    </div>
  ),
};
