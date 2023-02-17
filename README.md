# Orakul

> Project architecture visualization tool

## How to use

### 1. Add configuration files

At the root of your project create the configuration file `scout.json` with the following properties:
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

### 2. Configure npm script

1. Install the dependency `npm install --save-dev @archsense/orakul`
2. Configure npm script
```json
{
  ...
  "scripts": {
    ...
    "orakul": "start-orakul -p <port> -f <target-framework>",
    ...
  }, 
}
```