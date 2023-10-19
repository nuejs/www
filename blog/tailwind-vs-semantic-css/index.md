---
title: Tailwind vs Semantic CSS
desc: Comparing two identically designed websites, their size, rendering speed, and best practises.
og: img/og.jpg
thumb: img/og-thumb.jpg
date: 2023-10-22
---

# Tailwind vs Semantic CSS
This study compares two websites with a similar design: A commercial Tailwind "spotlight" template, and the same site crafted with semantic CSS and [Nue server components](/docs/nuejs/server-components).

[.cols]
  [media]
    href: //spotlight.tailwindui.com/
    small: img/tw-home.png
    large: img/tw-home-big.png
    caption: Tailwind UI version →
  ---
  [media]
    href: /@spotlight/
    large: img/nue-home-big.png
    small: img/nue-home.png
    caption: Semantic version →

We'll take a deep look what is under the hood and how the sites are built.

[.info]
  #### TL;DR:
  Semantic version is nine times smaller, renders 40% faster, and is easier to modify, extend and scale.


## Front page HTML
The main difference is that Tailwind uses "utility" class names and Nue uses semantic class names. That is: Nue gives meaning to the elements like `nav`, `button`, and `.gallery` and styles them with an external stylesheet. Tailwind styles elements inline — directly on the markup.

Here's how the resulting HTML looks on a developer console:

[media]
  small: img/markup.png
  large: img/markup-big.png
  caption: Drilling down to the first element on the main navigation

Tailwind uses significantly more markup, because there are no higher level CSS components available and utility-first approach lacks the power of CSS selectors. You can only wrap divs inside divs inside divs, and fill the elements with Tailwind-specific class syntax.

This results is 75K of unminified HTML, while the semantic version is just 8K. That is: Tailwind requires nine times more markup to render the same design.

[media]
  small: img/html.jpg
  large: img/html-big.jpg
  caption: Full HTML coding on the front page

Moreover, a common SEO metric **Text to HTML Ratio** is only [2.3% with Tailwind][tw-ratio], which is "Very low" according to SiteGuru and [23.4% with Nue][nue-ratio], which is "Good".

[tw-ratio]: //www.siteguru.co/free-seo-tools/text-to-html-ratio?url=spotlight.tailwindui.com

[nue-ratio]: //www.siteguru.co/free-seo-tools/text-to-html-ratio?url=nuejs.org/@spotlight/




## Front page CSS
Lets study the difference in CSS coding:

[media]
  small: img/css.png
  large: img/css-big.png
  caption: Full CSS coding on the front page

Blue is semantic CSS, gray is utility classes, and black-bordered is primary CSS (which makes your pages render faster).

Some key takes:

1. Tailwind CSS is seven times larger: 33K vs 4.6K. Overall you need eight times more HTML/CSS code with Tailwind to render the page (108K vs 12.6K). The most surprising thing is that, Tailwind uses more global/semantic CSS than the semantic approach itself ¯\_(ツ)_/¯

2. Most of the semantic CSS is re-usable on other pages, because only fraction of the CSS is specific to the front page. It's easy to create new pages when the groundwork is already done.

3. "Spotlight" is just a _theme_ that extends a base design. In fact there is an extremely minimalistic [base-version](/@base/) of the website that can be used to create new themes, like our Spotlight theme.

[media]
  href: /@base/
  small: img/extending.png
  large: img/extending-big.png
  caption: Creating a new design by extending a semantic base design →

Theming or "skinning" is a powerful concept in semantic CSS. You can alter your design by swapping parts of your CSS with another one, or overriding the existing code. Theming is impossible with Tailwind because the design is hardcoded into the markup. If you want a new design, you must rewrite your HTML and wipe out you earlier work.



## Rendering speed
The two metrics that measure page rendering speed are first contentful paint (FCP) and largest contentful paint (LCP). Semantic version is 100% faster than Tailwind:

[media]
  small: img/lcp-mobile.png
  large: img/lcp-mobile-big.png
  caption: First viewport rendering speed


The data is available from Google PageSpeed insights:

- [Tailwind version](//pagespeed.web.dev/analysis/https-spotlight-tailwindui-com/cqtnf4xxoy?form_factor=desktop)

- [Semantic version](//https://pagespeed.web.dev/analysis/https-nuejs-org-spotlight/qnefz0rjse?form_factor=desktop)

Two reasons why the semantic version is faster:

1. All HTML and CSS to render the first viewport is loaded in one shot on the fitst request.

2. The first request is [less than 14K][14k], which is the maximum size of the first TCP packet.

[14k]: //endtimes.dev/why-your-website-should-be-under-14kb-in-size/

The Preview tab on the Developer console is a great way to debug FCP:

[media]
  small: img/first-paint.png
  large: img/first-paint-big.png
  caption: Previewing the first paint on developer console


## Best practises
One of the primary best practices of Tailwind is tight coupling. That is: the structure and styling is tied together. Semantic approach is the opposite: the structure and styling is loosely coupled. Lets see what that means by studying the gallery component on the front page:

[media]
  small: img/coupling.png
  large: img/coupling-big.png
  caption: Tight coupling vs Loose coupling

With Tailwind style cannot be separated from the structure. The semantic version, however, allows you to change the design of the gallery to something entirely different. You name the component, and style it externally.

Here's a better example. Lets look at the "Uses" or "Setup" page on both implementations:

[.cols]
  [media]
    href: //spotlight.tailwindui.com/uses
    small: img/tw-uses.png
    large: img/tw-uses-big.png
    caption: Tailwind UI version →
  ---
  [media]
    href: /@spotlight/setup/
    large: img/nue-uses-big.png
    small: img/nue-uses.png
    caption: Semantic version →

With Tailwind you must create a React- based JavaScript component to construct a suitable HTML structure for the design. However, by taking advantage of the powerful CSS selector language we can simply use Markdown in place of the custom JSX component, because the generated HTML is semantic and we can style it externally.

[media]
  small: img/content-first.png
  large: img/content-first-big.png
  caption: Tight vs loose coupling from different angle

With loose coupling you don't need to write a component for every situation, because you can alter the component's look and feel with external CSS. The same component can work differently on multiple places. And sometimes you don't need to develop components at all, and let CSS do the heavy lifting. Just like above.


## But ...


### But naming things is unnecessary
Naming things is a skill. You name things that repeat. Think function names in JavaScript or component names in Figma. The same goes to CSS class names. Be good at naming, and you can move from repeating things to re-using things. That is: you can move from this:

```
<button className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0">
```

To this

```
<button class="secondary">
```


### But co-location is important?
Co-location is a catchy name for tight coupling. A term to promote the idea that styling should be tied to the presentation. Repeating things vs. re-using things. See above.


### But Tailwind is a great design system
Tailwind has great defaults for colors, spacing, and responsive design. That part is roughly 3% of your Tailwind CSS file. It's easy to copy these defaults to your semantic design system if needed.


### But I move faster with Tailwind
Yes. You can move faster with Tailwind. But only when:

1. You are comparing Tailwind with your earlier, ill-structured CSS mess or you are new to CSS development.

2. You don't care about building re-usable modules for later use. That is: you are not naming things that repeat.

If you really want to move faster, you'll create a set of CSS components that  you can reuse. Like `<button class="secondary">`. Plus your site becomes leander, it renders faster, and all the other benefits mentioned in this article.


### But why is Tailwind so popular then?
Because mastering CSS requires practise. It takes several failed attempts before you get it. Most developers haven't gone trought that so they only remember the bad things. They have never built or used well-structured CSS.

But when you truly master CSS, there is no turning back. You have powerful things on your arsenal, like cascading, selectors, scoping, and @layers.

Tailwind has none of that power. Instaed, it forces you to write divs inside divs and fill your elements with insane amount of class names.

My guess is that Tailwind poularity will eventually fade and the codebases will turn to technical debt. It's just a matter of time.



### Where is the source code?
I'm working on it! I wanted to push out this blog entry quickly without the overhead of making this an open source project. My next task is to update the [Nue starter kit](//github.com/nuejs/create-nue) to make it generate a real-world website. I'll also write a blog entry called "Next.js vs Nue". It taclkes the bigger picture and what's wrong with the frontend ecosystem as we know it. And why I started working on Nue in the first place. Please join the mailing list, and I'll notify when it's ready:

[join-list]

Please add a comment! I want to understand what people think of all this. You can also participate to the [discussion at Hacker News](/).

