
---
title: Nue JS • Component basics
include: [media-object]
---


# Component basics
Nue component is a reusable piece of UI. They are the building blocks of your application. Nue components can do anything that you'd expect from a modern UI framework. They can be nested within other components forming a tree-like structure and you can build control flows by looping components or rendering them conditionally.

[Reactive components](reactive-components.html) can also react to user input and re-render themselves to a new state. This article explains the important basics of components that you can apply on both server- and client side.


## Defining components
Here is an example component called "media object":

```
<div ı@name="media-object"ı class="{ class }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ desc }</h3>
  </aside>
</div>
```

Components are defined in a file with a `.nue` extension (recommended). They are HTML fragments with the component name given in the `@name` attribute. In the above, we defined a [highly reusable][media-object] media component that can be used on both server- and client-side.

[media-object]: http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/



## Rendering components
[Server components](server-components.html) are rendered with a `render` or `renderFile` method and [reactive components](reactive-components.html) are inserted on the page with a `mount` method. In both scenarios, you render the component with some optional data passed as an argument. Here's server-side rendering (SSR):

```
// import rendering method
import { renderFile } from 'nue'

// render the component
const html = renderFile('media-object.nue', {
  title: 'Media object',
  desc: 'One object to rule them all',
  img: 'img/art.jpg',
  type: 'banner',
})

// output
console.info(html)
```

When inserted on the page and [styled](styling-components.html) the object could look like this:

[media-object]
  title: Media object
  desc: One object to rule them all
  img: /demo/img/art-wide.jpg
  class: banner



## Nesting components
You can place components inside other components to form more complex applications and tree-like structures. For example:

```
<main @name="my-app">
  <app-header/>
  <app-body/>
  <app-footer/>
</main>
```

You can pass data to your components with attributes. These can be static or dynamic, and the values can be anything: strings, numbers, arrays, and objects. Here we pass the business model object to the application header component in `:model` attribute.

```
<main @name="my-app">
  <app-header model={ model }/>
</main>
```

Nue [template syntax](template-syntax.html) is heavily borrowed from Vue, so Vue users should feel right at home with Nue.


### One-way data flow
Attributes form a "one-way data flow": when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from mutating the parent's state, which makes the data flow harder to understand.



## Instance methods and variables [instances]
Internally Nue components are [ES6 classes][es6] where all the properties and methods are defined the same way as you'd define them in a JavaScript class. You can define getters, setters, public and private members, and static methods. The methods can be asynchronous or synchronous. For example:

```
<div @name="media-object" class="{ type }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ format(desc) }</h3>
  </aside>

  <!-- instance variables and methods -->
  <script>

    // instance variable
    ıtitleı = 'Default title'

    // called when the component is created
    ıconstructor(data)ı {
    }

    // custom function called by the template
    ıformat(value)ı {
    }
  </script>

</div>
```

[es6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes



## Slots
Slots are a way to extend components with custom functionality. They offer a way for the parent component to inherit functionality from a child. Slots can turn our media object into an even more reusable, multi-purpose component.

First, we add a `<slot/>` element to the HTML layout:

```
<div class="{ type }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ desc }</h3>
|   <slot/>
  </aside>
</div>
```

After this, we can pass custom content to the media object as follows:

```
<media-object :for="item in items" :bind="item">
  <h4>{ item.price }</h4>
  <button>Add to cart</button>
</media-object>
```

The slot element on the media object is replaced with the nested content on the loop. The nested content can contain anything, including text, HTML tags, and other custom components, like product rating, commenting, or product metadata.


## Component libraries
Nue allows you to define multiple components on a single file. These library files are a great way to group related components together. For example, here is a skeleton for a `todo-list` application:

```
<!-- todo list component -->
<ul @name="todo-list">
  ...
</ul>

<!-- the todo-item component -->
<li @name="todo-item">
  ...
</li>
```

Libraries work similarly on both server- and client side.



