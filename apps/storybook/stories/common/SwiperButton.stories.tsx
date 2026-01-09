// @ts-nocheck - story demo file
import { SwiperButton } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof SwiperButton> = {
  title: "Common/Swiper Button",
  component: SwiperButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["variant_a", "variant_b"],
    },
    ariaLabel: { control: "text" },
    type: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    className: { control: "text" },
    onClick: { action: "onClick" },
  },
} satisfies Meta<typeof SwiperButton>;

export default meta;
type Story = StoryObj<typeof SwiperButton>;

export const VariantALeft: Story = {
  args: {
    variant: "variant_a",
    type: "left",
    className: "text-primary bg-white w-fit h-fit p-4",
  },
};

export const VariantARight: Story = {
  args: {
    variant: "variant_a",
    type: "right",
    className: "text-primary bg-white w-fit h-fit p-4",
  },
};

export const VariantBLeft: Story = {
  args: {
    variant: "variant_b",
    type: "left",
    className: "text-primary bg-white w-fit h-fit p-4",
  },
};

export const VariantBRight: Story = {
  args: {
    variant: "variant_b",
    type: "right",
    className: "text-primary bg-white w-fit h-fit p-4",
  },
};
