import { PortableText } from "@portabletext/react";
import { defaultBlockStyle, Heading } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import deepmerge from "deepmerge";

const DUMMY_PORTABLE_DATA = [
  {
    _key: "b94b23c4e304",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "HEADING 1",
        _key: "5494ced50fc2",
      },
    ],
    _type: "block",
    style: "h1",
  },
  {
    children: [
      {
        _type: "span",
        marks: [],
        text: "HEADING 2",
        _key: "04166d6b0eb6",
      },
    ],
    _type: "block",
    style: "h2",
    _key: "4b017195514c",
    markDefs: [],
  },
  {
    markDefs: [],
    children: [
      {
        marks: [],
        text: "HEADING 3",
        _key: "e9eb014b1616",
        _type: "span",
      },
    ],
    _type: "block",
    style: "h3",
    _key: "2ac1eb7bbbf6",
  },
  {
    children: [
      {
        _type: "span",
        marks: [],
        text: "HEADING 4",
        _key: "09bd3ccdf332",
      },
    ],
    _type: "block",
    style: "h4",
    _key: "2f86bde6d252",
    markDefs: [],
  },
  {
    style: "h5",
    _key: "46387bc8682c",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "HEADING 5",
        _key: "15c6e8ff67c8",
      },
    ],
    _type: "block",
  },
  {
    style: "h6",
    _key: "b39d7b6c3900",
    markDefs: [],
    children: [
      {
        text: "HEADING 6",
        _key: "c9fc5e943dfc",
        _type: "span",
        marks: [],
      },
    ],
    _type: "block",
  },
  {
    markDefs: [],
    children: [
      {
        _key: "2ed46e54ea89",
        _type: "span",
        marks: [],
        text: "QUOTE",
      },
    ],
    _type: "block",
    style: "blockquote",
    _key: "f09fda873227",
  },
  {
    children: [
      {
        marks: [],
        text: "NORMAL",
        _key: "0d401d5e6510",
        _type: "span",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "46a3eb0ac47d",
    markDefs: [],
  },
  {
    children: [
      {
        _type: "span",
        marks: ["strong"],
        text: "BOLD",
        _key: "a3e1e4cadd67",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "54377c5ac879",
    markDefs: [],
  },
  {
    _type: "block",
    style: "normal",
    _key: "b7ee435f763c",
    markDefs: [],
    children: [
      {
        text: "ITALIC",
        _key: "d6898cb42ada",
        _type: "span",
        marks: ["em"],
      },
    ],
  },
  {
    markDefs: [],
    children: [
      {
        text: "CODE",
        _key: "bb704cdff8f5",
        _type: "span",
        marks: ["code"],
      },
    ],
    _type: "block",
    style: "normal",
    _key: "90575d415a73",
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: ["underline"],
        text: "UNDERLINE",
        _key: "b8200a2ce28b",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "7cc2fe9cfd36",
  },
  {
    children: [
      {
        marks: ["strike-through"],
        text: "STRIKE",
        _key: "f4be00bc0984",
        _type: "span",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "4dbccbf5b121",
    markDefs: [],
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "BULLET 1",
        _key: "547d38c15232",
      },
    ],
    level: 1,
    _type: "block",
    style: "normal",
    _key: "df585340f944",
    listItem: "bullet",
  },
  {
    level: 1,
    _type: "block",
    style: "normal",
    _key: "795b4744df1d",
    listItem: "bullet",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "BULLET 2",
        _key: "1d77a36a0023",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    _key: "86ad1caf3c48",
    listItem: "number",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "NUMBERED 1",
        _key: "5e31dba7c689",
      },
    ],
    level: 1,
  },
  {
    level: 1,
    _type: "block",
    style: "normal",
    _key: "30ff76de2154",
    listItem: "number",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "NUMBERED 2",
        _key: "c8e5dcc01af6",
      },
    ],
  },
  {
    markDefs: [
      {
        _type: "link",
        href: "webriq.com",
        _key: "caac08e48bec",
      },
    ],
    children: [
      {
        _type: "span",
        marks: ["caac08e48bec"],
        text: "LINK",
        _key: "a886d6f6a3b1",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "6bf02f510dc2",
  },
];

const meta: Meta<typeof PortableText> = {
  title: "Common/Blockstyle",
  component: PortableText,
  // tags: ["autodocs"],
  args: {
    value: DUMMY_PORTABLE_DATA,
    components: defaultBlockStyle,
  },
} satisfies Meta<typeof PortableText>;

export default meta;
type Story = StoryObj<typeof PortableText>;

export const Primary: Story = {};

const myBlock = {
  block: {
    h1: ({ children }: any) => {
      return (
        <Heading type="h1" weight="extra-bold" fontSize="2xl" className="text-black">
          {children}
        </Heading>
      );
    },
  },
};
const newBlock = deepmerge(defaultBlockStyle, myBlock);

export const CustomBlockStyle: Story = {
  args: {
    components: newBlock,
  },
};
