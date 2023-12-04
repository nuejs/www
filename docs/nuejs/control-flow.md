
---
title: Nue JS • Control flow
include: [media-object]
---

# Control flow
Control flow is the order in which the DOM nodes and components are rendered. This order can be manipulated with conditional directives and loops.


## Conditional directives
Use the `:if` attribute to conditionally render a block. The block will only be rendered if the given expression returns a truthy value.

```
<figcaption :if="caption">{ caption }</figcaption>
```

### :else
Use `:else` to indicate an "else block" for `:if`

```
<div>
  <h1 :if="cool">I'm cool!</h1>
  <h1 :else>I'm ordinary</h1>

  <button @click="cool = !cool">Toggle</button>
</div>
```

A `:else` element must immediately follow a `:if` or a `:else-if` element - otherwise it will not be recognized.


### :else-if
The `:else-if` serves as an "else if block" for `:if`. It can be chained multiple times:

```
<b :if="type == 'A'">A</b>

<b :else-if="type == 'B'">B</b>

<b :else-if="type == 'C'">C </b>

<b :else>Not A/B/C</b>
```

Similar to `:else`, a `:else-if` element must immediately follow a `:if` or a `:else-if` block.




## Loops
Nue uses `:for` attribute to render over lists and objects. Arrays are looped with syntax like `item in items`, where `items` is the data array and `item` is the element being iterated:

```
<ul>
  <li ı:for="item in items"ı>
    { item.lang } = { item.text }
  </li>

  <script>
    items = [
      { lang: 'en', text: 'Hello' },
      { lang: 'es', text: 'Hola' },
      { lang: 'it', text: 'Ciao' },
      { lang: 'fi', text: 'Moi' }
    ]
  </script>
</ul>
```

Inside the loop, template expressions have access to the item being looped, as well as all parent properties. In addition, `:for` supports an optional second alias for the index of the looped item:

```
<li :for="(item, index) in items">
  { index }: { item.text }
</li>
```

You can use destructuring for the item variable similar to destructuring function arguments:

```
<li :for="{ lang, text } in items">
  { lang } = { text }
</li>
```

Destructuring and the index variable can be used together:

```
<li :for="({ text }, index) in items">
  { text } { index }
</li>
```

Loops can be nested and each `:for` scope has access to all parent scopes.

```
<li :for="item in items">
  <p :for="child in item.children">
    { item.text } { child.text }
  </p>
</li>
```

You can also use `of` as the delimiter instead of `in` so that it is closer to JavaScript's syntax for iterators:

```
<div :for="item of items"></div>
```


## Object loops
You can loop through Object values using the standard `Object.entries()` method:

```
<ul>
  <li :for="[lang, text] in Object.entries(items)">
    { lang } = { text }
  </li>
  <script>
    items = {
      en: 'Hello',
      es: 'Hola',
      it: 'Ciao',
      fi: 'Moi'
    }
  </script>
</ul>
```

You can provide an alias for the index variable as the third argument:

```
<ul>
  <li :for="[lang, text, index] in Object.entries(items)">
    { index } / { lang } = { text }
  </li>
</ul>
```


## Conditional loops
When they exist on the same node, :if has a higher priority than :for. That means the :if is executed first.

```
<li :for="todo in todos" :if="todos">
  {{ todo.name }}
</li>
```

Use the standard `hidden` property to conditionally hide elements inside a loop::

```
<li :for="todo in todos" :hidden="!todo.is_complete">
  {{ todo.name }}
</li>
```


## Component loops
Components can also be looped:

```
<my-component :for="item in items"/>
```

You can pass the iterated data to the component with attributes:

```
<my-component
  :for="(item, index) in items"
  :item="item"
  :index="index"
/>
```

Or you can use [:bind attribute](template-syntax.html#bind) to pass all the data at once:

```
<my-component :for="item in items" :bind="item"/>
```

The bind attribute makes the item properties accessible directly on the component. So instead of `{ item.title }` you can write `{ title }` inside the component.



## Array updates
Nue can detect when a reactive array's mutation methods are called and trigger necessary updates. These [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are:

* `push(item)` adds a new item to the end of the array
* `unshift(item)` adds a new item to the head of the array
* `sort(fn)` sorts items based on the given function
* `reverse()` reverses the order of items
* `splice(start, count)` removes items from the array
* `shift()`
* `pop()`
* `remove(item)` a Nue-specific helper method to remove the given item from the array




### Replacing the array

Mutation methods mutate the original array they are called on. The non-mutating methods like `filter(), concat()` and `slice()` always return a new array in which case you should replace the old array with the new one and Nue will render accordingly:

```
search() {
  this.items = this.items.filter(item => item.text.match(/Foo/))
}
```


## Animating new entries [animation]
Nue lets you define an `oninsert` callback function that is called every time a new item is added to any of the array properties in the component. This gives you the possibility to add a CSS transition effect (among other things) for the newly added dom nodes.


### Example animation
Click on the "Add user" button below to see the animation in action

[animation-demo]
  items:
    - title: Alex Martinez
      desc: Lead frontend developer
      img: /demo/img/face-3.jpg
    - title: Sarah Park
      desc: UI/UX Designer
      img: /demo/img/face-4.jpg
    - title: Jamie Huang
      desc: JS/TS developer
      img: /demo/img/face-2.jpg
    - title: Heidi Blum
      desc: UX developer
      img: /demo/img/face-1.jpg
    - title: Adam Nattie
      desc: Backend developer
      img: /demo/img/face-5.jpg
    - title: Mila Harrison
      desc: Senior frontend developer
      img: /demo/img/face-6.jpg


### Source code
Here's the full source code for the above demo:

```
<article @name="animation-demo" class="user-list">

  <button @click="addUser" :disabled="users[5]">
    Add user
  </button>

  <section class="user-list" translate="no">
    <media-object :for="user in users" :bind="user"/>
  </section>

  <script>

    // fill list with the first three available items
    constructor({ items }) {
      this.users = items.slice(0, 3)
    }

    // insert a new user from the available items
    addUser() {
      const { items, users } = this
      const user = items[users.length]
      if (user) users.push(user)
    }

    // add a CSS transition class to a newly added dom nodes
    oninsert(node) {
|     setTimeout(() => node.classList.add('fade-in'), 1)
    }
  </script>

</article>
```






