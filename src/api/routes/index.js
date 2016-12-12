import { server } from './../server.js'

// A neat message
server.get('/', (req, res) => {
  res.json({message: `It's working!`})
})

// Healthcheck
server.get('/health', (req, res) => {
  res.status(200).send('OK')
})
