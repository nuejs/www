
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
Nue is a frontend develoopment toolset. It's a new way to build websites and reactive user interfaces. It's an alternative to ecosystems like Vue, React, and Svelte. "Nue" comes from the German word `/neue/`, which translates to "new" in English.

Nue is an open-source project hosted on [GitHub][gh], licensed with [MIT license][mit].


## Why do you do this? [why]
I'm not happy with the way frontends are built these days. The tooling is complex, the code is hard to understand, and the websites are bloated. It takes too much time and nerves to finish projects. And I'm not alone. Developers in *Hacker News, Reddit*, and *Lobster* are seemingly frustrated grave for change.


## When is everything ready? [roadmap]
The goal is to finish all projects on the [ecosystem](/ecosystem/) by March 2024. This is a super random estimate which you definitely should not count on. It might be sooner or might be later. It all depends on how much work goes into issues and open-source maintenance, and how good I am at estimating time. Usually not very good.

## This seems ambitious. Can you pull this off? [doubt]
Yes. At least coding is not the problem. Currently, there is 20 times less code in all projects combined than what you see in the Vue UI library alone. That's about *5k lines* of JavaScript vs. [100k lines](https://github.com/vuejs/core) of TypeScript.

Most features are already implemented on a private GitHub repository, they just need to be polished, packaged, and documented. Writing docs is the most time-consuming part.


## Can I help? [contribute]
Absolutely! The long-term goal is to form a team of like-minded JavaScript developers who value minimalism. Please [join the discussion][discuss].



## What are the benefits of Nue? [difference]

1. [Improved developer experience](/why/#ux)
1. [Faster to finish projects](/why/#soc)
1. [Faster page load times](/why/#fast)


## What are the guiding principles? [guidelines]

1. *Separation of concerns*: It's faster to ship when people focus on their own areas of expertise: content creators focus on content, UX developers do interaction design, and JS developers work on the [back of the frontend][back].

2. ["Just normal web things"][normal]: Nue attempts to bring back the power of standards-based HTML, CSS, and JavaScript.

3. *Minimalism*: Small codebases are easier to maintain and scale, and there's less room for bugs.

[back]: https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/
[normal]: https://heather-buchel.com/blog/2023/07/just-normal-web-things/


## Who is Nue inspired by? [inspiration]
Mostly *Jarred Sumner* for developing [Bun](//bun.sh) — a super awesome project to replace the whole Node ecosystem with a faster one. It's a new JavaScript runtime, bundler, test runner, and NPM-compatible package manager.

While Bun makes JavaScript faster, Nue makes frontend development faster. Nue together with Bun is really the perfect combination for a frontend developer. Thanks, Jared!

Other people that inspired Nue are:

*Salvatore Sanfilippo* for this action-provoking [tweet][antirez]:

> "I look at the web today. Not as a programmer, but as a user of broken sites that are unable to obey the most basic rules of navigation and usability, terribly slow despite the hardware progress. And I can only think that modern frontend development has failed."

*Steve Jobs* for the phrase:

> "You’ve got to start with the customer experience and work backward for the technology"

*Dieter Rams* for stating the obvious:

> "Less, but better"



## How to keep thins small? [small]
The secret to minimalism is in your ability to imagine the most straightforward way to reach your goal. Do the first silly version, then do it all again from scratch. Repeat until you are happy. Separate your concerns: Keep your logic and styling out of the structure. Avoid class hierarchies, internal frameworks, and other safety nets. Create simple functions that call other simple functions. Make the code seem stupid instead of clever. Remember *Steve Jobs* and "keep the good stuff and get rid of the crappy stuff."



## Do we need another framework? [yet-another]
We do. Frontend developer fatigue is a serious thing. Please read the [backstory](/backstory/).

## Aren't you reinventing the wheel? [re-inventing]
This is more like fixing a broken tire or replacing a massive pickup truck with a modern electric car.


## Why not Tailwind? [tailwind]
Because

1. *Spaghetti code* is hard to understand, maintain, and scale

1. *Page weight*: It's hard to keep your pages under the 14kb limit

1. *Hardcoded design*: Tailwind components look the same regardless of the context

1. *Proprietary syntax*: It's better to stick with the standards


## Why not TypeScript? [ts]
Because

1. ES6 is awesome: think [modules][modules], [destructuring][destroy], and the [proxy][proxy]

2. [Dynamic typing][dynamic] is a good thing. It's the very reason JavaScript, Python, Ruby, and Lisp exist.

3. [Minimalism](/why/#minimalism): omitting type definitions makes cleaner code

4. *Browser standard*: JavaScript runs natively on the browser without an extra compilation step.

## Why use "master" as the branch name? [master]
Because it's [just another word](https://medium.datadriveninvestor.com/why-githubs-change-from-master-to-main-is-not-the-solution-a3ac38cc48dd) and has [nothing to do](https://mooseyanon.medium.com/github-f-ck-your-name-change-de599033bbbe) with racism.




[antirez]: https://twitter.com/antirez/status/1378272801522597888
[linkedin]: https://www.linkedin.com/in/tero-piirainen-370183248/
[gh]: https://github.com/nuejs
[discuss]: https://github.com/nuejs/nuejs/discussions/1
[mit]: https://opensource.org/license/mit/
[dynamic]: https://wiki.c2.com/?BenefitsOfDynamicTyping
[proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[destroy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

// [vue]: https://github.com/vuejs/core/tree/main/packages/runtime-core/src
// [react]: https://github.com/facebook/react/tree/main/packages/react