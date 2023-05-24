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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
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

export type Magazine = {
  __typename?: "Magazine";
  id: Scalars["ID"]["output"];
  issueNumber: Scalars["Int"]["output"];
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
  readable?: Maybe<Readable>;
  user?: Maybe<User>;
};

export type QueryBookArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryReadableArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type Readable = Magazine | ShortNovel;

export type ShortNovel = {
  __typename?: "ShortNovel";
  id: Scalars["ID"]["output"];
  summary: Scalars["String"]["output"];
};

export type User = {
  __typename?: "User";
  booksRead: Array<Book>;
  fullName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
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

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  BookPayload:
    | (Omit<BookResult, "result"> & { result?: Maybe<RefType["Book"]> } & {
        __typename: "BookResult";
      })
    | (PayloadError & { __typename: "PayloadError" });
  Readable:
    | (Magazine & { __typename: "Magazine" })
    | (ShortNovel & { __typename: "ShortNovel" });
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
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  Magazine: ResolverTypeWrapper<Magazine>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  PayloadError: ResolverTypeWrapper<PayloadError>;
  PayloadErrorType: PayloadErrorType;
  Query: ResolverTypeWrapper<{}>;
  Readable: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["Readable"]
  >;
  ShortNovel: ResolverTypeWrapper<ShortNovel>;
  User: ResolverTypeWrapper<UserMapper>;
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
  DateTime: Scalars["DateTime"]["output"];
  Magazine: Magazine;
  Int: Scalars["Int"]["output"];
  PayloadError: PayloadError;
  Query: {};
  Readable: ResolversUnionTypes<ResolversParentTypes>["Readable"];
  ShortNovel: ShortNovel;
  User: UserMapper;
  Boolean: Scalars["Boolean"]["output"];
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
  __resolveType?: TypeResolveFn<
    "BookResult" | "PayloadError",
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

export type MagazineResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Magazine"] = ResolversParentTypes["Magazine"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  issueNumber?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayloadErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["PayloadError"] = ResolversParentTypes["PayloadError"]
> = {
  error?: Resolver<ResolversTypes["PayloadErrorType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

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
  readable?: Resolver<
    Maybe<ResolversTypes["Readable"]>,
    ParentType,
    ContextType,
    RequireFields<QueryReadableArgs, "id">
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
};

export type ReadableResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Readable"] = ResolversParentTypes["Readable"]
> = {
  __resolveType?: TypeResolveFn<
    "Magazine" | "ShortNovel",
    ParentType,
    ContextType
  >;
};

export type ShortNovelResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["ShortNovel"] = ResolversParentTypes["ShortNovel"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  Magazine?: MagazineResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Readable?: ReadableResolvers<ContextType>;
  ShortNovel?: ShortNovelResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
