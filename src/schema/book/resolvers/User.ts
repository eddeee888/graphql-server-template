import type { UserResolvers } from "./../../types.generated";
export const User: Pick<UserResolvers, "booksRead"> = {
  booksRead: (parent, __, { data }) => {
    return data.$books.findBooksReadByUserId({ userId: parent.id });
  },
};
