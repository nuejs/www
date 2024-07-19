
---
title: Nue FAQ
include: [permlink]
# inline_css: true
---

# FAQ

## What is Nue?
The ultimate goal of Nue is to build [a perfect web framework](/blog/perfect-web-framework/) for UX developers and design engineers. A content-first alternative to *Next.js*, *Vercel* and *Netlify*, which is extremely fast and ridiculously easy to use.

[image-link]
  src: /img/roadmap-autumn-big.png
  href: /blog/perfect-web-framework/
  class: tall


## What exactly is "content first"?
The content-first approach places content at the center of web development. The goal is to develop websites primarily for content teams.

Content-first strategy ensures that your design aligns with the content, maximizing the impact of both. Your site is built around [progressive enhancement](//en.wikipedia.org/wiki/Progressive_enhancement) with the content rendering first. That is: HTML and CSS before optional JavaScript.

Content-first endorses _semantic HTML_ and the _separation of concerns_ principle. The content, design, and reactivity are separate entities that can be developed in isolation. For example, the design can be altered without touching the content and make it fit for any given context.

Think [CSS Zen Garden](//en.wikipedia.org/wiki/CSS_Zen_Garden) after 20+ years of technological progress.


## How is it different?
While Nue is content-first, the others are pretty much the opposite. The development starts with JavaScript or TypeScript and pages are assembled with React- components. These components are tightly coupled containers for HTML, JavaScript, CSS, and content violating the [separation of concerns](//en.wikipedia.org/wiki/Separation_of_concerns) principle.

Another popular trend is to load JavaScript first violating the _progressive enhancement_ pattern.


## How is Nue "closer to standards"? [metal]
One of the main goals of Nue is to bring web development closer to standards by focusing on *minimalism*, *separation of concerns*, and *semantic web design*. That is: there are as few abstractions as possible.

The layout, styling, and logic are separated, CSS is used as intended, and JavaScript is optional.


## Do we really need another framework? [fatique]
~More than ever!~ We need to radically simplify our stack. There are so many layers and build steps in the current stack that only the most experienced TypeScript engineers understand how all the pieces work together.

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
It's hard to look from aside how web development is slipping away from standards to something more complex, heavy and corporate-owned. I do this for pain, not fun. I cannot rest until I'm done.


## Can I help? [contribute]
Please do! Send me email: tipiirai @ gmail com.



## Who is Nue inspired by? [Inspiration]
Mostly *Jarred Sumner* for developing [Bun](//bun.sh) — a super awesome project to replace the whole Node ecosystem with a faster one. It's a new JavaScript runtime, bundler, test runner, and NPM-compatible package manager. Thanks, Jared for showing how a single developer can pull big dreams!

While Bun makes JavaScript faster, Nue makes front-end development faster. Nue + Bun is really the perfect combination for a front-end developer.

Other people that inspired Nue are:

*Salvatore Sanfilippo* for awesome programming attitude and this action-provoking [tweet][antirez]:

> "I look at the web today. Not as a programmer, but as a user of broken sites that are unable to obey the most basic rules of navigation and usability, terribly slow despite the hardware progress. And I can only think that modern frontend development has failed."

*Steve Jobs* for the phrases:

> "You’ve got to start with the customer experience and work backward for the technology"

and

> "Just get rid of the crappy stuff and focus on the good stuff."

*Mies van der Rohe* for stating the obvious:

> "Less is more"

[antirez]: //twitter.com/antirez/status/1378272801522597888


