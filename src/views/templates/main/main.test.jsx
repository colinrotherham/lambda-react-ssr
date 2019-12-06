import React from 'react'
import renderer from 'react-test-renderer'
import Template from './main'

describe('Template: Main', () => {
  beforeEach(() => {
    console.error = jest.fn()
  })

  test('Component is rendered', () => {
    const component = renderer.create(<Template>Hello World</Template>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('Component has empty default title', () => {
    const component = renderer.create(<Template>Hello World</Template>)
    expect(component.root.props.title).toBe('')
  })

  test('Component has default HTML lang attribute', () => {
    const component = renderer.create(<Template>Hello World</Template>)
    expect(component.root.props.lang).toBe('en-GB')
  })

  test('Component default title can be overridden', () => {
    const component = renderer.create(<Template title="Example page">Hello World</Template>)
    expect(component.root.props.title).toBe('Example page')
  })

  test('Component default HTML lang attribute can be overridden', () => {
    const component = renderer.create(<Template lang="en-IE">Hello World</Template>)
    expect(component.root.props.lang).toBe('en-IE')
  })

  test('Component children are mandatory', () => {
    renderer.create(<Template />)
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Warning: Failed prop type: The prop `children` is marked as required in `Template`')
    )
  })
})
