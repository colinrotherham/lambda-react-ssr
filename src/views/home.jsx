import { object } from 'prop-types'
import React from 'react'

// Components
import Footer from './partials/footer.jsx'
import Header from './partials/header.jsx'

function Home ({ header, footer }) {
  return (
    <>
      <Header {...header} />
      <Footer {...footer} />
    </>
  )
}

Home.propTypes = {
  header: object.isRequired,
  footer: object.isRequired
}

export default Home
