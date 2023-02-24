import type { Book, UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  booksRead: (parent, __, { data }) => {
    const books = Object.values(data.users_read_books).reduce<Book[]>(
      (res, [userId, bookId]) => {
        if (userId === parent.id) {
          res.push({ ...data.books[bookId], __typename: "Book" });
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
