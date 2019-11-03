module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "react-hooks", "prettier", "import", "jest"],
  rules: {
    "react/prop-types": "off"
  },
  overrides: [
    {
      files: "*.test.*",
      env: {
        "jest/globals": true
      }
    }
  ]
};
