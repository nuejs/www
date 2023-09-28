
---
title: Nue JS • Introduction
include: [listbox, menu-options]
---

# Nue ~JS~ • Introduction

Nue JS is an extremely small (2.3kb minzipped) JavaScript library for building user interfaces. It is the core of [Nue toolset](/tools/). It’s like *Vue.js, React.js*, or *Svelte* but there are no hooks, effects, props, portals, watchers, injects, suspensions, or other unusual abstractions on your way. ~Learn the basics of HTML, CSS, and JavaScript and you are good to go~.


## Build user interfaces with less code [less-is-more]
The biggest benefit with Nue is that you need less code to do the same thing. It's not unusual to see 2-10x differences in the amount of code you need to write. For example, here's a custom list box component written with Nue:

[.listbox-demo]
  [listbox]
    label: Select user
    opened: true
    options:
      - Wade Cooper
      - Arlene Mccoy
      - Devon Webb
      - Tom Cook
      - Tanya Fox
      - Hellen Schmidt

The [React version](https://headlessui.com/react/listbox) is 2500 lines of JavaScript. Nue version is about ten times smaller even with 50-80% of the features:

[image-link]
  src: /docs/img/react-listbox-big.jpg
  caption: Click to see details 👉
  class: compare-shot
  href: /compare/component.html



## "It's just HTML" [html]
Nue uses HTML-based template syntax:

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

While React claims to be "Just JavaScript", then Nue can be thought of as "Just HTML", which is perfect for [UX developers][divide] who focus on interaction design, accessibility, and user experience.

[Compare](/compare/component.html) Nue coding style with *React, Vue, Svelte, Tailwind*, and *Astro*.

[divide]: https://css-tricks.com/the-great-divide/


## Built to scale
Three reasons why Nue brings new levels of scalability to frontend development:

1. [Separation of concerns](//nuejs.org//why/#soc), easy-to-read code is easier to scale than "spaghetti code".

1. [Minimalism](//nuejs.org/why/#minimalism), a hundred lines of code is easier to scale than a thousand lines of code

1. **Separation of talent**, When UX developers focus on the [front of the frontend][back] and JS/TS developers focus on the back of the frontend your team skills are optimally aligned:


[back]: https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/

[media]
  small: /docs/img/ux-developer.png
  large: /docs/img/ux-developer-big.png
  caption: The best results are gained when UX developers and JavaScript developers work in parallel without blocking each other.
  class: wider


## Decoupled styling
Nue does not promote the use of scoped CSS, Tailwind, or other CSS-in-JS framework because of tight coupling. It's better to separate your style from the layout and structure, because:

1. *More reusable code*: When styling is not hardcoded to the component, the same component can look different depending on the page or context.

1. *No spaghetti code*: Pure HTML or pure CSS is easier to read than mixed spaghetti code

1. *Faster page loads*: With decoupled styling it's easier to extract primary CSS from the secondary and keep your HTML page under the critical 14kb limit.

Learn more about [styling components](styling-components.html)



## Four kinds of components [isomorphic]
Nue has a rich component model and it allows you to create all kinds of applications using different kinds of components:

[image "/tools/img/grid.svg" class="small-image float-right"]

1. [Server components](server-components.html) are rendered on the server. They help you build content-focused websites that load faster without JavaScript and are crawlable by search engines.


2. [Reactive components](reactive-components.html) are rendered on the client. They help you build dynamic islands or single-page applications.

3. [Hybrid components](isomorphic-components.html#hybrid) are partly rendered on the server side, and partly on the client side. These components help you build reactive, SEO-friendly components like video tags or image galleries.

3. [Universal components](isomorphic-components.html#universal-components) are used identically on both server- and client side.




## UI library files [libs]
Nue allows you to define multiple components on a single file. This is a great way to group related components together and simplify dependency management.


``` html
<!-- shared variables and methods -->
<script>
  import { someMethod } from './util.js'
</script>

<!-- first component -->
<article @name="todo">
  ...
</article>

<!-- second component -->
<div @name="todo-item">
  ...
</div>

<!-- third component -->
<time @name="cute-date">
  ...
</time>
```

With library files, your filesystem hierarchy looks cleaner and you need less boilerplate code to tie connected pieces together. They help in packaging libraries for other developers.


## Simpler tooling
Nue JS comes with a simple `render` function for server-side rendering and a `compile` function to generate components for the browser. You don't need massive bundlers like *Webpack* or *Vite* to take control of your development environment. Just import Nue to your project and you are good to go.

~NOTE~ Bundler makes sense on the business model layer if you have hundreds or thousands of NPM- dependencies. [Bun](//bun.sh) and [esbuild](//esbuild.github.io/) are great and highly performant options.


## Use cases
Nue JS is a versatile tool that supports both server- and client-side rendering and helps you build both content-focused websites and reactive single-page applications.

1. *UI library development* Create reusable components for reactive frontends or server-generated content.

2. *Progressive enhancement* Nue JS is a perfect micro library to enhance your content-focused website with dynamic components or "islands"

3. *Static website generators* Just import it into your project and you are ready to render. No bundlers are needed.

4. *Single-page applications* Build simpler and more scalable apps together with [upcoming](/tools/) **Nue MVC**

5. *Templating* Nue is a generic tool to generate your websites and HTML emails.






