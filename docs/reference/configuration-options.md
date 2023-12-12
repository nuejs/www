
---
title: Configuration options / Nue docs
page_class: reference
---

# Configuration options
Nue has a hierarchical configuration system where the site-wide settings are specified in the `site.yaml` file on the root directory, the application-level settings are specified in `<appdir>/app.yaml`, and page-level settings in the front matter section of a Markdown file. App settings extend/override the global settings and page settings extend/override the app settings.


## All options
An alphabetical index of all the configuration options:

### appdir
Name of the application directory a page belongs to. For example, the root level `index.md` could set this to "home" and read the layout, data, scripts, styles, and components from that directory.

### base
The base directory is where all the styles and components are loaded on the front end. This is similar to [<base>](//developer.mozilla.org/en-US/docs/Web/HTML/Element/base) tag and allows you to deploy the project under some path such as [/@simple-blog/](/@simple-blog/), instead to a root domain like `simple-blog.nuejs.org`.

### include
By default, Nue looks for a file named "main.js" and includes it automatically on your page requests. You can change this with this setting. For example, a value such as `['index.js']` would auto-include "index.js". See details of [JS/Typescript modules](../concepts/js-modules.html)

### bundle
Specifies files that should be bundled so that the imported dependencies are *inlined into the file itself. For example: ´bundle: [index.js]`. See [to bundle or not to bundle](../concepts/js-modules.html#unbundled).


### class
Sets the `<body :class="class">` attribute in the default HTML layout for page-specific CSS rules.

### dist
The output directory. The default is .`dist/dev` for the development version and `.dist/prod` for the minified production version.

### content_collection
This is a directory name for a [content collection](../concepts/content-collections.html). Setting this to "posts" makes all the Markdown pages and their metadata available as a looped array for your template files. Good for making blog/docs indexes.

### collection_name
The name of the looped variable on the content collection. By default, this is the name of the directory ie. the value of the `content_collection` option.

### globals
A site-wide setting in your `site.yaml` file to define directories that are global to all your applications. The scripts, styles, and components under global directories are automatically included on all your pages. See [files and directories](files-and-directories).

### inline_css
Setting this to `true` inlines all CSS directly into the page to make it load faster. See [performance optimization](../concepts/performance-optimization.html).

### prefetch_global_css
Setting this to `true` pre-fetches all global stylesheets to make the successive page load faster. This can only be enabled when `inline_css` is set to true. See [performance optimization](../concepts/performance-optimization.html).

### page_router
Settling this to `true` enables [client-side-navigation] to make the successive page loads feel instant.

### preload_image
This setting tells the browser about critical resources that you want to load as soon as possible before they are discovered in HTML. For example: `preload_image: my-hero.png`

### port
The port number of the development server. Default is 8080

### no_hotreload
Disables [universal hot-reloading](../concepts/universal-hot-reloading.html). This is enabled by default.

### no_automount
Disables automatic mounting of [reactive islands](../concepts/reactive-islands.html). This is enabled by default.



