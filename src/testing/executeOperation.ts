import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { type ExecutionResult, print } from "graphql";
import { yoga } from "../yoga";

export const executeOperation = async <TResult, TVariables>(
  operation: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<ExecutionResult<TResult>> => {
  return Promise.resolve(
    yoga.fetch("http://yoga/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: print(operation),
        variables: variables ?? undefined,
      }),
    }),
  ).then((response) => response.json());
};
