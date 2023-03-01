# Orakul

> Project architecture visualization tool

## How to use

### Configure npm script for a project

1. Install the dependency `npm install --save-dev @archsense/orakul`

2. Configure npm script
```json
{
  ...
  "scripts": {
    ...
    "orakul": "npx orakul nestjs -p <path-to-root-folder>",
    ...
  }, 
}
```

### Configuration file for monorepo

1. At the root of your project create the configuration file `scout.json` with the following properties:
```json
{  
  "id": "<project/domain-id>",
  "src": "<path-to-src-folder | microservices>",
  "include": [
    "<list-of-folders-in-src-to-include-optional>"
  ],
  "exclude": [
    "<list-of-folders-in-src-to-exclude-optional>"
  ]
}
```

2. Configure npm script
```json
{
  ...
  "scripts": {
    ...
    "orakul": "npx orakul nestjs -c <path-to-config-folder>",
    ...
  }, 
}
```

3. Go to [http://localhost:4501](http://localhost:4501) to see the visualization