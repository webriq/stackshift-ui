import { dirname, join, resolve } from "path";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: [
    "../welcome.mdx", // first page to open when storybook is running
    // TODO: Replace line 11-12 with the commented line below once all packages are defined for all stories added
    "../stories/common/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/layout/*.stories.@(js|jsx|mjs|ts|tsx)",
    //"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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

  async viteFinal(config, { configType }) {
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
