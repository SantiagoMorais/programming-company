import { dirname } from "path";
import prettierConfig from "eslint-config-prettier";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";

import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  plugin: {
    prettierPlugin,
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    "prettier/prettier": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  prettierConfig,
};

export default eslintConfig;
