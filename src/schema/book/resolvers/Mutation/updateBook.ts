import type { MutationResolvers } from "./../../../types.generated";
export const updateBook: NonNullable<MutationResolvers["updateBook"]> = async (
  _parent,
  { input: { id, isbn } },
  { data },
) => {
  try {
    const updatedBook = await data.$books.update({ id, isbn });

    return {
      __typename: "UpdateBookResultOk",
      result: updatedBook,
    };
  } catch {
    return {
      __typename: "ResultError",
      error: "UNEXPECTED_ERROR",
    };
  }
};
