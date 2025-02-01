import type { QueryResolvers } from "./../../../types.generated";
export const book: NonNullable<QueryResolvers["book"]> = async (
  _parent,
  { id },
  { data },
) => {
  const result = await data.$books.findById({ id });

  return {
    __typename: "BookResult",
    result,
  };
};
