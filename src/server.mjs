import { bold, magenta } from 'ansi-colors'
import http from 'http'
import { handler } from '.'

const {
  HOST: host = '0.0.0.0',
  PORT: port = 3000
} = process.env

// Local preview server
const server = http
  .createServer()
  .listen(port)

// Respond to requests
server.on('request', async (req, res) => {
  const { body, headers, statusCode } = await handler()
  res.writeHead(statusCode, headers)
  res.write(body)
  res.end()
})

console.info(`Preview ${bold('[start]')}: ${magenta(`http://${host}:${port}`)}`)

export default server
