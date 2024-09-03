/* eslint-disable import/no-anonymous-default-export */
import globals from "globals";
import pluginJs from "@eslint/js";
import shopifyEslintPlugin from "@shopify/eslint-plugin";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    overrides: [
      {
        files: ["**/*.ts?(x)"],
        rules: {
          "react/jsx-uses-react": "off",
          "react/react-in-jsx-scope": "off"
       }
      }
    ]},
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(shopifyEslintPlugin.configs.esnext),
  ...fixupConfigRules(shopifyEslintPlugin.configs.react),
  ...fixupConfigRules(shopifyEslintPlugin.configs.typescript),
  ...fixupConfigRules(shopifyEslintPlugin.configs["typescript-type-checking"]),
  ...fixupConfigRules(shopifyEslintPlugin.configs.webpack),
  ...fixupConfigRules(shopifyEslintPlugin.configs.prettier),
];
