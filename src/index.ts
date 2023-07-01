import express from 'express'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'
import { createHandler } from 'graphql-http/lib/use/express'

import '../env'

const app = express()
app.use(express.json())

interface User {
  id: number
  name: string
  email: string
}

const users = [
  { id: 1, name: 'John Doe', email: 'johndoe@gmail.com' },
  { id: 2, name: 'Jane Doe', email: 'janedoe@gmail.com' },
  { id: 3, name: 'Mike Doe', email: 'mikedoe@gmail.com' }
]

const getUsers = (): User[] => users

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => getUsers
      }
    }
  })
})


app.all('/graphql', createHandler({ schema }))

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}/graphql`)
})
