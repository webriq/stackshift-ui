import sharedTWConfig from "@stackshift-ui/tailwind-config/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/components/common/**/src/*.{ts,tsx}",
    "../../packages/components/layout/**/src/*.{ts,tsx}",
    "../../packages/components/sections/**/src/*.{ts,tsx}",

    // Exclude node_modules from being matched
    "!../../packages/components/**/node_modules/**/*",
  ],
  safelist: [
    // Social icon brand colors
    "text-blue-600",
    "text-blue-700",
    "text-gray-800",
    "text-gray-900",
    "text-pink-600",
    "text-red-600",
    "text-red-700",
    "text-indigo-600",
    "text-black",
    "text-white",
  ],
  presets: [sharedTWConfig],
};

export default config;
