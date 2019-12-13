import React from 'react'
import renderer from 'react-test-renderer'
import Header from './header'

describe('Partial: Header', () => {
  test('Component is rendered', () => {
    const component = renderer.create(<Header />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
