import type {Config} from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  verbose: true,
  transform: {
    // process `*.js` files with `babel-jest`
    "^.+\\.jsx?$": "babel-jest",
    // process `*.ts` files with `ts-jest`
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  moduleNameMapper: {
    // for images, test using this file instead
    "\\.(gif|jpg|jpeg|png|svg)$": "<rootDir>src/__mocks__/fileMock.ts",
    // for stylesheets, test using this file instead
    "\\.(css|less|scss)$": "<rootDir>src/__mocks__/styleMock.ts"
  }
};

export default config;


