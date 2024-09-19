import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { BookMapper } from "./book/schema.mappers";
import { UserMapper } from "./user/schema.mappers";
import { WizardMapper } from "./character/schema.mappers";
import { ResolverContext } from "../index";
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
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues;
};
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

export type CharacterNode = {
  appearsIn: Array<Readable>;
  id: Scalars["ID"]["output"];
  lastAppearsIn?: Maybe<Readable>;
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type ExtraCharacter = CharacterNode & {
  __typename?: "ExtraCharacter";
  appearsIn: Array<Readable>;
  creditName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastAppearsIn?: Maybe<Readable>;
  mostRelatedCharacter?: Maybe<CharacterNode>;
  relatedCharacters: Array<CharacterNode>;
};

export type Fighter = CharacterNode &
  MainCharacter & {
    __typename?: "Fighter";
    appearsIn: Array<Readable>;
    id: Scalars["ID"]["output"];
    lastAppearsIn?: Maybe<Readable>;
    mostRelatedCharacter?: Maybe<CharacterNode>;
    powerLevel: Scalars["Int"]["output"];
    relatedCharacters: Array<CharacterNode>;
    screenName: Scalars["String"]["output"];
  };

export type Magazine = {
  __typename?: "Magazine";
  id: Scalars["ID"]["output"];
  issueNumber: Scalars["Int"]["output"];
};

export type MainCharacter = {
  screenName: Scalars["String"]["output"];
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
  character?: Maybe<CharacterNode>;
  readable?: Maybe<Readable>;
  user?: Maybe<User>;
};

export type QuerybookArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerycharacterArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryreadableArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryuserArgs = {
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

export type Wizard = CharacterNode &
  MainCharacter & {
    __typename?: "Wizard";
    appearsIn: Array<Readable>;
    id: Scalars["ID"]["output"];
    lastAppearsIn?: Maybe<Readable>;
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
  Readable:
    | (Magazine & { __typename: "Magazine" })
    | (ShortNovel & { __typename: "ShortNovel" });
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> =
  {
    CharacterNode:
      | (Omit<
          ExtraCharacter,
          | "appearsIn"
          | "lastAppearsIn"
          | "mostRelatedCharacter"
          | "relatedCharacters"
        > & {
          appearsIn: Array<_RefType["Readable"]>;
          lastAppearsIn?: Maybe<_RefType["Readable"]>;
          mostRelatedCharacter?: Maybe<_RefType["CharacterNode"]>;
          relatedCharacters: Array<_RefType["CharacterNode"]>;
        } & { __typename: "ExtraCharacter" })
      | (Omit<
          Fighter,
          | "appearsIn"
          | "lastAppearsIn"
          | "mostRelatedCharacter"
          | "relatedCharacters"
        > & {
          appearsIn: Array<_RefType["Readable"]>;
          lastAppearsIn?: Maybe<_RefType["Readable"]>;
          mostRelatedCharacter?: Maybe<_RefType["CharacterNode"]>;
          relatedCharacters: Array<_RefType["CharacterNode"]>;
        } & { __typename: "Fighter" })
      | (WizardMapper & { __typename: "Wizard" });
    MainCharacter:
      | (Omit<
          Fighter,
          | "appearsIn"
          | "lastAppearsIn"
          | "mostRelatedCharacter"
          | "relatedCharacters"
        > & {
          appearsIn: Array<_RefType["Readable"]>;
          lastAppearsIn?: Maybe<_RefType["Readable"]>;
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
  CharacterNode: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["CharacterNode"]
  >;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  ExtraCharacter: ResolverTypeWrapper<
    Omit<
      ExtraCharacter,
      | "appearsIn"
      | "lastAppearsIn"
      | "mostRelatedCharacter"
      | "relatedCharacters"
    > & {
      appearsIn: Array<ResolversTypes["Readable"]>;
      lastAppearsIn?: Maybe<ResolversTypes["Readable"]>;
      mostRelatedCharacter?: Maybe<ResolversTypes["CharacterNode"]>;
      relatedCharacters: Array<ResolversTypes["CharacterNode"]>;
    }
  >;
  Fighter: ResolverTypeWrapper<
    Omit<
      Fighter,
      | "appearsIn"
      | "lastAppearsIn"
      | "mostRelatedCharacter"
      | "relatedCharacters"
    > & {
      appearsIn: Array<ResolversTypes["Readable"]>;
      lastAppearsIn?: Maybe<ResolversTypes["Readable"]>;
      mostRelatedCharacter?: Maybe<ResolversTypes["CharacterNode"]>;
      relatedCharacters: Array<ResolversTypes["CharacterNode"]>;
    }
  >;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Magazine: ResolverTypeWrapper<Magazine>;
  MainCharacter: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["MainCharacter"]
  >;
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
  Readable: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["Readable"]
  >;
  ShortNovel: ResolverTypeWrapper<ShortNovel>;
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
  CharacterNode: ResolversInterfaceTypes<ResolversParentTypes>["CharacterNode"];
  DateTime: Scalars["DateTime"]["output"];
  ExtraCharacter: Omit<
    ExtraCharacter,
    "appearsIn" | "lastAppearsIn" | "mostRelatedCharacter" | "relatedCharacters"
  > & {
    appearsIn: Array<ResolversParentTypes["Readable"]>;
    lastAppearsIn?: Maybe<ResolversParentTypes["Readable"]>;
    mostRelatedCharacter?: Maybe<ResolversParentTypes["CharacterNode"]>;
    relatedCharacters: Array<ResolversParentTypes["CharacterNode"]>;
  };
  Fighter: Omit<
    Fighter,
    "appearsIn" | "lastAppearsIn" | "mostRelatedCharacter" | "relatedCharacters"
  > & {
    appearsIn: Array<ResolversParentTypes["Readable"]>;
    lastAppearsIn?: Maybe<ResolversParentTypes["Readable"]>;
    mostRelatedCharacter?: Maybe<ResolversParentTypes["CharacterNode"]>;
    relatedCharacters: Array<ResolversParentTypes["CharacterNode"]>;
  };
  Int: Scalars["Int"]["output"];
  Magazine: Magazine;
  MainCharacter: ResolversInterfaceTypes<ResolversParentTypes>["MainCharacter"];
  PayloadError: PayloadError;
  Query: {};
  Readable: ResolversUnionTypes<ResolversParentTypes>["Readable"];
  ShortNovel: ShortNovel;
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
  appearsIn?: Resolver<
    Array<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastAppearsIn?: Resolver<
    Maybe<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
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

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type ExtraCharacterResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["ExtraCharacter"] = ResolversParentTypes["ExtraCharacter"],
> = {
  appearsIn?: Resolver<
    Array<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
  creditName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastAppearsIn?: Resolver<
    Maybe<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
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
  appearsIn?: Resolver<
    Array<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastAppearsIn?: Resolver<
    Maybe<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
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

export type MagazineResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Magazine"] = ResolversParentTypes["Magazine"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  issueNumber?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
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
  character?: Resolver<
    Maybe<ResolversTypes["CharacterNode"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycharacterArgs, "id">
  >;
  readable?: Resolver<
    Maybe<ResolversTypes["Readable"]>,
    ParentType,
    ContextType,
    RequireFields<QueryreadableArgs, "id">
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, "id">
  >;
};

export type ReadableResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Readable"] = ResolversParentTypes["Readable"],
> = {
  __resolveType?: TypeResolveFn<
    "Magazine" | "ShortNovel",
    ParentType,
    ContextType
  >;
};

export type ShortNovelResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["ShortNovel"] = ResolversParentTypes["ShortNovel"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  appearsIn?: Resolver<
    Array<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastAppearsIn?: Resolver<
    Maybe<ResolversTypes["Readable"]>,
    ParentType,
    ContextType
  >;
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
  CharacterNode?: CharacterNodeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  ExtraCharacter?: ExtraCharacterResolvers<ContextType>;
  Fighter?: FighterResolvers<ContextType>;
  Magazine?: MagazineResolvers<ContextType>;
  MainCharacter?: MainCharacterResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  PayloadErrorType?: PayloadErrorTypeResolvers;
  Query?: QueryResolvers<ContextType>;
  Readable?: ReadableResolvers<ContextType>;
  ShortNovel?: ShortNovelResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Wizard?: WizardResolvers<ContextType>;
};
