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
    "plugin:tailwindcss/recommended",
    "plugin:react/recommended",
  ),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      "prettier/prettier": "warn",
      "react/react-in-jsx-scope": 0,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];

export default eslintConfig;
