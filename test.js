
const serialize = require('preact-render-to-string')
const createElement = require('./')
const tsml = require('tsml')
const test = require('ava')
const { Component } = require('preact')

test('tag', (t) => {
  const actual = createElement('h1')
  const expected = '<h1></h1>'
  t.is(serialize(actual), expected)
})

test('attributes', (t) => {
  const actual = createElement('h1', {
    id: 'header',
    class: 'big'
  })

  const expected = '<h1 id="header" class="big"></h1>'
  t.is(serialize(actual), expected)
})

test('children', (t) => {
  const actual = createElement('div',
    createElement('p'),
    createElement('p')
  )

  const expected = tsml`
    <div>
      <p></p>
      <p></p>
    </div>
  `

  t.is(serialize(actual), expected)
})

test('text nodes', (t) => {
  const actual = createElement('p', 'text')
  const expected = '<p>text</p>'
  t.is(serialize(actual), expected)
})

test('preact components', (t) => {
  class TestComponent extends Component {
    render () {
      return createElement('h1', 'text')
    }
  }

  const actual = createElement(TestComponent)
  const expected = '<h1>text</h1>'
  t.is(serialize(actual), expected)
})
