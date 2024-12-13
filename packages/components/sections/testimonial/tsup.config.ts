import { rdiPlugin } from "esbuild-plugin-rdi";
import react18Plugin from "esbuild-plugin-react18";
import cssPlugin from "esbuild-plugin-react18-css";
import { defineConfig, type Options } from "tsup";

export default defineConfig(
  (options: Options) =>
    ({
      format: ["cjs", "esm"],
      target: "es2019",
      entry: ["./src/**"],
      sourcemap: false,
      clean: !options.watch,
      bundle: true,
      minify: !options.watch,
      esbuildPlugins: [
        react18Plugin(),
        cssPlugin({ generateScopedName: "[folder]__[local]" }),
        rdiPlugin(),
      ],
      esbuildOptions(options: Options) {
        options.define = {
          ...options.define,
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
        };
        options.loader = { ".js": "jsx" };
        return options;
      },
      external: ["react"],
      ...options,
    }) as Options,
);
