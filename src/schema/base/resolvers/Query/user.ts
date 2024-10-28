import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  { id },
  ctx,
) => {
  return ctx.data.users[id];
};
