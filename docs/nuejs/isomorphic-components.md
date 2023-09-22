
---
title: Nue • Isomorphic components
include: media-object
---

# Isomorphic components
Isomorphic components can run both on the client side and the server side. By running code in both environments, you'll get faster page rendering times, better SEO, and increased component re-usability.

Nue supports two types of isomorphic components:

1. *Universal components* run identically on both server- and client-side
2. *Hybrid components* where some parts are rendered on the server, and some parts on the client


## Universal components
Universal components run the same source code on both ends. Use can use the same component to build your content-focused websites and single-page applications. Media object is a good example:

```
<div @name="media-object" class="{ class }">
  <img src="{ img }">
  <aside>
    <h3>{ title }</h3>
    <p>{ desc }</p>
    <slot/>
  </aside>
</div>
```

### Server-side
Here, the media object is used on the server side to render a list of tweets (pardon: x's)

[media-grid class="tweet-list" :items="tweets"]


#### Server-side Nue code

```
<div class="tweet-list">
  <media-object :for="x in tweets" :bind="x"/>
</div>
```


### Client-side
Here, the _same_ component is mounted on the client DOM tree and [styled](styling-components.html) differently:

[client-grid]
  class: user-list
  items:
    - title: Alex Martinez
      desc: Lead frontend developer
      img: /demo/img/face-3.jpg
    - title: Sarah Park
      desc: UI/UX Designer
      img: /demo/img/face-2.jpg
    - title: Jamie Huang
      desc: JS/TS developer
      img: /demo/img/face-4.jpg


#### Client-side nue code

```
<div class="user-list">
  <media-object :for="user in users" :bind="user"/>
</div>
```

Universal components work pretty much the same in both environments.



## Hybrid components [hybrid]
Hybrid components render some parts on the server, and some parts on the client. The server component renders the content/SEO parts and typically makes it work without client-side JavaScript. The client component(s) enhance the server pieces with the dynamic/reactive parts.


### Example: video tag
HTML video tag is a perfect example of a hybrid component:

[seo-video]
  src: /demo/img/acid.mp4
  caption: This psychedelic piece is an exploration with a swirling vortex of neon greens, electric pinks, and sulfurous yellows consuming the canvas like an acid trip.


### Server part
Here is the server-side code for our video component

```
<div @name="video-object" class="video">

  <!-- the client part -->
| <video-player :opts="opts"/>

  <!-- the server/SEO parts -->
  <noscript>
    <video preload="none" :src="src" :type="type" controls>
  </noscript>

  <figcaption :if="caption">{{ caption }}</figcaption>
</div>
```


#### Generated HTML
Let's render the video object with the following data

```
renderFile('video-object.nue', {
  opts: {
    caption: 'This psychedelic piece is an ...',
    src: '/videos/acid.mp4',
    type: 'video/mp4',
    autoplay: true
  }
})
```

The HTML output will look like this:

```
<div class="video">

  <!-- the client part -->
  <ınue-island island="video-player"ı>
    <script type="application/json">
      { "opts": {
        "type": "video/mp4",
        "src": "/videos/acid.mp4",
        "caption": "This psychedelic piece is an ...",
        "autoplay": true
      }}
    </script>
  </nue-island>

  <!-- the server/SEO parts -->
  <noscript>
    <video src="/videos/acid.mp4"
      type="video/mp4"
      preload="none"
      controls>
  </noscript>

  <figcaption>This psychedelic piece is an ...</figcaption>
</div>
```

The interesting part is the custom `nue-island` element with nested JSON data. When Nue server-side renderer detects a non-standard HTML5 tag, that is not found from the given dependency array it will generate a custom "nue-island" element as a placeholder for the client-side part. In the above example the `<video-player :opts="opts"/>` is converted to an island and the `opts` are passed as JSON data for the component.


### Client part
Here is the client-side Nue- code for our isomorphic component:

```
<div @name="video-player" @click="togglePlay">
  <video ref="video" :attr="opts"/>
  <a class="btn-play"></a>

  <script>
    constructor(data) {
      const { opts } = data
      if (opts.autoplay) opts.muted = ''
      this.opts = opts
    }

    // toggle between play and pause
    togglePlay() {
      const { video } = this.$refs
      const { paused } = video
      paused ? video.play() : video.pause()
      this.root.classList.toggle('playing', paused)
    }
  </script>

</div>
```

The above makes a custom, minimalistic video player interface with just a play button in the center that is only visible when the video is playing.

The HTML5 `<video>` tag will have all the attributes from the opts with [:attr](template-syntax.html#attr) attribute and the play button visibility is toggled using a `.playing` CSS class name.


The server-side part is progressively enhanced with the dynamic parts by selecting all the `<nue-island/>` nodes and replacing them with a `video-player` client instance.



## Progressive enhancement
Progressive enhancement is a strategy where the content and styling are rendered first and JavaScript second. Fifteen years back this was the bread and butter for web developers: the all-amzing jQuery was commonly used to grab some elements from the server-generated page and make them interactive.

Today we use this same strategy but with a different name: *hydration*. However, both hydration and progressive enhancement are the same things: first, render the content, then spice it up with JavaScript.

Nue makes hydration easy:

```
// import the compiled Player component
import Player from './video-player.js'

// import createApp method
import createApp from './nue.js'

// select nodes to become video players
const nodes = document.querySelectorAll('[island="video-player"]')

// turn dom nodes into reactive video players
for (const node of nodes) {
  createApp(Video).mount(node)
}
```

Nue is a perfect tool for progressive enhancement due to first-class support for isomorphic components and because nue.js weighs less than 2.5Kb gzipped. It's an order of magnitude smaller than Vue or React.



