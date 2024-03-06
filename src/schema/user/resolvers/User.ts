import type { UserResolvers } from "./../../types.generated";
export const User: Pick<UserResolvers, "fullName" | "id"> = {
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
};
