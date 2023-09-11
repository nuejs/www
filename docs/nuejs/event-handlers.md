
# Event handlers
Attributes starting with the `@` symbol define an event handler. These are JavaScript functions that are called on user interaction like click, keypress, or mouse move.


## Inline handlers
Inline handlers are defined directly on the attribute:

```
<button @click="count++">Increment</button>
```

Inline handlers are good for simple expressions.


## Method handlers
More complex functionality should go to an instance method

```
<dialog>
  <button @click="close">Close</button>

  <script>
    close() {
      this.root.close()
      location.hash = ''
    }
  </script>
</dialog>
```


### Method calls
You can pass arguments for the method calls:

```
<div>
  <button @click="say('yo!')">Say yo!</button>

  <script>
    say(msg) {
      console.log(msg)
    }
  </script>
</div>
```


## Event argument
The method handler always receives [Event object](https://developer.mozilla.org/en-US/docs/Web/API/Event) as the last argument, unless it is explicitly given on the method call with a name `$event`:

```
<div>
  <button @click="first">First</button>
  <button @click="second('Hello')">World</button>
  <button @click="third('Hello', $event, 'World')">Nue</button>

  <script>
    // prints "First"
    first($event) {
      console.info($event.target.textContent)
    }

    // prints "Hello World"
    second(hey, $event) {
      console.info(hey, $event.target.textContent)
    }

    // prints "Hello Nue World"
    third(hey, $event, who) {
      console.info(hey, $event.target.textContent, who)
    }
  </script>
</div>
```


## Event modifiers
Nue provides some handy shortcuts to deal with the common DOM event manipulation functions. For example, `@submit.prevent` is a shortcut to [event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault).

```
<!-- prevent the default event from occurring-->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- run the modifier only -->
<form @submit.prevent></form>
```

The following modifiers are supported:

- *.prevent* prevents the default behavior of the event from occurring
- *.stop* prevents further [propagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) of the event
- *.self* only trigger handler if `event.target` is the element itself
- *.once* the event will be triggered at most once



## Key modifiers
Key modifier binds the event handler to a specific keyboard key:

```
<!-- only call `submit` when the `key` is `Enter` -->
<input @keyup.enter="submit">
```

You can directly use any valid key names exposed via [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) as modifiers by converting them to kebab-case. So the following handler will only be called if `event.key` is equal to 'PageDown'.

```
<input @keyup.page-down="onPageDown">
```

Nue provides the following aliases for the most commonly used keys:

- `.enter` captures both "Enter" and "Return"
- `.delete` captures both "Delete" and "Backspace" keys
- `.esc` captures both "Esc" and "Escape"
- `.space` captures "Spacebar", " ", "Space Bar"
- `.up` captures "Up" and "ArrowUp"
- `.down` captures "Down" and "ArrowDown"
- `.left` captures "Left" and "ArrowLeft"
- `.right` captures "Right" and "ArrowRight"

