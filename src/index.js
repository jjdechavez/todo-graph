const { GraphQLServer } = require('graphql-yoga');
const { prisma } =  require('./generated/prisma-client');
const Query = require('./revolvers/Query');
const Mutation = require('./revolvers/Mutation');

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
});

const options = {
  port: 5000,
  endpoint: '/api/graphql',
  playground: '/api/playground'
}

server.start(options, ({ port }) => console.log(`Server running on port ${port}`));