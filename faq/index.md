
---
title: Nue FAQ
include: [permlink]
# inline_css: true
---

# FAQ

## What is Nue?
The ultimate goal of Nue is to be a __content-first__ alternative to *Vercel* and *Netlify*. It's also extremely fast and ridiculously easy to use. Here's the release schedule:

[media]
  small: /img/roadmap4.png
  large: /img/roadmap4-big.png
  class: tall


## What exactly is "content first"?
The content-first approach places content at the center of web development. The goal is to develop websites not just for developers, but particularly for content creators.

Content-first strategy ensures that your design aligns with the content, maximizing the impact of both. Your site is built around [progressive enhancement](//en.wikipedia.org/wiki/Progressive_enhancement) with the content rendering first. That is: HTML and CSS before optional JavaScript.

Content-first endorses _semantic HTML_, where the design is completely separated from the structure. It should be easy to alter the design and optimize it for any given context.

Think [CSS Zen Garden](//en.wikipedia.org/wiki/CSS_Zen_Garden) after 20+ years of technological progress.


## How is it different?
While Nue is content-first, the others are literally the opposite. The development starts with JavaScript or TypeScript and pages are assembed with React- components. These components are tightly coupled containers for HTML, JavaScript, CSS, and content.

This kind of "spaghetti" violates the most important software development principle: [separation of concerns](//en.wikipedia.org/wiki/Separation_of_concerns).

CSS-in-JS is a big thing and you can even see SQL-in-JS.

Nue keeps different programming concepts separate and uses [progressive enhancement](//en.wikipedia.org/wiki/Progressive_enhancement) to first load content, then styling, and finally JavaScript — if ever.

This is, again, the polar opposite of what the other tools do. They load JavaScript first and content last. And this keeps happening as long as the single-page-application (SPA) model is trending.



## How is Nue "closer to standards"? [metal]
One of the main goals of Nue is to bring web development closer to standards by focusing on *minimalism*, *separation of concerns*, and *semantic web design*. That is: there are as few abstractions as possible. The layout, styling, and logic are separated, CSS is used as intended, and JavaScript is optional.


## Do we really need another framework? [fatique]
~More than ever!~ We need to radically simplify our stack. There are so many layers and build steps in the current stack that only the most experienced TypeScript engineers   understand how all the pieces work together.

With Nue, your stack is not just simpler, but [order of magnitude smaller](/docs/why-nue/closer-to-standards.html). There are fewer abstractions, less to learn, fewer headaches, and less room for errors. Please read the [backstory](/blog/backstory/) for a deeper rant.


## What's up with the word Nue?
"Nue" comes from the German word "neu", which translates to "new" in English. It is pronounced like `/nju/`.


## Who are you?
I'm [Tero Piirainen](//twitter.com/tipiirai), a frontend developer from *Helsinki*. I've been around for 25+ years building open-source projects and startups. I'm mostly known for [Riot.js](//riot.js.org/), *Flowplayer*, and *jQuery Tools*. Right now I'm focusing solely on Nue.


[media]
  small: workplace.jpg
  caption: Nue offices in Kallio, Helsinki
  class: wide



## Why all the effort? [why]
It's hard to look from aside how web development is slipping away from standards to something more complex, heavy, and proprietary. I do this for pain, not fun. I cannot rest until I'm done.


## Can I help? [contribute]
Please do! Send me email: tipiirai @ gmail com.



## Who is Nue inspired by? [Inspiration]
Mostly *Jarred Sumner* for developing [Bun](//bun.sh) — a super awesome project to replace the whole Node ecosystem with a faster one. It's a new JavaScript runtime, bundler, test runner, and NPM-compatible package manager. Thanks, Jared for showing how a single developer can pull big dreams!

While Bun makes JavaScript faster, Nue makes front-end development faster. Nue + Bun is really the perfect combination for a front-end developer.

Other people that inspired Nue are:

*Salvatore Sanfilippo* for this action-provoking [tweet][antirez]:

> "I look at the web today. Not as a programmer, but as a user of broken sites that are unable to obey the most basic rules of navigation and usability, terribly slow despite the hardware progress. And I can only think that modern frontend development has failed."

*Steve Jobs* for the phrase:

> "You’ve got to start with the customer experience and work backward for the technology"

*Dieter Rams* for stating the obvious:

> "Less, but better"

[antirez]: //twitter.com/antirez/status/1378272801522597888


