
# Performance optimization
Nue is [fast by default](../why-nue/website-performance.html) — ie. it's close to impossible to build a slow website with Nue. Here are some performance optimization tweaks to make things even faster.


## Optimize CSS loading
Here is the most important performance tweak for your most common landing pages, like the front page:

``` yaml
# load all necessary in the first HTTP request
inline_css: true

# prefetch all global CSS files for the successive page load
prefetch_global_css: true
```

When you inline your CSS all the necessary to render the page is fetched on the initial request. Everything else can be loaded later. This is the easiest performance with highest returns. ie. "a low hanging fruit".

The `prefetch_global_css` is a perfect companion for CSS inlining: it will prefetch all the global CSS files that are needed on the next page load.


## Preload your hero image
Nue gives you simple settings to preload your critical "hero" images as soon as possible. If you are optimizing Largest Contentful Paint (LCP), preload can give you a massive boost on download priority.

``` yaml
# Preload the hero image
preload_image: my-hero.webp

# Preload
preload_imageset: hero-small.png 800px, hero-large.png
```

The `preload_imageset` accepts an array of images with an optional max-width attribute followed after the image. If the max-width is omitted, the image is be used when no matching image was found. ie. in above, the "hero-large.png" will be used when the screen is larger than 800px.

In both properties, if the image path is not prefixed with slash or dot, Nue prefixes the directory name to the image name.


## Lazy load non-hero images
Every other image, except the hero image on your layout should be given the standard [lazy loading](//developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) attribute. This makes sure that no images are loaded unless they are visible on the viewport. For example:

```
<img src="/img/my-image.png" ıloading="lazy"ı>
```



## Speed up successive page loads
Use the following configuration on your `site.yaml` file to enable near-instant page switching:

```
page_router: true
```

This setting enables [client-side navigation](client-side-navigation.html).


