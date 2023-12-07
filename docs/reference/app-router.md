
---
class: reference
---

# Application router
Nue application router is an extremely small script (2K minzipped) that enables [client-side navigation](../concepts/client-side-navigation.html) and standards-based *state management* for your single-page applications.

## Importing
App router is imported to your components as follows:

```
import { router } from '/@nue/app-router.js'
```

## Routing API
Routing API is inspired by TJ Holowaychuk's awesome [page.js](//visionmedia.github.io/page.js/)

### on(path, callback)
Defines a route mapping from the path to the given callback function. The callback is invoked by the data grabbed from the path. Examples:

```
on('/users/:id', user => console.info(user.id))
on('/:view/:id', data => console.info(data.view, data.id))
```

### route(path)
Navigate to the given path

### start({ path, root })
Start the router by triggering the registered handlers with the current URL on `location.pathname`.

- The *path* argument specifies the names of the different parts in the path for the [data property](#data) For example: a pattern `/:type/:id` will give "type" and "id" properties when `.data` is accessed.

- The *root* argument is the DOM root element of the application under which all the links will automatically call the `route()` method. External links, mailto links, hash-links, and clicks with control keys pressed are excluded.

This method should be called _after_ registering the handlers with the `on` method.


## State management API
Nue application router stores the state of the browser URL and its query string. Two reasons:

1. *URLs are shareable* — You can copy/paste URLs and share the state with other people. Documenting, sharing, and reproducing page states becomes trivial.

2. *Standards-based* The browser URL is a logical place to store the global application state using the standard [History.replaceState()](//developer.mozilla.org/en-US/docs/Web/API/History/replaceState) call.

3. Routing and state management become a one, simple, and unified concept. No need to spend time learning multiple tools and clutter your code with large amounts of boilerplate code.

### data
A property to access all the URL data. For example and URL such as this one

```
/customers/30?sort=total&limit=10&sidebar=opened
```

Would return

```
{
  view: 'customers',
  sidebar: 'opened',
  sort: 'total',
  limit: 10,
  id: 30,
}
```

When the the router was configured with: `start({ path: '/:view/:id' })`

### set(key, val)
Set a new value for a given key. Update the query string accordingly and the updated state is available via `.data`. For example:

```
set('sort', 'date')
set('limit', 30)
```

After the above calls, the .data getter would return `{ sort: 'date', limit: 30 }`




