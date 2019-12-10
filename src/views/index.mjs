import { renderToStaticMarkup } from 'react-dom/server'

export const render = (component) => {
  return '<!doctype html>' +
    renderToStaticMarkup(component)
}
