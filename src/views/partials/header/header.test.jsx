import React from 'react'
import renderer from 'react-test-renderer'
import Header from './header'

describe('Partial: Header', () => {
  test('Component is rendered', () => {
    const component = renderer.create(<Header />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('Component has default title', () => {
    const component = renderer.create(<Header />)
    expect(component.root.props.title).toBe('Hello header')
  })

  test('Component has default description', () => {
    const component = renderer.create(<Header />)
    expect(component.root.props.description).toBe('Yes this is a header')
  })

  test('Component default title can be overridden', () => {
    const component = renderer.create(<Header title="Title 101" />)
    expect(component.root.props.title).toBe('Title 101')
  })

  test('Component default description can be overridden', () => {
    const component = renderer.create(<Header description="Header 101" />)
    expect(component.root.props.description).toBe('Header 101')
  })
})
