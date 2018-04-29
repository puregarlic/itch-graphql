const typeDefs = `type User {
  # The user's numeric ID
  id: Int!
  # The user's username
  username: String
  # Whether or not the account has purchased games
  gamer: Boolean
  # The name associated with the user
  display_name: String
  # The URL for the user's profile pic. Great for thumbnails!
  cover_url: String
  # The user's profile page URL
  url: String
  # Whether the user utilizes the press system
  press_user: Boolean
  # Whether the user has uploaded projects
  developer: Boolean
}`

export { typeDefs }
