import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id" },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ID" },
                },
              },
              directives: [],
            },
          ],
          type: { kind: "NamedType", name: { kind: "Name", value: "User" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "users" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "User" },
                },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "createUser" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "input" },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "CreateUserInput" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "User" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "deleteUser" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id" },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ID" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "CreateUserInput" },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id" },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "firstName" },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "lastName" },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "firstName" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "lastName" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "fullName" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "initials" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "bestFriend" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "User" } },
          directives: [],
        },
      ],
    },
    {
      kind: "SchemaDefinition",
      operationTypes: [
        {
          kind: "OperationTypeDefinition",
          type: { kind: "NamedType", name: { kind: "Name", value: "Query" } },
          operation: "query",
        },
        {
          kind: "OperationTypeDefinition",
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Mutation" },
          },
          operation: "mutation",
        },
      ],
    },
  ],
} as unknown as DocumentNode;
