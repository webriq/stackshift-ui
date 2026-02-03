import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, TooltipContent, TooltipTrigger, Button } from "@stackshift-ui/react";

const meta: Meta<typeof Tooltip> = {
  title: "Common/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    delayDuration: {
      control: { type: "number" },
      description: "Delay in milliseconds before the tooltip appears",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: args => (
    <div className="flex justify-center p-8">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  args: {
    delayDuration: 1000,
  },
  render: args => (
    <div className="flex justify-center p-8">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me (1s delay)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears after 1 second</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: args => (
    <div className="grid grid-cols-2 gap-8 p-16">
      <div className="flex justify-center">
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex justify-center">
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex justify-center">
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex justify-center">
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  render: args => (
    <div className="flex justify-center p-8">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Rich Content</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-1">
            <p className="font-semibold">Rich Tooltip</p>
            <p className="text-xs">This tooltip contains multiple elements and custom styling.</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  render: args => (
    <div className="flex justify-center p-8">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Information tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};