module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "\\.spec\\.ts?$",
  moduleFileExtensions: ["json", "js", "ts"],
  restoreMocks: true,
  clearMocks: true,
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};