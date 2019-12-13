import React from 'react'
import renderer from 'react-test-renderer'
import Home from './home'

describe('Page: Home', () => {
  test('Component is rendered', () => {
    const component = renderer.create(<Home />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
