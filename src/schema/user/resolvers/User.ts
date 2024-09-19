import type { UserResolvers } from "./../../types.generated";
export const User: Pick<UserResolvers, "fullName" | "id" | "__isTypeOf"> = {
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
};
