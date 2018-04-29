const typeDefs = `type Purchase {
  # Numeric ID of the purchase
  id: ID
  # Was this out of the kindness of their heart?
  donation: Boolean
  # Email associated with the purchase
  email: String
  # Creation timestamp
  created_at: String
  # Service where the payment was processed
  source: String
  # The currency used in this purchase
  currency: String
  # The amount that the purchase was for
  price: String
  # If there was a discount, the amount of the discount
  sale_rate: Float
  # The numeric ID of the purchased game
  game_id: Int
}
`

export { typeDefs }
