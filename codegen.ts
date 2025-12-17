import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/**/schema.graphql",
  documents: "src/**/*.spec.ts",
  ignoreNoDocuments: true,
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  config: {
    skipDocumentsValidation: false,
  },
  generates: {
    "src/test.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "./src/test.ts",
      },
    },
  },
};
export default config;
