export type DatabaseUser = {
  id: string;
  firstName: string;
  lastName: string;
};
const createUser = (id: string): DatabaseUser => {
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

type DatabaseFighter = {
  id: string;
  screenName: string;
  power: number;
};
const createFighter = (
  id: string,
  screenName: string,
): DatabaseFighter & { type: "Fighter" } => ({
  id,
  screenName,
  power: parseInt(id, 10) * 1000,
  type: "Fighter",
});

type DatabaseExtra = {
  id: string;
  creditName: string;
};

export type DatabaseWizard = {
  id: string;
  firstName: string;
  lastName: string;
  spells: string[];
};

const users: Record<string, DatabaseUser> = {
  "1": createUser("1"),
  "2": createUser("2"),
  "3": createUser("3"),
  "4": createUser("4"),
  "5": createUser("5"),
};

const books: Record<string, DatabaseBook> = {
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
};

const characters: Record<
  string,
  | (DatabaseFighter & { type: "Fighter" })
  | (DatabaseWizard & { type: "Wizard" })
  | (DatabaseExtra & { type: "ExtraCharacter" })
> = {
  "1": createFighter("1", "Gohan"),
  "2": createFighter("2", "Ichigo"),
  "3": createFighter("3", "Tanjiro"),
  "4": createFighter("4", "Saitama"),
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
};

const users_read_books: Record<string, [string, string]> = {
  "1": ["1", "1"],
  "2": ["1", "2"],
  "3": ["1", "3"],
  "4": ["2", "1"],
};

export const data: {
  $users: {
    findById: (params: { id: string }) => Promise<DatabaseUser | null>;
  };
  $books: {
    create: (params: { isbn: string }) => Promise<DatabaseBook>;
    findById: (params: { id: string }) => Promise<DatabaseBook | null>;
    findMany: (params: { page: number; recordsPerPage: number }) => Promise<{
      result: DatabaseBook[];
      pagination: { totalPageCount: number };
    }>;
    findBooksReadByUserId: (params: {
      userId: string;
    }) => Promise<DatabaseBook[]>;
  };
  $characters: {
    findById: (params: {
      id: string;
    }) => Promise<(typeof characters)[keyof typeof characters] | null>;
  };
} = {
  $users: {
    findById: async ({ id }) => {
      await simulateRequest();
      return users[id] || null;
    },
  },
  $books: {
    create: async ({ isbn }) => {
      await simulateRequest();
      const id = String(Object.keys(books).length + 1);
      const book: DatabaseBook = {
        id,
        isbn,
      };
      books[id] = book;
      return book;
    },
    findById: async ({ id }) => {
      await simulateRequest();
      return books[id] || null;
    },
    findMany: async ({ page, recordsPerPage }) => {
      await simulateRequest();

      const limit = recordsPerPage;
      const offset = (page - 1) * recordsPerPage;

      const booksArray = Object.values(books);

      const result = booksArray.slice(offset, offset + limit);

      return {
        result,
        pagination: {
          totalPageCount: Math.ceil(booksArray.length / recordsPerPage),
        },
      };
    },
    findBooksReadByUserId: async ({ userId }) => {
      await simulateRequest();
      return Object.values(users_read_books).reduce<DatabaseBook[]>(
        (res, [readerUserId, bookId]) => {
          if (readerUserId === userId) {
            res.push({ ...books[bookId] });
          }
          return res;
        },
        [],
      );
    },
  },
  $characters: {
    findById: async ({ id }) => {
      await simulateRequest();
      return characters[id] || null;
    },
  },
};

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
