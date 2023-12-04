
# Client-side navigation
Nue supports near-instant, client-side navigation between two pages. This means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser

[bunny-video]
  videoId: d53e052f-f4c5-43f0-af1c-777b18bad8ed
  caption: Client-side navigation in action
  width: 650

Nue's implementation is unique for two reasons:

1. A simple configuration option: `page_router: true` is enough to enable near-instant page switching on your multi-page application. All the internal links, including the ones inside your Markdown content, are impacted. There is no need to tag your links individually or add any complex JavaScript code.

2. Instant routing works across multi-page applications and single-page applications. You can click through your website, onboarding flow, login page, and the single-page app use the browser's back/forward buttons, and experience an overall instant feel of the site.


## Page router
Page router is enabled with `page_router: true` configuration option. This is a site-wide setting so it should go to the `site.yaml` file on the root of your project directory. This enables client-side navigation to your multi-page applications.

Your scripts and components can listen to a "route" event which is fired when the user navigates to a new page:

```
addEventListener('route', path => {
  //Do your thing on the new path
})
```


## Application router
[Application router](../reference/app-router.html) provides client-side navigation for your single-page applications. This small 2Kb script gives you both application routing and URL-based state management. Routing is configured on the main/controller view of your single-page application. Here's an example setup:

```
<!-- app.nue -->
<script>
  // import application router
  import { router } from '/@nue/app-router.js'

  // import model (the JS-heavy, non-UI functionality)
  import model from './model/index.js'
</script>

<main @name="my-application">

  <!-- navigation to the main views of the application -->
  <nav>
    <a href="/">Dashboard</a>
    <a href="/users">Customers</a>
    <a href="/feedback">Feedback</a>
    <a href="/customers">Customers</a>
    <a href="/analytics">Analytics</a>
  </nav>

  <!-- container for the application views -->
  <article id="container"/>

  <script>
    // after the app & container element is mounted
    mounted() {

      // root path --> render dashboard view to the container
      router.on('/', async() => {
        const summary = await model.getSummary()
        this.mountChild('dashboard-view', container, summary)
      })

      // /customers path --> render customer view
      router.on('/customers', async() => {
        const customers = await model.getCustomers()
        this.mountChild('customer-view', container, customers)
      })

      // ... + rest of the routes


      // start the router and register click handlers for the links (under root)
      router.start({ root: this.root })
    }
  </script>
</main>
```

The above code is a perfect example of an MVC (model-view-controller) pattern, where the business model code is fully separated from all the UI views. And a controller code (above) acts in between the two. There are massive benefits to separating your HTML-based UI code from the JavaScript or TypeScript-based business model:

1. UX developers can fully focus on the [front of the frontend](//bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) and the user experience.

2. JS/TS developers can focus on lower-level topics like networking and caching and test everything with a Node/Bun-based test runner. With the MVC pattern, JS engineers don't have to spend time on topics like design, CSS, or accessibility. This makes a difference for developers, who are not keen on those topics.


Check out app router [reference docs](../reference/app-router.html)

