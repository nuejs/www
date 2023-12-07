
# Template syntax
Nue uses an HTML-based template syntax where the template expressions are heavily inspired by Vue. Vue users should feel at home when developing with Nue.


## Text expressions
The simplest form of expressions are placed inside curly brackets:

```
<span>Text: { text }</span>
```

The brackets are replaced with the value of the `text` property from the corresponding component instance. The value will be updated on the client side whenever the `text` property changes.


## HTML expressions
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


## Complex expressions
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

## Function calls
Expressions can call [instance methods](component-basics#instances)

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
Nue supports the bracket syntax or [string interpolation](https://en.wikipedia.org/wiki/String_interpolation) directly in attribute values:

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
Nue automatically detects [boolean attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes). In the following example, the `disabled` attribute will be included if `is_disabled` has a truthy value, otherwise the attribute will be omitted.

```
<button :disabled="is_disabled">Press me</button>
```


## Class attribute [class]
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


## Passing data with `:bind` [bind]
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



## Rendering attributes with `:attr` [attr]
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






