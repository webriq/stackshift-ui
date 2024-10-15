import type { Config } from "tailwindcss";

const path = require("path");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../storybook/stories/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@webriq-test/react/")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
export default config;
