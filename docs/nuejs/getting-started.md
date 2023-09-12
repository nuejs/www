
---
title: Nue JS • Getting started
---

# Getting Started

## Prerequisites

- Familiarity with the command line
- Install [Bun](//bun.sh) or [Node](//nodejs.org/en)


## Option 1: npm create
Setup a new Nue project with `npm create nue <destination>`. For example:

``` sh
npm create nue my-nue-app

# cd to your newly created app
cd my-nue-app

# Build demo site and start a HTTP server
npm run start

# Open the demo on the browser
open "http://localhost:8080"
```

In above we create a demo website under `my-nue-app/www` and serve it on port 8080. Look for the documented scripts under the `scripts` folder on how to do server-side rendering and client-side compilation.

The [create-nue](//github.com/nuejs/create-nue) project is the best way to familiarize yourself to Nue JS. This project constantly updated as the [Nue ecosystem](/ecosystem/) makes progress. Ultimately this is run by the upcoming web application builder (Nuekit), but for now, it's just sample scripts to understand how Nue JS works.


## Option 2: npm install
Install Nue JS via npm

```
npm install nuejs
```

After installing, you can import the main functions into your  JavaScript or TypeScript files:

```
import { render, parse, compile } from 'nuejs'
```

Then learn [component basics](component-basics) how to do [server-side rendering](server-side-components) and how to use [reactive components](reactive-components).

