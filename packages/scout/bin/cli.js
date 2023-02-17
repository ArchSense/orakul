#!/usr/bin/env node
const { Command } = require('commander');
const { Scout } = require('../dist/index');
const package = require('../package.json');
const path = require('path');
const { name, description, version } = package;

const program = new Command();

program
  .name(name)
  .description(description)
  .version(version);

program.command('nestjs')
  .description('Generate insights for NestJs framework')
  .argument('<config-file-path>', 'path to config file')
  .option('-o, --output <output-file-path>', 'name of the output file')
  .action(async (configPath, options) => {
    try {
      const scout = new Scout({
        framework: 'nestjs',
        configPath
      });
      const data = await scout.analyze();
      let outputPath = options.output;
      console.log(outputPath);
      if (outputPath) {
        if (!path.isAbsolute(outputPath)) {
          outputPath = path.resolve(process.cwd(), outputPath);
        }
        await scout.saveToFile(outputPath, data);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });

program.parse();