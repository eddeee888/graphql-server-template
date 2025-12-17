export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Book = {
  __typename?: "Book";
  id: Scalars["ID"]["output"];
  isbn: Scalars["String"]["output"];
  nextBookInSeries?: Maybe<Book>;
  previousBookInSeries?: Maybe<Book>;
};

export type BookResult = BookResultOk | ResultError;

export type BookResultOk = {
  __typename?: "BookResultOk";
  result?: Maybe<Book>;
};

export type BooksResult = BooksResultOk | ResultError;

export type BooksResultOk = {
  __typename?: "BooksResultOk";
  pagination: Pagination;
  result: Array<Book>;
};

export type CharacterNode = {
  id: Scalars["ID"]["output"];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type CreateBookInput = {
  isbn: Scalars["String"]["input"];
};

export type CreateBookResult = CreateBookResultOk | ResultError;

export type CreateBookResultOk = {
  __typename?: "CreateBookResultOk";
  result: Book;
};

export type ExtraCharacter = CharacterNode & {
  __typename?: "ExtraCharacter";
  creditName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type Fighter = CharacterNode &
  MainCharacter & {
    __typename?: "Fighter";
    id: Scalars["ID"]["output"];
    mostRelatedCharacter?: Maybe<CharacterNode>;
    powerLevel: Scalars["Int"]["output"];
    relatedCharacters: Array<CharacterNode>;
    screenName: Scalars["String"]["output"];
  };

export type MainCharacter = {
  screenName: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
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
  __typename?: "Pagination";
  totalPageCount: Scalars["Int"]["output"];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  recordsPerPage?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Project = {
  __typename?: "Project";
  id?: Maybe<Scalars["ID"]["output"]>;
  myWorkflow?: Maybe<Workflow>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  book: BookResult;
  books: BooksResult;
  character?: Maybe<CharacterNode>;
  project?: Maybe<Project>;
  user?: Maybe<User>;
};

export type QueryBookArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBooksArgs = {
  input: PaginationInput;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type ResultError = {
  __typename?: "ResultError";
  error: ResultErrorType;
};

export enum ResultErrorType {
  ForbiddenError = "FORBIDDEN_ERROR",
  InputValidationError = "INPUT_VALIDATION_ERROR",
  NotFound = "NOT_FOUND",
  UnexpectedError = "UNEXPECTED_ERROR",
}

export type Task = {
  __typename?: "Task";
  assignedTo?: Maybe<User>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isAssignedToMe?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UpdateBookInput = {
  id: Scalars["ID"]["input"];
  isbn: Scalars["String"]["input"];
};

export type UpdateBookResult = ResultError | UpdateBookResultOk;

export type UpdateBookResultOk = {
  __typename?: "UpdateBookResultOk";
  result: Book;
};

export type User = {
  __typename?: "User";
  booksRead: Array<Book>;
  fullName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  uuid?: Maybe<Scalars["ID"]["output"]>;
};

export type Wizard = CharacterNode &
  MainCharacter & {
    __typename?: "Wizard";
    id: Scalars["ID"]["output"];
    mostRelatedCharacter?: Maybe<CharacterNode>;
    relatedCharacters: Array<CharacterNode>;
    screenName: Scalars["String"]["output"];
    spells: Array<Scalars["String"]["output"]>;
  };

export type Workflow = {
  __typename?: "Workflow";
  id?: Maybe<Scalars["ID"]["output"]>;
  nextTask?: Maybe<Task>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type Query_Book_Spec_BookFragment = {
  __typename?: "Book";
  id: string;
  isbn: string;
};

export type Book_Spec_QueryBookQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type Book_Spec_QueryBookQuery = {
  __typename?: "Query";
  book:
    | {
        __typename: "BookResultOk";
        result?: { __typename?: "Book"; id: string; isbn: string } | null;
      }
    | { __typename: "ResultError"; error: ResultErrorType };
};

export type GetProjectQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetProjectQuery = {
  __typename?: "Query";
  project?: {
    __typename?: "Project";
    id?: string | null;
    myWorkflow?: {
      __typename?: "Workflow";
      id?: string | null;
      nextTask?: {
        __typename?: "Task";
        id?: string | null;
        assignedTo?: {
          __typename?: "User";
          id: string;
          fullName: string;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type ProjectDataFragment = {
  __typename?: "Project";
  id?: string | null;
  myWorkflow?: {
    __typename?: "Workflow";
    id?: string | null;
    nextTask?: {
      __typename?: "Task";
      id?: string | null;
      assignedTo?: { __typename?: "User"; id: string; fullName: string } | null;
    } | null;
  } | null;
};

export type GetActionButtonsDataFragment = {
  __typename?: "Project";
  id?: string | null;
  myWorkflow?: {
    __typename?: "Workflow";
    id?: string | null;
    nextTask?: {
      __typename?: "Task";
      id?: string | null;
      assignedTo?: { __typename?: "User"; id: string; fullName: string } | null;
    } | null;
  } | null;
};

export type IsAssignedToMeDataFragment = {
  __typename?: "Project";
  id?: string | null;
  myWorkflow?: {
    __typename?: "Workflow";
    id?: string | null;
    nextTask?: {
      __typename?: "Task";
      id?: string | null;
      assignedTo?: { __typename?: "User"; id: string; fullName: string } | null;
    } | null;
  } | null;
};
