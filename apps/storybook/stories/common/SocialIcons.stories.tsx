// @ts-nocheck - story demo file
import { SocialIcons } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof SocialIcons> = {
  title: "Common/Social Icons",
  component: SocialIcons,
  tags: ["autodocs"],
} satisfies Meta<typeof SocialIcons>;

export default meta;
type Story = StoryObj<typeof SocialIcons>;

export const AllIcons: Story = {
  render: () => {
    const icons = ["facebook", "linkedin", "instagram", "youtube"];
    return (
      <div className="flex gap-4">
        {icons.map((i, index) => (
          <SocialIcons social={i} key={index} />
        ))}
      </div>
    );
  },
};
