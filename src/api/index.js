'use strict'

import { server } from './server.js'
import './routes/index.js'
import { API_PORT } from './../shared/config.js'

server.listen(API_PORT, () => {
  console.log(`API listening on port ${API_PORT}`)
})
