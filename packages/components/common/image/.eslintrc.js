/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@stackshift-ui/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
