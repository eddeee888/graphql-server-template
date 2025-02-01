import type { MutationResolvers } from "./../../../types.generated";
export const updateBook: NonNullable<MutationResolvers["updateBook"]> = async (
  _parent,
  { input: { id, isbn } },
  { data },
) => {
  const updatedBook = data.$books.update({ id, isbn });

  return {
    __typename: "UpdateBookResult",
    result: updatedBook,
  };
};
