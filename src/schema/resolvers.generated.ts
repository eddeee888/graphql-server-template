/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { user as Query_user } from "./base/resolvers/Query/user";
import { users as Query_users } from "./base/resolvers/Query/users";
import { createUser as Mutation_createUser } from "./base/resolvers/Mutation/createUser";
import { deleteUser as Mutation_deleteUser } from "./base/resolvers/Mutation/deleteUser";
import { User } from "./base/resolvers/User";
export const resolvers: Resolvers = {
  Query: { user: Query_user, users: Query_users },
  Mutation: {
    createUser: Mutation_createUser,
    deleteUser: Mutation_deleteUser,
  },

  User: User,
};
