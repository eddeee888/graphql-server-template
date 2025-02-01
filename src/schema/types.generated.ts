import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { BookMapper } from "./book/schema.mappers";
import { UserMapper } from "./user/schema.mappers";
import { WizardMapper } from "./character/schema.mappers";
import { ResolverContext } from "../yoga";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
};

export type Book = {
  __typename?: "Book";
  id: Scalars["ID"]["output"];
  isbn: Scalars["String"]["output"];
};

export type BookPayload = BookResult | PayloadError;

export type BookResult = {
  __typename?: "BookResult";
  result?: Maybe<Book>;
};

export type BooksPayload = BooksResult | PayloadError;

export type BooksResult = {
  __typename?: "BooksResult";
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

export type CreateBookPayload = CreateBookResult | PayloadError;

export type CreateBookResult = {
  __typename?: "CreateBookResult";
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
  createBook: CreateBookPayload;
};

export type MutationcreateBookArgs = {
  input: CreateBookInput;
};

export type Pagination = {
  __typename?: "Pagination";
  totalPageCount: Scalars["Int"]["output"];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  recordsPerPage?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PayloadError = {
  __typename?: "PayloadError";
  error: PayloadErrorType;
};

export type PayloadErrorType =
  | "FORBIDDEN_ERROR"
  | "INPUT_VALIDATION_ERROR"
  | "NOT_FOUND"
  | "UNEXPECTED_ERROR";

export type Query = {
  __typename?: "Query";
  book: BookPayload;
  books: BooksPayload;
  character?: Maybe<CharacterNode>;
  user?: Maybe<User>;
};

export type QuerybookArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerybooksArgs = {
  input: PaginationInput;
};

export type QuerycharacterArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryuserArgs = {
  id: Scalars["ID"]["input"];
};

export type User = {
  __typename?: "User";
  booksRead: Array<Book>;
  fullName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  BookPayload:
    | (Omit<BookResult, "result"> & { result?: Maybe<_RefType["Book"]> } & {
        __typename: "BookResult";
      })
    | (Omit<PayloadError, "error"> & { error: _RefType["PayloadErrorType"] } & {
        __typename: "PayloadError";
      });
  BooksPayload:
    | (Omit<BooksResult, "result"> & { result: Array<_RefType["Book"]> } & {
        __typename: "BooksResult";
      })
    | (Omit<PayloadError, "error"> & { error: _RefType["PayloadErrorType"] } & {
        __typename: "PayloadError";
      });
  CreateBookPayload:
    | (Omit<CreateBookResult, "result"> & { result: _RefType["Book"] } & {
        __typename: "CreateBookResult";
      })
    | (Omit<PayloadError, "error"> & { error: _RefType["PayloadErrorType"] } & {
        __typename: "PayloadError";
      });
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> =
  {
    CharacterNode:
      | (Omit<ExtraCharacter, "mostRelatedCharacter" | "relatedCharacters"> & {
          mostRelatedCharacter?: Maybe<_RefType["CharacterNode"]>;
          relatedCharacters: Array<_RefType["CharacterNode"]>;
        } & { __typename: "ExtraCharacter" })
      | (Omit<Fighter, "mostRelatedCharacter" | "relatedCharacters"> & {
          mostRelatedCharacter?: Maybe<_RefType["CharacterNode"]>;
          relatedCharacters: Array<_RefType["CharacterNode"]>;
        } & { __typename: "Fighter" })
      | (WizardMapper & { __typename: "Wizard" });
    MainCharacter:
      | (Omit<Fighter, "mostRelatedCharacter" | "relatedCharacters"> & {
          mostRelatedCharacter?: Maybe<_RefType["CharacterNode"]>;
          relatedCharacters: Array<_RefType["CharacterNode"]>;
        } & { __typename: "Fighter" })
      | (WizardMapper & { __typename: "Wizard" });
  };

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<BookMapper>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  BookPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["BookPayload"]
  >;
  BookResult: ResolverTypeWrapper<
    Omit<BookResult, "result"> & { result?: Maybe<ResolversTypes["Book"]> }
  >;
  BooksPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["BooksPayload"]
  >;
  BooksResult: ResolverTypeWrapper<
    Omit<BooksResult, "result"> & { result: Array<ResolversTypes["Book"]> }
  >;
  CharacterNode: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["CharacterNode"]
  >;
  CreateBookInput: CreateBookInput;
  CreateBookPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["CreateBookPayload"]
  >;
  CreateBookResult: ResolverTypeWrapper<
    Omit<CreateBookResult, "result"> & { result: ResolversTypes["Book"] }
  >;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  ExtraCharacter: ResolverTypeWrapper<
    Omit<ExtraCharacter, "mostRelatedCharacter" | "relatedCharacters"> & {
      mostRelatedCharacter?: Maybe<ResolversTypes["CharacterNode"]>;
      relatedCharacters: Array<ResolversTypes["CharacterNode"]>;
    }
  >;
  Fighter: ResolverTypeWrapper<
    Omit<Fighter, "mostRelatedCharacter" | "relatedCharacters"> & {
      mostRelatedCharacter?: Maybe<ResolversTypes["CharacterNode"]>;
      relatedCharacters: Array<ResolversTypes["CharacterNode"]>;
    }
  >;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  MainCharacter: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["MainCharacter"]
  >;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationInput: PaginationInput;
  PayloadError: ResolverTypeWrapper<
    Omit<PayloadError, "error"> & { error: ResolversTypes["PayloadErrorType"] }
  >;
  PayloadErrorType: ResolverTypeWrapper<
    | "NOT_FOUND"
    | "INPUT_VALIDATION_ERROR"
    | "FORBIDDEN_ERROR"
    | "UNEXPECTED_ERROR"
  >;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<UserMapper>;
  Wizard: ResolverTypeWrapper<WizardMapper>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: BookMapper;
  ID: Scalars["ID"]["output"];
  String: Scalars["String"]["output"];
  BookPayload: ResolversUnionTypes<ResolversParentTypes>["BookPayload"];
  BookResult: Omit<BookResult, "result"> & {
    result?: Maybe<ResolversParentTypes["Book"]>;
  };
  BooksPayload: ResolversUnionTypes<ResolversParentTypes>["BooksPayload"];
  BooksResult: Omit<BooksResult, "result"> & {
    result: Array<ResolversParentTypes["Book"]>;
  };
  CharacterNode: ResolversInterfaceTypes<ResolversParentTypes>["CharacterNode"];
  CreateBookInput: CreateBookInput;
  CreateBookPayload: ResolversUnionTypes<ResolversParentTypes>["CreateBookPayload"];
  CreateBookResult: Omit<CreateBookResult, "result"> & {
    result: ResolversParentTypes["Book"];
  };
  DateTime: Scalars["DateTime"]["output"];
  ExtraCharacter: Omit<
    ExtraCharacter,
    "mostRelatedCharacter" | "relatedCharacters"
  > & {
    mostRelatedCharacter?: Maybe<ResolversParentTypes["CharacterNode"]>;
    relatedCharacters: Array<ResolversParentTypes["CharacterNode"]>;
  };
  Fighter: Omit<Fighter, "mostRelatedCharacter" | "relatedCharacters"> & {
    mostRelatedCharacter?: Maybe<ResolversParentTypes["CharacterNode"]>;
    relatedCharacters: Array<ResolversParentTypes["CharacterNode"]>;
  };
  Int: Scalars["Int"]["output"];
  MainCharacter: ResolversInterfaceTypes<ResolversParentTypes>["MainCharacter"];
  Mutation: {};
  Pagination: Pagination;
  PaginationInput: PaginationInput;
  PayloadError: PayloadError;
  Query: {};
  User: UserMapper;
  Wizard: WizardMapper;
  Boolean: Scalars["Boolean"]["output"];
};

export type BookResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Book"] = ResolversParentTypes["Book"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isbn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["BookPayload"] = ResolversParentTypes["BookPayload"],
> = {
  __resolveType?: TypeResolveFn<
    "BookResult" | "PayloadError",
    ParentType,
    ContextType
  >;
};

export type BookResultResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["BookResult"] = ResolversParentTypes["BookResult"],
> = {
  result?: Resolver<Maybe<ResolversTypes["Book"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BooksPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["BooksPayload"] = ResolversParentTypes["BooksPayload"],
> = {
  __resolveType?: TypeResolveFn<
    "BooksResult" | "PayloadError",
    ParentType,
    ContextType
  >;
};

export type BooksResultResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["BooksResult"] = ResolversParentTypes["BooksResult"],
> = {
  pagination?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes["Book"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterNodeResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["CharacterNode"] = ResolversParentTypes["CharacterNode"],
> = {
  __resolveType?: TypeResolveFn<
    "ExtraCharacter" | "Fighter" | "Wizard",
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  mostRelatedCharacter?: Resolver<
    Maybe<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
  relatedCharacters?: Resolver<
    Array<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
};

export type CreateBookPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["CreateBookPayload"] = ResolversParentTypes["CreateBookPayload"],
> = {
  __resolveType?: TypeResolveFn<
    "CreateBookResult" | "PayloadError",
    ParentType,
    ContextType
  >;
};

export type CreateBookResultResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["CreateBookResult"] = ResolversParentTypes["CreateBookResult"],
> = {
  result?: Resolver<ResolversTypes["Book"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type ExtraCharacterResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["ExtraCharacter"] = ResolversParentTypes["ExtraCharacter"],
> = {
  creditName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  mostRelatedCharacter?: Resolver<
    Maybe<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
  relatedCharacters?: Resolver<
    Array<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FighterResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Fighter"] = ResolversParentTypes["Fighter"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  mostRelatedCharacter?: Resolver<
    Maybe<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
  powerLevel?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  relatedCharacters?: Resolver<
    Array<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
  screenName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MainCharacterResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["MainCharacter"] = ResolversParentTypes["MainCharacter"],
> = {
  __resolveType?: TypeResolveFn<"Fighter" | "Wizard", ParentType, ContextType>;
  screenName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createBook?: Resolver<
    ResolversTypes["CreateBookPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateBookArgs, "input">
  >;
};

export type PaginationResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Pagination"] = ResolversParentTypes["Pagination"],
> = {
  totalPageCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayloadErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["PayloadError"] = ResolversParentTypes["PayloadError"],
> = {
  error?: Resolver<ResolversTypes["PayloadErrorType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayloadErrorTypeResolvers = EnumResolverSignature<
  {
    FORBIDDEN_ERROR?: any;
    INPUT_VALIDATION_ERROR?: any;
    NOT_FOUND?: any;
    UNEXPECTED_ERROR?: any;
  },
  ResolversTypes["PayloadErrorType"]
>;

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  book?: Resolver<
    ResolversTypes["BookPayload"],
    ParentType,
    ContextType,
    RequireFields<QuerybookArgs, "id">
  >;
  books?: Resolver<
    ResolversTypes["BooksPayload"],
    ParentType,
    ContextType,
    RequireFields<QuerybooksArgs, "input">
  >;
  character?: Resolver<
    Maybe<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycharacterArgs, "id">
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, "id">
  >;
};

export type UserResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  booksRead?: Resolver<Array<ResolversTypes["Book"]>, ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WizardResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Wizard"] = ResolversParentTypes["Wizard"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  mostRelatedCharacter?: Resolver<
    Maybe<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
  relatedCharacters?: Resolver<
    Array<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType
  >;
  screenName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  spells?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  Book?: BookResolvers<ContextType>;
  BookPayload?: BookPayloadResolvers<ContextType>;
  BookResult?: BookResultResolvers<ContextType>;
  BooksPayload?: BooksPayloadResolvers<ContextType>;
  BooksResult?: BooksResultResolvers<ContextType>;
  CharacterNode?: CharacterNodeResolvers<ContextType>;
  CreateBookPayload?: CreateBookPayloadResolvers<ContextType>;
  CreateBookResult?: CreateBookResultResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  ExtraCharacter?: ExtraCharacterResolvers<ContextType>;
  Fighter?: FighterResolvers<ContextType>;
  MainCharacter?: MainCharacterResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  PayloadErrorType?: PayloadErrorTypeResolvers;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Wizard?: WizardResolvers<ContextType>;
};
