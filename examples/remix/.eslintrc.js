/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@stackshift-ui/eslint-config/remix.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
