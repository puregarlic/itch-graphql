const typeDefs = `type Game {
  id: ID!
  purchases_count: Int!
  downloads_count: Int!
  p_osx: Boolean!
  p_android: Boolean!
  p_linux: Boolean!
  p_windows: Boolean!
  published: Boolean!
  published_at: String
  views_count: Int!
  url: String!
  can_be_bought: Boolean!
  in_press_system: Boolean!
  user: User!
  has_demo: Boolean!
  title: String!
  created_at: String!
  cover_url: String!
  min_price: Float!
  classification: String!
  short_text: String
  type: String!
}
`

export { typeDefs }
