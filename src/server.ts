import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginCacheControlDisabled } from '@apollo/server/plugin/disabled'

import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda'

import resolvers from '../app/graphql/resolvers'

const typeDefs = `
  type Query {
    hello: String
  }
  type Mutation {
    createUser: String
  }
`
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginCacheControlDisabled()]
})

export const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler()
)
