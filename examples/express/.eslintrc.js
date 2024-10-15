/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@webriq-test/eslint-config/server.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
