---
page_class: hmr-page
---

# Universal hot-reloading

Nue provides a powerful hot-reloading utility that automatically updates your page on the browser as you edit your content, styling, layout, data files, or reactive components.

![video here](/docs/img/stripes.jpg)

Hot-reloading is automatically enabled in development. The client-server communication is based on server-sent events. Instead making a full reload, Nue uses a technique called *DOM diffing* to only update the parts on the page that have changed. Here are the details what gets automatically updated:

## Content updates
- Markdown content
- Front matter (example: document.title updates)
- Layout files: both root- and app level `layout.html`
- site.yaml, app.yaml data (example: master navigation updates)
- Updates to other than the active page routes automatically to the new page

## Styling updates
- CSS file updates
- Inline styling changes
- New CSS files & CSS file removals
- Complete theme change via changes in `globals: []` array in site.yaml

## Reactive components
- All component updates
- Form components: potential form data is restored to the updated component
- Dialog components: dialogs and overlays remain open after they update

## Single-page apps
- Changes to the server-side HTML code in `index.html`
- The main reactive application changes
- Any dependant component changes
- The application state is retained trough [application router](app-router)
- site.yaml or app.yaml data passed to the reactive client


## Non- goals
Nue hot-reloading applies to UI components only so updates to JavaScript/TypeScript extensions make no impact. These extensions are best developed and tested on server-side.


## Disable hot-reloading
You can disable hot-reloading `no_hotreload: true` configuration option. Hot-reloading is automatically disabled from the production build, as it makes no sense there.




