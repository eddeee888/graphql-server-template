/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment Query_book_spec_Book on Book {\n    id\n    isbn\n  }\n": typeof types.Query_Book_Spec_BookFragmentDoc,
    "\n  query book_spec_QueryBook($id: ID!) {\n    book(id: $id) {\n      __typename\n      ... on BookResultOk {\n        result {\n          ...Query_book_spec_Book\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": typeof types.Book_Spec_QueryBookDocument,
    "\n  query ErrorSim {\n    errorSimulator {\n      resolve2(delay: 500, err: false) {\n        field\n        ... on ErrorSimulatorResult @defer {\n          failed: resolve2(delay: 1000, err: true) {\n            field\n          }\n        }\n      }\n    }\n  }\n": typeof types.ErrorSimDocument,
};
const documents: Documents = {
    "\n  fragment Query_book_spec_Book on Book {\n    id\n    isbn\n  }\n": types.Query_Book_Spec_BookFragmentDoc,
    "\n  query book_spec_QueryBook($id: ID!) {\n    book(id: $id) {\n      __typename\n      ... on BookResultOk {\n        result {\n          ...Query_book_spec_Book\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n": types.Book_Spec_QueryBookDocument,
    "\n  query ErrorSim {\n    errorSimulator {\n      resolve2(delay: 500, err: false) {\n        field\n        ... on ErrorSimulatorResult @defer {\n          failed: resolve2(delay: 1000, err: true) {\n            field\n          }\n        }\n      }\n    }\n  }\n": types.ErrorSimDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Query_book_spec_Book on Book {\n    id\n    isbn\n  }\n"): (typeof documents)["\n  fragment Query_book_spec_Book on Book {\n    id\n    isbn\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query book_spec_QueryBook($id: ID!) {\n    book(id: $id) {\n      __typename\n      ... on BookResultOk {\n        result {\n          ...Query_book_spec_Book\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  query book_spec_QueryBook($id: ID!) {\n    book(id: $id) {\n      __typename\n      ... on BookResultOk {\n        result {\n          ...Query_book_spec_Book\n        }\n      }\n      ... on ResultError {\n        error\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ErrorSim {\n    errorSimulator {\n      resolve2(delay: 500, err: false) {\n        field\n        ... on ErrorSimulatorResult @defer {\n          failed: resolve2(delay: 1000, err: true) {\n            field\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ErrorSim {\n    errorSimulator {\n      resolve2(delay: 500, err: false) {\n        field\n        ... on ErrorSimulatorResult @defer {\n          failed: resolve2(delay: 1000, err: true) {\n            field\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;