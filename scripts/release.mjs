#!/usr/bin/env zx

function getNextRelease(releaseType, current) {
  const { versionType } = releaseType;
  const [majorWithVersionPrefix, minor, patch] = current.split('.');
  const major = majorWithVersionPrefix.replace('v', '');

  switch (versionType) {
    case 'major':
      return `${parseInt(major) + 1}.0.0`;
    case 'minor':
      return `${parseInt(major)}.${parseInt(minor) + 1}.0`;
    case 'patch':
      return `${parseInt(major)}.${parseInt(minor)}.${parseInt(patch) + 1}`;
  }
}

const choices = ['major', 'minor', 'patch'];

console.log('');
console.log('RELEASE TOOL');
console.log('');
console.log('requires global dependecies: ');
console.log(
  `
- https://github.com/google/zx (npm i -g zx) 
- https://github.com/cli/cli (brew install gh)`
);
console.log('------------------------------------------------\n');

await $`git pull --rebase`;

let versionType = await question('What version type? (major, minor, patch) ', {
  choices,
});
console.log('');

if (!choices.includes(versionType)) {
  try {
    await $`exit 1`;
  } catch (error) {
    console.log(
      chalk.red(
        `Invalid version type: ${versionType}. Specify one of ${choices.join(
          ', '
        )}`
      )
    );
  }
} else {
  let currentVersion = (await $`echo $(gh release list) | cut -d' ' -f1`)
    .stdout;
  let next = getNextRelease({ versionType }, currentVersion);

  await $`yarn version --new-version ${next} --no-git-tag-version`;
  await $`git add package.json && git commit --amend --no-edit`;
  await $`git push --force-with-lease`;

  await $`gh release create v${next}`;
  console.log('');

  console.log(`Watch workflow:`);
  console.log(`gh run watch --repo billbee-types`);

  console.log('------------------------');
  console.log(`Created release ${next}`);
  console.log('------------------------\n');
}
