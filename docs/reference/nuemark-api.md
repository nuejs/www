
---
title: Nuemark API / Nue documentation
main_class: reference
---

# Nuemark API
Nuemark brings a content-first development model for Bun/Node/Deno-based website generators and flat-file content management systems.

Check out [Nuemark introduction](/blog/introducing-nuemark)


### nuemark(input: string, options: Object)
Render markdown input with optional [options](#options) object. Returns [page object](#page) with additional `html` property containing the final HTML.

```
// tailing "/index.js" is needed under Bun (v1.0.21)
import { nuemark } from 'nuemark/index.js'

const { html } = nuemark(`Hello, World`)

console.info(html) // <p>Hello, World</p>
```


### nuemarkdown(input: string, options: Object)
Render markdown input with optional [options](#options) object. Returns an HTML string.

```
import { nuemarkdown } from 'nuemark/index.js'

console.info(nuemark(`Hello, World`)) // <p>Hello, World</p>
```


### parsePage(input: string)
Parses a [page](#page) object for possible modifications before rendering it.


### renderPage(page: Page, options: Object)
Renders the parsed [page](#page) object with optional [options](#options) object. Returns [page object](#page) with additional `html` property containing the final HTML.

```
import { parsePage, renderPage } from 'nuemark/index.js'

const page = parsePage('Hello, World')
const { html } = renderPage(page)

console.info(html) // <p>Hello, World</p>
```


## Page object [page]
Returned after parsing a Nuemark file. For example:

```
{
  meta: {
    title: 'Hello, World',
    description: 'Sample data from the front matter',
  },

  headings: [
    { level: 1, text: 'Hello, World', id: 'hello' },
    { level: 2, text: 'How it works', id: 'how-it-works' },
  ],

  links: {
    video: {
      href: '//developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
      title: 'HTML5 video element'
    }
  },

  sections: [
    attr: { class: 'heroic', id: 'hero-section' },

    // array of fenced code, components, and raw markdown
    blocks: [ ... ],
  ],

  isomorphic: false,

  // HTML is only present for rendering methods
  html: null,
}
```

### meta
Parsed YAML data in the page's optional front matter

### headings
Array of page headings (h1, h2, h3, etc..). This is useful for rendering pages table of contents typically seen on the "On this page" sidebar. Each heading consists of `level`, `text`, and `id` properties.

### links
An array of reference links on the page. Each link consists of `href` and optional `title` properties.

### sections
An array of [section](../concepts/nuemark.html) objects on the page. Sections are divided with a `---` separator. Each section is an array of `block`s, which can be either components, fenced code blocks, or raw Markdown. This property is only for advanced users. Please post an [issue](//github.com/nuejs/nue/issues) if you want to broaden the documentation for this property.

### isomorphic
A boolean flag indicating whether the page contains build-in tags that require an additional client-side Web Component to function properly.


## The `options` Object [options]
Properties of the `options` object:

### data
Data passed for the custom components. If you are using the `renderPage` method, this is _extra_ data on top of the parsed front matter.

### lib
An array of [custom components](#custom) that you can define with JavasScript, JSX, TSX, or in [Nue layout files](../concepts/nuemark.html#custom-components).

### highlighter
Syntax highlighter function for fenced code blocks.

```
import { nuemark } from 'nuemark/index.js'

// unsure what's the best, so this is just pseudocode
import { hilite } from 'some-coloring-tool'

const { html } = nuemark(md_string, {
  highlight: function(code, language) {
    return hilite(code, language)
  }
})
```


## Custom components [custom]
Any object with the `name` and `render` methods can act as a custom component. Custom components are handed to Nuemark with the `lib` property:

```
const my_component = {
  name: 'my-component',
  render: function(data, lib) {
    return `<p>{ data.message }</p>`
  }
}

const { html } = nuemark('[my-component message="Hello, World"]', {
  lib: [ my_component ]
})

console.info(html) // <p>Hello, World</p>
```


## TSX components
You can create JSX/TSX extensions for Nuemark with Bun. First, you must install the following dependencies in your project folder.

```
bun add react
bun add react-dom
```

#### TSX file

Then we create a library called `my-lib.tsx` with two custom tags:

```
// first custom tag
export function MyTag(props: { message: string }) {
  return (
    <h1 style={{ color: 'red' }}>{ props.message }</h1>
  );
}

// second custom tag
export function MyTag2(props: { message: string }) {
  return (
    <h1 style={{ color: 'blue' }}>{ props.message }</h1>
  );
}
```

#### Nuemark lib
Next, we make the tags compatible with Nuemark:

```
// import React SSR (server-side rendering)
import { renderToString } from 'react-dom/server'

// import "my-lib"
const tsx_functions = await import('./my-lib')

//Make lib compatible with Nuemark
const tsx_lib = Object.keys(tsx_functions).map(name => {
  return {
    name,
    render: function(data, lib) {
      return renderToString(tsx_functions[name](data, lib))
    }
  }
})
```

#### Render Nuemark
Once we have the lib, we pass it to Nuemark for rendering:

```
// render Nuemark using our JSX-based tag library
const html = nuemarkdown('[my-tag]', {
  data: { message: 'Hello' },
| lib: tsx_lib
})

console.info(html) // <h1 style="color:red">Hello</h1>
```

