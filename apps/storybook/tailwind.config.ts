// tailwind config is required for editor support

//import sharedConfig from "@stackshift-ui/react/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./stories/**/*.stories.tsx"],
  //presets: [sharedConfig],
};

export default config;
