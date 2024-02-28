import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { ResolverContext } from "./types.context";
import { data } from "./data";

const yoga = createYoga<ResolverContext>({
  schema: createSchema<ResolverContext>({ typeDefs, resolvers }),
  context: { data },
  maskedErrors: false,
});
const server = createServer(yoga);
server.listen(3000, () => console.log("It's at http://localhost:3000/graphql"));
