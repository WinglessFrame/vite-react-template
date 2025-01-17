module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [0, { allowConstantExport: true }],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
