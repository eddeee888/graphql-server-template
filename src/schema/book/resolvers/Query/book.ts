import type { QueryResolvers } from "./../../../types.generated";
export const book: NonNullable<QueryResolvers["book"]> = async (
  _parent,
  { id },
  { data },
) => {
  try {
    const result = await data.$books.findById({ id });

    return {
      __typename: "BookResultOk",
      result,
    };
  } catch {
    return {
      __typename: "ResultError",
      error: "UNEXPECTED_ERROR",
    };
  }
};
