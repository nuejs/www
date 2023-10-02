
---
noindex: true
---

# Essentials
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.

## Components
These are `.nue` files

```
<!-- globals -->
<script>
  import foo from './bar.js'
</script>

<!-- app -->
<div id="app">
  <app-header/>
  <main>
    <sidebar/>
    <app-area/>
    <context-area/>
  </main>

  <script>
    constructor(data) {

    }
  </script>
</div>

<!-- app header -->
<header name="app-header">
  ...
</header>

<!-- sidebar -->
<nav name="sidebar">
  ...
</nav>
```


## Compiling
Nue uses an HTML-based template syntax that is compiled to optimized JavaScript code. Nue intelligently figures out the minimal number DOM manipulations when the app changes state.


```
nue compile app.nue dist
```

joooo

```
import { compile } from 'nuejs-core'

compile(<nav @name="sidebar> ...</nav>)
```




## Instances

Every Nue application starts by creating a new component instance with `createInstance` and then mounting the instance to a page element:

```
import { createInstance } from './nue.js'

// our compiled component
import App from './app.js'

// component instance
const app = createInstance(App)
```


## Mounting

```
// get mount point for the instance
const root = document.querySelector('#app')

// mount the instance
app.mount(root)
```

## Data

```
// business model
const project = new Project(data.project)
const user = new User(data.user)

// Nue app instance
const app = createInstance(App, { project, user })
```


## Dependencies

```
nue compile form-controls.nue dialogs.nue util.nue dist/ui
```

lolz

```
import { lib as controls } from './ui/form-controls.js'
import { lib as dialogs } from './ui/dialogs.js'
import { lib as util } from './ui/util.js'


// all components
const ui_libs = [...controls, ...dialogs, ...util]
```

Third argument

```
import App from './app.js'

const app = createInstance(App, { user, project }, ui_libs)
```


