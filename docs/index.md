
---
class: no-aside
---

# Getting started with Nue


## System Requirements

* [Bun 1.0.10](//bun.sh/) or later (recommended)
* [Node.js 18.00](//nodejs.org/en)


## Installation
Nue comes with a [command line interface](reference/command-line-interface.html) (CLI), which can be reused accross multiple websites and/or single-page applications. Install it globally as follows:


``` sh
bun install nuekit --global
```

You can verify the installation by running `nue --version`. If the output looks something like "Nue 0.2.0 / Bun 1.0.15", you can start building apps with Nue. You can either start from scratch with the help of a [tutorial](tutorials/build-a-simple-blog.html), or you can start with a template:


## Start with a template
The easiest way to get started is to pick a half-baked template. To choose one, run:


``` sh
bun create nue@latest
```

After running the command you are asked to choose a project name and pick the template:


[bunny-video]
  videoId: b8883d69-8c79-4751-9139-6128d37d35ce
  poster: thumbnail_bba479e9.jpg
  width: 500

The following templates are available in [create-nue](//github.com/nuejs/create-nue) GitHub repository:

- *Skeleton website* —  Barebonoes site with two pages
- *Skeleton app* —  Primitive single-page application
- *Hot-reload demo* — As seen on the [intro video](/)
- *Simple blog* —  The [build a simple blog](tutorials/build-a-simple-blog.html) tutorial app
- *Simple app* —  The [build a simple SPA](tutorials/build-a-simple-spa.html) tutorial app
- *Simple CRM* —  A more complex single-page application. [View demo](/@simple-admin/)
- *Empty directory* —  Start from scratch




## Running Nue with Node
Nue has been developed with both Bun and Node. You can install Nue with `bun`, `pnpm`, `npm`, and `yarn` . And the executable runs with both engines. However, the default configuration for the executable is Bun. That is: the command line interface starts with the `#!/usr/bin/env bun` shebang. To run it with Node, you can do following:

``` sh
node $(which nue)
```

The `which` command locates the nue executable, and starts it with node. Running `nue --version` should now output something like "Nue 0.2.0 / Node 21.2.0". You can create a shortcut to this with the `alias` command. For example:

``` sh
alias node-nue="node $(which nue)"
```

To make the above command permanent you should store the alias to your `~/.bashrc` or `~/.zshrc` depending on your system shell.



### VS Code Extension
Here's [Nue VS code extension](https://marketplace.visualstudio.com/items?itemName=yaoyuanzhang.nue&ssr=false) for Visual Studio Code users (optional)



### Proplems?
Please post an [issue](//github.com/nuejs/nuejs/issues) if Nue does not work on your environment.




