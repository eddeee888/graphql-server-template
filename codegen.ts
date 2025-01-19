import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "src/**/schema.graphql",
  documents: "src/**/*.spec.ts",
  ignoreNoDocuments: true,
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "src/schema": defineConfig({
      resolverGeneration: "minimal",
      typesPluginsConfig: {
        contextType: "../yoga#ResolverContext",
      },
    }),
    "./src/gql/": {
      preset: "client-preset",
    },
  },
};
export default config;
