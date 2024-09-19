import type { BookMapper } from "../schema.mappers";
import type { UserResolvers } from "./../../types.generated";
export const User: Pick<UserResolvers, "booksRead" | "__isTypeOf"> = {
  booksRead: (parent, __, { data }) => {
    const books = Object.values(data.users_read_books).reduce<BookMapper[]>(
      (res, [userId, bookId]) => {
        if (userId === parent.id) {
          res.push({ ...data.books[bookId] });
        }
        return res;
      },
      [],
    );

    return books;
  },
};
