interface DatabaseUser {
  id: string;
  age: number;
  firstName: string;
  lastName: string;
}

const createUser = (id: string): DatabaseUser => {
  return {
    id,
    age: parseInt(id, 10),
    firstName: `firstName${id}`,
    lastName: `lastName${id}`,
  };
};

export const data: {
  users: Record<string, DatabaseUser>;
} = {
  users: {
    "1": createUser("1"),
    "2": createUser("2"),
    "3": createUser("3"),
    "4": createUser("4"),
    "5": createUser("5"),
  },
};
