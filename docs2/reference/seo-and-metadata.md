

# SEO and metadata
Nue has a simple, hierarchical system for defining metadata to your `<head>` tag for better discoverability for search engines.

Lets say you have a page "hello-world.md" in "blog" application directory. First, the global, site-wide data is taken from `site.yaml` on the root directory.

```
title: Emma Bennet
description: A designer and UX engineer
origin: https://emmabennet.co
favicon: /img/favicon.png
og_image: /img/og_emma.png
```

The blog specific metadata can be set in `blog/app.yaml`. This extends or overrides the global data:

```
title: Emma Bennet / Blog
author: Emma Bennet
og_image: /img/og_blog.png
```

Finally, the page-specific data is set on the front of the "hello-world.md" file:

```
 ---
 title: Hello, World
 pubDate: 2023-12-05
 ---
```

With the above configuration in place the document's `<head>` section is rendered as follows:

```
<head>
  <!-- Nue default values -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- globals from site.yaml -->
  <link rel="shortcut icon" src="/img/favicon.jpg">
  <meta name="description" content="A designer and UX engineer">

  <!-- directory specific values from app.yaml -->
  <meta name="author" content="Emma Bennet">
  <meta property="og:image" content="https://emmabennet.co/img/og_blog.png">

  <!-- document specific values from the .md file -->
  <title>Hello, World</title>
  <meta property="article:published_time" content="2023-12-05">
</head>
```


## All properties
Here are all the supported properties that impact the contents of your HEAD:

[.reference]
  ### author
  The author meta tag

  ### charset
  The value of the charset meta tag. Default is "utf-8".

  ### description
  The value for description meta tag

  ### direction
  The value of `<html direction="{ direction }">` attribute. Default is "ltr" (left to right)

  ### favicon
  Relative path to your favicon that overrides the "favicon.ico" on the browser tab.

  ### generator
  The generator meta tag. Default is "Nue (nuejs.org)" and only rendered for the production pages.

  ### language
  The value of `<html lang="{ language }">` attribute. Default is "en". You might want to change this to "en-us", "en-gb", "en-nz"... etc. depending on your dialect. Or "fi" if your content is written in Finnish language.

  ### og_image
  Relative path to open graph image. Please also supply the origin property (below) to turn this value to an absolute URL, which is the expected format.

  ### origin
  This is your domain name prefixed with the protocol as returned by `location.origin`. For example: `"https://emmabennet.co"`. Nue uses this value to prefix your og_image's and the value is also used on the generated `sitemap.xml` file later on.

  ### robots
  Value for "robots" meta property. Use "noindex" to exclude the site/app/page from search engines.

  ### theme_color
  Value for [theme color](//developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color) meta property. This is a color suggestion for user agents to customize the display of the page.

  ### title
  The value of the `<title>` tag — the most important meta tag for SEO.

  ### viewport
  The [viewport](//developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) value. Default is: "width=device-width,initial-scale=1"

