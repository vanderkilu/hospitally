const { GraphQLServer } = require('graphql-yoga')
const { prisma }  = require('./generated/prisma-client')
const Mutation = require('./resolvers/Mutation')
const Hospital = require('./resolvers/Hospital')
const Query = require('./resolvers/Query')
const Review = require('./resolvers/Review')
const Vote = require('./resolvers/Vote')
const User = require('./resolvers/User')
const Chat = require('./resolvers/Chat')

const resolvers = {
    Query,
    Mutation,
    Hospital,
    Review,
    Vote,
    User,
    Chat
}

const opts = {
    cors: {
        credentials: true,
        origin: "*"
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
        }
    },
})

server.start(opts,()=> console.log('server is running'))