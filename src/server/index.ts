import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from '../resolvers/resolvers';

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: any }) => ({
    token: req.headers.authorization || '',
  }
  ),
});

server.listen()
  .then(() => console.log('server is running'));
