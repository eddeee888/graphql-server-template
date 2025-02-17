import test from "node:test";

import { graphql } from "../../../../gql";
import { executeOperation } from "../../../../testing";

graphql(/* GraphQL */ `
  fragment Query_book_spec_Book on Book {
    id
    isbn
  }
`);

const document = graphql(/* GraphQL */ `
  query book_spec_QueryBook($id: ID!) {
    book(id: $id) {
      __typename
      ... on BookResultOk {
        result {
          ...Query_book_spec_Book
        }
      }
      ... on ResultError {
        error
      }
    }
  }
`);

void test("Query.book - returns book data if exists in data", async (t) => {
  const result = await executeOperation(document, { id: "1" });

  t.assert.deepEqual(result, {
    data: {
      book: {
        __typename: "BookResultOk",
        result: {
          id: "1",
          isbn: "isbn:1",
        },
      },
    },
  });
});

void test("Query.book - returns null if cannot find book data", async (t) => {
  const result = await executeOperation(document, { id: "does_not_exist" });

  t.assert.deepEqual(result, {
    data: {
      book: {
        __typename: "BookResultOk",
        result: null,
      },
    },
  });
});
