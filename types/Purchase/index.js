const typeDefs = `type Purchase {
  id: ID
  donation: Boolean
  email: String
  createdAt: String
  source: String
  currency: String
  price: String
  saleRate: Float
  gameId: Int
}
`

const resolvers = {}

export { typeDefs, resolvers }