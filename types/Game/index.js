const typeDefs = `type Game {
  # Unique numeric ID of the game
  id: Int!
  # Number of purchases
  purchases_count: Int!
  # Number of downloads
  downloads_count: Int!
  # Does the game support macOS?
  p_osx: Boolean!
  # Does the game support Android?
  p_android: Boolean!
  # Does the game support Linux?
  p_linux: Boolean!
  # Does the game support Windows?
  p_windows: Boolean!
  # Is the game published?
  published: Boolean!
  # If the game is published, the publish timestamp
  published_at: String
  # Number of page views
  views_count: Int!
  # The URL for the game
  url: String!
  # Can people can throw money at this?
  can_be_bought: Boolean!
  # Is this game registered with the Itch press system?
  in_press_system: Boolean!
  # The user that owns the game
  user: User!
  # Does this game have a demo?
  has_demo: Boolean!
  # The official title of the game
  title: String!
  # Timestamp when the game was registered on Itch
  created_at: String!
  # The URL for the game's cover image. Great for thumbnails!
  cover_url: String
  # The least amount of money you can throw for this game
  min_price: Float!
  # What the result is labelled as
  classification: String!
  # A quick description of the game
  short_text: String
  # The official label for the game. Not the same as classification!
  type: String!
}
`

export { typeDefs }
