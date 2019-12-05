import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Components
import Home from './views/pages/home/home'

// Lambda handler promise
export const handler = async (event) => ({
  statusCode: 200,
  headers: {
    'content-type': 'text/html'
  },
  body: '<!doctype html>' +
    renderToStaticMarkup(<Home />)
})
