module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
      es6: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:jest/recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    settings: {
      react: {
        version: "detect", // Tells eslint-plugin-react to automatically detect the React version to use
      },
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
    plugins: ["json", "markdown"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": "off",
      curly: "warn",
      "arrow-parens": ["error", "always"],
      "quote-props": ["error", "as-needed"],
      "prefer-object-spread": "error",
      "no-eval": "error",
      "default-param-last": "error",
      "no-param-reassign": "error",
      "no-useless-constructor": "error",
      "no-duplicate-imports": "error",
      "brace-style": ["error", "1tbs"],
      "newline-per-chained-call": "error",
      // todo: remove once issue is identified and fixed in AddressInfoPage https://issues.amazon.com/issues/ECAPP-4332
      "react/prop-types": ["off"],
  
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": true,
          "ts-check": false,
          minimumDescriptionLength: 5,
        },
      ],
  
      // spacing
      "arrow-spacing": "error",
      "keyword-spacing": "error",
      "array-bracket-spacing": "error",
      "object-curly-spacing": ["error", "always"],
      "comma-spacing": "error",
      "func-call-spacing": "error",
      "key-spacing": "error",
      "spaced-comment": "error",
      "space-before-blocks": "error",
      "space-in-parens": "error",
      "no-whitespace-before-property": "error",
    },
};
  