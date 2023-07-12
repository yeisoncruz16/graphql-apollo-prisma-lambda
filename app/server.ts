import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginCacheControlDisabled } from '@apollo/server/plugin/disabled'
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda'

import resolvers from './graphql/resolvers'
import typeDefs from './graphql/definitions'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginCacheControlDisabled()],
  introspection: process.env.NODE_ENV !== 'production'
})

export const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    context: async ({ event, context }) => {
      return {
        lambdaEvent: event,
        lambdaContext: context
      }
    }
  }
)
