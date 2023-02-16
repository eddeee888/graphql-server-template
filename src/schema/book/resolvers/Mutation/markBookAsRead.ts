import type { MutationResolvers } from "./../../../types.generated";
export const markBookAsRead: NonNullable<
  MutationResolvers["markBookAsRead"]
> = async (_parent, _arg, _ctx) => {
  /* Implement Mutation.markBookAsRead resolver logic here */
  return { __typename: "Book", id: "1", isbn: "1" };
};
