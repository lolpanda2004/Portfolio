import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // ✅ Disable build-breaking rules
      "react/no-unescaped-entities": "off", // allows unescaped quotes like I'm
      "@typescript-eslint/no-explicit-any": "off", // allows `any`
      "@typescript-eslint/no-unused-vars": "off", // prevents unused var warnings from failing build
      "no-unused-vars": "off", // JS version of same rule
    },
  },
];

export default eslintConfig;
