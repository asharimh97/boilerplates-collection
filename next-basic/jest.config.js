module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/src/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/.storybook/",
    "<rootDir>/storybook-static/",
    "<rootDir>/src/pages/"
  ],
  verbose: true,
  testURL: "http://localhost/",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
