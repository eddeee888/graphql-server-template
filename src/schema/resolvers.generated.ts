/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Book } from "./book/resolvers/Book";
import { BookPayload } from "./book/resolvers/BookPayload";
import { BookResult } from "./book/resolvers/BookResult";
import { book as Query_book } from "./book/resolvers/Query/book";
import { user as Query_user } from "./user/resolvers/Query/user";
import { StandardError } from "./base/resolvers/StandardError";
import { User } from "./user/resolvers/User";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: { book: Query_book, user: Query_user },

  Book: Book,
  BookPayload: BookPayload,
  BookResult: BookResult,
  StandardError: StandardError,
  User: User,
  DateTime: DateTimeResolver,
};
