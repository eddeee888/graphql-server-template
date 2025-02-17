import type { MutationResolvers } from "./../../../types.generated";
export const createBook: NonNullable<MutationResolvers["createBook"]> = async (
  _parent,
  { input: { isbn } },
  { data },
) => {
  const result = await data.$books.create({ isbn });

  return {
    __typename: "CreateBookResultOk",
    result,
  };
};
