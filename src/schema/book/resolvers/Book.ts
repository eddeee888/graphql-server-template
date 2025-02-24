import type { BookResolvers } from "./../../types.generated";

export const Book: BookResolvers = {
  previousBookInSeries: async (parent, _arg, { data }) => {
    return await data.$books.findBooksInSeries({
      bookId: parent.id,
      offset: -1,
    });
  },
  nextBookInSeries: async (parent, _arg, { data }) => {
    return await data.$books.findBooksInSeries({
      bookId: parent.id,
      offset: 1,
    });
  },
};
