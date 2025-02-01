import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      name: { kind: "Name", value: "Query" },
      kind: "ObjectTypeDefinition",
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book" },
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
              name: { kind: "Name", value: "BookPayload" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "books" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "input" },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "PaginationInput" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BooksPayload" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "character" },
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
            kind: "NamedType",
            name: { kind: "Name", value: "CharacterNode" },
          },
          directives: [],
        },
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
      ],
      directives: [],
      interfaces: [],
    },
    {
      name: { kind: "Name", value: "Mutation" },
      kind: "ObjectTypeDefinition",
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "createBook" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "input" },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "CreateBookInput" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateBookPayload" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      interfaces: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PayloadError" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PayloadErrorType" },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "PayloadErrorType" },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NOT_FOUND" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "INPUT_VALIDATION_ERROR" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FORBIDDEN_ERROR" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UNEXPECTED_ERROR" },
          directives: [],
        },
      ],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "PaginationInput" },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "page" },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "recordsPerPage" },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Pagination" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "totalPageCount" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime" },
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book" },
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
          name: { kind: "Name", value: "isbn" },
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
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "BookResult" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "result" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Book" } },
          directives: [],
        },
      ],
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "BookPayload" },
      directives: [],
      types: [
        { kind: "NamedType", name: { kind: "Name", value: "BookResult" } },
        { kind: "NamedType", name: { kind: "Name", value: "PayloadError" } },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "BooksResult" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "result" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Book" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pagination" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Pagination" },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "BooksPayload" },
      directives: [],
      types: [
        { kind: "NamedType", name: { kind: "Name", value: "BooksResult" } },
        { kind: "NamedType", name: { kind: "Name", value: "PayloadError" } },
      ],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: { kind: "Name", value: "CreateBookInput" },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "isbn" },
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
      name: { kind: "Name", value: "CreateBookResult" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "result" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Book" } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "CreateBookPayload" },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "CreateBookResult" },
        },
        { kind: "NamedType", name: { kind: "Name", value: "PayloadError" } },
      ],
    },
    {
      name: { kind: "Name", value: "User" },
      kind: "ObjectTypeDefinition",
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "booksRead" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Book" },
                },
              },
            },
          },
          directives: [],
        },
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
      ],
      directives: [],
      interfaces: [],
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "CharacterNode" },
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
          name: { kind: "Name", value: "mostRelatedCharacter" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CharacterNode" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "relatedCharacters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "CharacterNode" },
                },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "MainCharacter" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "screenName" },
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
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wizard" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "CharacterNode" } },
        { kind: "NamedType", name: { kind: "Name", value: "MainCharacter" } },
      ],
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
          name: { kind: "Name", value: "mostRelatedCharacter" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CharacterNode" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "relatedCharacters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "CharacterNode" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "screenName" },
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
          name: { kind: "Name", value: "spells" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
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
      name: { kind: "Name", value: "Fighter" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "CharacterNode" } },
        { kind: "NamedType", name: { kind: "Name", value: "MainCharacter" } },
      ],
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
          name: { kind: "Name", value: "mostRelatedCharacter" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CharacterNode" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "relatedCharacters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "CharacterNode" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "screenName" },
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
          name: { kind: "Name", value: "powerLevel" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ExtraCharacter" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "CharacterNode" } },
      ],
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
          name: { kind: "Name", value: "mostRelatedCharacter" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CharacterNode" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "relatedCharacters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "CharacterNode" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "creditName" },
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
