
---
title: Files and directories / Nue docs
---

# Files and directories
Nue does not force you to any fixed directory structure so you can freely organize your website and its files. You can, for example, start small with just a landing page and grow organically as you need more features:

[media]
  small: /img/folder-structures.png
  large: /img/folder-structures-big.png
  class: tall
  width: 600
  alt: Nue grows naturally from a simple landing page to a hybrid single/multi-page application.


## Application directories
Each directory on your project is an *application directory*. Either a multi-page application with several content files, or a single-page application where a single file handles all the requests of the application

[media]
  small: /img/mpa-vs-spa.png
  large: /img/mpa-vs-spa-big.png
  width: 600
  class: tall

*Multi-page applications* consist of one or more Markdown files. Good examples are documentation, blogging area, or a feature tour. These apps are rendered server-side so that they can be easily consumed by search engines. The use of client-side JavaScript is optional.

*Single-page applications* consist of a single `index.html` file that serves all HTML requests. These are admin dashboards, onboarding flows, surveys, or login pages. The application is rendered on the client side with [Nue's reactive components](). SPAs are typically hidden from search engines.


## Dependency management [deps]
Nue supports automatic dependency management in such a way that all assets (scripts, styles, and components) inside an application directory and all the subdirectories are automatically included on the pages inside the app.


Moreover, you can define directories that are global to all applications in your `site.yaml` file on the root directory:

```
globals: [ globals, modules, style, themes/brutal ]
```

The assets under global directories are automatically included on every page, regardless of where they reside on the file system.



## Root directory
The root directory is a special app in such a way that subdirectories are not automatically included in the dependency graph. Only global directories are. However, you can use the `appdir` configuration variable on your front page to make it part of some applications:

```
appdir: home
```

With the above setting all assets inside the "home" directory become dependencies for your root level `index.md`.


## Depency types
The following file types are automatically imported (and hot-reloaded):

- `*.css` — stylesheets
- `*.nue` — reactive components


## Special files

- `site.yaml`   — [Site-wide options](../reference/configuration-options.html) on the root directory
- `app.yaml`    — App-specific options inside an application directory
- `index.html`  - Turns the root/application directory into a single-page app
- `layout.html` — [Layout components](layout-components.html)
- `main.js` — Automatically imported [JavaScript module](js-modules.html). This can import other scripts
- `main.ts` — The main script in TypeScript


## Static files
Miscellaneous file types like `.png`, `.jpg`, `.txt`, `.csv`, or `.json` are copied directly to the distribution directory without any special processing.




