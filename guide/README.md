## The style guide

View the guide [here](https://cyverse.github.io/cyverse-ui).

The guide renders the components in `cyverse-ui` and demonstrates
examples.

This repository contains two projects: the guide and a library. The guide is
its own project and lists the library as a dependency in `guide/package.json`.
If you wanted to edit back and forth between the guide and the library it
would be a pain to have to constantly `npm publish` the library before
consuming it. `npm` has a trick for this situation. By using `npm link` the
guide will look for the library dependency elsewhere rather than the guides
`node_modules`. Read more [here](https://docs.npmjs.com/cli/link) about `npm
link`.

#### Installation
```bash
# Fetch the repo
git clone https://github.com/cyverse/cyverse-ui

# Register this pkg in npm link
cd cyverse-ui
npm link

# Prefer the link to cyverse-ui rather than node_modules
cd guide
npm link cyverse-ui

# Install guides dependencies
npm i
```

#### Build
```bash
# From within cyverse-ui
npm run build

# From within guide (separate terminal)
npm run start

# Navigate to url
open http://localhost:3000
```

#### Publishing
```bash
# Use npm-run
npm i -g npm-run

# Generate a fresh build (from within guide)
npm run build

# Inspect the build dir before pushing!!
ls build

# Add the commit onto the gh-pages branch
npm-run gh-pages -d dist -r https://<PATH TO REPO>
```
