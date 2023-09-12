
---
title: Nue JS • Styling components
include: [media-object]
---

# Styling components
Nue embraces [separation of concerns](/why#soc) and progressive enhancement. This is why scoped `<style>` tags are not supported on the component level and Tailwind or any other CSS-in-JS system is not the recommended way to implement styling. This leads to:

1. *Cleaner code*. Separating content, markup, styling, and logic is the most effective way to avoid hard-to-maintain [spaghetti code](/why/#spaghetti). It's better to let UX developers focus on the UX parts and JS developers focus on the lower-level pieces like the business model and networking.

1. *More reusable code* When styling is separated from the component it's easier to re-use the same component and make it look & feel different depending on the context-specific needs.

1. *Smaller page weight* It's easier to keep HTML pages under the critical [14kb limit](/why/#fast) with external stylesheets and by loading the secondary CSS after the initial page load.

There are other reasons too like universal hot-reloading, more matching/performant hot-reloading and not needing to re-compile pages or JavaScript when CSS has changed but in this article, we only focus on the first two major benefits: cleaner source code and increased re-usability.


## Example: Media object
Media object is a very generic and re-usable module that Facebook used to [strip thousands of lines of code](//www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) from their codebase. It looks like this:

```
<div ı@name="media-object"ı class="{ class }">
  <img src="{ img }">
  <aside>
|   <h3>{ title }</h3>
    <p>{ desc }</h3>
    <slot/>
  </aside>
</div>
```

Here the media object is rendered on the page on the server side and it is given a "banner" look with an [external stylesheet](/demo/lib/media-object.css)

[media-object]
  title: Media object
  desc: One object to rule them all
  img: /demo/img/art-wide.jpg
  class: banner


## Reusing the component here
Maybe the best thing with external stylesheets is that the styling is fully decoupled from the component so you can style it differently depending on the context. Here the media object is used to create this "art gallery":

[media-grid class="art-gallery" :items="gallery"]


Another big advantage is that the HTML code remains clean and absent from local or inline styling. The art gallery is constructed just by giving the parent component a class name:

```
<div ıclass="art-gallery"ı>
  <media-object :for="item in items" :bind="item"/>
</div>
```

With external styling, the media-object component can be reused in many different ways without ever touching the HTML.


## Modern, reusable CSS
Modern CSS is extremely powerful. It's trivial to give a whole different look and feel to your components just by giving them a simple modifier class like `feature-list` or `tweet-list` and taking advantage of the broadly supported features of modern CSS like the grid layout, flex layout, and CSS variables.


// epic grid with white, blue, black boxes
[media-grid class="feature-list" :items="products"]

```
<div class="ımodifier-classnameı">
  <media-object :for="item in items" :bind="item"/>
</div>
```

[media-grid class="tweet-list" :items="tweets"]



## Nue ~CSS~
The [upcoming](/ecosystem/) Nue CSS pre-processor aims to bring clean, cascaded CSS back to the forefront. It's an alternative to Tailwind and other CSS-in-JS frameworks to unwrap the good parts in cascaded stylesheets and separation of concerns as opposed to local/inline styling.

Think [SASS](//sass-lang.com/) or [Stylus](//stylus-lang.com/), but developed for the new world where CSS variables, math, cascade layers, etc. are part of the standard.

Nue CSS is extremely [minimalistic](/why/#minimalism): there are no NPM dependencies and the repository weighs only 100kb. Contrast that to SASS, which has [30 dependenices](//github.com/sass/node-sass/network/dependencies) and weights a hefty 149M (about 1500 x bigger).



