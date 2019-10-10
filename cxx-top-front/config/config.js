const env = require('./env')

const port = 8001
const api = {
  local: 'https://127.0.0.1:9521',
  prod: 'https://54.223.219.64:9521',
}

module.exports = {
  port,
  api: api[env],
}
