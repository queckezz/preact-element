
![preact element logo](./logo.png)

:zap: **A better element creation function (`h`) for preact**

[![Build status][travis-image]][travis-url]
[![NPM version][version-image]][version-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Js Standard Style][standard-image]][standard-url]

## Why?

* You want to use preact with no build tool
* You are not in favor of [extending the language](https://facebook.github.io/jsx/) with non-standard extensions

## Why not preact's [`h`](https://github.com/developit/preact/blob/master/src/h.js)?

```js
// preact
h('div', null,
  h('p', null, 'Hello World!')
)

// preact-element
div(
  p('Hello World!')
)
```

## Getting Started

With `preact-element` installed (using your favourite package manager), you can
then import it. Each [element](https://github.com/wooorm/html-tag-names/blob/4604477c3762b7df87536480fb453a9dd7feaaf0/index.json)
in the DOM is exposed as a function when requiring `preact-element`.

**Plain commonjs**

```js
const h = require('preact-element') // -> h.div()
```

**Destructuring**

```js
const { div, h1 } = require('preact-element')
```

**ES6**

```js
import { div, h1 } from 'preact-element'
```

### Use it!

```js
import { div, h1, h2, h3, button, ul, li } from 'preact-element'
import { render } from 'preact'

const App = ({ library }) => div(
  h1({ class: 'bold' }, library),
  h2({ id: 'subitle' }, 'Preact is a fast, 3kb alternative to React, with the same ES2015 API'),
  button({ href: 'http://ghub.io/preact' }, 'Learn More'),

  h3('Features'),
  ul(['preact', 'small', 'es2015', 'fast'].map(key => li(key)))
)

render(
  h(App, { library: 'Preact' }),
  document.body
)
```

## API

`attributes` and `children` are **optional**.

### `createElement(tag, attributes?, ...children?)`

### `[tag](attributes?, ...children?)`

Where as `tag` is one of the [html tags](https://github.com/wooorm/html-tag-names) or [svg tags](https://github.com/wooorm/svg-tag-names).

## Author

**preact-element** © [Fabian Eichenberger](https://github.com/queckezz), Released under the [MIT](./license) License.<br>
Authored and maintained by Fabian Eichenberger with help from contributors ([list](https://github.com/queckezz/preact-element/contributors)).

> GitHub [@queckezz](https://github.com/queckezz) · Twitter [@queckezz](https://twitter.com/queckezz)

[travis-image]: https://img.shields.io/travis/queckezz/preact-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/queckezz/preact-element

[version-image]: https://img.shields.io/npm/v/preact-element.svg?style=flat-square
[version-url]: https://npmjs.org/package/preact-element

[david-image]: http://img.shields.io/david/queckezz/preact-element.svg?style=flat-square
[david-url]: https://david-dm.org/queckezz/preact-element

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[license-image]: http://img.shields.io/npm/l/preact-element.svg?style=flat-square
[license-url]: ./license