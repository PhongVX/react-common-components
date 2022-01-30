# react-common-components
## Setup
Access react-common-components repository

```cd react-common-components```

Install dependencies


```npm install```

## Build
Using lerna for building and publish your library

```npx lerna bootstrap```

When run this command, lerna will run for us ```npm install``` then ```npm run prepublish``` in packages folder which folders contains package.json.

## Publish to npm registry
### Login manually
Login to npm public registry

```npm login --registry=https://registry.npmjs.org```

Publish packages to the registry

```npx lerna publish --registry=https://registry.npmjs.org --force-publish```

Note: ```--force-publish``` lerna will skip the git diff check for changed packages

### Login with .npmrc
...
## Publish to npm private registry
...

[Link Demo](https://61f34c27a8f380003a9c7aa7-hmvkgnewhl.chromatic.com/?path=/story/core-button--default)
