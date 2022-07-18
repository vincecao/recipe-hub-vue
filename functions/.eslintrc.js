module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "simple-import-sort",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "object-curly-spacing": [2, "always"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "max-len": 0,
    // TODO: enable require-jsdoc rule
    "require-jsdoc": 0,
  },
};
