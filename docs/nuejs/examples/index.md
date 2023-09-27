
---
og: /docs/img/examples-hero.png
title: Nue examples
include: [syntax]
---

# Examples
Reactive components in action. This list keeps growing.

Source code for all examples: [examples.nue][source]

Compiled version: [examples.js](/docs/examples.js)

[source]: //github.com/nuejs/www/tree/master/docs/examples.nue


## Playful examples

### Fractal generation
This example was [requested](https://news.ycombinator.com/item?id=37520358) in Hacker News. Here's a [React version](https://codesandbox.io/s/pedantic-mclaren-nqpjl5?file=/src/App.js) to compare with


```
<ul class="fractal">
  <li :for="am in rows"><b :for="el in Array(am).fill(0)"/></li>
  <script>rows = Array(20).fill(0).map((_, i) => i ? 3 * i : 1)</script>
</ul>
```

[demo "fractal"]


### Multiple fractals
Three fractals components styled differently

```
<div @name="fractals" class="fractals">
  <fractal class="first"/>
  <fractal class="second"/>
  <fractal class="third"/>
</div>
```

[demo "fractals"]


### Canvas painter
Draw on the canvas below the source code

``` scrollable
<canvas @mousemove="mousemove">
  <script>
    last = [0, 0]

    mounted() {
      const { root } = this
      const ctx = this.ctx = root.getContext('2d')
      root.width = 800; root.height = 600
      ctx.fillStyle = 'white'
      ctx.lineCap = 'round'
      ctx.lineWidth = 20
      this.recolor()
      this.clear()
    }

    // reset canvas in every five seconds
    clear() {
      this.ctx.fillRect(0, 0, this.root.width, this.root.height)
      setTimeout(_ => this.clear(), 5000)
    }

    // reset Nue brand color every second
    recolor() {
      const colors = ['00c2ff', 'e2e8f0', 'fb00e2', '000']
      this.ctx.strokeStyle = `#${colors[Math.floor(Math.random() * 4)]}`
      setTimeout(_ => this.recolor(), 1000)
    }

    // draw the line
    mousemove(e) {
      const { ctx, last } = this
      const to = [e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop]
      ctx.beginPath(); ctx.moveTo(...last); ctx.lineTo(...to); ctx.stroke()
      this.last = to
    }
  </script>

</canvas>
```

[demo "canvas-paint"]


## Practical examples


### Basic form fields

```
<form class="flexy">

  <label>
    <h4>Name</h4>
    <input name="name">
  </label>

  <label>
    <h4>Birthday</h4>
    <input type="date">
  </label>

  <label>
    <h4>Special skill</h4>
    <select name="skill">
      <option>Front of the frontend</option>
      <option>Back of the frontend</option>
      <option>All of frontend</option>
      <option>Backend development</option>
      <option>Full stack</option>
    </select>
  </label>

  <label>
    <h4>Fatique level</h4>
    <input type="range" min="0" max="5" value="3">
  </label>

</form>
```

[demo "form-fields"]

### Server communication
Fetch data from server and update the view with the new items

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



## Basic examples


### Hello world
Render a single instance variable

```
<h3>
  Hello { name }!
  <script>name = 'world'</script>
</h3>
```

[demo "hello-world"]


### Counter
Incrementing an instance variable
```
<button @click="count++">
  Clicked { count } { count == 1 ? 'time' : 'times' }
  <script>count = 0</script>
</button>
```

[demo "counter"]


### Conditional rendering
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


### Mouse tracking
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



### Simple loop
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


### Reactive loop
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


### Inputs
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


### Child properties
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



### HTML expressions
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
