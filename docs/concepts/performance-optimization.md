
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

When you inline your CSS all the necessary to render the page is fetched on the initial request. Everything else can be loaded later. This is the easiest performance with the highest returns. ie. "a low hanging fruit".

The `prefetch_global_css` is a perfect companion for CSS inlining: it will prefetch all the global CSS files that are needed on the next page load.


## Preload your hero image
Nue offers a `preload_image` configuration option to preload your critical "hero" image as soon as possible. This will boost your Largest Contentful Paint (LCP).

``` yaml
# Preload the hero image
preload_image: my-hero.png
```

## Lazy load of non-hero images
Every other image, except the hero image on your layout, should be given the standard [lazy loading](//developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) attribute. This makes sure that no images are loaded unless they are visible on the viewport. For example:

```
<img src="/img/my-image.png" ıloading="lazy"ı>
```


## Speed up successive page loads
Use the following configuration on your `site.yaml` file to enable near-instant page switching:

```
page_router: true
```

This setting enables [client-side navigation](client-side-navigation.html).


