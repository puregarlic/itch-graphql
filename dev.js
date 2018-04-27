// Make a .env.local file and use it to load a testing token
require('dotenv').config()

const { server } = require('./index.js')

server(3000, false)
