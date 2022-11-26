module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ["eslint:recommended"],
  // "plugin:@typescript-eslint/recommended"
  // parser: "@typescript-eslint/parser",
  // plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  rules: {
    // indent: ["error", 2],
    // "linebreak-style": ["error", "unix"],
    // quotes: ["error", "double"],
    "no-empty": "off",
    "no-debugger": "warn",
    // "no-unused-vars": "warn",
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/ban-types": "off"
    // "@typescript-eslint/explicit-function-return-type": 0,
    // "@typescript-eslint/no-unused-vars": [
    //   "error",
    //   { vars: "all", args: "after-used", ignoreRestSiblings: false },
    // ],
  },
};
