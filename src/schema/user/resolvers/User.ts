import type { UserResolvers } from './../../types.generated.js';
export const User: Pick<UserResolvers, 'fullName' | 'id'> = {
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
};
