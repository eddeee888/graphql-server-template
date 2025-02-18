import { createServer } from "http";
import { yoga } from "./yoga";

const server = createServer(yoga);
server.listen(4488, () => console.log("It's at http://localhost:4488/graphql"));
