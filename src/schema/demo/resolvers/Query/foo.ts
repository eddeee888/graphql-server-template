import type { QueryResolvers } from "./../../../types.generated";
export const foo: NonNullable<QueryResolvers["foo"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return [
    { __typename: "Bar", name: "Bar1", properties: "BarProp" },
    { __typename: "Baz", name: "Baz1" },
  ];
};
