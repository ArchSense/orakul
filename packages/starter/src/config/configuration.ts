export default () => {
  if (process.argv.length <= 2) {
    throw new Error('Missing parameters');
  }
  return {
    framework: process.argv[2],
    configPath: process.argv[3],
  };
};
