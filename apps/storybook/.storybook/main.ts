// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

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
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },

  async viteFinal(config: Record<string, unknown>) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },
      plugins: [
        // Fix for Storybook 10 MDX file:// URL issue in monorepos
        // https://github.com/storybookjs/storybook/issues/33537
        {
          name: "fix-mdx-react-shim",
          enforce: "pre" as const,
          resolveId(source: string) {
            if (source.startsWith("file://") && source.includes("mdx-react-shim")) {
              return fileURLToPath(source);
            }
            return null;
          },
        },
        ...((config.plugins as unknown[]) || []),
      ],
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
