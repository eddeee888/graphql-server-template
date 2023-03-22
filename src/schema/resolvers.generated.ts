/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Book } from "./book/resolvers/Book";
import { BookPayload } from "./book/resolvers/BookPayload";
import { BookResult } from "./book/resolvers/BookResult";
import { Magazine } from "./book/resolvers/Magazine";
import { PayloadError } from "./base/resolvers/PayloadError";
import { book as Query_book } from "./book/resolvers/Query/book";
import { readable as Query_readable } from "./book/resolvers/Query/readable";
import { user as Query_user } from "./user/resolvers/Query/user";
import { Readable } from "./book/resolvers/Readable";
import { ShortNovel } from "./book/resolvers/ShortNovel";
import { User } from "./user/resolvers/User";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: { book: Query_book, readable: Query_readable, user: Query_user },

  Book: Book,
  BookPayload: BookPayload,
  BookResult: BookResult,
  Magazine: Magazine,
  PayloadError: PayloadError,
  Readable: Readable,
  ShortNovel: ShortNovel,
  User: User,
  DateTime: DateTimeResolver,
};
