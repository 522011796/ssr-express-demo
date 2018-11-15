const express = require('express')
var proxy = require('http-proxy-middleware');
import axios from './../plugins/axios'

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const list = require('./routes/list')

// Import API Routes
app.use(users)
app.use(list)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
