/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@webriq-test/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
