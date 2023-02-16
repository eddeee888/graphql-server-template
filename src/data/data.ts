import { Book } from "src/schema/types.generated";
import { UserMapper } from "../schema/user/schema.mappers";

const createUser = (id: string): UserMapper => {
  return {
    id,
    firstName: `firstName${id}`,
    lastName: `lastName${id}`,
  };
};
const createBook = (id: string): Book => {
  return {
    __typename: "Book",
    id,
    isbn: `isbn${id}`,
  };
};

export const data: {
  users: Record<string, UserMapper>;
  books: Record<string, Book>;
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
};
