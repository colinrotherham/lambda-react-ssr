import { bold, magenta } from 'ansi-colors'
import http from 'http'
import { app } from '.'

const {
  HOST: host = '0.0.0.0',
  PORT: port = 3000
} = process.env

// Local preview server
const server = http
  .createServer(app)
  .listen(port)

console.info(`Preview ${bold('[start]')}: ${magenta(`http://${host}:${port}/`)}`)

export default server
