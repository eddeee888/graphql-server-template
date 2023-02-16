import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
};
