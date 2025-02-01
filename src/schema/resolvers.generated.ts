/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { book as Query_book } from "./book/resolvers/Query/book";
import { books as Query_books } from "./book/resolvers/Query/books";
import { character as Query_character } from "./character/resolvers/Query/character";
import { user as Query_user } from "./user/resolvers/Query/user";
import { createBook as Mutation_createBook } from "./book/resolvers/Mutation/createBook";
import { Book } from "./book/resolvers/Book";
import { User as book_User } from "./book/resolvers/User";
import { User as user_User } from "./user/resolvers/User";
import { Wizard } from "./character/resolvers/Wizard";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: {
    book: Query_book,
    books: Query_books,
    character: Query_character,
    user: Query_user,
  },
  Mutation: { createBook: Mutation_createBook },

  Book: Book,
  User: { ...book_User, ...user_User },
  Wizard: Wizard,
  DateTime: DateTimeResolver,
};
