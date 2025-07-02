import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "@stackshift-ui/react";

const meta: Meta<typeof Image> = {
  title: "Common/Image",
  component: Image,
  tags: ["autodocs"],
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
    alt: "Sample image",
    width: 400,
    height: 300,
  },
  argTypes: {
    src: {
      control: { type: "text" },
      description: "Image source URL",
    },
    alt: {
      control: { type: "text" },
      description: "Alternative text for accessibility",
    },
    width: {
      control: { type: "number" },
      description: "Image width",
    },
    height: {
      control: { type: "number" },
      description: "Image height",
    },
    loading: {
      control: { type: "radio" },
      options: ["lazy", "eager"],
      description: "Loading behavior",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Basic: Story = {
  render: args => <Image {...args} />,
};

export const Responsive: Story = {
  args: {
    className: "w-full h-auto max-w-md",
    width: undefined,
    height: undefined,
  },
  render: args => (
    <div className="max-w-md">
      <Image {...args} />
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    className: "rounded-lg",
  },
  render: args => <Image {...args} />,
};

export const Circle: Story = {
  args: {
    className: "rounded-full w-32 h-32 object-cover",
    width: 128,
    height: 128,
  },
  render: args => <Image {...args} />,
};

export const WithBorder: Story = {
  args: {
    className: "border-4 border-gray-300 rounded-lg",
  },
  render: args => <Image {...args} />,
};

export const LazyLoading: Story = {
  args: {
    loading: "lazy",
  },
  render: args => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        This image uses lazy loading (check Network tab to see loading behavior)
      </p>
      <Image {...args} />
    </div>
  ),
};

export const ObjectFit: Story = {
  render: args => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">object-cover</p>
        <div className="w-48 h-32 border">
          <Image 
            {...args} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">object-contain</p>
        <div className="w-48 h-32 border bg-gray-100">
          <Image 
            {...args} 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">object-fill</p>
        <div className="w-48 h-32 border">
          <Image 
            {...args} 
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">object-none</p>
        <div className="w-48 h-32 border bg-gray-100">
          <Image 
            {...args} 
            className="w-full h-full object-none"
          />
        </div>
      </div>
    </div>
  ),
};

export const Gallery: Story = {
  render: args => (
    <div className="grid grid-cols-3 gap-4 max-w-2xl">
      {Array.from({ length: 9 }).map((_, i) => (
        <Image
          key={i}
          src={`https://images.unsplash.com/photo-${1472099645785 + i}?w=200&h=200&fit=crop`}
          alt={`Gallery image ${i + 1}`}
          className="w-full h-32 object-cover rounded-md hover:opacity-80 transition-opacity cursor-pointer"
        />
      ))}
    </div>
  ),
};

export const WithFallback: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.jpg",
    alt: "Image that fails to load",
  },
  render: args => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        This demonstrates what happens when an image fails to load
      </p>
      <div className="w-64 h-48 border border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
        <Image 
          {...args}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden text-center text-gray-500 p-4">
          <div className="text-4xl mb-2">📷</div>
          <div className="text-sm">Image failed to load</div>
        </div>
      </div>
    </div>
  ),
};