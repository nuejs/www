
# Website performance
Nue is fast by default. It's hard/impossible to build a slow website with Nue.


## Less to load
Nue loads less of everything: less HTML, less CSS, and less JS.

![video here](/docs/img/stripes.jpg)

! next.js vs Nue


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
Nue defaults to unbundled JavaScript so only the files that have changed are re-loaded. Others remain in cache.

! Console with JS only: "util.js" loaded, others from (disc cache)


## Built-in SEO
Nue's hierarchical configuration system ensures high SEO scoring and easy sharing:

! site.yaml / app.yaml / MD & front matter -> HTML head
