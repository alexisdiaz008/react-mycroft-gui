import type {Config} from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  verbose: true,
  transform: {
    // process `*.ts` files with `ts-jest`
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  "setupFilesAfterEnv": ["<rootDir>src/setupTests.ts"]
};

export default config;


