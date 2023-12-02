
# Website performance
Nue is fast by default. It's almost impossible to build a slow website with Nue.


## Load less resources
Nue takes a simple path to performance: load less stuff. Here are the assets loaded by the blog starter template in [Next.js](//next-blog-starter.vercel.app/) vs [Nue](//nuejs.org/@nextjs-blog/):

[media]
  small: /img/less-to-load.png
  large: /img/less-to-load-big.png
  class: wide


## Instant page switches
Nue provides instant client-side navigation for websites and single-page applications:

[bunny-video]
  videoId: d53e052f-f4c5-43f0-af1c-777b18bad8ed
  caption: Instant page switching in action
  width: 650

[View demo](/@simple-blog) • [Learn the details](../concepts/client-side-navigation.html)

## Simple performance optimization
Nue offers simple configuration options for even faster performance:

``` yaml
inline_css: true
prefetch_global_css: true
preload_images: [ my-hero.webp ]
page_router: true
```

[Learn the details](../concepts/performance-optimization.html)


## Cache- friendly
Nue defaults to [unbundled distribution](../concepts/js-modules#unbundled) so only the files that have changed are loaded from the server. Others remain in cache.

[media]
  small: /img/cache-friendly.png
  large: /img/cache-friendly-big.png


## Serve less CSS
Build faster sites with leaner CSS that is easy to inline

[.cols]
  [image-link src="/img/tw-spotlight.jpg" class="clickable" width="350"]
    href: //spotlight.tailwindui.com/

  #### Tailwind CSS

  [Live demo](//spotlight.tailwindui.com/)

  ---
  [image-link src="/img/nue-spotlight.jpg" class="clickable" width="350"]
    href: //nuejs.org/@spotlight

  #### Semantic CSS

  [Live demo](//nuejs.org/@spotlight)


[media]
  small: /img/less-css.png
  large: /img/less-css-big.png
  caption: Amount of CSS loaded by the official Tailwind Spotlight template
  class: wide



