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
      name: {
        kind: "Name",
        value: "StandardError",
        loc: { start: 18, end: 31 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 36, end: 41 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ErrorType",
                loc: { start: 43, end: 52 },
              },
              loc: { start: 43, end: 52 },
            },
            loc: { start: 43, end: 53 },
          },
          directives: [],
          loc: { start: 36, end: 53 },
        },
      ],
      loc: { start: 13, end: 55 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "ErrorType", loc: { start: 62, end: 71 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 76, end: 85 },
          },
          directives: [],
          loc: { start: 76, end: 85 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 88, end: 110 },
          },
          directives: [],
          loc: { start: 88, end: 110 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 113, end: 128 },
          },
          directives: [],
          loc: { start: 113, end: 128 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 131, end: 147 },
          },
          directives: [],
          loc: { start: 131, end: 147 },
        },
      ],
      loc: { start: 57, end: 149 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 158, end: 166 } },
      directives: [],
      loc: { start: 151, end: 166 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 179, end: 184 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 189, end: 193 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 194, end: 196 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 198, end: 200 },
                  },
                  loc: { start: 198, end: 200 },
                },
                loc: { start: 198, end: 201 },
              },
              directives: [],
              loc: { start: 194, end: 201 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 204, end: 215 },
              },
              loc: { start: 204, end: 215 },
            },
            loc: { start: 204, end: 216 },
          },
          directives: [],
          loc: { start: 189, end: 216 },
        },
      ],
      loc: { start: 167, end: 218 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 225, end: 229 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 234, end: 236 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 238, end: 240 },
              },
              loc: { start: 238, end: 240 },
            },
            loc: { start: 238, end: 241 },
          },
          directives: [],
          loc: { start: 234, end: 241 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 244, end: 248 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 250, end: 256 },
              },
              loc: { start: 250, end: 256 },
            },
            loc: { start: 250, end: 257 },
          },
          directives: [],
          loc: { start: 244, end: 257 },
        },
      ],
      loc: { start: 220, end: 259 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 266, end: 276 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 281, end: 287 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 289, end: 293 },
            },
            loc: { start: 289, end: 293 },
          },
          directives: [],
          loc: { start: 281, end: 293 },
        },
      ],
      loc: { start: 261, end: 295 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 303, end: 314 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 317, end: 327 },
          },
          loc: { start: 317, end: 327 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "StandardError",
            loc: { start: 330, end: 343 },
          },
          loc: { start: 330, end: 343 },
        },
      ],
      loc: { start: 297, end: 343 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 356, end: 361 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 366, end: 370 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 371, end: 373 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 375, end: 377 },
                  },
                  loc: { start: 375, end: 377 },
                },
                loc: { start: 375, end: 378 },
              },
              directives: [],
              loc: { start: 371, end: 378 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 381, end: 385 },
            },
            loc: { start: 381, end: 385 },
          },
          directives: [],
          loc: { start: 366, end: 385 },
        },
      ],
      loc: { start: 344, end: 387 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 394, end: 398 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 403, end: 405 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 407, end: 409 },
              },
              loc: { start: 407, end: 409 },
            },
            loc: { start: 407, end: 410 },
          },
          directives: [],
          loc: { start: 403, end: 410 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 413, end: 421 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 423, end: 429 },
              },
              loc: { start: 423, end: 429 },
            },
            loc: { start: 423, end: 430 },
          },
          directives: [],
          loc: { start: 413, end: 430 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 433, end: 442 },
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
                    loc: { start: 445, end: 449 },
                  },
                  loc: { start: 445, end: 449 },
                },
                loc: { start: 445, end: 450 },
              },
              loc: { start: 444, end: 451 },
            },
            loc: { start: 444, end: 452 },
          },
          directives: [],
          loc: { start: 433, end: 452 },
        },
      ],
      loc: { start: 389, end: 454 },
    },
  ],
  loc: { start: 0, end: 454 },
} as unknown as DocumentNode;
