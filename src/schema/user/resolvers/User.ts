import type { BookMapper } from "src/schema/book/schema.mappers";
import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  booksRead: (parent, __, { data }) => {
    const books = Object.values(data.users_read_books).reduce<BookMapper[]>(
      (res, [userId, bookId]) => {
        if (userId === parent.id) {
          res.push({ ...data.books[bookId] });
        }
        return res;
      },
      []
    );

    return books;
  },
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
};
