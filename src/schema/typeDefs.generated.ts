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
      name: { kind: "Name", value: "User", loc: { start: 537, end: 541 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 546, end: 555 },
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
                    loc: { start: 558, end: 562 },
                  },
                  loc: { start: 558, end: 562 },
                },
                loc: { start: 558, end: 563 },
              },
              loc: { start: 557, end: 564 },
            },
            loc: { start: 557, end: 565 },
          },
          directives: [],
          loc: { start: 546, end: 565 },
        },
      ],
      loc: { start: 525, end: 567 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 580, end: 585 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "character",
            loc: { start: 590, end: 599 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 600, end: 602 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 604, end: 606 },
                  },
                  loc: { start: 604, end: 606 },
                },
                loc: { start: 604, end: 607 },
              },
              directives: [],
              loc: { start: 600, end: 607 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 610, end: 623 },
            },
            loc: { start: 610, end: 623 },
          },
          directives: [],
          loc: { start: 590, end: 623 },
        },
      ],
      loc: { start: 568, end: 625 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "CharacterNode",
        loc: { start: 637, end: 650 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 655, end: 657 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 659, end: 661 },
              },
              loc: { start: 659, end: 661 },
            },
            loc: { start: 659, end: 662 },
          },
          directives: [],
          loc: { start: 655, end: 662 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 665, end: 685 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 687, end: 700 },
            },
            loc: { start: 687, end: 700 },
          },
          directives: [],
          loc: { start: 665, end: 700 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 703, end: 720 },
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
                    value: "CharacterNode",
                    loc: { start: 723, end: 736 },
                  },
                  loc: { start: 723, end: 736 },
                },
                loc: { start: 723, end: 737 },
              },
              loc: { start: 722, end: 738 },
            },
            loc: { start: 722, end: 739 },
          },
          directives: [],
          loc: { start: 703, end: 739 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 742, end: 755 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 757, end: 765 },
            },
            loc: { start: 757, end: 765 },
          },
          directives: [],
          loc: { start: 742, end: 765 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 768, end: 777 },
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
                    value: "Readable",
                    loc: { start: 780, end: 788 },
                  },
                  loc: { start: 780, end: 788 },
                },
                loc: { start: 780, end: 789 },
              },
              loc: { start: 779, end: 790 },
            },
            loc: { start: 779, end: 791 },
          },
          directives: [],
          loc: { start: 768, end: 791 },
        },
      ],
      loc: { start: 627, end: 793 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "MainCharacter",
        loc: { start: 805, end: 818 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "screenName",
            loc: { start: 823, end: 833 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 835, end: 841 },
              },
              loc: { start: 835, end: 841 },
            },
            loc: { start: 835, end: 842 },
          },
          directives: [],
          loc: { start: 823, end: 842 },
        },
      ],
      loc: { start: 795, end: 844 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wizard", loc: { start: 851, end: 857 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "CharacterNode",
            loc: { start: 869, end: 882 },
          },
          loc: { start: 869, end: 882 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "MainCharacter",
            loc: { start: 885, end: 898 },
          },
          loc: { start: 885, end: 898 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 903, end: 905 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 907, end: 909 },
              },
              loc: { start: 907, end: 909 },
            },
            loc: { start: 907, end: 910 },
          },
          directives: [],
          loc: { start: 903, end: 910 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 913, end: 933 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 935, end: 948 },
            },
            loc: { start: 935, end: 948 },
          },
          directives: [],
          loc: { start: 913, end: 948 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 951, end: 968 },
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
                    value: "CharacterNode",
                    loc: { start: 971, end: 984 },
                  },
                  loc: { start: 971, end: 984 },
                },
                loc: { start: 971, end: 985 },
              },
              loc: { start: 970, end: 986 },
            },
            loc: { start: 970, end: 987 },
          },
          directives: [],
          loc: { start: 951, end: 987 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 990, end: 1003 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 1005, end: 1013 },
            },
            loc: { start: 1005, end: 1013 },
          },
          directives: [],
          loc: { start: 990, end: 1013 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 1016, end: 1025 },
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
                    value: "Readable",
                    loc: { start: 1028, end: 1036 },
                  },
                  loc: { start: 1028, end: 1036 },
                },
                loc: { start: 1028, end: 1037 },
              },
              loc: { start: 1027, end: 1038 },
            },
            loc: { start: 1027, end: 1039 },
          },
          directives: [],
          loc: { start: 1016, end: 1039 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "screenName",
            loc: { start: 1042, end: 1052 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1054, end: 1060 },
              },
              loc: { start: 1054, end: 1060 },
            },
            loc: { start: 1054, end: 1061 },
          },
          directives: [],
          loc: { start: 1042, end: 1061 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "spells",
            loc: { start: 1064, end: 1070 },
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
                    value: "String",
                    loc: { start: 1073, end: 1079 },
                  },
                  loc: { start: 1073, end: 1079 },
                },
                loc: { start: 1073, end: 1080 },
              },
              loc: { start: 1072, end: 1081 },
            },
            loc: { start: 1072, end: 1082 },
          },
          directives: [],
          loc: { start: 1064, end: 1082 },
        },
      ],
      loc: { start: 846, end: 1084 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Fighter", loc: { start: 1091, end: 1098 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "CharacterNode",
            loc: { start: 1110, end: 1123 },
          },
          loc: { start: 1110, end: 1123 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "MainCharacter",
            loc: { start: 1126, end: 1139 },
          },
          loc: { start: 1126, end: 1139 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1144, end: 1146 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1148, end: 1150 },
              },
              loc: { start: 1148, end: 1150 },
            },
            loc: { start: 1148, end: 1151 },
          },
          directives: [],
          loc: { start: 1144, end: 1151 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 1154, end: 1174 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 1176, end: 1189 },
            },
            loc: { start: 1176, end: 1189 },
          },
          directives: [],
          loc: { start: 1154, end: 1189 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 1192, end: 1209 },
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
                    value: "CharacterNode",
                    loc: { start: 1212, end: 1225 },
                  },
                  loc: { start: 1212, end: 1225 },
                },
                loc: { start: 1212, end: 1226 },
              },
              loc: { start: 1211, end: 1227 },
            },
            loc: { start: 1211, end: 1228 },
          },
          directives: [],
          loc: { start: 1192, end: 1228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 1231, end: 1244 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 1246, end: 1254 },
            },
            loc: { start: 1246, end: 1254 },
          },
          directives: [],
          loc: { start: 1231, end: 1254 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 1257, end: 1266 },
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
                    value: "Readable",
                    loc: { start: 1269, end: 1277 },
                  },
                  loc: { start: 1269, end: 1277 },
                },
                loc: { start: 1269, end: 1278 },
              },
              loc: { start: 1268, end: 1279 },
            },
            loc: { start: 1268, end: 1280 },
          },
          directives: [],
          loc: { start: 1257, end: 1280 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "screenName",
            loc: { start: 1283, end: 1293 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1295, end: 1301 },
              },
              loc: { start: 1295, end: 1301 },
            },
            loc: { start: 1295, end: 1302 },
          },
          directives: [],
          loc: { start: 1283, end: 1302 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "powerLevel",
            loc: { start: 1305, end: 1315 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1317, end: 1320 },
              },
              loc: { start: 1317, end: 1320 },
            },
            loc: { start: 1317, end: 1321 },
          },
          directives: [],
          loc: { start: 1305, end: 1321 },
        },
      ],
      loc: { start: 1086, end: 1323 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ExtraCharacter",
        loc: { start: 1330, end: 1344 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "CharacterNode",
            loc: { start: 1356, end: 1369 },
          },
          loc: { start: 1356, end: 1369 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1374, end: 1376 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1378, end: 1380 },
              },
              loc: { start: 1378, end: 1380 },
            },
            loc: { start: 1378, end: 1381 },
          },
          directives: [],
          loc: { start: 1374, end: 1381 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 1384, end: 1404 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 1406, end: 1419 },
            },
            loc: { start: 1406, end: 1419 },
          },
          directives: [],
          loc: { start: 1384, end: 1419 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 1422, end: 1439 },
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
                    value: "CharacterNode",
                    loc: { start: 1442, end: 1455 },
                  },
                  loc: { start: 1442, end: 1455 },
                },
                loc: { start: 1442, end: 1456 },
              },
              loc: { start: 1441, end: 1457 },
            },
            loc: { start: 1441, end: 1458 },
          },
          directives: [],
          loc: { start: 1422, end: 1458 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 1461, end: 1474 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 1476, end: 1484 },
            },
            loc: { start: 1476, end: 1484 },
          },
          directives: [],
          loc: { start: 1461, end: 1484 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 1487, end: 1496 },
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
                    value: "Readable",
                    loc: { start: 1499, end: 1507 },
                  },
                  loc: { start: 1499, end: 1507 },
                },
                loc: { start: 1499, end: 1508 },
              },
              loc: { start: 1498, end: 1509 },
            },
            loc: { start: 1498, end: 1510 },
          },
          directives: [],
          loc: { start: 1487, end: 1510 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creditName",
            loc: { start: 1513, end: 1523 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1525, end: 1531 },
              },
              loc: { start: 1525, end: 1531 },
            },
            loc: { start: 1525, end: 1532 },
          },
          directives: [],
          loc: { start: 1513, end: 1532 },
        },
      ],
      loc: { start: 1325, end: 1534 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1547, end: 1552 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1557, end: 1561 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1562, end: 1564 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1566, end: 1568 },
                  },
                  loc: { start: 1566, end: 1568 },
                },
                loc: { start: 1566, end: 1569 },
              },
              directives: [],
              loc: { start: 1562, end: 1569 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1572, end: 1576 },
            },
            loc: { start: 1572, end: 1576 },
          },
          directives: [],
          loc: { start: 1557, end: 1576 },
        },
      ],
      loc: { start: 1535, end: 1578 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1585, end: 1589 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1594, end: 1596 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1598, end: 1600 },
              },
              loc: { start: 1598, end: 1600 },
            },
            loc: { start: 1598, end: 1601 },
          },
          directives: [],
          loc: { start: 1594, end: 1601 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 1604, end: 1612 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1614, end: 1620 },
              },
              loc: { start: 1614, end: 1620 },
            },
            loc: { start: 1614, end: 1621 },
          },
          directives: [],
          loc: { start: 1604, end: 1621 },
        },
      ],
      loc: { start: 1580, end: 1623 },
    },
  ],
  loc: { start: 0, end: 1624 },
} as unknown as DocumentNode;
