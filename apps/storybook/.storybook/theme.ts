import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  // Typography
  fontBase: '"Open sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "StackShift UI",
  brandUrl: "https://www.webriq.com",
  // brandImage:
  //   "https://cdn.sanity.io/images/9itgab5x/production/140d0c9644c0aa1a5dbc817b18e9d3f8d18b43ea-125x124.png",
  brandTarget: "_self",

  // UI
  appBg: "#dae2f0",
  appContentBg: "#ebecf2",
  appPreviewBg: "#ebecf2",
  appBorderColor: "#585C6D",
  appBorderRadius: 2,

  colorPrimary: "#0045d8",
  colorSecondary: "#3576ff",

  // Text colors
  textColor: "#1F2937",
  textInverseColor: "#ffffff",
});
