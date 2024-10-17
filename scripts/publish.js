/** It is assumed that this is called only from the default branch. */
const { execSync } = require("child_process");

// Apply changesets if any -- e.g., coming from pre-release branches
try {
  execSync("pnpm changeset pre exit");
} catch {
  // empty
}
try {
  execSync("pnpm changeset version");
  execSync(
    `git add . && git commit -m "Apply changesets and update CHANGELOG" && git push origin ${process.env.BRANCH}`,
  );
} catch {
  // no changesets to be applied
}

const { version: VERSION, name } = require("../packages/core/react/package.json");
let LATEST_VERSION = "0.0.-1";

try {
  LATEST_VERSION = execSync(`npm view ${name} version`).toString().trim() ?? "0.0.5";
} catch {
  // empty
}

console.log({ VERSION, LATEST_VERSION });

const [newMajor, newMinor] = VERSION.split(".");
const [oldMajor, oldMinor] = LATEST_VERSION.split(".");

const isPatch = newMajor === oldMajor && newMinor === oldMinor;

if (!isPatch) {
  require("./update-security-md")(`${newMajor}.${newMinor}`, `${oldMajor}.${oldMinor}`);
  /** Create new release branch for every Major or Minor release */
  const releaseBranch = `release-${newMajor}.${newMinor}`;
  execSync(`git checkout -b ${releaseBranch} && git push origin ${releaseBranch}`);
}

const { visibility } = JSON.parse(execSync("gh repo view --json visibility").toString());
const provenance = visibility.toLowerCase() === "public" ? "--provenance" : "";

/** Create release */
execSync(`cd lib && pnpm build && npm publish ${provenance} --access public`);

/** Create GitHub release */
execSync(
  `gh release create ${VERSION} --generate-notes --latest -n "$(sed '1,/^## /d;/^## /,$d' CHANGELOG.md)" --title "Release v${VERSION}"`,
);

execSync("node ./scripts/lite.js");
execSync(`cd lib && pnpm build && npm publish ${provenance} --access public`);
