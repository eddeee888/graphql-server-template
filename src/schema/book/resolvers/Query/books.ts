import type { QueryResolvers } from "./../../../types.generated";
export const books: NonNullable<QueryResolvers["books"]> = async (
  _parent,
  { input },
  { data },
) => {
  const page = input.page || 1;
  const recordsPerPage = input.recordsPerPage || 10;

  try {
    const { result, pagination } = await data.$books.findMany({
      page,
      recordsPerPage,
    });

    return {
      __typename: "BooksResultOk",
      result,
      pagination,
    };
  } catch {
    return {
      __typename: "ResultError",
      error: "UNEXPECTED_ERROR",
    };
  }
};
