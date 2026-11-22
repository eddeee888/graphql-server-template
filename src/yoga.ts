import { createYoga, createSchema } from 'graphql-yoga';
import { useDeferStream } from '@graphql-yoga/plugin-defer-stream';
import { typeDefs } from './schema/typeDefs.generated.js';
import { resolvers } from './schema/resolvers.generated.js';
import { data } from './data/index.js';

export type ResolverContext = { data: typeof data };

export const yoga = createYoga<ResolverContext>({
  schema: createSchema<ResolverContext>({ typeDefs, resolvers }),
  context: { data },
  maskedErrors: false,
  plugins: [useDeferStream()],
});
