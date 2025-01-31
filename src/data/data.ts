import type { WizardMapper } from "../schema/character/schema.mappers";
import type { UserMapper } from "../schema/user/schema.mappers";

const simulateRequest = async (
  params: {
    minLatency: number;
    maxLatency: number;
    errorRate: number;
  } = {
    minLatency: 50,
    maxLatency: 1000,
    errorRate: 0, // error rate, from 0-1
  },
): Promise<void> => {
  const { minLatency, maxLatency, errorRate } = params;

  const randomLatency =
    Math.floor(Math.random() * (maxLatency - minLatency + 1)) + minLatency;
  await new Promise((r) => setTimeout(r, randomLatency));

  if (Math.random() < errorRate) {
    throw new Error("Server Error");
  }
};

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

export type DatabaseBook = {
  id: string;
  isbn: string;
};
const createBook = (id: string): DatabaseBook => {
  return {
    id,
    isbn: `isbn:${id}`,
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
  books: Record<string, DatabaseBook>;
  $books: {
    findMany: (params: { page: number; recordsPerPage: number }) => Promise<{
      result: DatabaseBook[];
      pagination: { totalPageCount: number };
    }>;
  };
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
    "6": createBook("6"),
    "7": createBook("7"),
    "8": createBook("8"),
    "9": createBook("9"),
    "10": createBook("10"),
    "11": createBook("11"),
    "12": createBook("12"),
    "13": createBook("13"),
  },
  $books: {
    findMany: async ({ page, recordsPerPage }) => {
      await simulateRequest();

      const limit = recordsPerPage;
      const offset = (page - 1) * recordsPerPage;

      const booksArray = Object.values(data.books);

      const result = booksArray.slice(offset, offset + limit);

      return {
        result,
        pagination: {
          totalPageCount: Math.ceil(booksArray.length / recordsPerPage),
        },
      };
    },
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
