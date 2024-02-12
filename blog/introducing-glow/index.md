
---
date: 2024-02-07
og: /img/glow-og.png
include: [bunny/video, ext/glow]
title: Introducing Glow
desc: Beautiful, pixel-perfect Markdown code blocks
thumb: glow-thumb.jpg
_draft: true
---

# Introducing Glow: Beautiful, pixel-perfect Markdown code blocks

[author]

Today we're launching *Glow* — a wildly different syntax highlighter:

[media]
  small: /img/glow-dark.png
  large: /img/glow-dark-big.png
  class: wide hero-image
  href: /glow-demo/
  caption: Click to see samples


*Glow is different*: Instead of parsing and tokenizing the grammar, Glow focuses solely on aesthetics — and how your code bloks look.

*Glow is simple:* Glow makes all languages work with your brand colors by adjusting just a handful of CSS variables.

*Glow is the smallest*. Glow is two orders of magnitude smaller than the mainstream alternatives. We're talking [5K](//pkg-size.dev/nue-glow) instead of [5M](//pkg-size.dev/shiki). It's by far the smallest implementation available.


[media]
  small: /img/shiki-vs-glow.png
  large: /img/shiki-vs-glow-big.png
  class: tall comparison
  width: 720


## Grammar voodoo
Be it *Haskell*, *TypScript*, or *Zig*. *React*, *Vue* or *Svelte*. Whatever Turing-free *Markdown* artifact mixed together with another tightly coupled language-of-the-year oddity. And they will all glow:

[media]
  small: /img/glow-light.png
  large: /img/glow-light-big.png
  caption: Click for light samples
  href: /glow-demo/light.html
  class: wider light-skins

Contrast this to grammar-aware highlighters like *Shiki*, where it's a huge programming effort to configure a single, new language. For example the [golang.json][go] grammar file has 2700 lines and [javascript.json][js] is a whopping 6000-line configuration file.

[js]: //github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-grammars/grammars/javascript.json

[go]: //github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-grammars/grammars/go.json


## Easy brand coloring
If you look at the most recognizable brands on the internet, you'll notice that 80% of them are based on a single [brand color](//blog.hubspot.com/marketing/brand-colors). It is often coupled with a secondary color, and a third "accent" color to complement the main and secondary colors. This is exactly how Glow works. You can make the code blocks compatible with your brand just by adjusting a handful of CSS variables:

[code.is-dark wrapper="code-gradient"]
  /* CSS configuration for brand-aware syntax blocks */
  [glow] {
    --glow-primary-color: #7dd3fc;
    --glow-secondary-color: #4f72b6;
    --glow-accent-color: #419fff;
  }


It's a no-brainer to create new themes, both light and dark. All languages are automatically aligned with your brand. No missing color tokens, no surprises.

Contrast this to grammar-aware theming systems, like Shiki and *Prism*, where a single theme can have hundreds of color variables. [Monokai theme][monokai], for example, has 140 color variables, and [Material theme][material] has a whopping 296 variables. It's a huge development effort to build a brand-aware theme that works reliably across grammars.

[monokai]: //github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-themes/themes/monokai.json

[material]: //github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-themes/themes/material-theme.json


## Unlimited possibilities
Glow's unique, classless design system gives you line numbers, selections, error highlights, insertions, deletions, and much much more.

[code.is-dark.browser-like wrapper="code-gradient sky" numbered="true"]
  <script>
    // imports
    import { longpress } from './longpress.js';

    let pressed = false;
    ••bet glow_market = 9999_99++••;
  </script>

  <label>
    <input type=range •bind:value={duration}• max={2000} step={100}>
    {duration}ms
  </label>

  <button use:longpress={duration}
  -  on:mousedown="{() => pressed = true}"
  -  on:mouseout="{() => pressed = false}"
  +  on:longpress="{() => pressed = true}"
  +  on:mouseenter="{() => pressed = false}"
  >press and hold</button>

  <!-- condition -->
  {#if pressed}
    <p>Yoou pressed and held for {duration}ms</p>
  {/if}

And when I say "unlimited", it literally means that:

[code.live-code language="md" numbered="true"]
  # There's something about Lightning CSS
  Writing future CSS today has been a massive
  •productivity boost.• You'll get nesting, `color-mix()`,
  variables, and whatnot. Natively, today.

  ![CSS, bro](/vanilla.png)

  > •After I ditched all tooling• I was able to
  > work closer to metal. Everything happened
  > sub-millisecond. I entered a new planet.



## Glow + Nue = Next level
[Nue](/blog/introducing-nuemark/) is an content-first web development framework. As of today it has a built-in support for Glow. You can easily add code blocks to your Markdown content — even tabbed interfaces like below:


[codetabs.is-dark labels="HTML | CSS | Web Component" wrapper="code-gradient waves" numbered="true"]
  <dialog>
    <!-- "is" attribute for binding to web component -->
    <form action="/backend/leads" is="post-component">
      <header>
        <h2>{ title }</h2>
      </header>

      <label>
        <h3>Username</h3>
        <input name="username">
      </label>
      <label>
        <h3>Password</h3>
        <input name="password" type="password">
      </label>

      <footer>
        <button class="primary">Sign in</button>
      </footer>
    </form>
  </dialog>
  ---
  dialog {
    background-color: #0004;
    box-shadow: 0 0 2em #9cc;
    border-radius: 1em
  }

  label {
    display: block;
    margin-bottom: 1em
    input { width: 100% }
  }

  footer {
    margin-top: 1em;
    button { width: 100%; }
  }
  ---
  // Generic Web Component for sending data
  class HTXPost extends HTMLElement {
    constructor(options) {
      super()
      const endpoint = this.getAttribute('action')
      const formData = new FormData(this)

      this.onsubmit = (e) => {
        const res = await fetch(endpoint, {
          headers: { AccessKey: options.access_key },
          method: 'POST'
        })
      }
    }
  }

  customElements.define('htx-post', HTXPost, {
    extends: 'form'
  })


Nue is a clear-headed attempt to build a [Perfect Web Framework](/blog/perfect-web-framework/). With this release the core is now finished and the development focus shifts to a universal design system for both websites and single-page apps:

[media]
  small: /img/roadmap5.png
  href: /blog/perfect-framework/
  caption: Click for Nue's vision
  class: wider roadmap



## Get started with Glow
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Receive an email
We can notify you when the next milestone is reached on the roadmap.

[join-list]


