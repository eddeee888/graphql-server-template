import type { UserResolvers } from './../../types.generated';
export const User: Pick<UserResolvers, 'fullName' | 'id' | 'nickname'> = {
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
  nickname: () => null,
};
