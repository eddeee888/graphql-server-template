/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Book } from './book/resolvers/Book';
import    { markBookAsRead as Mutation_markBookAsRead } from './book/resolvers/Mutation/markBookAsRead';
import    { book as Query_book } from './book/resolvers/Query/book';
import    { user as Query_user } from './user/resolvers/Query/user';
import    { User } from './user/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { book: Query_book,user: Query_user },
      Mutation: { markBookAsRead: Mutation_markBookAsRead },
      
      Book: Book,
User: User
    }