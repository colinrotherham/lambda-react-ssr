import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './footer'

describe('Partial: Footer', () => {
  test('Component is rendered', () => {
    const component = renderer.create(<Footer />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('Component has default title', () => {
    const component = renderer.create(<Footer />)
    expect(component.root.props.title).toBe('Hello footer')
  })

  test('Component has default description', () => {
    const component = renderer.create(<Footer />)
    expect(component.root.props.description).toBe('Yes this is a footer')
  })

  test('Component default title can be overridden', () => {
    const component = renderer.create(<Footer title="Title 101" />)
    expect(component.root.props.title).toBe('Title 101')
  })

  test('Component default description can be overridden', () => {
    const component = renderer.create(<Footer description="Footer 101" />)
    expect(component.root.props.description).toBe('Footer 101')
  })
})
