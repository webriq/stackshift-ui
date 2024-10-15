import { resolve } from "path";

const config = {
  stories: [
    "../welcome.mdx", // first page to open when storybook is running
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@chromatic-com/storybook"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },

  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "react",
            replacement: resolve(__dirname, "../../../packages/core/react"),
          },
          {
            find: "system",
            replacement: resolve(__dirname, "../../../packages/core/system"),
          },
        ],
      },
    };
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
