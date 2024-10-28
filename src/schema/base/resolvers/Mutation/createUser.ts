import type { MutationResolvers } from "./../../../types.generated";
export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
  _parent,
  args,
  ctx,
) => {
  // Create a new user
  const newUser = {
    id: args.input.id,
    firstName: args.input.firstName,
    lastName: args.input.lastName,
  };
  ctx.data.users[args.input.id] = newUser;
  return newUser;
};
