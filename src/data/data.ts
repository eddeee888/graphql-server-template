import { BookMapper } from "src/schema/book/schema.mappers";
import { UserMapper } from "../schema/user/schema.mappers";

type DatabaseMagazine = {
  id: string;
  issueNumber: number;
};

type DatabaseShortNovel = {
  id: string;
  summary: string;
};

const createUser = (id: string): UserMapper => {
  return {
    id,
    firstName: `firstName${id}`,
    lastName: `lastName${id}`,
  };
};
const createBook = (id: string): BookMapper => {
  return {
    id,
    isbn: `isbn${id}`,
  };
};
const createMagazine = (id: string): DatabaseMagazine => {
  return {
    id,
    issueNumber: parseInt(id, 10),
  };
};
const createShortNovel = (id: string): DatabaseShortNovel => {
  return {
    id,
    summary: `summary:${id}`,
  };
};

export const data: {
  users: Record<string, UserMapper>;
  books: Record<string, BookMapper>;
  magazines: Record<string, DatabaseMagazine>;
  shortNovels: Record<string, DatabaseShortNovel>;
  users_read_books: Record<string, [string, string]>;
} = {
  users: {
    "1": createUser("1"),
    "2": createUser("2"),
    "3": createUser("3"),
    "4": createUser("4"),
    "5": createUser("5"),
  },
  books: {
    "1": createBook("1"),
    "2": createBook("2"),
    "3": createBook("3"),
    "4": createBook("4"),
    "5": createBook("5"),
  },
  magazines: {
    "1": createMagazine("1"),
    "2": createMagazine("2"),
    "3": createMagazine("3"),
    "4": createMagazine("4"),
    "5": createMagazine("5"),
  },
  shortNovels: {
    "1": createShortNovel("1"),
    "2": createShortNovel("2"),
    "3": createShortNovel("3"),
    "4": createShortNovel("4"),
    "5": createShortNovel("5"),
  },
  users_read_books: {
    "1": ["1", "1"],
    "2": ["1", "2"],
    "3": ["1", "3"],
    "4": ["2", "1"],
  },
};
