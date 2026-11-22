/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.js';
    import    { book as Query_book } from './book/resolvers/Query/book.js';
import    { books as Query_books } from './book/resolvers/Query/books.js';
import    { character as Query_character } from './character/resolvers/Query/character.js';
import    { user as Query_user } from './user/resolvers/Query/user.js';
import    { createBook as Mutation_createBook } from './book/resolvers/Mutation/createBook.js';
import    { updateBook as Mutation_updateBook } from './book/resolvers/Mutation/updateBook.js';
import    { Book } from './book/resolvers/Book.js';
import    { User as book_User } from './book/resolvers/User.js';
import    { User as user_User } from './user/resolvers/User.js';
import    { Wizard } from './character/resolvers/Wizard.js';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { book: Query_book,books: Query_books,character: Query_character,user: Query_user },
      Mutation: { createBook: Mutation_createBook,updateBook: Mutation_updateBook },
      
      Book: Book,
User: { ...book_User,...user_User },
Wizard: Wizard,
DateTime: DateTimeResolver
    }