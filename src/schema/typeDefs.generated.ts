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
          name: { kind: "Name", value: "user", loc: { start: 201, end: 205 } },
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
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 216, end: 220 },
            },
            loc: { start: 216, end: 220 },
          },
          directives: [],
          loc: { start: 201, end: 220 },
        },
      ],
      loc: { start: 179, end: 222 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 229, end: 233 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 238, end: 240 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 242, end: 244 },
              },
              loc: { start: 242, end: 244 },
            },
            loc: { start: 242, end: 245 },
          },
          directives: [],
          loc: { start: 238, end: 245 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "age", loc: { start: 248, end: 251 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 253, end: 256 },
              },
              loc: { start: 253, end: 256 },
            },
            loc: { start: 253, end: 257 },
          },
          directives: [],
          loc: { start: 248, end: 257 },
        },
      ],
      loc: { start: 224, end: 259 },
    },
  ],
  loc: { start: 0, end: 260 },
} as unknown as DocumentNode;
