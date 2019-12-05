import { renderToStaticMarkup } from 'react-dom/server'

// Components
import Home from './views/home.jsx'

// Lambda handler promise
export const handler = async (event) => ({
  statusCode: 200,
  body: '<!doctype html>' + renderToStaticMarkup(Home({
    header: {
      title: 'Hello header',
      description: 'Yes this is a header'
    },
    footer: {
      title: 'Hello footer',
      description: 'Yes this is a footer'
    }
  }))
})
