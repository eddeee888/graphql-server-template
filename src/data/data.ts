import type { WizardMapper } from "../schema/character/schema.mappers";
import type { BookMapper } from "../schema/book/schema.mappers";
import type { UserMapper } from "../schema/user/schema.mappers";

type DatabaseMagazine = {
  id: string;
  issueNumber: number;
};

type DatabaseShortNovel = {
  id: string;
  summary: string;
};

type DatabaseFighter = {
  id: string;
  screenName: string;
  power: number;
};

type DatabaseExtra = {
  id: string;
  creditName: string;
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
const createFighter = (id: string, screenName: string): DatabaseFighter => ({
  id,
  screenName,
  power: parseInt(id, 10) * 1000,
});

export const data: {
  users: Record<string, UserMapper>;
  books: Record<string, BookMapper>;
  magazines: Record<string, DatabaseMagazine>;
  shortNovels: Record<string, DatabaseShortNovel>;
  characters: Record<
    string,
    | (DatabaseFighter & { type: "Fighter" })
    | (WizardMapper & { type: "Wizard" })
    | (DatabaseExtra & { type: "ExtraCharacter" })
  >;
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
  characters: {
    "1": { ...createFighter("1", "Gohan"), type: "Fighter" },
    "2": { ...createFighter("2", "Ichigo"), type: "Fighter" },
    "3": { ...createFighter("3", "Tanjiro"), type: "Fighter" },
    "4": { ...createFighter("4", "Saitama"), type: "Fighter" },
    "5": {
      type: "Wizard",
      id: "5",
      firstName: "Harry",
      lastName: "Potter",
      spells: ["Expelliarmus"],
    },
    "6": {
      type: "Wizard",
      id: "6",
      firstName: "Ron",
      lastName: "Weasley",
      spells: [],
    },
    "7": {
      type: "Wizard",
      id: "7",
      firstName: "Hermione",
      lastName: "Granger",
      spells: [
        "Accio",
        "Alohomora",
        "Bombarda",
        "Confundo",
        "Expelliarmus",
        "Immobulus",
        "Lumos",
        "Stupefy",
        "Wingardium Leviosa",
      ],
    },
    "8": {
      type: "Wizard",
      id: "8",
      firstName: "Tom",
      lastName: "Riddle",
      spells: ["Avada Kedavra"],
    },
    "99": {
      type: "ExtraCharacter",
      id: "99",
      creditName: "Thug #1",
    },
  },
  users_read_books: {
    "1": ["1", "1"],
    "2": ["1", "2"],
    "3": ["1", "3"],
    "4": ["2", "1"],
  },
};
