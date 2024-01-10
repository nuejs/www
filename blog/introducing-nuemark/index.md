
---
date: 2024-01-10
og: /img/nuemark-hero-big.jpg
include: [bunny/video, syntax]
title: Introducing Nuemark 0.1
desc: An intuitive Markdown dialect for rich, interactive content
release: nuemark 0.1
thumb: nuemark-thumb.jpg
---


# *Introducing Nuemark:* Intuitive Markdown dialect for rich, interactive content.

Nuemark is a Markdown- based text editing format for creating rich internet content. You can create marketing pages, documentation pages, and blog entries. Even you all-mighty front page with all the bells-and whistles can be expressed with Nuemark.

! HERO video & splash
  Video: hot-reload solid-bg / gradient, title, grid layout, grid content,
  Splash: Markdown with Megapowers!

Nuemark is a standalone library that works under Bun, Node, and Deno. You can extend it with vanilla JavaScript or with template languages like JSX or Handlebars. However, Nuemark is best served with Nue's universal hot-reloading support: just edit your content and see the page shaping up in your browser in real-time. A genuine content-first / WYSIWYG experience.


## Manage content like a hacker
Nuemark is designed for content creators. It's pure content with no HTML, CSS, or JavaScript. It's a simple, concise syntax that is easy to learn and because there is no logic and styling it's hard to mess things up.

! Epic syntax box (tailwindcss.com)

With Nuemark content comes first. You start with pure content: text, images, and videos and only then move into layout and design. By starting with a content-first mindset, you will ensure that the page design evolves to support what's inside it. Not the other way around.

Nuemark lets you manage content [like a hacker](//tom.preston-werner.com/2008/11/17/blogging-like-a-hacker) without the complexity of large systems like *WordPress* or *Contentful*. Instead, you'll approach content from a software development perspective: your content is stored in a Git repository and you edit it with your preferred editor like VS Code or Sublime Text.



## Built-in set of headless UI components
Nuemark comes with a set of built-in components the most common use cases. There are custom tags for buttons, icons, responsive images, videos, tables, tabs, and layout grids. And you can mix tags to form more complex layouts.

! grid of screenshots:

All these components or "tags" are _headless_ — meaning that there is no inline styling, CSS modules, or utility classes to impact their appearance. There is only one, semantic class name on the root element of the component, which _names_ the component. Otherwise, the components are _classless_ and consist purely of semantic HTML elements.

The semantic approach means that you can customize the look and feel of your components so that they look just right on the given context. For example, a tabbed layout may look completely different on your front page compared to what it looks like on the documentation area:

! tabs: front page vs documentation
  caption: same component, different design.

This sort of content-first approach brings the legendary [CSS Zen Garden](//www.csszengarden.com/) back to the game. When your components always have the same structure you can re-use your CSS across websites and projects.



### Isomorphic Web Components
Some components are _isomorphic_ meaning that the content is rendered on the server side for search engines and the behavior of the component is spiced up with with client-side JavaScript.

Nuemark uses the standard [`is` attribute](//developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is) to tell the browser that a particular HTML structure should be spiced up with a Web Compoment. For example, the Tabs component is implemented as follows:

```
// tabs implementation
class Tabs extends HTMLElement {
  constructor() {
    // Do the thing when the component is mounted
  }
}

// Register the component for the browser
customElements.define('nuemark-tabs', Tabs, { extends: 'section' })
```

This is a modern/standard way to implement |progressive enhancemnet](//developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), historically done with libraries like jQuery.


## Build your own tags
You can extend Nuemark with custom tags. Any JavaScript object with a `name` property and `render()` method is a legit Nuemark component. Here's a dummy TSX example:

```
export function MyAlert(props: { color: string, message: string }) {
  return (
    <p style={{ color: color || 'red' }}>{ props.message }</p>
  );
}
```

And here's the same with [Nue template syntax](/docs/reference/template-syntax)

```
<p @name="my-alert" style="{ color || 'red }">{ message }</p>
```

Look for [Nuemark API docs](/docs/reference/nuemark-api.html) for the details.

*NOTE*: Currently, only Nue components support hot-reloading.




## Start building sites for content creators
The primary purpose of a website is to present content. You want to raise awareness of your idea, generate sales, or just share information. The bottom line is that your website should be optimized for creating and managing content.

Nuemark is a perfect choice for this purpose. After you have a proper design system in place, editors can create content that looks consistently great and fits your overall design. They can author new pages without ever leaving the content.

! front page vs the content

Nuemark offers the benefits of having all your website assets at hand, without the need for a large content-management system. It's an ideal choice for static site generators and flat-file systems.


## Try Nuemark now
[Bun](//bun.sh) is the recommended engine for Nuemark:

``` sh<
# Install Bun (if not done yet)
curl -fsSL https://bun.sh/install | bash

# Install website generator (Nuemark playground)
bun install nuekit --global

# Install Nuemark demo (as seen on this page)
bun create nue@latest
```

Choose "nuemark-demo" on the last step and off you go.

ps: Check out [Getting started docs](/docs/#node) if you prefer Node.

- - -

## FAQ

### What is Nue?
The ultimate goal of Nue is to build an easier, yet more powerful alternative to **Vercel**, **Gatsby**, and **Netlify**.

[media]
  small: /img/roadmap4.png
  large: /img/roadmap4-big.png
  class: roadmap
  width: 850

We can notify you when the next milestone is reached:

[join-list]


### How is this different from MDX?
Nuemark differs from prior alternatives like *MDX* and *Markdoc* in the following ways:

1. Nuemark is targeted for content creators. Three are no "scary" JavaScript expressions or import statements that can break the page from rendering. Familiarity with Markdown and YAML front matters is enough for crafting rich, interactive content.

2. Nuemark comes with a rich set of build-in components that can be used inside standard Markdown or mixed together to form more complex layouts. Any modern web page can be expressed with Nuemark so that your content is neatly separated for editors.

3. When you edit Nuemark within the Nue framework you see your page update on the browser in real-time offering a true WYSIWYG experience for content creators.



