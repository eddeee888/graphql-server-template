import type { UserResolvers } from "./../../types.generated";
export const User: Pick<UserResolvers, "fullName" | "id" | "uuid"> = {
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
  uuid: async (_parent, _arg, _ctx) => {
    /* User.uuid resolver is required because User.uuid exists but UserMapper.uuid does not */
  },
};
