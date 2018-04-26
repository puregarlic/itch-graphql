const typeDefs = `type Purchase {
  id: ID
  donation: Boolean
  email: String
  created_at: String
  source: String
  currency: String
  price: String
  sale_rate: Float
  game_id: Int
}
`

export { typeDefs }
