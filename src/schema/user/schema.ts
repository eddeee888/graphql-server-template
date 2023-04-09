import gql from "graphql-tag";

export const schema = gql`
  extend type Query {
    user(id: ID!): User
  }
  type User {
    id: ID!
    fullName: String!
    booksRead: [Book!]!
  }
`;
