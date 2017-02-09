
const htmlTags = require('html-tag-names')
const svgTags = require('svg-tag-names')

const arrayify = (val) => Array.isArray(val) ? val : [val]

const createVNode = (nodeName, attrs, children) => ({
  key: attrs && attrs.key,
  attributes: attrs,
  nodeName,
  children
})

const isVnode = (obj) => obj.nodeName

const createElement = (tag, attrs, ...children) => {
  if (attrs && (isVnode(attrs) || typeof attrs === 'string')) {
    children = arrayify(attrs).concat(children || [])
    attrs = null
  }

  return createVNode(tag, attrs, children)
}

const createTagFactory = (tag) => {
  return (...args) => createElement(tag, ...args)
}

module.exports = createElement

svgTags.concat(htmlTags).forEach((tag) => {
  module.exports[tag] = createTagFactory(tag)
})
