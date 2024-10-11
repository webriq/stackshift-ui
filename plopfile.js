/**
 * Part of this code is taken from @chakra-ui/react package ❤️
 */

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = str => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

/**
 * Converts a string to kebab-case.
 * @param {string} str - The input string.
 * @returns {string} The string in kebab-case.
 */
function toKebabCase(str) {
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/ +/g, "-");
}

const workspaces = ["components/common", "components/section", "core", "hooks", "utilities"];
const generators = ["component", "package", "hook"];

const defaultOutDirs = {
  component: "components/common",
  section: "components/section",
  hook: "hooks",
  package: "utilities",
};

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper("capitalize", text => {
    return capitalize(camelCase(text));
  });
  plop.setHelper("camelCase", text => {
    return camelCase(text);
  });
  plop.setHelper("kebabCase", text => {
    return toKebabCase(text);
  });

  generators.forEach(gen => {
    plop.setGenerator(gen, {
      description: `Generates a ${gen}`,
      prompts: [
        {
          type: "input",
          name: `${gen}Name`,
          message: `Enter ${gen} name:`,

          validate: value => {
            if (!value) {
              return `${gen} name is required`;
            }

            // check is has a valid hook name "use-something"
            if (gen === "hook" && !value.startsWith("use-")) {
              return "Hook name must start with 'use-'";
            }

            // check is case is correct
            if (value !== value.toLowerCase()) {
              return `${gen} name must be in lowercase`;
            }

            // cannot have spaces
            if (value.includes(" ")) {
              return `${gen} name cannot have spaces`;
            }

            return true;
          },
        },
        {
          type: "input",
          name: "description",
          message: `The description of this ${gen}:`,
        },
        {
          type: "list",
          name: "outDir",
          message: `where should this ${gen} live?`,
          default: defaultOutDirs[gen],
          choices: workspaces,
          validate: value => {
            if (!value) {
              return `outDir is required`;
            }

            return true;
          },
        },
      ],
      actions(answers) {
        const actions = [];

        if (!answers) return actions;

        const { description, outDir } = answers;
        const generatorName = answers[`${gen}Name`] ?? "";

        const data = {
          [`${gen}Name`]: generatorName,
          description,
          outDir,
        };

        console.log("🚀 ~ actions ~ data:", data);
        actions.push({
          type: "addMany",
          templateFiles: `scripts/templates/${gen}/**`,
          destination: `./packages/{{outDir}}/{{dashCase ${gen}Name}}`,
          base: `scripts/templates/${gen}`,
          data,
          abortOnFail: true,
        });

        return actions;
      },
    });
  });
};
