import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Add any additional rules here
    },
  },
];

export default eslintConfig;
