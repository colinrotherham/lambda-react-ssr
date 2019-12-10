import React from 'react'
import { render } from './views'
import Home from './views/pages/home/home'

// Lambda handler promise
export const handler = async ({ path }) => {
  // Default response
  const response = {
    statusCode: 200,
    headers: {
      'content-type': 'text/html'
    }
  }

  // Simple router
  switch (path) {
    case '/':
      response.body = render(<Home />)
      break

    default:
      response.statusCode = 404
      response.body = 'Page not found'
  }

  return response
}
