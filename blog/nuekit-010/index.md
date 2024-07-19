
---
date: 2023-12-14
og: /img/nuekit-hero-big.jpg
include: [bunny/video, ext/glow]
title: Announcing Nuekit 0.1
desc: A simple, minimalistic alternative to Next.js and Astro with universal hot-reloading and much more.
release: nuekit 0.1
thumb: nuekit-thumb.jpg
---


[media]
  small: /img/nuekit-hero.jpg
  large: /img/nuekit-hero-big.jpg
  class: blog-hero


December 14, 2023

# Announcing Nuekit

[author]

Today I’m excited to share Nuekit: a new kind of static site generator and web application builder. It's a very different beast than the other tools you see around. Particularly the developer experience is something new and special.

*You'll get universal hot-reloading for content, layout, styling, and reactive islands*. Client-side routing for both websites and single-page applications. Extreme overall minimalism and simplicity, next-level build times, and much more. Most importantly: Nuekit brings you closer to web standards so your websites and apps will stand the test of time.

In other words: Nuekit is an amazingly simple and powerful alternative to *Next.js* and *Astro*. The release highlights include:


## Universal hot-reloading [uhr]
Build entire websites without ever touching your browser. Your browser is instantly updated as you make changes to your content, styling, layout, and reactive islands:

[bunny-video]
  videoId: 18714305-d2f3-453d-83a9-0bd017166949
  poster: /img/hot-reload-hero.jpg
  class: wider


## Great for websites and single-page apps [multi]
Use the same simple syntax and development model for content-focused websites or reactive single-page applications — while enjoying the extra boost from universal hot-reloading.

[media]
  small: /img/simple-blog.png
  large: /img/simple-blog-big.png
  href: /@simple-blog
  width: 650

Build a simple blog: [Tutorial](/docs/tutorials/build-a-simple-blog.html) /
[Live demo](/@simple-blog) /
[Source code](//github.com/nuejs/create-nue/tree/master/simple-blog)

&nbsp;

[media]
  small: /img/simple-spa.png
  large: /img/simple-spa-big.png
  href: /@simple-admin
  width: 650

Build a simple SPA: [Tutorial](/docs/tutorials/build-a-simple-spa.html) /
[Live demo](/@simple-admin) /
[Source code](//github.com/nuejs/create-nue/tree/master/simple-app)



## Significantly faster build times [faster]
Nue is in order of magnitude faster than its cousins. An identical blogging site takes around *50ms* to build with Nuekit and over _ten seconds_ with Next.js:

[bunny-video]
  videoId: 45b73e3a-3edd-47af-bcd8-49039496b107
  caption: Building blog template with Nue in 39ms ¯\_(ツ)_/¯
  width: 650

## Other notable highlights [other]

- [Hybrid app routing and page routing](/docs/concepts/client-side-navigation.html)
- [Modular layout components](/docs/concepts/layout-components.html)
- [JS/TypeScript modules](/docs/concepts/js-modules.html)
- [Content collections](/docs/concepts/content-collections.html)
- [Reactive islands](/docs/concepts/reactive-islands.html)
- [Work closer to metal](/docs/why-nue/closer-to-standards.html)
- [Extreme performance](/docs/why-nue/extreme-performance.html)


### New, beautiful documentation area
With lots of explainer images and -videos:

[media]
  small: /img/docs.png
  large: /img/docs-big.png
  href: /docs/



## Get started
Starting a new project in Nue is easy:

``` sh
# Install Nue globally for all your sites and apps
bun install nuekit --global

# Start with a new template
bun create nue@latest
```

Check out our [Getting Started guide](/docs/) to learn the details


## What is Nue?
*Nue* is the umbrella term for all Nue-related projects. It's a rather ambitious project to build a simpler and more powerful alternative to services like *Vercel*, *Gatsby*, and *Netlify*. Today, with the announcement of Nuekit we are significantly closer to the goal:


[media]
  small: /img/roadmap-autumn.png
  large: /img/roadmap-autumn-big.png
  class: tall

Nue was first announced last September with [this backstory](/blog/backstory/). Only [Nue JS](//github.com/nuejs/nue) was available on GitHub, and the bigger picture was just an idea. Now, with today's Nuekit release, you can finally build real-world applications with Nue and see more clearly what the future holds.


### Monorepo
The "nuejs" GitHub repository was renamed to [nue](//github.com/nuejs/nue) and has been converted to a monrepo, now holding both [nuejs](//github.com/nuejs/nue/tree/master/packages/nuejs) and [nuekit](//github.com/nuejs/nue/tree/master/packages/nuekit) packages. This monorepo will hold all the upcoming Nue-related projects like *Nuemark* and *Nue CSS*.


If you want, we can send you an email when a new milestone is reached:
[join-list]

## Thank you!
Finally, I’d like to give a huge thanks to the [20+ developers](//github.com/nuejs/nue/graphs/contributors) who have participated in the early development of Nue JS. Your feedback has been essential in shaping Nue into the tool it is today. If you’re interested in getting involved please join the [Discussion @ Github](//github.com/nuejs/nue/discussions)


### Discussion @ HN

https://news.ycombinator.com/item?id=38638628