import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadError",
        loc: { start: 17, end: 29 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 34, end: 39 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PayloadErrorType",
                loc: { start: 41, end: 57 },
              },
              loc: { start: 41, end: 57 },
            },
            loc: { start: 41, end: 58 },
          },
          directives: [],
          loc: { start: 34, end: 58 },
        },
      ],
      loc: { start: 12, end: 60 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadErrorType",
        loc: { start: 67, end: 83 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 88, end: 97 },
          },
          directives: [],
          loc: { start: 88, end: 97 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 100, end: 122 },
          },
          directives: [],
          loc: { start: 100, end: 122 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 125, end: 140 },
          },
          directives: [],
          loc: { start: 125, end: 140 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 143, end: 159 },
          },
          directives: [],
          loc: { start: 143, end: 159 },
        },
      ],
      loc: { start: 62, end: 161 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 170, end: 178 } },
      directives: [],
      loc: { start: 163, end: 178 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 191, end: 196 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 201, end: 205 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 206, end: 208 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 210, end: 212 },
                  },
                  loc: { start: 210, end: 212 },
                },
                loc: { start: 210, end: 213 },
              },
              directives: [],
              loc: { start: 206, end: 213 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 216, end: 227 },
              },
              loc: { start: 216, end: 227 },
            },
            loc: { start: 216, end: 228 },
          },
          directives: [],
          loc: { start: 201, end: 228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "readable",
            loc: { start: 231, end: 239 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 240, end: 242 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 244, end: 246 },
                  },
                  loc: { start: 244, end: 246 },
                },
                loc: { start: 244, end: 247 },
              },
              directives: [],
              loc: { start: 240, end: 247 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 250, end: 258 },
            },
            loc: { start: 250, end: 258 },
          },
          directives: [],
          loc: { start: 231, end: 258 },
        },
      ],
      loc: { start: 179, end: 260 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 267, end: 271 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 276, end: 278 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 280, end: 282 },
              },
              loc: { start: 280, end: 282 },
            },
            loc: { start: 280, end: 283 },
          },
          directives: [],
          loc: { start: 276, end: 283 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 286, end: 290 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 292, end: 298 },
              },
              loc: { start: 292, end: 298 },
            },
            loc: { start: 292, end: 299 },
          },
          directives: [],
          loc: { start: 286, end: 299 },
        },
      ],
      loc: { start: 262, end: 301 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 308, end: 318 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 323, end: 329 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 331, end: 335 },
            },
            loc: { start: 331, end: 335 },
          },
          directives: [],
          loc: { start: 323, end: 335 },
        },
      ],
      loc: { start: 303, end: 337 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 345, end: 356 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 359, end: 369 },
          },
          loc: { start: 359, end: 369 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "PayloadError",
            loc: { start: 372, end: 384 },
          },
          loc: { start: 372, end: 384 },
        },
      ],
      loc: { start: 339, end: 384 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShortNovel",
        loc: { start: 391, end: 401 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 406, end: 408 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 410, end: 412 },
              },
              loc: { start: 410, end: 412 },
            },
            loc: { start: 410, end: 413 },
          },
          directives: [],
          loc: { start: 406, end: 413 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "summary",
            loc: { start: 416, end: 423 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 425, end: 431 },
              },
              loc: { start: 425, end: 431 },
            },
            loc: { start: 425, end: 432 },
          },
          directives: [],
          loc: { start: 416, end: 432 },
        },
      ],
      loc: { start: 386, end: 434 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Magazine", loc: { start: 441, end: 449 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 454, end: 456 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 458, end: 460 },
              },
              loc: { start: 458, end: 460 },
            },
            loc: { start: 458, end: 461 },
          },
          directives: [],
          loc: { start: 454, end: 461 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issueNumber",
            loc: { start: 464, end: 475 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 477, end: 480 },
              },
              loc: { start: 477, end: 480 },
            },
            loc: { start: 477, end: 481 },
          },
          directives: [],
          loc: { start: 464, end: 481 },
        },
      ],
      loc: { start: 436, end: 483 },
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "Readable", loc: { start: 491, end: 499 } },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "ShortNovel",
            loc: { start: 502, end: 512 },
          },
          loc: { start: 502, end: 512 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Magazine",
            loc: { start: 515, end: 523 },
          },
          loc: { start: 515, end: 523 },
        },
      ],
      loc: { start: 485, end: 523 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 536, end: 541 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 546, end: 550 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 551, end: 553 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 555, end: 557 },
                  },
                  loc: { start: 555, end: 557 },
                },
                loc: { start: 555, end: 558 },
              },
              directives: [],
              loc: { start: 551, end: 558 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 561, end: 565 },
            },
            loc: { start: 561, end: 565 },
          },
          directives: [],
          loc: { start: 546, end: 565 },
        },
      ],
      loc: { start: 524, end: 567 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 574, end: 578 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 583, end: 585 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 587, end: 589 },
              },
              loc: { start: 587, end: 589 },
            },
            loc: { start: 587, end: 590 },
          },
          directives: [],
          loc: { start: 583, end: 590 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 593, end: 601 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 603, end: 609 },
              },
              loc: { start: 603, end: 609 },
            },
            loc: { start: 603, end: 610 },
          },
          directives: [],
          loc: { start: 593, end: 610 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 613, end: 622 },
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
                    loc: { start: 625, end: 629 },
                  },
                  loc: { start: 625, end: 629 },
                },
                loc: { start: 625, end: 630 },
              },
              loc: { start: 624, end: 631 },
            },
            loc: { start: 624, end: 632 },
          },
          directives: [],
          loc: { start: 613, end: 632 },
        },
      ],
      loc: { start: 569, end: 634 },
    },
  ],
  loc: { start: 0, end: 635 },
} as unknown as DocumentNode;
