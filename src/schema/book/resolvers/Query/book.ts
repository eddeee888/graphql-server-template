import type { QueryResolvers } from "./../../../types.generated";
export const book: NonNullable<QueryResolvers["book"]> = async (
  _parent,
  { id },
  { data }
) => {
  return {
    __typename: "BookResult",
    result: data.books[id],
  };
};
