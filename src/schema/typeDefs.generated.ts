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
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 184, end: 188 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 193, end: 195 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 197, end: 199 },
              },
              loc: { start: 197, end: 199 },
            },
            loc: { start: 197, end: 200 },
          },
          directives: [],
          loc: { start: 193, end: 200 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "age", loc: { start: 203, end: 206 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 208, end: 211 },
              },
              loc: { start: 208, end: 211 },
            },
            loc: { start: 208, end: 212 },
          },
          directives: [],
          loc: { start: 203, end: 212 },
        },
      ],
      loc: { start: 179, end: 214 },
    },
  ],
  loc: { start: 0, end: 215 },
} as unknown as DocumentNode;
