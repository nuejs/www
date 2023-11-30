
# Website performance
Nue is fast by default. It's almost impossible to build a slow website with Nue.


## Load less resources
Nue takes a simple path to performance: load less stuff. Here's a comparison of the blog starter template [made with Next.js](//next-blog-starter.vercel.app/) vs [made with Nue](//nuejs.org/@nextjs-blog/):

[media]
  small: /img/less-to-load.png
  large: /img/less-to-load-big.png
  class: wide


## Instant page switches
Nue offers seamless client-side routing accross multi-page and single-page applications:

! video


## Simple performance optimization
Reach the highest performance scores with simple configuration options for CSS inlining and pre-fetching:

``` yaml
inline_css: true
prefetch_global_css: true
preload_images: [ my-hero.webp ]
page_router: true
```


## Cache- friendly
Nue defaults to [unbundled distribution](../concepts/js-modules#unbundled) so only the files that have changed are loaded from the server. Others remain in cache.

[media]
  small: /img/cache-friendly.png
  large: /img/cache-friendly-big.png


## Serve less CSS
Build faster sites with inlineable, cacheable, and modular CSS. Here’s the official Tailwind "Spotlight" template made with [Tailwind CSS]( //spotlight.tailwindui.com/) and [Semantic CSS](//nuejs.org/@spotlight/):

[media]
  small: /img/less-css.png
  large: /img/less-css-big.png
  class: wide



