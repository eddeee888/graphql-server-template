import type { MutationResolvers } from "./../../../types.generated";
export const deleteUser: NonNullable<MutationResolvers["deleteUser"]> = async (
  _parent,
  args,
  ctx,
) => {
  const user = ctx.data.users[args.id];
  if (!user) {
    return true;
  }

  delete ctx.data.users[args.id];
  return true;
};
