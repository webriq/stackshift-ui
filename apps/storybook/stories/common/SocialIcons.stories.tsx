import { SocialIcon, Socials } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SocialIcon> = {
  title: "Common/Social Icons",
  component: SocialIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof SocialIcon>;

export const AllIcons: Story = {
  render: () => {
    const icons = ["facebook", "linkedin", "instagram", "youtube"];
    return (
      <div className="flex gap-4">
        {icons.map((i, index) => (
          <SocialIcon social={i as Socials} key={index} />
        ))}
      </div>
    );
  },
};
