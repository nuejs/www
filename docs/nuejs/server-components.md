
---
title: Nue JS • Server components
---

# Server components
Server components are the basis for content-focused websites or multi-page applications (MPAs). They are foundational to reducing time to first contentful paint, ensuring accessibility, and improving SEO. They reduce the need for client-side JavaScript, sometimes to the point that it is not needed at all.

[Reactivity](reactive-components) is unnecessary on the server side. There is no user interaction, nor DOM updates. No dynamic updates or lifecycle methods. Each rendering just renders the given data. Only the `constructor` method is called upon component creation if the method is defined.


## Rendering components
Server-side rendering happens with the `render` method:

```
import { render } from 'nue'

// define a component
const component = `
<div class="{ type }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ desc }</h3>
  </aside>
</div>
`

// render the component with some data
const html = render(component, {
  title: 'Media object',
  desc: 'One object to rule them all',
  img: 'img/art.jpg',
  type: 'banner',
})

console.info(html)
```

Save the above to a file called "render.js" and execute it with  `node render.js` or `bun render.js` and you'll see the following on the console:

```
<div class="banner">
  <img src="img/art.jpg">
  <aside>
    <h3>Media object</h3>
    <p>One object to rule them all</h3>
  </aside>
</div>
```

### `render()` method
Renders a template with given data and dependent components:

```
render(template: string, data?: Object, deps?: Array<Component>)
```

#### Arguments

1. `template` the HTML-based Nue code to be rendered
2. `data` data or data model to be consumed by the template. The data can contain any number of properties and methods
3. `deps` array of nested/dependant components in a more complex app.


### `renderFile()` method
Reders a template on a given file

```
async function renderFile(
  path: string,
  data?: Object,
  deps?: Array<Component>)
```

#### Arguments

1. `path` file path to the template, such as "templates/media.nue"
2. `data` data for the template
3. `deps` array of nested components in a more complex app. See below.


## Rendering more complex apps
Nue allows you to render complex apps with multiple nested components from several different library files. This happens with `parseFile` method that takes a path to a file and returns an array of component instances. For example:


```
// grab the parse method
import { parseFile } from 'nue'

// import the data/business model of your application
import model from './business-model.js'

// parse application components. first component is the main app
const [app, ...lib] = await parseFile('./app.nue')

// parse some more components
const utils = await parseFile('./utils.nue')

// render the app
app.render(model, [...lib, ...utils])
```


### `parseFile()` method
Parses the given file and returns an array of component instances:

```
async function parseFile(path_to_file: string): Array<Component>
```

### `parse()` method
Parses a template and returns an array of component instances:

```
function parse(template: string): Array<Component>
```


### Component instance
The returned Component instances have the following structure

```
{
  // component name such as "media-object"
  name: string,

  // name of the HTML root element such as "div"
  tagName: string,

  // method to render the component
  render(data?: Object, deps?: Array<Component>)
}
```





