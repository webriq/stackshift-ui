import { dirname, join, resolve } from "path";

const config = {
  features: {
    backgroundsStoryGlobals: true,
  },
  stories: [
    "../welcome.mdx", // first page to open when storybook is running
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
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

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
