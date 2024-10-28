import type { QueryResolvers } from "./../../../types.generated";
export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  ctx,
) => {
  return Object.values(ctx.data.users);
};
