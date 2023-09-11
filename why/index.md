
---
title: Why Nue?
include: [bunny/video]
---

# Why Nue?
*Nue* is a [toolset](/ecosystem/) for making frontend development easier and more enjoyable. It's a complete overhaul to ecosystems like *Vue, React*, and *Svelte* as well as web development frameworks like *Vite, Next.js*, and *Astro*.

> Nue uses **progressive enhancement, separation of concerns**, and **semantic web design** to deliver new levels of performance, better scalability, and massively improved development experience.

Nue is open-source software released under the MIT license. It's an engineering attempt to bring a long-term solution to the prevailing [frontend fatique](/backstory/).


## Create both websites **and** webapps
Nue is a web application builder with first-class support for both single-page applications (SPA) **and** multi-page applications (MPA):

[.columns]
  ### Multi-page applications
  * Consist of multiple HTML pages
  * Blog, docs, marketing pages, etc.
  * Rendered server-side
  * Client-side JavaScript is optional
  * Search engine optimized

  In multi-page mode, the development experience is optimized for UX developers and content creators.

  ### Single-page applications
  * Consist of a single HTML page
  * Admin dashboards, onboarding flows, surveys...
  * Rendered client-side
  * Client-side JavaScript is required
  * Typically hidden from search engines

  In single-page mode, the development experience is optimized for UX developers and JS/TS developers. The application is rendered with client-side [Nue JS](/docs/nuejs).

  ---

  [media]
    large: img/folders-big.png
    caption: You structure your app hierarchy as you please.




## For UX devs, JS devs, **and** content creators
Nue embraces *the separation of concerns* to make your code easier to read, understand, and scale for all the members of your web team. This helps you move significantly faster because your team members can work in isolation without blocking others or breaking their code.

[.columns]
  ### UX developers
  UX developers use [Nue JS](/docs/) to focus solely on the structure, layout, and interaction design without spending time on hooks, effects, or other complex framework internals.

  ### JavaScript developers
  JavaScript developers can focus solely on the business model, networking, and other [back-of-the-frontend][back] functions.

  [back]: https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/

  ### Content creators
  Copywriters, marketers, and other non-technical people can use a human-friendly *Nuemark* syntax for content management. They focus purely on the content without the ability to break styling or create JS bugs.
  ---
  [media]
    large: img/nuemark.png
    caption: The content of this page is written with Nuemark




### 🖐 No more spaghetti, please! [spaghetti]
Nue is strongly against "spaghetti code" with multiple programming languages and coding styles mixed together. Here's how Tailwind [front page](/compare/homepages.html) looks like under the hood:

[media]
  large: img/spaghetti-big.png
  caption: The source code of the Tailwind CSS front page
  class: wider

Spaghetti code is hard to maintain and scale. It's hard to see how it works and you'll have challenges explaining it to fellow developers. It also makes your code less reusable when everything is hardcoded together and made specific to a single context.



## Universal hot reloading [hot-reload]
When content, styling, layout, and logic are neatly separated Nue can provide a very powerful feature called "universal hot-reloading":

[media]
  large: img/hot-reload-big.png
  small: img/hot-reload.png
  caption: Hit save and your document mutates itself to the new state

Everything you do: editing content, adding new assets, changing the layout, modifying server or client components, or making design changes, the change is instantly reflected on the browser.

[seo-video]
  src: /video/hot-reload-1600.mp4
  caption: Hot-reload in action

With this feature, UX developers, JavaScript developers, and content creators can move faster and enjoy a significantly better developer experience.


## Minimalism [minimalism]
Current frameworks, UI widgets, single-page applications, websites, and build tools are 10-100x bigger and more complex than they could be. Here's what the world looks like today:

[image-link]
  src: img/react-vs-nue.jpg
  href: /compare/frameworks.html
  class: wider higher

The size of things has gotten slightly out of hand:

* React.js is 109kb of minified JavaScript (35kb gzipped) and Vue.js is 97kb (34kb gzipped). Nue.js is 4.7kb (2.2kb gzipped). It's *16× smaller* than React.

* The JavaScript bundle size or the "Hello, World" application in [create-react-app](//create-react-app.dev) is ~1.6Mb!~ (364kb gzipped). [create-nue-app](//github.com/nuejs/create-nue) requires only 5kb (2.5kb gzipped) of __optional__ JavaScript.

* React- based [headless UI library][ui-react] is 103kb of minified JavaScript and [Vue version][ui-vue] 104kb. Nue's upcoming UI library will be 10-20 times smaller with the same set of components.

* The size of the project directory created with create-react-app is ~321Mb!~ and [create-vite-app](//github.com/vuejs/create-vue) is 31MB. A blank project created by Nue is under 1 MB.


[ui-react]: https://bundlephobia.com/package/@headlessui/react@1.7.17
[ui-vue]: https://bundlephobia.com/package/@headlessui/vue@1.7.16

- - -

### 👉 Less is More
The benefits of minimalism go far beyond just serving smaller JavaScript files:

1. *Easier to maintain*: When you have 10x less code, you need significantly fewer people to maintain and develop the project.

1. *Easier to use*: There are very few API methods and configuration variables. There is less to learn and you need less "boilerplate" code so you can move faster.

1. *Fewer bugs*: Nue codebase is small: there's less surface for issues and the bugs are easier to locate.

1. *Faster*: Nue is faster due to simpler internal logic and there are fewer kilobytes to transfer.





## Extreme performance [fast]
Thanks to minimalism, Nue can shoot for the fastest possible page rendering performance you can technically achieve on the Internet. The secret is to respect the [14kb rule](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#tcp_slow_start_14kb_rule) in TCP slow start algorithm. When your HTML request is under 14kb and it has all the content and styling to render the initial viewport, you have significantly faster page loads:

[bunny-video]
  videoId: cbacf7cc-7e76-4f55-b59a-7758f2e14d8e
  poster: thumbnail_d12f8640.jpg
  caption: Nue- powered websites feel instant


When the first HTTP packet contains everything to render the first viewport all the rest can come later. This *progressive enhancement* is the key to Nue's performance. There's absolutely no way you can be any faster than with the above approach.


### Optimization
Nue offers a `nue stats` command to check that everything is good regarding TCP slow start and the page load performance.

[media]
  large: img/stats-big.png
  caption: Attempting to keep everything under 14kb

In the above CSS1 stands for primary css and CSS2 is secondary css. The final row is the combined size of HTML and inlined primary CSS after being gzipped. Red rows require at least two TCP packets to render the first contentful paint.

TCP's slow start puts performance optimization to where it matters and you can stop struggling with JavaScript module bundling and other areas where optimization doesn't give you much.



