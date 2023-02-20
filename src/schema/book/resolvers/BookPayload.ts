import type { BookPayloadResolvers } from "./../../types.generated";
export const BookPayload: BookPayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
