import type { ReadableResolvers } from "./../../types.generated";
export const Readable: ReadableResolvers = {
  __resolveType: (parent) => parent.__typename,
};
