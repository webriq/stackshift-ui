/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@stackshift-ui/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
