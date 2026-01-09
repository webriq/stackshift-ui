// @ts-nocheck - story demo file
import { TextComponent } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof TextComponent> = {
  title: "Components/Text Component",
  component: TextComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof TextComponent>;

export default meta;

const Template: StoryObj<typeof TextComponent> = {
  render: args => <TextComponent {...args} />,
};

export const VariantA: StoryObj<typeof TextComponent> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        title: "Trusted by brands all over the world",
        firstColumn: [
          {
            _key: "unique-key",
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
              {
                _type: "span",
                text: "Etiam facilisis mauris leo, eu aliquet est iaculis eu. Mauris vitae pellentesque augue, quis efficitur elit. Suspendisse potenti. Vivamus et sem eget ligula bibendum pulvinar. Nullam libero velit, efficitur ut dui eget, tempus ultricies felis. Pellentesque ut lorem id velit aliquam pharetra id placerat purus. Aliquam erat mauris, cursus eget cursus in, rutrum et nisi. Phasellus consequat vehicula metus non sagittis. Sed quis ipsum non velit tempus consequat sit amet eget augue. Donec feugiat ultricies ultrices",
              },
            ],
          },
        ],
      },
    },
  },
};

export const VariantB: StoryObj<typeof TextComponent> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        title: "Trusted by brands all over the world",
        firstColumn: [
          {
            _key: "unique-key",
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
              {
                _type: "span",
                text: "Etiam facilisis mauris leo, eu aliquet est iaculis eu. Mauris vitae pellentesque augue, quis efficitur elit. Suspendisse potenti. Vivamus et sem eget ligula bibendum pulvinar. Nullam libero velit, efficitur ut dui eget, tempus ultricies felis. Pellentesque ut lorem id velit aliquam pharetra id placerat purus. Aliquam erat mauris, cursus eget cursus in, rutrum et nisi. Phasellus consequat vehicula metus non sagittis. Sed quis ipsum non velit tempus consequat sit amet eget augue. Donec feugiat ultricies ultrices",
              },
            ],
          },
        ],
        secondColumn: [
          {
            _key: "unique-key-2",
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
              {
                _type: "span",
                text: "Etiam facilisis mauris leo, eu aliquet est iaculis eu. Mauris vitae pellentesque augue, quis efficitur elit. Suspendisse potenti. Vivamus et sem eget ligula bibendum pulvinar. Nullam libero velit, efficitur ut dui eget, tempus ultricies felis. Pellentesque ut lorem id velit aliquam pharetra id placerat purus. Aliquam erat mauris, cursus eget cursus in, rutrum et nisi. Phasellus consequat vehicula metus non sagittis. Sed quis ipsum non velit tempus consequat sit amet eget augue. Donec feugiat ultricies ultrices",
              },
            ],
          },
        ],
      },
    },
  },
};

export const VariantC: StoryObj<typeof TextComponent> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        title: "Trusted by brands all over the world",
        firstColumn: [
          {
            _key: "unique-key",
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
              {
                _type: "span",
                text: "Etiam facilisis mauris leo, eu aliquet est iaculis eu. Mauris vitae pellentesque augue, quis efficitur elit. Suspendisse potenti. Vivamus et sem eget ligula bibendum pulvinar. Nullam libero velit, efficitur ut dui eget, tempus ultricies felis. Pellentesque ut lorem id velit aliquam pharetra id placerat purus. Aliquam erat mauris, cursus eget cursus in, rutrum et nisi. Phasellus consequat vehicula metus non sagittis. Sed quis ipsum non velit tempus consequat sit amet eget augue. Donec feugiat ultricies ultrices",
              },
            ],
          },
        ],
        secondColumn: [
          {
            _key: "unique-key-2",
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
              {
                _type: "span",
                text: "Etiam facilisis mauris leo, eu aliquet est iaculis eu. Mauris vitae pellentesque augue, quis efficitur elit. Suspendisse potenti. Vivamus et sem eget ligula bibendum pulvinar. Nullam libero velit, efficitur ut dui eget, tempus ultricies felis. Pellentesque ut lorem id velit aliquam pharetra id placerat purus. Aliquam erat mauris, cursus eget cursus in, rutrum et nisi. Phasellus consequat vehicula metus non sagittis. Sed quis ipsum non velit tempus consequat sit amet eget augue. Donec feugiat ultricies ultrices",
              },
            ],
          },
        ],
        thirdColumn: [
          {
            _key: "unique-key-3",
            style: "normal",
            _type: "block",
            markDefs: [],
            children: [
              {
                _type: "span",
                text: "Etiam facilisis mauris leo, eu aliquet est iaculis eu. Mauris vitae pellentesque augue, quis efficitur elit. Suspendisse potenti. Vivamus et sem eget ligula bibendum pulvinar. Nullam libero velit, efficitur ut dui eget, tempus ultricies felis. Pellentesque ut lorem id velit aliquam pharetra id placerat purus. Aliquam erat mauris, cursus eget cursus in, rutrum et nisi. Phasellus consequat vehicula metus non sagittis. Sed quis ipsum non velit tempus consequat sit amet eget augue. Donec feugiat ultricies ultrices",
              },
            ],
          },
        ],
      },
    },
  },
};
