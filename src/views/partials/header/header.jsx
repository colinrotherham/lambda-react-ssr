import { string } from 'prop-types'
import React from 'react'

function Header ({ title, description }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}

Header.propTypes = {
  title: string.isRequired,
  description: string.isRequired
}

Header.defaultProps = {
  title: 'Hello header',
  description: 'Yes this is a header'
}

export default Header
