import { defineConfig } from "eslint/config";
import ed from "@eddeee888/eslint-plugin";

export default defineConfig(
  ...ed.configs["base-typescript"],
  ...ed.configs.typescript,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    ignores: ["src/schema/*.generated.ts", "src/gql/", "eslint.config.mjs"],
  },
);
