import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import createResolvers from "./resolvers";
import pool from "./db.js";

const resolvers = createResolvers(pool);
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
