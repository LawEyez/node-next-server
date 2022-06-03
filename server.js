import express from 'express'
import { createRequire } from 'module' // Bring in ability to create 'require' method. ('import data from data.json' doesn't work.)

import config from './config.js' 

// Construct the require method.
const require = createRequire(import.meta.url)

// Read json data.
const data = require('./data.json')

const app = express()
const port = config.PORT || 8080

/**
 * Get users.
 * @method: GET
 */
app.get('/users', (req, res) => {
  const users = data.users
  res.status(200).send(users)
})

// Start server.
app.listen(port, () => console.log('Server is live on port ' + port))