
---
title: Compare / Component development
page_title: Component development
desc: The difference in coding style using Listbox component from Headless UI as an example
vs: [React, Vue, Svelte]
tab_name: UI components
suffix: listbox
sort: 1
---


[#faq]

  ## What are we comparing? [apples-to-oranges]
  The focus of this comparison is on *coding style* and not on the *size*, because the Nue listbox component lacks many of the advanced features like typeahead, search, and multi-select that you can find on the [Headless UI](https://headlessui.com/) version. If Nue would implement the full feature set, the size would likely double or triple.


  ## What is the key difference? [key-difference]
  The Headless UI version is packed with hooks, effects, types, props, watchers, injects, and other unusual abstractions.

  Nue is closer to basic HTML, CSS, and JavaScript and contains very few framework-specific idioms. The HTML-based [template code][html-code] is separated from the [DOM code][dom-code] so these two parts can easily be developed in isolation.

  [html-code]: https://github.com/nuejs/www/blob/master/nueui/components/menu-options.nue
  [dom-code]: https://github.com/nuejs/www/blob/master/nueui/components/menu-functions.js


  ## Why Headless UI? [headless-ui]
  [Headless UI](https://headlessui.com/) is a well-known UI library that gives you a good idea of modern component development. And you'll find implementations for *React*, *Vue*, and [Svelte](https://github.com/rgossiaux/svelte-headlessui).


  ## Can I use Nue listbox in production? [nue-listbox]
  Not yet. Nue listbox will be part of the upcoming [Nue UI](/tools/#ui) library, which is a simple, minimalistic alternative to libraries like *Headless UI*, *Radix UI*, and *Chakra UI*.


