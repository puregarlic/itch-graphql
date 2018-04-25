import { microGraphiql, microGraphql } from 'apollo-server-micro'
import micro, { send } from 'micro'
import { get, post, router } from 'microrouter'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

const server = function (port, graphiql = true) {
  return micro(
    router(
      get('/graphql', graphqlHandler),
      post('/graphql', graphqlHandler),
      get(
        '/graphiql',
        graphiql ? graphiqlHandler : (req, res) => send(res, 405, 'sorry bub')
      ),
      (req, res) => send(res, 404, 'whatcha lookin for (oh four)')
    )
  ).listen(port, () => {
    console.log(`hmu on port ${port}`)
  })
}

export { server }
