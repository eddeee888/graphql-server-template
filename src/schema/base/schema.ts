import gql from "graphql-tag";

export const schema = gql`
  type Query

  type PayloadError {
    error: PayloadErrorType!
  }

  enum PayloadErrorType {
    NOT_FOUND
    INPUT_VALIDATION_ERROR
    FORBIDDEN_ERROR
    UNEXPECTED_ERROR
  }

  scalar DateTime
`;
