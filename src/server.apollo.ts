import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import type { ResolverContext } from "./types.context";
import { data } from "./data";

const server = new ApolloServer<ResolverContext>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({ data }),
}).then(() => console.log("It's at http://localhost:4000/graphql"));
