
---
title: Nuemark tag reference • Nue
class: minitoc
---

# Nuemark tag reference

Nuemark is a content authoring format that extends standard Markdown vocabulary with small code snippets called "tags". These tags help you build rich, interactive pages without ever leaving the Markdown. A simple, concise syntax lets you create complex layouts with ease:

``` md
[.stack]
  # Content is king
  Web design is 100% content and 95% typography

  [button "Learn more" href="/docs"]
  ---
  [! content.png ]
```

[media]
  small: /img/content-hero.png
  large: /img/content-hero-big.png
  caption: Nuemark is a human-friendly content format for rich, interactive websites
  class: tall



## Tag syntax
Tag options can be supplied in different ways

```
// named "src" option
[image src="hello.png"]

// unnamed option
[image hello.png]

// YAML options
[image]
  caption: Hello, World!
  src: hello.png

// content option
[.info]
  This is a pure content argument, accepting
  *formatting* and other Nuemark tags

// classes and ID
[image#hero.epic.bordered hero.webp]

// cute shortcut for image and video tags
[! hello.png]
```

Moreover, all tags receive the global [configuration options](../reference/configuration-options.html) from `site.yaml`, `app.yaml`, the page's front matter.

All tags are "headless": they inherit the look and feel from external CSS that is specific to the context. For example: [a tabbed pane](#tabs) can look whole different on the front page than it looks under the documentation area.


## [button]
Displays a button that points to a location specified in the `href` attribute:

```
// label given with the "label" attribute
[button label="Learn more" href="/docs/"]

// label without the attribute name
[button "Learn more" href="/docs/"]

// button class + nested body
[button.secondary href="/docs/"]
  Learn more
```

### HTML output
Nuemark uses a link element (`<a>`) instead of `<button>` because links require no JavaScript.

```
<a role="button" href="/docs/">Learn more</a>
```

The ARIA `role="button"` tells the screen reader the element is a button, but provides no button functionality.



### Options
Button supports nested Nuemark content and the following options:

[.options]
  `href` the button label

  `label` the button label. Can also be given with the unnamed attribute.



## [table]
Renders an HTML table from the list of items on the component body

```
[table "Name; Email; Work title"]
  - Alice Johnson   |  alice.johnson@demo.ai   |  Marketing Manager
  - John Smith      |  john.smith@demo.ai      |  Software Engineer
  - Emily Davis     |  emily.davis@demo.ai     |  Human Resources Lead
  - Michael Chen    |  michael.chen@demo.ai    |  Sales Representative
  - Sarah Thompson  |  sarah.thompson@demo.ai  |  Graphic Designer
  - David Rodriguez |  david.rodriguez@demo.ai |  Financial Analyst
  - Jessica Lee     |  jessica.lee@demo.ai     |  Project Manager
  - Daniel Kim      |  daniel.kim@demo.ai      |  Accountant
  - Rachel Garcia   |  rachel.garcia@demo.ai   |  Customer Success Lead
  - Alex Nguyen     |  alex.nguyen@demo.ai     |  Web Developer
```

Here's another example where the data/options are explicitly defined with YAML:

```
[table]
  head: Name | Email | Work title

  items:
    - Alice Johnson   |  alice.johnson@demo.ai   |  Marketing Manager
    - John Smith      |  john.smith@demo.ai      |  Software Engineer
    - Jessica Lee     |  jessica.lee@demo.ai     |  Project Manager
```

### HTML output

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Work title</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>lice Johnson</td>
      <td>alice.johnson@demo.ai</td>
      <td>Marketing Manager</td>
    </tr>

    <!-- + all the rest  -->

  </tbody>
</table>
```

### Options

[.options]
  `head` table header items separated with semicolon (";") or pipe ("|") character

  `items` table body items where rows start with "-" (a YAML list item) and columns are separated with a semicolon (";") or pipe ("|") character. The items can also be given directly on the body (see the first example above).


## [layout]
Draws a generic layout block that is used as a container for Nuemark content. This is the most general use and expressive tag that allows you to build rich web pages with limitless possibilities:

```
[layout.box]
  A simple <div> element with the class name "box"

[.box]
  The component name ("layout") can be omitted

[.flex]
  This layout has two nested blocks
  ---
  The blocks are separated with "---"

[.grid]
  This layout has three nested blocks
  ---
  ## Full Nuemark support inside blocks

  [! /hello-world.png]
  ---
  The visual layout is defined in the CSS
```

### HTML output

```
<!-- simple layout -->
<div class="box">The most simple layout</div>

<!-- with nested blocks -->
<section class="flex">
  <div>This layout has two nested blocks</div>
  <div>The blocks are separated with "---"</div>
</section>
```

### Options

[.options]
  `item` class name for the nested blocks

  `items` list of class names for the nested blocks separated with a semicolon (";") or pipe ("|") character. For example `items="card; card boosted"` sets "card" class name for the first nested block, and "card boosted" for the second block.


## [image]
Image is a multi-purpose tag for displaying images. It supports captions, responsive images, links, and [art direction](//web.dev/articles/codelab-art-direction):


```
// simple image
[image hello.webp]

// with !- alias
[! world.webp ]

// caption
[! less-is-more.png caption="Less is More" ]

// rich caption
[! less.webp ]
  > Less is more
  -- *Mies van der Rohe* • Legendary German architect

// image link
[! book.svg href="/docs/" caption="View documentation"]

// art direction
[! small="ui-tall.png" large="ui-wide.png" ]

// a more complex responsive image
[image.tall]
  srcset: planet.png 450w, planet-big.png 900w
  sizes: (max-width: 600px) 450px, 900px
  alt: This is the alt text
  loading: eager
```

### HTML output
Depending on the options the rendered element can be an `<img>`, `<figure>`, `<picture>`, or `<a>` tag:

```
<!-- simple image, lazy loading is the default -->
<img src="hello.webp" loading="lazy">

<!-- with caption -->
<figure>
  <img src="less.webp" loading="lazy">
  <figcaption>Less is More</figcaption
</figure>

<!-- with link -->
<a href="/docs/">
  <figure>
    <img src="book.svg" loading="lazy">
    <figcaption>View documentation</figcaption
  </figure>
</a>

<!-- art direction -->
<picture>
  <source src="ui-tall.png" media="(max-width: 750px)" type="image/png">
  <source src="ui-wide.png" media="(min-width: 750px)" type="image/png">
  <img src="ui-wide.png" loading="lazy">
</picture>

<!-- responsive image -->
<img
  srcset="planet.png 450w, planet-big.png 900w"
  sizes="(max-width: 600px) 450px, 900px"
  alt="This is the alt text"
  loading="eager"
  class="tall">

```

### Options

[.options]
  `alt` is an alternate text for the image

  `src` image source

  `caption` image caption

  `href` a link URL for the image

  `srcset` defines a set of [responsive images][responsive] for the browser to choose between

  `sizes` defines screen widths to indicate what image size would be best to choose from the srcset.

  `large` the large version of the image. the large image can have a different aspect ratio than the small one, which is the difference between art direction and responsitivity.

  `small` the small version of the image

  `offset` the screen size when small turns to large. The default value is 750 (px).


  [responsive]: //developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images


## [video]
Renders an HTML5 video element

```
// a simple video tag
[video hello.mp4]

// with !- alias
[! world.mp4 ]

// with some standard attributes
[! intro.mp4 autoplay controls muted loop ]

// with sources and poster
[video.epic width="1000"]
  sources: [ hello.webm, hello.mp4 ]
  poster: hello.png
```

### HTML output

```
<!-- simple video -->
<video src="hello.mp4">

<!-- with attributes -->
<video src="intro.mp4" autoplay controls muted loop>

<!-- with poster and sources -->
<video class="epic" width="1000" poster="hello.png">
  <source src="hello.webm" type="video/webm">
  <source src="hello.mp4" type="video/mp4">
</video>
```

### Options

[.options]
  `autoplay` starts the video when the page is loaded. must be used together with `muted` or the autoplay does not work on all browsers.

  `controls` displays the browser's built-in video controls

  `loop` seeks back to the start after reaching the end of the video

  `muted` plays the video without sound

  `poster` a URL for an image to be shown before the playback starts

  `preload` a [hint to the browser][preload] on what to load prior playback

  `sources` a list of video files. the browser plays the first one it understands

  `src` a URL to the video file

  `width` the video width attribute. control the other visual options via CSS

  [preload]: //developer.mozilla.org/en-US/docs/Web/HTML/Element/video#preload


[.info]
  #### Note
  Future versions of Nuekit allow you to customize the look and feel of the video tag with CSS.


## [tabs]
Displays a tabbed layout where the content is displayed based on what "tab" the user clicks. Here the "Second block" is displayed when the "Second" tab is clicked:


```
[tabs "First | Second | Third"]

  ## First content block
  Tab panels can Can contain Nuemark
  ---
  ## Second block
  [! hello.png]
  ---
  ## Second block
  [! world.mp4]
```

### HTML output

```
<section tabs is="aria-tabs" class="tabs">

  <div role="tablist">
    <a role="tab" aria-selected>First</a>
    <a role="tab">Second</a>
    <a role="tab">Third</a>
  </nav>

  <ul>
    <li role="tabpanel">
      <h2>First content block</h2>
      <p>Full Nuemark support on blocks</p>
    </li>
    <li role="tabpanel" hidden="hidden">
      <h2>Second block</h2>
      <img src="hello.png" loading="lazy">
    </li>
    <li role="tabpanel" hidden="hidden">
      <h2>Second block</h2>
      <img src="hello.png" loading="lazy">
    </li>
  </ul>

</section>
```

The standard [`is` attribute](//developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is) turns the tag into a Web Component, using [nuemark.js](//github.com/nuejs/nue/blob/master/packages/nuemark/src/browser/nuemark.js)  on clilent side. Nue includes the file automatically if you are using an *isomorphic* component like Tabs. Isomorphic are hybrid with both server/SEO part and a reactive client part.



### Options

[.options]
  `tabs` tab labels are separated with a semicolon (";") or pipe ("|") character. Can also be given with the unnamed attribute like in the above example.

  `key` optional key for "aria-controls" and "aria-labeled" attributes as specified on the [MDN documentation][mdn]

  `wrapper` creates a new parent element with a class name specifeid on this property

  [mdn]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls#example


### HTML layout with key and wrapper attributes

```
<div class="hero-gradient">

  <section tabs is="aria-tabs">
    <div role="tablist">
      <a role="tab" aria-selected id="tab-tab-1"
        aria-controls="tab-panel-1">Tab 1</a>

      <a role="tab" id="tab-tab-2"
        aria-controls="tab-panel-2">Tab 2</a>
    </div>

    <ul>
      <li role="tabpanel" id="tab-panel-1"
        aria-labelledby="tab-tab-1">
        <p>Content 1</p>
      </li>

      <li role="tabpanel" id="tab-panel-2"
        aria-labelledby="tab-tab-2" hidden="hidden">
        <p>Content 2</p>
      </li>
    </ul>
  </section>

</div>
```


## [code]
Displays a [syntax highligted](//docs/concepts/syntax-highlighting.html) code block offering more configuration options than markdown fenced code blocks and there is no need for triple backtick characters.

```
[code caption="index.js" wrapper="shiny" numbered="true"]

  function something() {
    // do the thing
  }
```

### HTML output

```
<div class="shiny">
  <figure>
    <figcaption>
      <h3>index.js</h3>
    </figcaption>
    <pre glow><code language="html"> ... </code></pre>
  </figure>
</div>
```

### Options

[.options]
  `caption` a caption for the codeblock

  `wrapper` creates a new parent element with a class name specifeid on this property

  `language` the language of the nested code

  `numbered` draws line numbers when enebled




## [codeblocks]
Renders multiple [syntax highligted](//docs/concepts/syntax-highlighting.html) codeblocks inside a wrapping element designed to be displayed as flex- or grid layout on the resulting HTML page:

```
[codeblocks.epic captions="index.html; module.js" classes="dark; light"]
  <!-- HTML code -->
  <p>Hello, world</p>

  ---
  // JS code
  function hello() {
    return 'world'
  }
```

### HTML output

```
<section class="epic">

  <figure class="dark">
    <figcaption>
      <h3>index.html</h3>
    </figcaption>
    <pre glow><code language="html"> ... </code></pre>
  </figure>

  <figure class="light">
    <figcaption>
      <h3>module.js</h3>
    </figcaption>
    <pre glow><code language="*"> ... </code></pre>
  </figure>

</section>
```

### Options

[.options]
  `captions` list of captions for the codeblocks separated with ";" or "|"

  `languages` list of languages for the codeblocks separated with ";" or "|"

  `classes` list of languages for the codeblocks separated with ";" or "|"

  `numbered` draws line numbers when enebled



## [codetabs]
Displays a tabbed layout where the [syntax highligted](//docs/concepts/syntax-highlighting.html) codeblocks are displayed based on what "tab" the user clicks. Here the "Second codeblock" is displayed when the "Second" tab is clicked:


```
[codetabs "First | Second | Third" languages="js | html | css"]

  // first code block
  const foo = 'bar'
  ---

  <!-- Second block -->
  <p>Hello, World</p>

  ---
  /* Third block */
  p {
    background-color: yellow
  }
```

### HTML output

```
<section tabs is="aria-tabs">
  <div role="tablist">
    <a role="tab" aria-selected>First</a>
    <a role="tab">Second</a></div>
    <a role="tab">Third</a>
  </div>
  <ul>
    <li role="tabpanel">
      <pre glow><code language="js"> ... </code></pre>
    </li>
    <li role="tabpanel" hidden="hidden">
      <pre glow><code language="html"> ... </code></pre>
    </li>
    <li role="tabpanel" hidden="hidden">
      <pre glow><code language="css"> ... </code></pre>
    </li>
  </ul>
</section>
```

### Options

[.options]
  `captions` list of captions for the codeblocks separated with ";" or "|"

  `languages` list of languages for the codeblocks separated with ";" or "|"

  `numbered` draws line numbers when enebled

  `wrapper` creates a new parent element with a class name specifeid on this property




