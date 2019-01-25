module.exports = {
  extends: [
    "prettier",
    "airbnb",
    "eslint:recommended",
    "plugin:security/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["babel", "prettier", "security"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off"
  }
};
