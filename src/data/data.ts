export interface DatabaseUser {
  id: string;
  age: number;
  firstName: string;
  lastName: string;
  petId: string | null;
  bestFriendUserId: string | null;
}

interface DatabasePet {
  id: string;
  name: string;
}

const createUser = (
  id: string,
  petId: string | null,
  bestFriendUserId: string | null,
): DatabaseUser => {
  return {
    id,
    age: parseInt(id.split(":")[1], 10),
    firstName: `firstName-${id}`,
    lastName: `lastName-${id}`,
    petId,
    bestFriendUserId,
  };
};

const createPet = (id: string): DatabasePet => {
  return {
    id,
    name: `petName-${id}`,
  };
};

export const data: {
  users: Record<string, DatabaseUser>;
  pets: Record<string, DatabasePet>;
} = {
  users: {
    "u:1": createUser("u:1", "p:1", "u:2"),
    "u:2": createUser("u:2", null, "u:1"),
    "u:3": createUser("u:3", null, null),
    "u:4": createUser("u:4", "p:2", null),
    "u:5": createUser("u:5", "p:3", null),
  },
  pets: {
    "p:1": createPet("p:1"),
    "p:2": createPet("p:2"),
    "p:3": createPet("p:3"),
  },
};
