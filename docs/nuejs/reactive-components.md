
---
title: Nue JS • Reactive components
include: gallery
---

# Reactive components
Reactive components are interactive: they respond to the user's mouse and keyboard events on the browser. These components make your pages dynamic: they enhance your content-focused pages with small interactive "islands" and they are the building blocks for the more complex single-page applications.

## Example: Image gallery
Let's start with an example. Here is a classic *image gallery* component that you can interact with the arrow buttons as well as with the small round dots below the image.

[image-gallery]
  images: [tomatoes.jpg, lemons.jpg, peas.jpg, popcorn.jpg]
  basedir: /demo/img


## Defining the gallery component
Here's the code for our gallery component:

```
<section @name="image-gallery" class="gallery">

  <div>
    <a class="seek prev" @click="index--" :if="index"></a>

    <img src="{ basedir }/{ images[index] }">

    <a class="seek next" @click="index++"
      :if="images.length - index > 1"></a>
  </div>

  <nav>
    <a :for="src, i in images"
      class="{ current: i == index }"
      @click="index = i"></a>
  </nav>

  <script>
    index = 0
  </script>

</section>
```

You can see some basic concepts in reactivity in action: [event handlers](event-handlers.html) to respond to user clicks and [loops and conditionals](control-flow.html) for the control flow.


Worth noticing that you need less than 20 lines of code to implement a basic gallery. The first Google result to "React image gallery" takes me to [this JSX file](https://github.com/xiaolin/react-image-gallery/blob/master/src/components/ImageGallery.jsx), which has more than 1700 lines. Nue version would likely be 10-20 times smaller, even with the same feature set and the code would be easier to understand and scale with new features.




## Compiling components
Before you can run Nue code on the browser, you must convert it into JavaScript. This happens on the server side with a `compile` or `compileFile` command:

```
import { compileFile } from 'nuejs-core'

await compileFile('gallery.nue', 'www/lib/gallery.js')
```

The compiled library file has the following structure

```
// all components on the library are exported as "lib"
export const lib = Array<Component>

// first component is the default export
export default lib[0]
```

There is also a `compile` method that takes a raw string as input and compiles it into JavaScript:

```
import { compile } from 'nuejs-core'

const js = compile('<p>Hello, { name }!</p>')
```


## Mounting components
Once you have compiled the component you need to create a component instance and mount it on the page. These steps are quite similar to what you can see in React or Vue:

```
// import createApp method from Nue
import createApp from './nue.js'

// import our compiled gallery component (the default export)
import Gallery from './lib/gallery.js'

// create a gallery app and feed it with data
const gallery = createApp(Gallery, {
  images: ['lemons.jpg', 'peas.jpg', 'popcorn.jpg', 'tomatoes.jpg'],
  basedir: '/images/fruits'
})

// select a root node for the component
const root = document.querySelector('#gallery')

// mount the instance on the page
gallery.mount(root)
```

When mounted the component's root node _replaces_ the root node on the page and the mounted root node gets all the attributes (like id, class, and data- attributes) from the original root node.


### `createApp()` method
Creates an application instance

```
createApp(
  component: Component,
  data?: object,
  deps?: Array<Component>) : App
```

#### Arguments

1. `component` the root component to be mounted
2. `data` optional data or data model for the component. The data can contain any number of properties and methods
3. `deps` optional array of nested/dependant components in a more complex app.



## Mounting more complex apps
Here we use both the exported `lib` variable and the default export on the compiled file to create a more complex application:


```
// import createApp method
import createApp from './nue.js'

// import compiled Nue library files
import { lib as lib1 } from './lib1.js'
import { lib as lib2 } from './lib2.js'
import { lib as lib3 } from './lib3.js'

// import compiled Nue App
import App from './app.js'

// import business model for the app (optional)
import model from './model.js'

// create the app with the dependencies
const app = createApp(App, model, [...lib1, ...lib2, ...lib3])
```



## Lifecycle methods
Each component instance goes through a series of steps during its lifetime: first, it is created, then mounted on the page, and then it gets updated one or more times. Sometimes the component is removed or "unmounted" from the page.

You can hook custom functionality to these steps by creating instance methods with a specific name:

```
<script>

  // when the component is created. data is given as the first argument
  constructor(data) {

  }

  // after the component is mounted on the page
  mounted() {

  }

  // after the component is updated
  updated() {

  }

  // after the component is removed from the page
  unmounted() {

  }
</script>
```

Inside the callback function `this` points to [instance API](#api).


## References to nodes and components [refs]
Sometimes you want to get handle to some DOM element or nested component inside your root component. Those are available via the `$refs` property on the application instance:

```
<div @name="my-component">

  <!-- name a DOM node with "ref" attribute -->
  <figure ref="image"></figure>

  <!-- or with "name" attribute -->
  <input name="email" placeholder="Hey, dude">

  <!-- custom elements are automatically named -->
  <image-gallery/>

  <!-- refs work on templates too-->
  <h3>{ $refs.email.placeholder }</h3>

  <script>

    // references are available after mount
    mounted() {

      // get a handle to the image DOM node
      const image = this.$refs.image

      // get a handle to image-gallery component API
      const gallery = this.$refs['image-gallery']
    }
  </script>
</div>
```



## Instance API [api]
The application instance is accessible as a return value to `createApp` and via `this` variable inside the component (between script tags).


`$el` the root DOM node of the component instance

`$parent` is the root DOM node of the parent instance

`$refs` access to named DOM nodes and inner components inside the component

`mount(root: DOMElement)` mount the instance to the given root element

`unmount()` method to remove the component from the current component tree

`update(data?: Object)` forces the component instance to re-render with optional data. You typically call this event after fetching data from the server or some other asynchronous event.

The component re-renders itself automatically after calling an [event handler](event-handlers.html), but you need to call this manually if there is no clear interaction to be detected.



## Sharing code between components
You can add and import shared code inside a top-level `<script>` tag.
Here's an example library that defines both a shopping cart and a button component that adds items to the cart. The cart itself is defined in "cart.js", which is a plain JavaScript file. This cart is used by both components.

```
<!-- shared code -->
<script>
!  import { shopping_cart, addToCart } from './cart.js'
</script>

<!-- shopping bag component -->
<article @name="shopping-cart">
  <div :for="item in items">
    <h3>{ item.price }</h3>
    <p>{ item.amount }</p>
  </div>

  <script>
    constructor() {
!     this.items = shopping_cart.getItems()
    }
  </script>
</article>

<!-- "add to cart" component -->
<button @name="add-to-cart" @click="click">
  <script>
    click() {
!     addToCart(this.data)
    }
  </script>
</button>
```






