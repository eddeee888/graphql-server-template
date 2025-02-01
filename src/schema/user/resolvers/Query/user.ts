import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  { id },
  { data },
) => {
  const userRecord = await data.$users.findById({ id });

  return userRecord;
};
