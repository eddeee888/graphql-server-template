type DatabaseUser = {
  id: string;
  firstName: string;
  lastName: string;
  bestFriend?: string;
};

const createUser = ({
  id,
  bestFriend,
}: {
  id: string;
  bestFriend?: string;
}): DatabaseUser => {
  return {
    id,
    firstName: `firstName${id}`,
    lastName: `lastName${id}`,
    bestFriend,
  };
};

export const data: {
  users: Record<string, DatabaseUser>;
} = {
  users: {
    "1": createUser({ id: "1", bestFriend: "2" }),
    "2": createUser({ id: "2", bestFriend: "3" }),
    "3": createUser({ id: "3" }),
    "4": createUser({ id: "4" }),
    "5": createUser({ id: "5" }),
  },
};
