
# JavaScript & TypeScript Modules

While the majority of the JavaScript comes in the form of [reactive islands](reactive-islands.html), there are still places where plain JavaScript and TypeScript files are beneficial:

1. *Page extensions* — where the extension changes the behavior of the whole page and is not a specific/visible UI component. Examples of page extensions are scroll transitions, page transitions, and website analytics extensions.

2. *Component helpers* that provide more complex helper functions for the reactive components keeping the UI code more focused on the task and clean from excessive JavaScript.

3. *Business models* that separate the business logic from the view layer. These models are better developed and tested on the server side.


## Multi-page applications
Multi-page applications look for a file named "main.js" and include that automatically on your pages with `<script type="module" src="{ appdir }/main.js">` statement. This file can reside in a global directory, application directory, or page directory.

The main.js file can import other modules with the native ES6 [import statement](//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import):

```
/* main.js */

// import other modules
import { prettyDate } from './util/dates.js'
import { model } from './model/index.js'

// etc ...
```

The default include is `[main.js]`, which also matches "main.ts". You can customize this with the `include` configuration option. For example:

```
include: [ index.js, page.js ]
```


## Single-page applications
Single-page applications have no concept of main.js since they can import modules inside .nue files. For example

```
<!-- app.js -->
<script>
  import { prettyDate } from './util/dates.js'
  import { model } from './model/index.js'
</script>

<div @name="my-app">

  <!-- HTML layout -->
  ...

  <!-- instance methods that utilize the imported modules -->
  <script>
  async mounted() {
    const summary = await model.getSummary()
  }

  format(date) {
    return prettyDate(date)
  }

  // ...

  </script>
</div>
```

*NOTE:* TypeScript files are automatically converted to JavaScript and the resulting module has a `.js` extension. So you always need to use the .js extension on the `import` statements.


## Unbundled distribution [unbundled]
Nue runs all JavaScript and TypeScript files through `Bun.build()` or `esbuild.build()` if you are working under Node. The default is to [build, but not bundle](//blog.logrocket.com/building-without-bundling/). That is: the imported dependencies are *not* inlined into the file itself to form a single, bigger JS bundle.

Three performance reasons why Nue defaults to unbundled JavaScript:

1. **Equally fast performance** Bundling JavaScript only makes a difference when your bundle consists of more than [300 modules](//v8.dev/features/modules#performance) and even then the performance impact is minimal compared to what you can do in earlier stages of [progressive enhancement](performance-optimization.html). For example, inlining your CSS makes a bigger impact on the initial page load time.

3. **More effective caching** when you keep each module separate, they can be cached and expired separately. If you have 10 modules and only one change, the other 9 remain cached. In other words: bundlers can be bad for performance.

5. [Dynamic imports](//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) gives you lazy loading of JavaScript. You can fully control the timing of your imports instead of loading everything in one bunch.

Other reasons include:

1. **Faster build times** Leaving out the build step completely makes faster builds. This is pretty obvious. Like DHH says: [You can't get faster than No Build](//world.hey.com/dhh/you-can-t-get-faster-than-no-build-7a44131c)

2. **Easier to debug**. When there is an error, the browser tells exactly where it is. Files are shipped in their named form and there is no need for source maps.

3. **Closer to standards** ES6 import statement is well-supported across all modern browsers.



## Bundled distribution [bundled]
While Nue recommends unbundled JavaScript, you can still bundle selected files with the `bundle` configuration option. For example, the following option will always bundle files with the name `index.ts`, regardless of their directory:


``` yaml
# files named index.ts will be bundled
bundle: [ index.ts ]
```

To bundle a file means to inline any imported dependencies into the file itself. This process is recursive so dependencies of dependencies (and so on) will also be inlined. Bundling is beneficial for two reasons:

1. You need to import stuff from the `node_modules`

2. You'll get slight [performance benefits](//v8.dev/features/modules#performance) when your bundle exceeds 300 files.





