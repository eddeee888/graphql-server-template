import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { data } from "./data";

export type ResolverContext = { data: typeof data };

export const yoga = createYoga<ResolverContext>({
  schema: createSchema<ResolverContext>({ typeDefs, resolvers }),
  context: { data },
  maskedErrors: false,
});
