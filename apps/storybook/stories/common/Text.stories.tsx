import { Text } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Common/Text",
  component: Text,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible text component for displaying content with various typography styles and semantic meaning.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Sample text content",
    fontSize: "base",
    className: "",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The text content to display",
    },
    fontSize: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      description: "The font size of the text",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is default text content",
    fontSize: "base",
  },
};

export const FontSizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Text fontSize="xs">Extra Small (xs) - This is extra small text for fine print and captions</Text>
      <Text fontSize="sm">Small (sm) - This is small text for secondary information</Text>
      <Text fontSize="base">Base - This is the default text size for body content</Text>
      <Text fontSize="lg">Large (lg) - This is large text for emphasis</Text>
      <Text fontSize="xl">Extra Large (xl) - This is extra large text for headings</Text>
      <Text fontSize="2xl">2XL - This is 2x large text for prominent headings</Text>
      <Text fontSize="3xl">3XL - This is 3x large text for major headings</Text>
      <Text fontSize="4xl">4XL - This is 4x large text for hero content</Text>
      <Text fontSize="5xl">5XL - This is 5x large text for display</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available font sizes displayed with descriptive text for each size.",
      },
    },
  },
};

export const Paragraph: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <Text fontSize="lg" className="font-semibold">
        Typography in User Interface Design
      </Text>
      <Text fontSize="base">
        Typography plays a crucial role in user interface design. It not only conveys information 
        but also establishes hierarchy, creates mood, and enhances the overall user experience. 
        Good typography should be readable, accessible, and aligned with the brand's visual identity.
      </Text>
      <Text fontSize="base">
        When choosing fonts and sizes, consider factors such as readability across different devices, 
        accessibility for users with visual impairments, and the emotional impact of different 
        typefaces. Consistency in typography helps create a cohesive and professional appearance.
      </Text>
      <Text fontSize="sm" className="text-gray-600">
        Remember: Typography is not just about making text look good—it's about making it work effectively 
        for your users and your content.
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of text component used in paragraph content with different sizes and styling.",
      },
    },
  },
};

export const ContentHierarchy: Story = {
  render: () => (
    <div className="max-w-xl space-y-4">
      <Text fontSize="3xl" className="font-bold">
        Article Title
      </Text>
      <Text fontSize="lg" className="text-gray-600">
        This is a subtitle that provides additional context about the article content
      </Text>
      <Text fontSize="base">
        This is the main body text where the primary content would be displayed. 
        It uses the base font size which is optimized for readability.
      </Text>
      <Text fontSize="base" className="font-medium">
        Subheading for Section
      </Text>
      <Text fontSize="base">
        More body content continues here with consistent spacing and typography.
      </Text>
      <Text fontSize="sm" className="text-gray-500">
        Published on March 15, 2024 • 5 min read
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstration of text hierarchy in content layout with titles, subtitles, and body text.",
      },
    },
  },
};

export const ColorVariations: Story = {
  render: () => (
    <div className="space-y-3">
      <Text fontSize="base" className="text-black">
        Default black text for primary content
      </Text>
      <Text fontSize="base" className="text-gray-800">
        Dark gray text for secondary content
      </Text>
      <Text fontSize="base" className="text-gray-600">
        Medium gray text for supporting information
      </Text>
      <Text fontSize="base" className="text-gray-500">
        Light gray text for metadata and captions
      </Text>
      <Text fontSize="base" className="text-blue-600">
        Blue text for links and interactive elements
      </Text>
      <Text fontSize="base" className="text-green-600">
        Green text for success messages
      </Text>
      <Text fontSize="base" className="text-red-600">
        Red text for errors and warnings
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different color variations for text to convey meaning and hierarchy.",
      },
    },
  },
};

export const ResponsiveText: Story = {
  render: () => (
    <div className="space-y-4">
      <Text fontSize="base" className="sm:text-lg md:text-xl lg:text-2xl">
        This text scales responsively: base on mobile, lg on small screens, xl on medium, 2xl on large
      </Text>
      <Text fontSize="sm" className="md:text-base lg:text-lg">
        Secondary text that also adapts: sm on mobile, base on medium, lg on large screens
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text that adapts to different screen sizes using responsive classes.",
      },
    },
  },
};

export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Text fontSize="base" className="text-left">
        Left aligned text (default)
      </Text>
      <Text fontSize="base" className="text-center">
        Center aligned text
      </Text>
      <Text fontSize="base" className="text-right">
        Right aligned text
      </Text>
      <Text fontSize="base" className="text-justify">
        Justified text that spreads evenly across the available width when the content is long enough to wrap to multiple lines.
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different text alignment options for various layout needs.",
      },
    },
  },
};