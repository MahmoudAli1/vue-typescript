module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "warn",
    "no-prototype-builtins": "warn",
    "no-empty": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "vue/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "no-useless-escape": "warn"
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
    jsx: true,
    useJSXTextNode: true,
    ecmaVersion: 2020
  },

  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ]
};
