import { createServer } from "http";
import { yoga } from "./yoga";

const server = createServer(yoga);
server.listen(3000, () => console.log("It's at http://localhost:3000/graphql"));
