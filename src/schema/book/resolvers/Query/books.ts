import type { QueryResolvers } from "./../../../types.generated";
export const books: NonNullable<QueryResolvers["books"]> = async (
  _parent,
  { input },
  { data },
) => {
  const limit = input.limit || 10;
  const offset = input.offset || 0;

  const result = await data.$books.findMany({ limit, offset });

  return {
    __typename: "BooksResult",
    result,
  };
};
