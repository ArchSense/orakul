# Scout
> Generate services graph

## Installation
`npm install @archsense/scout`

## How to use

### Command line
`npx scout nestjs <config-file-path> -o <output-file-path>`

### API
```js
const Scout = require('scout');

const nestjsScout = new Scout({
  configPath: '<path-to-config-file>'
  framework: 'nestjs'
});

const dependencyTree = await nestjsScout.analyze();
await nestjsScout.saveFile(dependencyTree);
```

## Current support

* Supported languages
    * Typescript
* Supported framework
    * NestJs