import React from 'react'
import renderer from 'react-test-renderer'
import Template from './main'

describe('Template: Main', () => {
  test('Component is rendered', () => {
    const component = renderer.create(<Template>Hello World</Template>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
