import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { BookMapper } from "./book/schema.mappers";
import { UserMapper } from "./user/schema.mappers";
import { ResolverContext } from "../index";
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date | string;
};

export type Book = {
  __typename: "Book";
  id: Scalars["ID"];
  isbn: Scalars["String"];
};

export type BookPayload = BookResult | StandardError;

export type BookResult = {
  __typename: "BookResult";
  result?: Maybe<Book>;
};

export type ErrorType =
  | "FORBIDDEN_ERROR"
  | "INPUT_VALIDATION_ERROR"
  | "NOT_FOUND"
  | "UNEXPECTED_ERROR";

export type Query = {
  __typename: "Query";
  book: BookPayload;
  user?: Maybe<User>;
};

export type QueryBookArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type StandardError = {
  __typename: "StandardError";
  error: ErrorType;
};

export type User = {
  __typename: "User";
  booksRead: Array<Book>;
  fullName: Scalars["String"];
  id: Scalars["ID"];
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
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
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
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<BookMapper>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  BookPayload: ResolversTypes["BookResult"] | ResolversTypes["StandardError"];
  BookResult: ResolverTypeWrapper<
    Omit<BookResult, "result"> & { result?: Maybe<ResolversTypes["Book"]> }
  >;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  ErrorType: ErrorType;
  Query: ResolverTypeWrapper<{}>;
  StandardError: ResolverTypeWrapper<StandardError>;
  User: ResolverTypeWrapper<UserMapper>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: BookMapper;
  ID: Scalars["ID"];
  String: Scalars["String"];
  BookPayload:
    | ResolversParentTypes["BookResult"]
    | ResolversParentTypes["StandardError"];
  BookResult: Omit<BookResult, "result"> & {
    result?: Maybe<ResolversParentTypes["Book"]>;
  };
  DateTime: Scalars["DateTime"];
  Query: {};
  StandardError: StandardError;
  User: UserMapper;
  Boolean: Scalars["Boolean"];
};

export type BookResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Book"] = ResolversParentTypes["Book"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isbn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["BookPayload"] = ResolversParentTypes["BookPayload"]
> = {
  __resolveType: TypeResolveFn<
    "BookResult" | "StandardError",
    ParentType,
    ContextType
  >;
};

export type BookResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["BookResult"] = ResolversParentTypes["BookResult"]
> = {
  result?: Resolver<Maybe<ResolversTypes["Book"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  book?: Resolver<
    ResolversTypes["BookPayload"],
    ParentType,
    ContextType,
    RequireFields<QueryBookArgs, "id">
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
};

export type StandardErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["StandardError"] = ResolversParentTypes["StandardError"]
> = {
  error?: Resolver<ResolversTypes["ErrorType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  booksRead?: Resolver<Array<ResolversTypes["Book"]>, ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  Book?: BookResolvers<ContextType>;
  BookPayload?: BookPayloadResolvers<ContextType>;
  BookResult?: BookResultResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  StandardError?: StandardErrorResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
