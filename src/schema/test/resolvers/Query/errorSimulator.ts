import type { QueryResolvers } from "./../../../types.generated";
export const errorSimulator: NonNullable<
  QueryResolvers["errorSimulator"]
> = async (_parent, _arg, _ctx) => {
  return {
    field: "Query.errorSimulator",
  };
};
