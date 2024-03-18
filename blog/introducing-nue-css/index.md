
---
date: 2024-03-18
og: /img/nue-css-og.png
include: [ext/glow]
title: Introducing Nue CSS
desc: A native successor to Tailwind, BEM, and CSS-in-JS
thumb: glow-thumb.jpg
---

# *Introducing __Nue CSS__* A native successor to Tailwind, BEM, and CSS-in-JS

[author]

Today we're launching a new CSS framework that is quite literally "out of this world". So absurd that it is possible to build an entire website with the same amount of CSS that goes into a single Tailwind button. Or even crazier: Three websites with a single Catalyst button. Yes: three (3!) world-class sites with one (1) __button__.

[image.big-scaled]
  small: /img/nue-css-hero.png
  large: /img/nue-css-hero-big.png


To understand what's happening in here, we need to step back and look closer to the recent milestones of CSS.



### *BEM*: Finding order to chaos
CSS is notoriously hard to manage. It takes years to get a hold of it. Between 2008-2014 there were several attempts to bring order: *OOCSS*, *BEM*, and *SMACSS* in particular.

However, these systems failed due to their size and verbosity. Developers did not like naming patterns like `block-name__elem-name_mod-name_mod-val` or the 600 different class names introduced by Bootstrap.

[image.scaled "/img/css-history.png"]

### CSS-in-JS: Clean global namespace
In 2014, *Christopher Chedeau* from *Facebook* gave birth to the CSS-in-JS movement. The primary goal was to get rid of global namespace pollution. He showcased Bootstrap as the key example of a bad design. Soon after we saw a flood of new CSS frameworks like [Vanilla Extract](//vanilla-extract.style/), [Styled JSX](//github.com/vercel/styled-jsx), and [Emotion](//emotion.sh)


### Tailwind: Utility classes
In 2017, *Adam Wathan* introduced [Tailwind](//tailwindcss.com/) — a whole new way to style things on the Internet. The idea was to inline all styling inside a class attribute so that everything could be expressed with HTML only.

Developers loved it: it was an easy way to build good-looking user interfaces with a copy/paste mentality. Backend developers and junior frontend developers were able to build things without much knowledge of CSS.



## The tradeoffs
For the most part, CSS-in-JS and Tailwind worked nicely and the developers were happy. But it's far from roses.


### Large codebases
We're not talking about "slightly more", or "only double the size". We're talking about a situation where a single button has more CSS than a complete, professionally designed website.

Large codebases drawn you down. There is too much to handle. And it's slow: a single styling change can trigger a large compilation chain, potentially involving hundreds of JavaScript files and NPM modules before the browser is hot-reloaded. What ought to take milliseconds, is suddenly taking seconds.


### Technical debt
Things work well if you can just copy/paste components and tweak settings, but it gets wild pretty easily. You often end up with a codebase that only specialists can understand:

[image "/img/inline-styling.png" width="450"]
  caption: This sort of code is quaranteed technical debt.



### Single point of responsibility [blocker]
Today, JavaScript developers are responsible for everything. The components are modern-day "kitchen sinks" where content, layout, styling, and business logic are stuffed together.

Things that used to be separate, are now under the responsibility of a JavaScript developer. It's hard or impossible for content creators, designers, and CSS developers to participate.

The talent is inefficiently spread when React developers work on issues outside of their scope. You know, engineers are not necessarily the best designers. And many of them hate CSS to the bone.

Your team is using a fraction of it's potential.




## What if...
What if we could break away from all these tradeoffs?

Start building websites that are look perfect inside out. Where your codebase is ten times smaller and is made out of simple components.

What if we get all the benefits of CSS-in-JS, but none of the problems? No trouble of naming things, nor worrying about cluttering the global namespace.

What if we could offload the burden from JavaScript developers and hand all design/UX work to people who are the absolute masters of that craft?

What would _that_ look like?



## Introducing Nue CSS
Today we're launching Nue CSS. A more maintainable and scaleable alternative to Tailwind, BEM, and CSS-in-JS. It's a whole new way to build design websites.

[image.scaled "/img/design-approach.png"]
  caption: Nue approaches UX from designers' point of view


[.hero-quote]
  > “You’ve got to start with the customer experience and work backward for the technology”

  — **Steve Jobs**



## Start with a design system
Every Nue CSS project starts with a design system. It's your "single source of truth" to ensure design consistency:

[image.tall]
  small: /img/abstract-design-system.png
  large: /img/abstract-design-system-big.png

Design system is a simple concept: you define the master look and feel in one, central location and let all your pages inherit from that. Ideally your design system is just a single self-documenting CSS file that even your mom can understand:

[site-list]


## Make it consistent
The purpose of Nue CSS is to ensure that your design system is effectively and consistently applied across all the pages and components on your website:

[image.tall]
  small: /img/css-architecture.png
  large: /img/css-architecture-big.png


With Nue your design is fully controlled by designers. There is no way an engineers or content person can break the design with ad-hoc ideas and inline styles.

The content of your pages is isolated from styling an logic. This way, non-technical people can create content without breaking things up. And because of the isolated styling: the generated content automatically adapts to your design system. That is: all your current and future pages will automatically inherit the correct design without extra effort.


## Do more with less
The simpler you design the system, the better. The fewer colors, font weights, elements, components, and variants you have, the better. Because simple systems are easier to maintain and scale.

[.hero-quote]
  > “Less, but better”

  — **Dieter Rams** • The grandfather to Apple's design

Simple menans lean and well-organized CSS. No global namespace issues, no local breaking points, and no consistency issues. There's less room for errors.

```
<!-- Form follows function -->
<div class="gallery">
  <figure>
  <figure>
  <figure>
  ...
</div>
```

Naming things and minimalism goes hand-in-hand. The more names you have, the more complex your system. A name like "bordered" or "rounded" brings more options and rules to the table. Should I use the non-bordered version here?

In most cases component name is all the naming you'll ever need. Modern CSS is capable to give it the design you want. That is:

[.hero-quote]
  > “Form Follows Function”

  — **Louis Sullivan**


## Ditch useless layers
When everything is based on a single source of truth, it's trivial to ditch the redundant CSS-in-JS/Tailwind layer and take the step towards simplicity:


[table.small "| CSS-in-JS | Tailwind | Nue"]
  - - Styling language
    - JavaScript
    - JavaScript
    - CSS

  - - Key idea
    - Local scoping
    - Utility classes
    - Design System

  - - Conflict resolution
    - Class name obfuscation
    - Standardized language tokens
    - Single source of truth


  - - Optimization
    - Tree-shaking. Bundling
    - One large CSS bundle
    - Minimalism + code splitting + inlining


Done. Now lets see the benefits:


## Reach new levels of simplicity [simple]
Sites made with Nue have extremely little CSS:

[size-table]

Here is some comparison data to give you a better idea of just how small these numbers are:


### Nue is on a whole new level
A single shadcn/ui button is larger than an entire Nue-powered website:

[size-compare a="sha" b="aimee-app"]

That may be crazy, but this one is absurd:

### Its ridiculously easy to maintain
The combined amount of CSS in three Nue websites, their design systems, and _all_ their pages, equals the size of a single Tailwind Catalyst button!

[size-compare a="catalyst" b="all"]

Just imagine the amount of maintainable code you need to worry about. It's like two orders of magnitude less moving parts. This crazy difference comes from [the false beliefs](/misinformation) on CSS best practises. Here's a best practise for maintainable CSS that works:

[.hero-quote]
  > One line of CSS is easier to maintain than hundred lines.

  — **Nue Best Practise**


### It does not get out of your hands
Design-system-powered websites remains constantly small as the site grows.

[size-compare a="dialog" b="mona-editor"]


Talk about maintainable CSS!



## Be motherfu!!ng fast
[motherfuckingwebsite.com](//motherfuckingwebsite.com/) is a developer meme from *Barry Smith* to demonstrate the power of minimalism. It's a text-only website that does not use CSS at all. Needless to say: it's top-tier fast:

[image.tall]
  small: /img/mf-perf.png
  large: /img/mf-perf-big.png
  href: //pagespeed.web.dev/analysis/https-motherfuckingwebsite-com/jjbk58sczm
  caption: Click for details
  width: 600

A lesser known fact is that minimal, inlined CSS gets you to the same performance levels with _zero compromises on design_:

[View analysis][sofa-perf]

[image.tall]
  small: /img/sofa-perf.png
  large: /img/sofa-perf-big.png
  href: //pagespeed.web.dev/analysis/https-sofa-company-nuejs-org/tvwg65pvkd
  caption: Click for details
  width: 600

No matter what sort of Turbo-Infuced-Rust-Bundler &trade; you have to optimize the irrelevant, nothing beats a tiny TCP packet that has everything to render the landing page.

Talk about performance!



## Scale like the best
Nue breaks you out from the [single point of responsibility](#blocker) and separates the burden for the more talented:

[image.tall "/img/without-js-bottleneck.svg"]
  width: 600


Separation of concerns equals scalability: marketers and technical writers proceed with content, designers and UX developers focus on the user experience, and JavaScript developers perfect the [back of the backend](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/).

Talk about scalability!



## Stand the test of time
CSS is the styling language of The Web. A standards-based language is forever.

[image "/img/standard-styling.png" width="500"]

Any developer with a background in CSS can maintain the codebase. And when you come back later, even years later, the codebase is clear and soun. The CSS you write today is valid forever.

Talk about timeless design!



## We're building the web framework of the future
Nue is a for the future generations, who demand more from their development stack. Nue CSS was an important step towards the [ultimate goal](/blog/the-perfect-framework):


[nue-roadmap]


### Up next: Universal Design System
Our next release is an actual design system:  The kind of stuff that is currently employed in large, design-focused companies only, but we'll make it work for everyone. Both globally and locally. I'm hoping to start a conversation with *Brad Frost* and somehow get involved into the development of a [global design system](https://bradfrost.com/blog/post/whats-next-for-a-global-design-system). It's important. Likely the big thing in CSS development:

[image.tall "/img/css-future.png" width="600"]

This makes a solid foundation for website templates.


### Then: Templates
Think copy/pasteable components ala Shacdn and Tailwind, with a ten times smaller codebase and seamless integration to your design system. And complete website templates with marketing, documentation, registration, e-commerce, and blogging areas.

You can become the next *Stripe*, *Linear*, or *Apple* — with the speed levels of a mothereffing website.

These perfected templates will likely have a one-shot price tag because we want to secure the development of Nue for years to come without the need for 3rd party agenda and demands.

So stay tuned! Please join the list and give me your thoughts. I read them all with care.

[join-list]


