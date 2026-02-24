import { SwiperPagination } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SwiperPagination> = {
  title: "Common/Swiper Pagination",
  component: SwiperPagination,
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      control: { type: "radio" },
      options: ["blue", "white"],
    },
    isActive: { control: "boolean" },
    className: { control: "text" },
    ariaLabel: { control: "text" },
    onClick: { action: "onClick" },
  },
} satisfies Meta<typeof SwiperPagination>;

export default meta;
type Story = StoryObj<typeof SwiperPagination>;

export const Blue: Story = {
  args: {
    colorScheme: "blue",
    isActive: true,
  },
};
