import type { UserResolvers } from './../../types.generated.js';
export const User: Pick<UserResolvers, 'booksRead'> = {
  booksRead: (parent, __, { data }) => {
    return data.$books.findBooksReadByUserId({ userId: parent.id });
  },
};
