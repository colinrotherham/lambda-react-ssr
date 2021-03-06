import { string, node } from 'prop-types'
import React from 'react'

function Template ({ title, children, lang }) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>

        {/* Handheld support */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* CSS styles */}
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

Template.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  lang: string
}

Template.defaultProps = {
  title: '',
  lang: 'en-GB'
}

export default Template
