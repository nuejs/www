
---
title: Getting started with Nue / Nue docs
class: no-aside
---

# Getting started

## Disclaimer
Nue is still in Beta and comes with the following issues and limitations

* **Single-page applications** There is a tutorial on [building a simple SPA](//localhost:8082/docs/tutorials/build-a-simple-spa.html), but the support for full-blown reactive applications is very much in progress. All issues regarding Nue JS are marked as [low priority](https://github.com/nuejs/nue/labels/low%20priority) because the focus is currently on content-heavy multi-page applications.

* **Windows support** Nue does not work under Windows but we're [working on it](https://github.com/nuejs/nue/issues/249)



## System Requirements

* [Bun 1.0.10](//bun.sh/) or later. Recommended with *MacOS* and *Linux*.
* [Node.js 18.0.2](//nodejs.org/) or later. Recommended with *Windows* or if you don't want to install Bun


## Installation
Nue comes with a [command line interface](reference/command-line-interface.html) (CLI), which can be reused across multiple websites and/or single-page applications. Install it globally as follows:


``` sh
bun install nuekit --global
```

You can verify the installation by running `nue --version`. If the output looks something like "Nue 0.5.2 • Bun 1.0.33", you can start building apps with Nue. You can either start from scratch with the help of a [tutorial](tutorials/build-a-simple-blog.html), or you can start with a template:


## Start with a template
The easiest way to get started is to pick a template. To choose one, run:


``` sh
bun create nue@latest
```

After running the command you are asked to name your project directory and pick the template:

[bunny-video]
  videoId: b8883d69-8c79-4751-9139-6128d37d35ce
  poster: thumbnail_bba479e9.jpg
  width: 500

The following templates are available in [create-nue](//github.com/nuejs/create-nue) repository:

- *Skeleton website* —  Barebones site with two directories/pages
- *Skeleton app* —  Primitive single-page application
- *Hot-reload demo* — As seen on the front page [intro video](/)
- *Simple blog* —  The tutorial app for ["Build a simple blog"](tutorials/build-a-simple-blog.html)
- *Simple app* —  The tutorial app for ["Build a simple SPA"](tutorials/build-a-simple-spa.html)
- *Simple CRM* —  A more complex single-page application. [View demo](/@simple-admin/)
- *Empty directory* —  Start from scratch

&nbsp;

- - -

## Running Nue with Node [node]
Nue works under both Bun and Node so you can alternatively install Nue with `pnpm`, `npm`, and `yarn`. For example:

``` sh
pnpm install nuekit --global
```

The default engine for Nue is Bun. That is: the command line interface starts with the `#!/usr/bin/env bun` shebang. To override this setting, and run Nue with Node, you can do the following:

``` sh
node $(which nue)
```

The `which` command locates the nue executable, and starts it with node. Running `node $(which nue) --version` should output something like "Nue 0.5.2 / Node 21.6.2". You can create a permanent shortcut to this command with `alias`. For example:

``` sh
alias node-nue="node $(which nue)"
```

To make the above command permanent you should store the alias to your `~/.bashrc` or `~/.zshrc` depending on your system shell.



### VS Code Extension
Here's [Nue VS code extension](https://marketplace.visualstudio.com/items?itemName=yaoyuanzhang.nue&ssr=false) for Visual Studio Code users (optional).



### Problems?
Please post an [issue](//github.com/nuejs/nue/issues) if Nue does not work on your environment.




