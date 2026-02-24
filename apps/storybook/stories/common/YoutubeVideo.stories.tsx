import { YoutubeVideo } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Common/Youtube Video",
  component: YoutubeVideo,
  tags: ["autodocs"],
  args: {
    videoLinkId: "HfPdTL7Isx8",
    title: "Build & Launch without problems",
  },
  decorators: [
    Story => (
      <div className="max-w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof YoutubeVideo>;

export default meta;
type Story = StoryObj<typeof YoutubeVideo>;

export const Primary: Story = {};
