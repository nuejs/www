
---
title: Compare / Framework source code
tab_name: Frameworks
page_title: Source code
desc: The complete framework source code
vs: [React, Vue]
suffix: src
sort: 3
---

[#faq]
  ## How is Nue so small? [small]
  Nue attempts to be a minimal framework to build reactive user interfaces. Everything is as concise as possible: the feature set and the API. Internally Nue takes full advantage of the JavaScript [Proxy object][proxy] and the reactivity is implemented as DOM traversal, instead of diffing.

  [proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

  ## Why care so much about size? [size]
  It's not so much about the file size. It's about the amount of code. Smaller projects are (typically):

  1. Easier to extend
  1. Easier to maintain
  1. Easier to use
  1. More stable

  Learn [why minimalism is important](/why/#minimalism) in software development
