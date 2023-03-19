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
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "readable",
            loc: { start: 219, end: 227 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 228, end: 230 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 232, end: 234 },
                  },
                  loc: { start: 232, end: 234 },
                },
                loc: { start: 232, end: 235 },
              },
              directives: [],
              loc: { start: 228, end: 235 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 238, end: 246 },
            },
            loc: { start: 238, end: 246 },
          },
          directives: [],
          loc: { start: 219, end: 246 },
        },
      ],
      loc: { start: 167, end: 248 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 255, end: 259 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 264, end: 266 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 268, end: 270 },
              },
              loc: { start: 268, end: 270 },
            },
            loc: { start: 268, end: 271 },
          },
          directives: [],
          loc: { start: 264, end: 271 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 274, end: 278 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 280, end: 286 },
              },
              loc: { start: 280, end: 286 },
            },
            loc: { start: 280, end: 287 },
          },
          directives: [],
          loc: { start: 274, end: 287 },
        },
      ],
      loc: { start: 250, end: 289 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 296, end: 306 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 311, end: 317 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 319, end: 323 },
            },
            loc: { start: 319, end: 323 },
          },
          directives: [],
          loc: { start: 311, end: 323 },
        },
      ],
      loc: { start: 291, end: 325 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 333, end: 344 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 347, end: 357 },
          },
          loc: { start: 347, end: 357 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "StandardError",
            loc: { start: 360, end: 373 },
          },
          loc: { start: 360, end: 373 },
        },
      ],
      loc: { start: 327, end: 373 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShortNovel",
        loc: { start: 380, end: 390 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 395, end: 397 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 399, end: 401 },
              },
              loc: { start: 399, end: 401 },
            },
            loc: { start: 399, end: 402 },
          },
          directives: [],
          loc: { start: 395, end: 402 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "summary",
            loc: { start: 405, end: 412 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 414, end: 420 },
              },
              loc: { start: 414, end: 420 },
            },
            loc: { start: 414, end: 421 },
          },
          directives: [],
          loc: { start: 405, end: 421 },
        },
      ],
      loc: { start: 375, end: 423 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Magazine", loc: { start: 430, end: 438 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 443, end: 445 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 447, end: 449 },
              },
              loc: { start: 447, end: 449 },
            },
            loc: { start: 447, end: 450 },
          },
          directives: [],
          loc: { start: 443, end: 450 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issueNumber",
            loc: { start: 453, end: 464 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 466, end: 469 },
              },
              loc: { start: 466, end: 469 },
            },
            loc: { start: 466, end: 470 },
          },
          directives: [],
          loc: { start: 453, end: 470 },
        },
      ],
      loc: { start: 425, end: 472 },
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "Readable", loc: { start: 480, end: 488 } },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "ShortNovel",
            loc: { start: 491, end: 501 },
          },
          loc: { start: 491, end: 501 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Magazine",
            loc: { start: 504, end: 512 },
          },
          loc: { start: 504, end: 512 },
        },
      ],
      loc: { start: 474, end: 512 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 525, end: 530 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 535, end: 539 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 540, end: 542 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 544, end: 546 },
                  },
                  loc: { start: 544, end: 546 },
                },
                loc: { start: 544, end: 547 },
              },
              directives: [],
              loc: { start: 540, end: 547 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 550, end: 554 },
            },
            loc: { start: 550, end: 554 },
          },
          directives: [],
          loc: { start: 535, end: 554 },
        },
      ],
      loc: { start: 513, end: 556 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 563, end: 567 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 572, end: 574 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 576, end: 578 },
              },
              loc: { start: 576, end: 578 },
            },
            loc: { start: 576, end: 579 },
          },
          directives: [],
          loc: { start: 572, end: 579 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 582, end: 590 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 592, end: 598 },
              },
              loc: { start: 592, end: 598 },
            },
            loc: { start: 592, end: 599 },
          },
          directives: [],
          loc: { start: 582, end: 599 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 602, end: 611 },
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
                    loc: { start: 614, end: 618 },
                  },
                  loc: { start: 614, end: 618 },
                },
                loc: { start: 614, end: 619 },
              },
              loc: { start: 613, end: 620 },
            },
            loc: { start: 613, end: 621 },
          },
          directives: [],
          loc: { start: 602, end: 621 },
        },
      ],
      loc: { start: 558, end: 623 },
    },
  ],
  loc: { start: 0, end: 623 },
} as unknown as DocumentNode;
