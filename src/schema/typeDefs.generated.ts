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
        value: "PayloadError",
        loc: { start: 18, end: 30 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 35, end: 40 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PayloadErrorType",
                loc: { start: 42, end: 58 },
              },
              loc: { start: 42, end: 58 },
            },
            loc: { start: 42, end: 59 },
          },
          directives: [],
          loc: { start: 35, end: 59 },
        },
      ],
      loc: { start: 13, end: 61 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadErrorType",
        loc: { start: 68, end: 84 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 89, end: 98 },
          },
          directives: [],
          loc: { start: 89, end: 98 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 101, end: 123 },
          },
          directives: [],
          loc: { start: 101, end: 123 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 126, end: 141 },
          },
          directives: [],
          loc: { start: 126, end: 141 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 144, end: 160 },
          },
          directives: [],
          loc: { start: 144, end: 160 },
        },
      ],
      loc: { start: 63, end: 162 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 171, end: 179 } },
      directives: [],
      loc: { start: 164, end: 179 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 192, end: 197 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 202, end: 206 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 207, end: 209 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 211, end: 213 },
                  },
                  loc: { start: 211, end: 213 },
                },
                loc: { start: 211, end: 214 },
              },
              directives: [],
              loc: { start: 207, end: 214 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 217, end: 228 },
              },
              loc: { start: 217, end: 228 },
            },
            loc: { start: 217, end: 229 },
          },
          directives: [],
          loc: { start: 202, end: 229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "readable",
            loc: { start: 232, end: 240 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 241, end: 243 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 245, end: 247 },
                  },
                  loc: { start: 245, end: 247 },
                },
                loc: { start: 245, end: 248 },
              },
              directives: [],
              loc: { start: 241, end: 248 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 251, end: 259 },
            },
            loc: { start: 251, end: 259 },
          },
          directives: [],
          loc: { start: 232, end: 259 },
        },
      ],
      loc: { start: 180, end: 261 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 268, end: 272 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 277, end: 279 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 281, end: 283 },
              },
              loc: { start: 281, end: 283 },
            },
            loc: { start: 281, end: 284 },
          },
          directives: [],
          loc: { start: 277, end: 284 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 287, end: 291 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 293, end: 299 },
              },
              loc: { start: 293, end: 299 },
            },
            loc: { start: 293, end: 300 },
          },
          directives: [],
          loc: { start: 287, end: 300 },
        },
      ],
      loc: { start: 263, end: 302 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 309, end: 319 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 324, end: 330 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 332, end: 336 },
            },
            loc: { start: 332, end: 336 },
          },
          directives: [],
          loc: { start: 324, end: 336 },
        },
      ],
      loc: { start: 304, end: 338 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 346, end: 357 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 360, end: 370 },
          },
          loc: { start: 360, end: 370 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "PayloadError",
            loc: { start: 373, end: 385 },
          },
          loc: { start: 373, end: 385 },
        },
      ],
      loc: { start: 340, end: 385 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShortNovel",
        loc: { start: 392, end: 402 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 407, end: 409 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 411, end: 413 },
              },
              loc: { start: 411, end: 413 },
            },
            loc: { start: 411, end: 414 },
          },
          directives: [],
          loc: { start: 407, end: 414 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "summary",
            loc: { start: 417, end: 424 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 426, end: 432 },
              },
              loc: { start: 426, end: 432 },
            },
            loc: { start: 426, end: 433 },
          },
          directives: [],
          loc: { start: 417, end: 433 },
        },
      ],
      loc: { start: 387, end: 435 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Magazine", loc: { start: 442, end: 450 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 455, end: 457 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 459, end: 461 },
              },
              loc: { start: 459, end: 461 },
            },
            loc: { start: 459, end: 462 },
          },
          directives: [],
          loc: { start: 455, end: 462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issueNumber",
            loc: { start: 465, end: 476 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 478, end: 481 },
              },
              loc: { start: 478, end: 481 },
            },
            loc: { start: 478, end: 482 },
          },
          directives: [],
          loc: { start: 465, end: 482 },
        },
      ],
      loc: { start: 437, end: 484 },
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "Readable", loc: { start: 492, end: 500 } },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "ShortNovel",
            loc: { start: 503, end: 513 },
          },
          loc: { start: 503, end: 513 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Magazine",
            loc: { start: 516, end: 524 },
          },
          loc: { start: 516, end: 524 },
        },
      ],
      loc: { start: 486, end: 524 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 537, end: 542 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 547, end: 551 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 552, end: 554 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 556, end: 558 },
                  },
                  loc: { start: 556, end: 558 },
                },
                loc: { start: 556, end: 559 },
              },
              directives: [],
              loc: { start: 552, end: 559 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 562, end: 566 },
            },
            loc: { start: 562, end: 566 },
          },
          directives: [],
          loc: { start: 547, end: 566 },
        },
      ],
      loc: { start: 525, end: 568 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 575, end: 579 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 584, end: 586 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 588, end: 590 },
              },
              loc: { start: 588, end: 590 },
            },
            loc: { start: 588, end: 591 },
          },
          directives: [],
          loc: { start: 584, end: 591 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 594, end: 602 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 604, end: 610 },
              },
              loc: { start: 604, end: 610 },
            },
            loc: { start: 604, end: 611 },
          },
          directives: [],
          loc: { start: 594, end: 611 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 614, end: 623 },
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
                    loc: { start: 626, end: 630 },
                  },
                  loc: { start: 626, end: 630 },
                },
                loc: { start: 626, end: 631 },
              },
              loc: { start: 625, end: 632 },
            },
            loc: { start: 625, end: 633 },
          },
          directives: [],
          loc: { start: 614, end: 633 },
        },
      ],
      loc: { start: 570, end: 635 },
    },
  ],
  loc: { start: 0, end: 635 },
} as unknown as DocumentNode;
