
---
title: Nue examples
include: [syntax]
---

# Examples
Reactive components in action. More examples to come.

Source code: [examples.nue][source]

Compiled code: [examples.js](/docs/examples.js)

[source]: //github.com/nuejs/www/tree/master/docs/examples.nue


## Hello world
Render a single instance variable

```
<h3>
  Hello { name }!
  <script>name = 'world'</script>
</h3>
```

[demo "hello-world"]


## The Counter
Incrementing an instance variable
```
<button @click="count++">
  Clicked { count } { count == 1 ? 'time' : 'times' }
  <script>count = 0</script>
</button>
```

[demo "counter"]



## Conditional rendering
Render HTML based on a condition

```
<button @click="count++">
  <p :if="!count">No clicks yet</p>
  <p :else-if="count == 1">First click!</p>
  <p :else-if="count == 2">Nice. Another one.</p>
  <p :else>Clicks: { count }</p>
  <script>count = 0</script>
</button>
```

[demo "if-counter"]


## Mouse tracking
Move mouse over the demo area

```
<div @mousemove="track" style="height: { h }em">
  Position: { x } x { y }

  <script>
    h = 10
    x = 0
    y = 0

    track(event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  </script>
</div>
```

[demo "mouse-tracking"]


## Simple loop
Rendering with `:for` loop

```
<figure>
  <img :for="img in images" :src="/demo/img/{img}.jpg">
  <script>
    images = ['popcorn', 'peas', 'tomatoes']
  </script>
</figure>
```

[demo "simple-loop"]


## Reactive loop
Nue auto-renders when arrays are manipulated

```
<figure>
  <img :for="img in images" :src="/demo/img/{img}.jpg">
  <button @click="images.push('tomatoes')">Add tomatoes</button>
  <button @click="images.pop()">Remove last</button>

  <script>
    images = ['popcorn', 'peas', 'lemons']
  </script>
</figure>
```

[demo "reactive-loop"]


## Server communication
Fetch data form server and update the view with the new items

```
<figure @name="fetch-fruits">
  <img :for="img in images" :src="/demo/img/{img}.jpg">
  <button @click="fetchFruits">Fetch more fruits</button>

  <script>
    images = ['lemons', 'peas']

    async fetchFruits() {
      const req = await fetch('fruits.json')
      const fruits = await req.json()
      fruits.forEach(this.images.push)
      this.update()
    }
  </script>
</figure>
```


[demo "fetch-fruits"]


## Inputs
Update the view when input values change

```
<form @name="input-demo">
  <input type="number" :value="a" @change="a = $event.target.value">
  <input type="number" :value="b" @change="b = $event.target.value">

  <!-- number conversion -->
  <p>{a} + {b} = {1 * a + 1 * b}</p>

  <script>
    a = 1
    b = 2
  </script>
</form>
```

[demo "input-demo"]


## Clild properties
Rendering child components with properties

```
<!-- parent component -->
<h3>
  { a } + { b } = ı<sum :a="a" :b="b"/>ı
  <script>
    // instance variables
    a = 10
    b = 100
  </script>
</h3>

<!-- child component -->
<span @name="sum">
  { a + b }
</span>
```

[demo "props-demo"]



## HTML expressions
Rendered with `{{ double_brackets }}`

```
<button>
  ı{{ label }}ı
  <script>
    label = 'Hello, <u>Underlined</u>'
  </script>
</button>
```

[demo "html-button"]
