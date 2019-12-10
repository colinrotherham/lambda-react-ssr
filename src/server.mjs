import { bold, magenta } from 'ansi-colors'
import http from 'http'
import { URL } from 'url'
import { handler } from '.'

const {
  PROTOCOL: protocol = 'http',
  HOST: host = '0.0.0.0',
  PORT: port = 3000
} = process.env

// Local preview server
const server = http
  .createServer()
  .listen(port)

// Base URL to resolve paths
const baseUrl = `${protocol}://${host}:${port}/`

// Respond to requests
server.on('request', async ({ url }, res) => {
  const { pathname: path, query: queryStringParameters } = new URL(url, baseUrl)

  // Trigger handler
  const { body, headers, statusCode } = await handler({ path, queryStringParameters })

  // Output response
  res.writeHead(statusCode, headers)
  res.write(body)
  res.end()
})

console.info(`Preview ${bold('[start]')}: ${magenta(baseUrl)}`)

export default server
