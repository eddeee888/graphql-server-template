/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { book as Query_book } from "./book/resolvers/Query/book";
import { character as Query_character } from "./character/resolvers/Query/character";
import { readable as Query_readable } from "./book/resolvers/Query/readable";
import { user as Query_user } from "./user/resolvers/Query/user";
import { Book } from "./book/resolvers/Book";
import { BookResult } from "./book/resolvers/BookResult";
import { ExtraCharacter } from "./character/resolvers/ExtraCharacter";
import { Fighter } from "./character/resolvers/Fighter";
import { Magazine } from "./book/resolvers/Magazine";
import { PayloadError } from "./base/resolvers/PayloadError";
import { ShortNovel } from "./book/resolvers/ShortNovel";
import { User as book_User } from "./book/resolvers/User";
import { User as user_User } from "./user/resolvers/User";
import { Wizard } from "./character/resolvers/Wizard";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: {
    book: Query_book,
    character: Query_character,
    readable: Query_readable,
    user: Query_user,
  },

  Book: Book,
  BookResult: BookResult,
  ExtraCharacter: ExtraCharacter,
  Fighter: Fighter,
  Magazine: Magazine,
  PayloadError: PayloadError,
  ShortNovel: ShortNovel,
  User: { ...book_User, ...user_User },
  Wizard: Wizard,
  DateTime: DateTimeResolver,
};
