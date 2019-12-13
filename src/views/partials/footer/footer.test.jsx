import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './footer'

describe('Partial: Footer', () => {
  test('Component is rendered', () => {
    const component = renderer.create(<Footer />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
