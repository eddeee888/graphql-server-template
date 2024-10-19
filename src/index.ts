import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { typeDefs } from "./schema/typeDefs.generated";
import { data } from "./data";

export type ResolverContext = { data: typeof data };

// 💡 Resolvers map
const resolvers = {};

const yoga = createYoga<ResolverContext>({
  schema: createSchema<ResolverContext>({
    typeDefs,
    resolvers,
  }),
  context: { data },
  maskedErrors: false,
});
const server = createServer(yoga);
server.listen(3000, () => console.log("It's at http://localhost:3000/graphql"));
