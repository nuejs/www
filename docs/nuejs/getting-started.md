
---
title: Nue JS • Getting started
---

# Getting Started

## Prerequisites

- Familiarity with the command line
- Install [Bun](//bun.sh) or [Node](//nodejs.org/en)


## Option 1: npm create
The following command sets up a new Nue project to a new destination directory

```
npm create nue <destination>
```

This creates a demo website under `<destination>/www` and some documented scripts under `<destination>/scripts` for server-side rendering and client-side compilation.

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

