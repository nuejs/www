
# Files and directories
Nue does not force you to any fixed directory structure so you can freely organize your website and it's files. You can, for example, start small with just a langing page and grow organically as you need more features:

![video](/docs/img/stripes.jpg)

! From a landing page to full blown multi-page application. Nue grows as you grow.


## Application directories
Each directory on your project is an *application directory*. Either a multi-page application with several content files, or a single-page application where a single file handles all the requests of the application

! MPA vs SPA

**Multi-page applications** consist of one or more Markdown files. Good examples are documentation, blogging area, or a feature tour. These apps are rendered server-side so that they can be easily consumed by search engines. The use of client-side JavaScript is optional.

**Single-page applications** consist of single `index.html` file that serves all HTML requests. These are admin dashboards, onboarding flows, surveys, or login pages. The application is rendered on the client-side with [Nue's reactive components](). SPAs are typically hidden from search engines.


## Dependency management [deps]
Nue supports automatic dependency management in such way that all assets (styles & components) inside an application directory and all the subdirectories are automatically included on the pages inside the app.

! App dependencies (no globals)

Moreover, you can define directories that are global to all applications in your `site.yaml` file on the root directory:

```
globals: [ components, themes/brutal, skins/dark ]
```

! Global dependencies

The assets under global directories are automatically included on to every page, regardlss of where they reside on the file system:



## Root directory
Root directory is a special app in such way that subdirectories are not automatically included in the dependency graph. Only global directories are. However, you can use `appdir` configuration variable on your front page to make it part of some application:

```
appdir: home
```

With the above setting all assets inside the "home" directory become dependencies for your root level `index.md`.

! Home dependencies


## Depency types
Following file types are automatically imported (and hot-reloaded):

- `*.css` — stylesheets
- `*.nue` — reactive components


## Special files

- `site.yaml`   — [Site-wide options](../reference/configuration-options.html) on the root directory
- `app.yaml`    — App specific options inside an application directory
- `index.html`  - Turns the root/application directory into a single-page app
- `layout.html` — [Layout components](layout-components.html)
- `main.js` — Automatically imported [JavaScript module](js-modules.html). This can import other scripts
- `main.ts` — The main script in TypeScript


## Static files
Miscalleneous file types like `.png`, `.jpg`, `.txt`, `.csv`, or `.json` are copied directly to the distribution directory without any speciall processing.




