module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {},
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    requireConfigFile: false,
  },
  plugins: ["react", "import", "react-hooks", "@babel"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
