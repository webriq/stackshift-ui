import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@stackshift-ui/react";

const meta: Meta<typeof Skeleton> = {
  title: "Common/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    className: "h-4 w-[250px]",
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "CSS classes to apply custom dimensions and styling",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  render: args => <Skeleton {...args} />,
};

export const Sizes: Story = {
  render: args => (
    <div className="space-y-4">
      <Skeleton className="h-2 w-[100px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-6 w-[300px]" />
      <Skeleton className="h-8 w-[250px]" />
    </div>
  ),
};

export const Shapes: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Rectangle</p>
        <Skeleton className="h-4 w-[250px]" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Square</p>
        <Skeleton className="h-12 w-12" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Circle</p>
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Rounded Rectangle</p>
        <Skeleton className="h-8 w-[200px] rounded-lg" />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: args => (
    <div className="border rounded-lg p-6 w-[350px] space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: args => (
    <div className="space-y-4 w-[400px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-3 w-[60%]" />
            <Skeleton className="h-3 w-[40%]" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
      ))}
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: args => (
    <div className="w-full">
      <div className="border rounded-lg">
        {/* Header */}
        <div className="border-b p-4">
          <div className="flex space-x-4">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[80px]" />
          </div>
        </div>
        
        {/* Rows */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border-b last:border-b-0 p-4">
            <div className="flex space-x-4">
              <Skeleton className="h-3 w-[100px]" />
              <Skeleton className="h-3 w-[150px]" />
              <Skeleton className="h-3 w-[120px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const CustomAnimation: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default Animation</p>
        <Skeleton className="h-4 w-[250px]" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">No Animation</p>
        <Skeleton className="h-4 w-[250px] animate-none" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Custom Color</p>
        <Skeleton className="h-4 w-[250px] bg-blue-200" />
      </div>
    </div>
  ),
};