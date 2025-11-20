import type { ErrorSimulatorResultResolvers } from "./../../types.generated";

export const ErrorSimulatorResult: ErrorSimulatorResultResolvers = {
  /* Implement ErrorSimulatorResult resolver logic here */
  field: async ({ field }, _arg, _ctx) => {
    return field;
  },
  resolve: async (_parent, _arg, _ctx) => {
    return null;
  },
  resolve2: async (_parent, { delay, err }, _ctx) => {
    await new Promise((resolve) => setTimeout(resolve, delay || 0));
    if (err) {
      throw new Error("BORKE");
    }
    return { field: "ErrorSimulatorResult.resolve2" };
  },
};
