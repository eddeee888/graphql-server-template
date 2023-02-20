import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 6, end: 11 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1, end: 11 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 18, end: 26 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 13, end: 26 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "StandardError",
        loc: { start: 33, end: 46 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 51, end: 56 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ErrorType",
                loc: { start: 58, end: 67 },
              },
              loc: { start: 58, end: 67 },
            },
            loc: { start: 58, end: 68 },
          },
          directives: [],
          loc: { start: 51, end: 68 },
        },
      ],
      loc: { start: 28, end: 70 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "ErrorType", loc: { start: 77, end: 86 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 91, end: 100 },
          },
          directives: [],
          loc: { start: 91, end: 100 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 103, end: 125 },
          },
          directives: [],
          loc: { start: 103, end: 125 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 128, end: 143 },
          },
          directives: [],
          loc: { start: 128, end: 143 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 146, end: 162 },
          },
          directives: [],
          loc: { start: 146, end: 162 },
        },
      ],
      loc: { start: 72, end: 164 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 173, end: 181 } },
      directives: [],
      loc: { start: 166, end: 181 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 194, end: 199 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 204, end: 208 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 209, end: 211 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 213, end: 215 },
                  },
                  loc: { start: 213, end: 215 },
                },
                loc: { start: 213, end: 216 },
              },
              directives: [],
              loc: { start: 209, end: 216 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 219, end: 230 },
              },
              loc: { start: 219, end: 230 },
            },
            loc: { start: 219, end: 231 },
          },
          directives: [],
          loc: { start: 204, end: 231 },
        },
      ],
      loc: { start: 182, end: 233 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 240, end: 244 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 249, end: 251 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 253, end: 255 },
              },
              loc: { start: 253, end: 255 },
            },
            loc: { start: 253, end: 256 },
          },
          directives: [],
          loc: { start: 249, end: 256 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 259, end: 263 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 265, end: 271 },
              },
              loc: { start: 265, end: 271 },
            },
            loc: { start: 265, end: 272 },
          },
          directives: [],
          loc: { start: 259, end: 272 },
        },
      ],
      loc: { start: 235, end: 274 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 281, end: 291 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 296, end: 302 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 304, end: 308 },
            },
            loc: { start: 304, end: 308 },
          },
          directives: [],
          loc: { start: 296, end: 308 },
        },
      ],
      loc: { start: 276, end: 310 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 318, end: 329 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 332, end: 342 },
          },
          loc: { start: 332, end: 342 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "StandardError",
            loc: { start: 345, end: 358 },
          },
          loc: { start: 345, end: 358 },
        },
      ],
      loc: { start: 312, end: 358 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 371, end: 376 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 381, end: 385 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 386, end: 388 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 390, end: 392 },
                  },
                  loc: { start: 390, end: 392 },
                },
                loc: { start: 390, end: 393 },
              },
              directives: [],
              loc: { start: 386, end: 393 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 396, end: 400 },
            },
            loc: { start: 396, end: 400 },
          },
          directives: [],
          loc: { start: 381, end: 400 },
        },
      ],
      loc: { start: 359, end: 402 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 409, end: 413 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 418, end: 420 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 422, end: 424 },
              },
              loc: { start: 422, end: 424 },
            },
            loc: { start: 422, end: 425 },
          },
          directives: [],
          loc: { start: 418, end: 425 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 428, end: 436 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 438, end: 444 },
              },
              loc: { start: 438, end: 444 },
            },
            loc: { start: 438, end: 445 },
          },
          directives: [],
          loc: { start: 428, end: 445 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 448, end: 457 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Book",
                    loc: { start: 460, end: 464 },
                  },
                  loc: { start: 460, end: 464 },
                },
                loc: { start: 460, end: 465 },
              },
              loc: { start: 459, end: 466 },
            },
            loc: { start: 459, end: 467 },
          },
          directives: [],
          loc: { start: 448, end: 467 },
        },
      ],
      loc: { start: 404, end: 469 },
    },
  ],
  loc: { start: 0, end: 469 },
} as unknown as DocumentNode;
