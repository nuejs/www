
---
title: Why Nue / Improved website performance
---

# Extreme performance
It's impossible to build a slow website with Nue


## Load less resources
Nue takes a simple path to performance: load less stuff. Here are the assets loaded by the blog starter template in [Next.js](//next-blog-starter.vercel.app/) vs [Nue](//nuejs.org/@nextjs-blog/):

[media]
  small: /img/less-to-load.png
  large: /img/less-to-load-big.png
  class: tall bordered
  width: 500


## Instant page switches
Nue provides instant client-side navigation for websites and single-page applications:

[bunny-video]
  videoId: d53e052f-f4c5-43f0-af1c-777b18bad8ed
  caption: Instant page switching in action
  width: 650

[View demo](/@simple-blog) • [Learn the details](../concepts/client-side-navigation.html)




## Significantly faster build times
Nue is in order of magnitude faster than its cousins:

[bunny-video]
  videoId: 45b73e3a-3edd-47af-bcd8-49039496b107
  caption: Building blog template with Nue in 39ms ¯\_(ツ)_/¯
  width: 650

[bunny-video]
  videoId: 0619cc14-56f3-43df-b2b1-ab8d9c23637c
  caption: Building identical blog template with Next.js takes in 12.29s
  poster: thumbnail_41d30feb.jpg
  width: 650


## Cache- friendly
Nue defaults to [unbundled distribution](../concepts/js-modules.html#unbundled) so only the files that have changed are loaded from the server. Others remain in the cache.

[media]
  small: /img/cache-friendly.png
  large: /img/cache-friendly-big.png


## Serve less CSS
Build faster sites with leaner CSS that are easy to inline

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
  _class: wide



