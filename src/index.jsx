import React from 'react'
import assets from 'serve-static'
import connect from 'connect'
import serverless from 'serverless-http'
import { render } from './views'
import Home from './views/pages/home/home'

// App, Lambda handler
export const app = connect()
export const handler = serverless(app)

// Assets middleware
app.use(assets(`${process.cwd()}/public`))

// Base middleware
app.use('/', (req, res, next) => {
  const { pathname } = req._parsedUrl

  // Default header
  res.setHeader('Content-Type', 'text/html')
  res.writeHead(200)

  // Simple router
  switch (pathname) {
    case '/':
      res.end(render(<Home />))
      break

    default:
      next()
  }
})

// 404 handler
app.use((req, res) => {
  res.statusCode = 404
  res.end('Page not found')
})
