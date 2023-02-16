import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  { id },
  { data }
) => {
  const user = data.users[id];
  return user;
};
