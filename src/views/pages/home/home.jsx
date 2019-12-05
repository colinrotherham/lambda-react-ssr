import { object, string } from 'prop-types'
import React from 'react'

// Components
import Footer from '../../partials/footer/footer.jsx'
import Header from '../../partials/header/header.jsx'
import Template from '../../templates/main/main.jsx'

function Home ({ title, header = {}, footer = {} }) {
  return (
    <Template title={title}>
      <Header {...header} />
      <Footer {...footer} />
    </Template>
  )
}

Home.propTypes = {
  title: string.isRequired,
  header: object,
  footer: object
}

Home.defaultProps = {
  title: 'Hello World'
}

export default Home
