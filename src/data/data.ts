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
  bookSeriesId?: string;
};
const createBook = (params: {
  id: string;
  bookSeriesId?: string;
}): DatabaseBook => {
  return {
    id: params.id,
    isbn: `isbn:${params.id}`,
    bookSeriesId: params.bookSeriesId,
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
  "1": createBook({ id: "1", bookSeriesId: "100" }),
  "2": createBook({ id: "2", bookSeriesId: "100" }),
  "3": createBook({ id: "3", bookSeriesId: "100" }),
  "4": createBook({ id: "4", bookSeriesId: "100" }),
  "5": createBook({ id: "5", bookSeriesId: "100" }),
  "6": createBook({ id: "6", bookSeriesId: "100" }),
  "7": createBook({ id: "7", bookSeriesId: "200" }),
  "8": createBook({ id: "8", bookSeriesId: "200" }),
  "9": createBook({ id: "9", bookSeriesId: "200" }),
  "10": createBook({ id: "10" }),
  "11": createBook({ id: "11" }),
  "12": createBook({ id: "12" }),
  "13": createBook({ id: "13" }),
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

const bookSeries_books: Record<string, string[]> = {
  "100": ["1", "2", "3", "4", "5", "6"],
  "200": ["7", "8", "9"],
};

export const data: {
  $users: {
    findById: (params: { id: string }) => Promise<DatabaseUser | null>;
  };
  $books: {
    create: (params: { isbn: string }) => Promise<DatabaseBook>;
    update: (params: { id: string; isbn: string }) => Promise<DatabaseBook>;
    findById: (params: { id: string }) => Promise<DatabaseBook | null>;
    findMany: (params: { page: number; recordsPerPage: number }) => Promise<{
      result: DatabaseBook[];
      pagination: { totalPageCount: number };
    }>;
    findBooksReadByUserId: (params: {
      userId: string;
    }) => Promise<DatabaseBook[]>;
    findBooksInSeries: (params: {
      bookId: string;
      offset: number;
    }) => Promise<DatabaseBook | null>;
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
    update: async ({ id, isbn }) => {
      await simulateRequest();

      const book = books[id];
      if (!book) {
        throw new Error("Book not found");
      }

      const updatedBook: DatabaseBook = { ...book, isbn };
      books[id] = updatedBook;

      return updatedBook;
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
    findBooksInSeries: async ({ bookId, offset }) => {
      await simulateRequest();
      const book = books[bookId];
      if (!book) {
        return null;
      }
      if (!book.bookSeriesId) {
        return null;
      }
      const bookSeries = bookSeries_books[book.bookSeriesId];
      const bookIndex = bookSeries.indexOf(bookId);
      if (bookIndex === -1) {
        return null;
      }
      return books[bookSeries[bookIndex + offset]] || null;
    },
  },
  $characters: {
    findById: async ({ id }) => {
      await simulateRequest();
      return characters[id] || null;
    },
  },
};

const simulateRequest = async (params?: {
  minLatency?: number; // min latency in ms
  maxLatency?: number; // max latency in ms
  errorRate?: number; // error rate, from 0-1
}): Promise<void> => {
  const { minLatency = 50, maxLatency = 1000, errorRate = 0 } = params || {};

  const randomLatency =
    Math.floor(Math.random() * (maxLatency - minLatency + 1)) + minLatency;
  await new Promise((r) => setTimeout(r, randomLatency));

  if (Math.random() < errorRate) {
    throw new Error("Server Error");
  }
};
