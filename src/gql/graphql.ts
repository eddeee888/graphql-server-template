/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID']['output'];
  isbn: Scalars['String']['output'];
  nextBookInSeries?: Maybe<Book>;
  previousBookInSeries?: Maybe<Book>;
};

export type BookResult = BookResultOk | ResultError;

export type BookResultOk = {
  __typename?: 'BookResultOk';
  result?: Maybe<Book>;
};

export type BooksResult = BooksResultOk | ResultError;

export type BooksResultOk = {
  __typename?: 'BooksResultOk';
  pagination: Pagination;
  result: Array<Book>;
};

export type CharacterNode = {
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type CreateBookInput = {
  isbn: Scalars['String']['input'];
};

export type CreateBookResult = CreateBookResultOk | ResultError;

export type CreateBookResultOk = {
  __typename?: 'CreateBookResultOk';
  result: Book;
};

/** ErrorSimulatorResult */
export type ErrorSimulatorResult = {
  __typename?: 'ErrorSimulatorResult';
  /** The field */
  field?: Maybe<Scalars['String']['output']>;
  /** Not banged */
  resolve?: Maybe<ErrorSimulatorResult>;
  /** Banged */
  resolve2: ErrorSimulatorResult;
};


/** ErrorSimulatorResult */
export type ErrorSimulatorResultResolveArgs = {
  delay?: InputMaybe<Scalars['Int']['input']>;
  err: Scalars['Boolean']['input'];
};


/** ErrorSimulatorResult */
export type ErrorSimulatorResultResolve2Args = {
  delay?: InputMaybe<Scalars['Int']['input']>;
  err: Scalars['Boolean']['input'];
};

export type ExtraCharacter = CharacterNode & {
  __typename?: 'ExtraCharacter';
  creditName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type Fighter = CharacterNode & MainCharacter & {
  __typename?: 'Fighter';
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  powerLevel: Scalars['Int']['output'];
  relatedCharacters: Array<CharacterNode>;
  screenName: Scalars['String']['output'];
};

export type MainCharacter = {
  screenName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: CreateBookResult;
  updateBook: UpdateBookResult;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};

export type Pagination = {
  __typename?: 'Pagination';
  totalPageCount: Scalars['Int']['output'];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  recordsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  book: BookResult;
  books: BooksResult;
  character?: Maybe<CharacterNode>;
  /** Error simulator */
  errorSimulator?: Maybe<ErrorSimulatorResult>;
  user?: Maybe<User>;
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBooksArgs = {
  input: PaginationInput;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type ResultError = {
  __typename?: 'ResultError';
  error: ResultErrorType;
};

export enum ResultErrorType {
  ForbiddenError = 'FORBIDDEN_ERROR',
  InputValidationError = 'INPUT_VALIDATION_ERROR',
  NotFound = 'NOT_FOUND',
  UnexpectedError = 'UNEXPECTED_ERROR'
}

export type UpdateBookInput = {
  id: Scalars['ID']['input'];
  isbn: Scalars['String']['input'];
};

export type UpdateBookResult = ResultError | UpdateBookResultOk;

export type UpdateBookResultOk = {
  __typename?: 'UpdateBookResultOk';
  result: Book;
};

export type User = {
  __typename?: 'User';
  booksRead: Array<Book>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Wizard = CharacterNode & MainCharacter & {
  __typename?: 'Wizard';
  id: Scalars['ID']['output'];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
  screenName: Scalars['String']['output'];
  spells: Array<Scalars['String']['output']>;
};

export type Query_Book_Spec_BookFragment = { __typename?: 'Book', id: string, isbn: string } & { ' $fragmentName'?: 'Query_Book_Spec_BookFragment' };

export type Book_Spec_QueryBookQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Book_Spec_QueryBookQuery = { __typename?: 'Query', book:
    | { __typename: 'BookResultOk', result?: (
        { __typename?: 'Book' }
        & { ' $fragmentRefs'?: { 'Query_Book_Spec_BookFragment': Query_Book_Spec_BookFragment } }
      ) | null }
    | { __typename: 'ResultError', error: ResultErrorType }
   };

export type ErrorSimQueryVariables = Exact<{ [key: string]: never; }>;


export type ErrorSimQuery = { 
  __typename?: 'Query', 
  errorSimulator?: { 
    __typename?: 'ErrorSimulatorResult', 
    resolve2: { 
      __typename?: 'ErrorSimulatorResult', 
      field?: string | null 
    } & 
    ({ __typename?: 'ErrorSimulatorResult', failed: { __typename?: 'ErrorSimulatorResult', field?: string | null } } 
     | { __typename?: 'ErrorSimulatorResult', failed?: never }) 
  } | null 
};

export const Query_Book_Spec_BookFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Query_book_spec_Book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode<Query_Book_Spec_BookFragment, unknown>;
export const Book_Spec_QueryBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"book_spec_QueryBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookResultOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Query_book_spec_Book"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResultError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Query_book_spec_Book"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode<Book_Spec_QueryBookQuery, Book_Spec_QueryBookQueryVariables>;
export const ErrorSimDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrorSim"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorSimulator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolve2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"delay"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"err"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorSimulatorResult"}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"defer"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"failed"},"name":{"kind":"Name","value":"resolve2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"delay"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"err"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ErrorSimQuery, ErrorSimQueryVariables>;