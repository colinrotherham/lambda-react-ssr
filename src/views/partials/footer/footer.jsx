import { string } from 'prop-types'
import React from 'react'

function Footer ({ title, description }) {
  return (
    <footer className="footer">
      <h2>{title}</h2>
      <p>{description}</p>
    </footer>
  )
}

Footer.propTypes = {
  title: string.isRequired,
  description: string.isRequired
}

Footer.defaultProps = {
  title: 'Hello footer',
  description: 'Yes this is a footer'
}

export default Footer
