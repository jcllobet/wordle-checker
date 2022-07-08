export default function configure(wallaby) {
  return {
    trace: true,
    files: ['src/**', '!**/*test.js'],
    tests: ['__test__/**/*test.js'],
    debug: true,
    testFramework: 'jasmine', //  <- added
    env: {
      type: 'node',
      runner: 'node',
      params: {
        //
        runner: `-r esm`, //  <- added
      }, //
    },
  }
}
