import type { UserResolvers } from "./../../types.generated";

export const User: UserResolvers = {
  fullName: ({ firstName, lastName }, _arg, _ctx) => {
    return `${firstName} ${lastName}`;
  },
  initials: ({ firstName, lastName }, _arg, _ctx) => {
    return `${firstName[0]} ${lastName[0]}`;
  },
  bestFriend: ({ bestFriend }, _arg, ctx) => {
    if (!bestFriend) {
      return null;
    }
    return ctx.data.users[bestFriend];
  },
};
