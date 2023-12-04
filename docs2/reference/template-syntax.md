
---
title: Nue template syntax
---

# Nue template syntax
Nue uses a simple HTML-based template syntax that you can use for both server-side layouts and reactive, client-side components. For example:

``` html
<div class="{ type }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p :if="desc">{ desc }</p>
    <slot/>
  </aside>
</div>
```

If React is __"just JavaScript"__, then Nue is __"just HTML"__ because any valid HTML is also valid Nue. You can also extend the standard HTML with template expressions that help you build modern websites and web- applications ins simple, declarative way.

Nue is best suited for *UX developers* dealing with the [front of the frontend](//bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) and with topics like interaction design, accessibility, and user experience.


## Nue components
Components are the building blocks of your application. Nue component is a reusable piece of UI. They can be nested within other components forming a tree-like structure and you can build control flows by looping components or rendering them conditionally. [Reactive components](reactive-components.html) can also react to user input and re-render themselves to a new state.

Components are HTML fragments with the component name given in the `@name` attribute:

```
<div ı@name="media-object"ı class="{ class }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ desc }</p>
  </aside>
</div>
```

You can place components inside other components to form more complex applications and tree-like structures. For example:

```
<section @name="media-gallery" class="gallery">
  <header>
    <h1>{ title }</h1>
    <p>{ desc }</p>
  </header>

  <!-- gallery items -->
  <media-object :for="item in items" :bind="item"/>
</section>
```

### Component attributes
You can pass data to your components with attributes. These can be static or dynamic, and the values can be anything: strings, numbers, arrays, and objects. Here we pass the business model object to the application header component in `:model` attribute.

```
<main @name="my-app">
  <app-header :model="model"/>
</main>
```

### One-way data flow
Attributes form a "one-way data flow": when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from mutating the parent's state, which makes the data flow harder to understand.

Template expressions and data flow is heavily inspired by Vue, so Vue users should feel right at home when building apps with Nue.



### Component instances [instances]
Nue components are based on [ES6 classes][es6]: all the properties and methods are defined the same way as you'd define them in a JavaScript class. You can define getters, setters, public and private members, and static methods. The methods can be asynchronous or synchronous. For example:

```
<div @name="media-object" class="{ type }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ format(desc) }</p>
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

ES6 classes make your code look amazingly compact and clean. Check out the reasoning behind classes and the HTML- based syntax from our blog entry: [rethinking reactivity](/blog/rethinking-reactivity/)

[es6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


### Slots
Slots are a way to extend components with custom functionality. They offer a way for the parent component to inherit functionality from a child. They help you define highly reusable, multi-purpose components.

The `<slot/>` element is added to the parent component as follows:

```
<div class="{ type }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ desc }</p>
|   <slot/>
  </aside>
</div>
```

After this, we can pass custom content for the parent:

```
<media-object :for="item in items" :bind="item">
  <h4>{ item.price }</h4>
  <button>Add to cart</button>
</media-object>
```

The slot element on the media object is replaced with the nested content on the loop. The nested content can contain anything, including text, HTML tags, and other custom components, like product rating, commenting, or product metadata.


### Component libraries
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


## Expressions


### Text expressions
The simplest form of expressions are placed inside curly brackets:

```
<span>Text: { text }</span>
```

The brackets are replaced with the value of the `text` property from the corresponding component instance. The value will be updated on the client side whenever the `text` property changes.


### HTML expressions
The single brackets interpret the data as plain text, not HTML. To output HTML, you will need to use double brackets. Here's how `{ value: 'Hello, <b>World</b>!' }` is rendered:

```
<!-- Value is escaped: Hello, &lt;b&gt;World!&lt;/b&gt; -->
<p>{ value }</p>

<!-- Value is rendered as HTML: Hello, <b>World!</b> -->
<p>{{ value }}</p>

<!-- Same as the above (Vue compatibility) -->
<p :html="value"/>
```

Be aware that rendering HTML can lead to XSS vulnerabilities if the content is user-generated.


### Complex expressions
Nue supports the full power of JavaScript expressions inside expressions:

```
<p>{ message.split('').reverse().join('') }</p>

<p>{ ok ? '👍' : '😡' }</p>
```

An expression is a piece of code that can be evaluated to a value. Therefore, the following will *NOT* work:

```
<!-- this is a statement, not an expression -->
{ var a = 1 }

<!-- use a ternary expression, not flow control  -->
{ if (ok) { return message } }
```

### Function calls
Expressions can call [instance methods](#instances)

```
<time :datetime="date.toISOString()">
  { prettyTime(date) }

  <script>
    prettyTime(date) {
      return MY_CUTE_FORMAT.format(date)
    }
  </script>
</time>
```

Functions inside expressions are called every time a reactive component updates, so they should not have any side effects, such as changing data or triggering asynchronous operations.


## Attributes
You can pass values to your components with attributes. These values can be static or dynamic, and the values can be anything: strings, numbers, arrays, and objects:

```
<!-- static parameter -->
<media title="Introduction to Nue"/>

<!-- dynamic parameter -->
<media :title="item.title" :class="item.class"/>

<!-- array value -->
<media-list :items="items"/>
```

All the attribute values are available inside the component:

```
<div @name="media">
  <h3>{ title }</h3>
</div>
```

Standard HTML attributes like `id`, `class`, `style`, `data-*` remain on the element. Nonstandard attributes like `:title` are removed after the value is passed to the component.


### Interpolation
Nue supports the bracket syntax or [string interpolation](//en.wikipedia.org/wiki/String_interpolation) directly in attribute values:

```
<!-- attribute value with brackets -->
<input type="{ type }"></input>

<!-- Vue- style binding also works -->
<input :type="type"></input>

<!-- string interpolation with brackets -->
<div class="gallery { class }">

<!-- a more complex example -->
<div style="background: url('{ background }')">
```


### Boolean Attributes
Nue automatically detects [boolean attributes](//html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes). In the following example, the `disabled` attribute will be included if `is_disabled` has a truthy value, otherwise the attribute will be omitted.

```
<button :disabled="is_disabled">Press me</button>
```


### Class attribute [class]
Nue supports a special object notation to help render the `class` attribute:

```
<label :class="field { is-active: isActive, has-error: hasError }"></label>
```

If both `isActive` and `hasError` are truthful Nue will render:

```
<label class="field is-active has-error"></label>
```

You can combine the object notation with other bracket expressions:

```
<label :class="field { is-active: isActive } { getErrorClass() }"></label>
```



### Class attribute merging
The parent class attribute is automatically merged with the child's class attribute:. Suppose we have the following component:

```
<button @name="my-button" class="btn">Click me</button>
```

And we mount it as follows:

```
<my-button class="large"/>
```

Then the final rendered button would merge both classes:

```
<button class="btn large">click me</button>
```


### Passing data with `:bind` [bind]
Bind directive makes every object property directly accessible on the component. Instead of writing `{ data.title }` inside the component, you can just write `{ title }`. This is particularly useful when looping components.

```
<!-- pass properties for the media object one by one -->
<media-object :for="item in items"
  :title="item.title"
  :desc="item.desc"
  :img="item.img"/>

<!-- or pass all properties at once with :bind -->
<media-object :for="item in items" :bind="item"/>
```



### Rendering attributes with `:attr` [attr]
Attr directive renders a DOM attribute for each property in an object. So following components:

```
<p :attr="data">
  <script>
    data = {
      title: 'My title',
      alt: 'My alt',
    }
  </script>
</p>
```

This would be rendered as:

```
<p title="My title" alt="My alt"></p>
```


### `$attrs` property
All parent attributes are available via the `$attrs` property. Here, the nested input field will inherit all parent attributes

```
<label @name="field">
  <h5>{ title }</h5>
! <input :attr="$attrs">
</label>
```

When the above component is used as follows:

```
<field title="Email" type="email" placeholder="me@acme.org" required="true"/>
```

The rendered HTML would be:

```
<label>
  <h5>Email</h5>
  <input title="Email" type="email" placeholder="me@acme.org" required>
</label>
```



## Control flow


### :if condition
Use the `:if` attribute to conditionally render a block. The block will only be rendered if the given expression returns a truthy value.

```
<figcaption :if="caption">{ caption }</figcaption>
```


### :else condition
Use `:else` to indicate an "else block" for `:if`

```
<div>
  <h1 :if="cool">I'm cool!</h1>
  <h1 :else>I'm ordinary</h1>

  <button @click="cool = !cool">Toggle</button>
</div>
```

A `:else` element must immediately follow a `:if` or a `:else-if` element - otherwise it will not be recognized.


### :else-if condition
The `:else-if` serves as an "else if block" for `:if`. It can be chained multiple times:

```
<b :if="type == 'A'">A</b>

<b :else-if="type == 'B'">B</b>

<b :else-if="type == 'C'">C </b>

<b :else>Not A/B/C</b>
```

Similar to `:else`, a `:else-if` element must immediately follow a `:if` or a `:else-if` block.




### :for loop
Nue uses `:for` attribute to render over lists and objects. Loops are defined with syntax like `item in items`, where `items` is the data array and `item` is the element being iterated:

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


### Object loops
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


### Conditional loops
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


### Component loops
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



