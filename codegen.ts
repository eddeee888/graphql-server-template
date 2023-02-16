import type { CodegenConfig } from "@graphql-codegen/cli";
import { preset } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  generates: {
    "src/schema": {
      preset,
      plugins: [],
    },
  },
};
export default config;
