
---
title: Nue FAQ
include: [longform, permlink]
# inline_css: true
---

[image src="faq.svg"]

# Frequently Asked Questions

## Who are you?
I'm [Tero Piirainen](//twitter.com/tipiirai), a frontend developer from *Helsinki*. I have 25+ years of experience building open-source projects, technology products, and startups. I'm known for [Riot.js](//riot.js.org/), *Flowplayer*, and *jQuery Tools*. Right now I'm the sole developer of  Nue.

[media]
  small: workplace.jpg
  caption: My workplace in Kallio
  class: superwide


## What is Nue? [nue]
Nue is a frontend develoopment toolset. It's a new way to build websites and reactive user interfaces. It's an alternative to ecosystems like Vue, React, and Svelte. "Nue" comes from the German word `/neu/`, which translates to "new" in English.


Nue is an open-source project hosted on [GitHub][gh], licensed with [MIT license][mit].


## Why do you do this? [why]
I'm not happy with the way frontends are built these days. The tooling is complex, the code is hard to understand, the compile times are long, and the websites are too bloated. It takes too much time and nerves to finish projects. And I'm not alone. Developers in *Hacker News, Reddit*, and *Lobster* are seemingly frustrated grave for change.


## When is everything ready? [roadmap]
The goal is to publish all [tools](/tools/) by March 2024. This is a super random estimate which you definitely should not count on. It might be sooner or might be later. It all depends on how much work goes into issues and open-source maintenance, and how good I am at estimating time. Usually not very good.


## This seems ambitious. Can you pull this off? [doubt]
Absolutely. The code is already there for most tools. They just needs to be polished, packaged, and documented. Writing docs and keeping up with the open-source community takes most of the time.


## Can I help? [contribute]
Absolutely! The long-term goal is to form a team of like-minded JavaScript developers who value minimalism. Please [join the discussion][discuss].


## What are the benefits of Nue? [difference]

1. [Improved developer experience](/why/#ux)
1. [Faster to finish projects](/why/#soc)
1. [Faster page load times](/why/#fast)


## What are the guiding principles? [guidelines]

1. *Separation of concerns*: It's faster to ship when people focus on their areas of expertise: content creators focus on content, UX developers do interaction design, and JS developers work on the [back of the frontend][back].

2. ["Just normal web things"][normal]: Nue attempts to bring back the power of standards-based HTML, CSS, and JavaScript.

3. *Minimalism*: Small codebases are easier to maintain and scale, and there's less room for bugs.

[back]: https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/
[normal]: https://heather-buchel.com/blog/2023/07/just-normal-web-things/


## Who is Nue inspired by? [inspiration]
Mostly *Jarred Sumner* for developing [Bun](//bun.sh) — a super awesome project to replace the whole Node ecosystem with a faster one. It's a new JavaScript runtime, bundler, test runner, and NPM-compatible package manager. Thanks, Jared for showing how a single developer can pull big dreams!

While Bun makes JavaScript faster, Nue makes frontend development faster. Nue + Bun is really the perfect combination for a frontend developer.

Other people that inspired Nue are:

*Salvatore Sanfilippo* for this action-provoking [tweet][antirez]:

> "I look at the web today. Not as a programmer, but as a user of broken sites that are unable to obey the most basic rules of navigation and usability, terribly slow despite the hardware progress. And I can only think that modern frontend development has failed."

*Steve Jobs* for the phrase:

> "You’ve got to start with the customer experience and work backward for the technology"

*Dieter Rams* for stating the obvious:

> "Less, but better"


## How to keep things small? [small]
At least for me, the secret to minimalism is to start from scratch several times. Start with the first silly version, then do it all again. Repeat until you are happy. Avoid class hierarchies, internal frameworks, and other safety nets. Create simple functions that call other simple functions. Make the code seem stupid instead of clever. Remember *Steve Jobs* and "keep the good stuff and get rid of the crappy stuff."


## Do we need another framework? [yet-another]
We do. Frontend developer fatigue is a serious thing. Please read the [backstory](/backstory/).

## Aren't you reinventing the wheel? [re-inventing]
This is more like fixing a broken tire or replacing a massive pickup truck with a modern electric car.


## Why not Tailwind? [tailwind]
Nue uses semantic CSS and external stylesheets because:

1. *Decoupled design*: when styling is decoupled from the component it's easy make the component look different in various places by taking advantage of the cascade or using a different stylesheet

1. *Page weight*: It's easier to keep your initial TCP packet under the 14kb limit when the HTML code is leaner and the style is easy to split into primary and secondary CSS.

1. *Standards-based*: writing CSS directly makes you master the standard and you can play around with things like [container queries](//developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries), [:has() selector](//developer.mozilla.org/en-US/docs/Web/CSS/:has), or [@layer](//developer.mozilla.org/en-US/docs/Web/CSS/@layer).

Look for [details and examples](/docs/nuejs/styling-components.html)


## Why not TypeScript? [ts]
Nue is written with plain JavaScript because:

1. *ES6 is awesome*: think [modules][modules], [destructuring][destroy], and the [proxy][proxy]

1. *Dynamic typing* is a good thing and you can [use it to your advantage][dynamic].

1. *Browser standard*: JavaScript runs natively on the browser without an extra compilation step.

Nue is obviously usable in both JavaScript and TypeScript projects.



[antirez]: //twitter.com/antirez/status/1378272801522597888
[linkedin]: //www.linkedin.com/in/tero-piirainen-370183248/
[gh]: //github.com/nuejs
[discuss]: //github.com/nuejs/nuejs/discussions
[mit]: //opensource.org/license/mit/
[dynamic]: //wiki.c2.com/?BenefitsOfDynamicTyping
[proxy]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[destroy]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[modules]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

