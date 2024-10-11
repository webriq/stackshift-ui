import { Meta } from "@storybook/react/*";
import { Button } from "@stackshift/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    label: "Button Label",
  },
};
